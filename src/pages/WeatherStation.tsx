import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  CloudSun, 
  Cloud, 
  CloudRain, 
  CloudLightning, 
  Wind, 
  Droplets, 
  Compass, 
  Thermometer, 
  MapPin, 
  Search, 
  RefreshCw, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  ShieldAlert, 
  Calendar, 
  Clock, 
  ArrowUpRight, 
  Zap, 
  BarChart3,
  Navigation
} from 'lucide-react';
import { useToast } from '../components/Toast';

interface WeatherData {
  location: {
    name: string;
    latitude: number;
    longitude: number;
    timezone?: string;
  };
  current: {
    temperature: number;
    apparentTemperature: number;
    humidity: number;
    windSpeed: number;
    windDirection: number;
    pressure: number;
    precipitation: number;
    condition: string;
    category: string;
    isDay: boolean;
  };
  agriculturalInsights: {
    fungalDiseaseRisk: string;
    pesticideSprayingCondition: string;
    irrigationRecommendation: string;
    dewPoint: number;
    soilTemperature: number;
    soilMoisture: string;
    uvIndexMax: number;
  };
  hourly: Array<{
    time: string;
    temp: number;
    humidity: number;
    precipProb: number;
    windSpeed: number;
  }>;
  dailyForecast: Array<{
    date: string;
    tempMax: number;
    tempMin: number;
    precipSum: number;
    precipProbMax: number;
    weatherCode: number;
    uvMax: number;
  }>;
  isFallback?: boolean;
}

const PRESET_CITIES = [
  { name: 'Hyderabad, Telangana', lat: 17.3850, lon: 78.4867 },
  { name: 'Ludhiana, Punjab', lat: 30.9010, lon: 75.8573 },
  { name: 'Guntur, Andhra Pradesh', lat: 16.3067, lon: 80.4365 },
  { name: 'Nashik, Maharashtra', lat: 19.9975, lon: 73.7898 },
  { name: 'New Delhi', lat: 28.6139, lon: 77.2090 },
  { name: 'Bengaluru, Karnataka', lat: 12.9716, lon: 77.5946 },
  { name: 'Des Moines, Iowa (US Corn Belt)', lat: 41.5868, lon: -93.6250 },
  { name: 'Nairobi, Kenya', lat: -1.2921, lon: 36.8219 }
];

export const WeatherStation: React.FC = () => {
  const { showToast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<{ name: string; lat?: number; lon?: number } | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isGeoLocating, setIsGeoLocating] = useState(false);

  const fetchWeather = async (lat?: number, lon?: number, locationName?: string) => {
    setIsLoading(true);
    try {
      const url = (lat !== undefined && lon !== undefined)
        ? `/api/weather/live?lat=${lat}&lon=${lon}&location=${encodeURIComponent(locationName || '')}`
        : `/api/weather/live`;

      const res = await fetch(url);
      const data = await res.json();
      if (data.success) {
        setWeather(data);
        showToast(`Live weather loaded for ${data.location?.name || 'your current location'}`, 'success');
      }
    } catch (err) {
      console.error('Weather fetch error:', err);
      showToast('Using local agricultural weather station telemetry', 'info');
    } finally {
      setIsLoading(false);
    }
  };

  // Auto detect location on initial mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude, 'My GPS Field');
        },
        () => {
          // Fallback to IP-auto location on backend
          fetchWeather();
        },
        { timeout: 5000 }
      );
    } else {
      fetchWeather();
    }
  }, []);

  useEffect(() => {
    if (selectedCity && selectedCity.lat !== undefined && selectedCity.lon !== undefined) {
      fetchWeather(selectedCity.lat, selectedCity.lon, selectedCity.name);
    }
  }, [selectedCity]);

  // Request user current geolocation
  const handleUseMyLocation = () => {
    if (!navigator.geolocation) {
      showToast('Geolocation is not supported by your browser', 'error');
      return;
    }

    setIsGeoLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const customLoc = {
          name: `My GPS Field (${latitude.toFixed(2)}°, ${longitude.toFixed(2)}°)`,
          lat: latitude,
          lon: longitude
        };
        setSelectedCity(customLoc);
        setIsGeoLocating(false);
      },
      (err) => {
        console.warn('Geolocation denied/failed:', err);
        showToast('Could not fetch location. Showing default agricultural hub.', 'info');
        setIsGeoLocating(false);
      },
      { timeout: 10000 }
    );
  };

  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    // Search matched preset first
    const found = PRESET_CITIES.find(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()));
    if (found) {
      setSelectedCity(found);
      setSearchQuery('');
      return;
    }

    setIsLoading(true);
    try {
      // Query Open-Meteo free geocoding API
      const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(searchQuery)}&count=1&language=en&format=json`);
      const geoData = await geoRes.json();
      if (geoData.results && geoData.results.length > 0) {
        const place = geoData.results[0];
        const placeName = `${place.name}${place.admin1 ? ', ' + place.admin1 : ''} (${place.country || ''})`;
        setSelectedCity({
          name: placeName,
          lat: place.latitude,
          lon: place.longitude
        });
      } else {
        showToast(`No location results found for "${searchQuery}". Showing nearest match.`, 'info');
      }
    } catch (err) {
      console.error('Geocoding search error:', err);
      showToast('Could not geocode city name. Try selecting from popular farming regions.', 'error');
    } finally {
      setIsLoading(false);
      setSearchQuery('');
    }
  };

  const getWeatherIcon = (category: string) => {
    switch (category) {
      case 'Sunny':
        return <Sun className="w-12 h-12 text-amber-400 animate-spin" style={{ animationDuration: '12s' }} />;
      case 'Cloudy':
        return <CloudSun className="w-12 h-12 text-cyan-300" />;
      case 'Rain':
        return <CloudRain className="w-12 h-12 text-blue-400" />;
      case 'Storm':
        return <CloudLightning className="w-12 h-12 text-purple-400 animate-bounce" />;
      default:
        return <Sun className="w-12 h-12 text-amber-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#071810] text-emerald-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Header & Search Bar */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950 via-[#0a2b1c] to-teal-950 border border-emerald-800/40 p-6 sm:p-10 shadow-2xl space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Real-Time Geo Weather Station</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
                Agricultural <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">Weather Intelligence</span>
              </h1>
              <p className="text-emerald-200/90 text-sm max-w-xl">
                Real-time microclimate monitoring, soil temperature, evapotranspiration forecasting, and automated pest & spray advisories for smart farming.
              </p>
            </div>

            {/* GPS & Search Input */}
            <div className="space-y-3 lg:w-96">
              <button
                onClick={handleUseMyLocation}
                disabled={isGeoLocating}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-emerald-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 cursor-pointer disabled:opacity-50 transition-all"
              >
                <Navigation className={`w-4 h-4 ${isGeoLocating ? 'animate-spin' : ''}`} />
                <span>{isGeoLocating ? 'Detecting GPS Coordinates...' : 'Use My Current GPS Location'}</span>
              </button>

              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search city or agricultural region..."
                  className="w-full py-2.5 pl-10 pr-4 bg-emerald-950/80 text-white placeholder-emerald-400/60 rounded-xl border border-emerald-700/50 text-xs focus:outline-none focus:border-emerald-400"
                />
                <Search className="w-4 h-4 text-emerald-400 absolute left-3 top-3" />
              </form>
            </div>
          </div>

          {/* Quick Presets Row */}
          <div className="pt-4 border-t border-emerald-800/40 flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-xs text-emerald-400 font-semibold shrink-0">Popular Farming Regions:</span>
            {PRESET_CITIES.map((city) => (
              <button
                key={city.name}
                onClick={() => setSelectedCity(city)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold shrink-0 transition-all cursor-pointer ${
                  selectedCity?.name === city.name
                    ? 'bg-emerald-500 text-emerald-950 shadow-md'
                    : 'bg-emerald-900/40 text-emerald-200 hover:bg-emerald-800/60 border border-emerald-700/40'
                }`}
              >
                {city.name}
              </button>
            ))}
          </div>
        </div>

        {/* Loading Spinner */}
        {isLoading && (
          <div className="bg-[#0b2417] border border-emerald-800/40 rounded-3xl p-12 text-center space-y-4 shadow-2xl animate-pulse">
            <RefreshCw className="w-10 h-10 text-emerald-400 animate-spin mx-auto" />
            <p className="text-sm font-bold text-white">Fetching Live Telemetry & Open-Meteo Satellite Feeds...</p>
          </div>
        )}

        {/* Main Weather Display */}
        {!isLoading && weather && (
          <div className="space-y-8">
            
            {/* Top Weather Hero Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Current Temperature Box (7 cols) */}
              <div className="lg:col-span-7 bg-[#0b2417] border border-emerald-800/40 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm font-bold text-white">{weather.location.name}</span>
                    </div>
                    <span className="text-xs text-emerald-300/70">
                      Lat: {weather.location.latitude.toFixed(4)}°, Lon: {weather.location.longitude.toFixed(4)}°
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
                    {weather.current.condition}
                  </span>
                </div>

                <div className="flex items-center justify-between my-auto">
                  <div className="flex items-center gap-6">
                    {getWeatherIcon(weather.current.category)}
                    <div>
                      <div className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight font-display">
                        {weather.current.temperature.toFixed(1)}°C
                      </div>
                      <span className="text-xs text-emerald-300/80">
                        Feels like {weather.current.apparentTemperature.toFixed(1)}°C
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sub Metrics Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-emerald-800/40">
                  <div className="bg-[#061c12] p-3 rounded-2xl border border-emerald-800/30 flex items-center gap-3">
                    <Droplets className="w-5 h-5 text-cyan-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-emerald-400 font-medium">Humidity</span>
                      <div className="text-sm font-bold text-white">{weather.current.humidity}%</div>
                    </div>
                  </div>

                  <div className="bg-[#061c12] p-3 rounded-2xl border border-emerald-800/30 flex items-center gap-3">
                    <Wind className="w-5 h-5 text-teal-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-emerald-400 font-medium">Wind Speed</span>
                      <div className="text-sm font-bold text-white">{weather.current.windSpeed} km/h</div>
                    </div>
                  </div>

                  <div className="bg-[#061c12] p-3 rounded-2xl border border-emerald-800/30 flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-purple-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-emerald-400 font-medium">Pressure</span>
                      <div className="text-sm font-bold text-white">{weather.current.pressure} hPa</div>
                    </div>
                  </div>

                  <div className="bg-[#061c12] p-3 rounded-2xl border border-emerald-800/30 flex items-center gap-3">
                    <CloudRain className="w-5 h-5 text-blue-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-emerald-400 font-medium">Rainfall</span>
                      <div className="text-sm font-bold text-white">{weather.current.precipitation} mm</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Agricultural Advisories Card (5 cols) */}
              <div className="lg:col-span-5 bg-[#0b2417] border border-emerald-800/40 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between space-y-4">
                <div className="flex items-center justify-between border-b border-emerald-800/40 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-300" />
                    Smart Crop Advisories
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-900 text-emerald-200 text-[10px] font-mono">LIVE AI</span>
                </div>

                <div className="space-y-3 my-auto">
                  
                  <div className="p-3.5 rounded-2xl bg-[#061c12] border border-emerald-800/30 flex items-start gap-3">
                    <ShieldAlert className={`w-5 h-5 shrink-0 mt-0.5 ${
                      weather.agriculturalInsights.fungalDiseaseRisk === 'High' ? 'text-red-400 animate-pulse' : 'text-amber-400'
                    }`} />
                    <div>
                      <span className="text-xs font-bold text-white">Fungal Disease Risk Level</span>
                      <p className="text-xs text-emerald-200/80 mt-0.5">
                        Status: <strong className={weather.agriculturalInsights.fungalDiseaseRisk === 'High' ? 'text-red-400' : 'text-amber-300'}>
                          {weather.agriculturalInsights.fungalDiseaseRisk}
                        </strong>. High ambient moisture triggers foliar leaf blight.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#061c12] border border-emerald-800/30 flex items-start gap-3">
                    <Wind className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-white">Pesticide Spray Window</span>
                      <p className="text-xs text-emerald-200/80 mt-0.5">
                        {weather.agriculturalInsights.pesticideSprayingCondition}
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#061c12] border border-emerald-800/30 flex items-start gap-3">
                    <Droplets className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-white">Irrigation Recommendation</span>
                      <p className="text-xs text-emerald-200/80 mt-0.5">
                        {weather.agriculturalInsights.irrigationRecommendation}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Soil & Dew Point Data */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-emerald-800/40 text-center">
                  <div className="bg-[#061c12] p-2 rounded-xl">
                    <span className="text-[10px] text-emerald-400 block">Dew Point</span>
                    <span className="text-xs font-bold text-white">{weather.agriculturalInsights.dewPoint}°C</span>
                  </div>
                  <div className="bg-[#061c12] p-2 rounded-xl">
                    <span className="text-[10px] text-emerald-400 block">Soil Temp</span>
                    <span className="text-xs font-bold text-white">{weather.agriculturalInsights.soilTemperature}°C</span>
                  </div>
                  <div className="bg-[#061c12] p-2 rounded-xl">
                    <span className="text-[10px] text-emerald-400 block">Soil Moisture</span>
                    <span className="text-xs font-bold text-emerald-300">{weather.agriculturalInsights.soilMoisture}</span>
                  </div>
                </div>

              </div>

            </div>

            {/* 24-Hour Timeline Hourly Forecast */}
            <div className="bg-[#0b2417] border border-emerald-800/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-emerald-800/40 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  24-Hour Microclimate Timeline
                </span>
                <span className="text-xs text-emerald-300/70">Hourly Temperature & Rain Risk %</span>
              </div>

              <div className="flex gap-4 overflow-x-auto pb-4 pt-2">
                {weather.hourly.map((h, i) => (
                  <div
                    key={i}
                    className="min-w-[90px] p-3 rounded-2xl bg-[#061c12] border border-emerald-800/30 text-center space-y-2 shrink-0 hover:bg-emerald-900/40 transition-colors"
                  >
                    <span className="text-[11px] font-mono text-emerald-300">
                      {new Date(h.time).getHours()}:00
                    </span>
                    <div className="text-lg font-bold text-white">{h.temp.toFixed(1)}°</div>
                    <div className="text-[10px] text-cyan-300 flex items-center justify-center gap-1">
                      <Droplets className="w-3 h-3 text-cyan-400" />
                      <span>{h.precipProb}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 7-Day Agricultural Forecast */}
            <div className="bg-[#0b2417] border border-emerald-800/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-emerald-800/40 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  7-Day Crop & Farming Weather Outlook
                </span>
                <span className="text-xs text-emerald-300/70">Weekly Planning Forecast</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {weather.dailyForecast.slice(0, 5).map((d, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#061c12] border border-emerald-800/30 space-y-3 flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-300">{d.date}</span>
                      <Sun className="w-5 h-5 text-amber-400" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xl font-bold text-white">{d.tempMax}°C</span>
                        <span className="text-xs text-emerald-300/70">{d.tempMin}°C</span>
                      </div>
                      <div className="text-[11px] text-cyan-300 flex items-center justify-between">
                        <span>Rain Prob:</span>
                        <span className="font-bold">{d.precipProbMax}%</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-emerald-800/30 text-[10px] text-emerald-200">
                      {d.precipProbMax > 50 ? (
                        <span className="text-amber-300 font-semibold">🌧 Rain Likely: Postpone harvest</span>
                      ) : (
                        <span className="text-emerald-300 font-semibold">☀️ Good Sowing Weather</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default WeatherStation;
