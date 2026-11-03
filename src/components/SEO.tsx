import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export const SEO = ({ title, description, keywords }: SEOProps) => {
  const location = useLocation();

  const defaultTitle = "Agridyne | Smart Agriculture & Rural Development";
  const defaultDesc = "Agridyne explores innovative technology-driven approaches for agriculture, rural development, farmer connectivity, and sustainable rural prosperity.";
  const defaultKeywords = "Agridyne, Smart Agriculture, AgriTech, Rural Development, FoodTech, Farmer Empowerment, IoT Agriculture, AI Farming, Digital Marketplace";

  const pageTitle = title ? `${title} | Agridyne` : defaultTitle;
  const pageDesc = description || defaultDesc;

  useEffect(() => {
    document.title = pageTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', pageDesc);

    // Update Meta Keywords
    let metaKw = document.querySelector('meta[name="keywords"]');
    if (!metaKw) {
      metaKw = document.createElement('meta');
      metaKw.setAttribute('name', 'keywords');
      document.head.appendChild(metaKw);
    }
    metaKw.setAttribute('content', keywords || defaultKeywords);

    // Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);

  }, [pageTitle, pageDesc, keywords, location]);

  return null;
};
