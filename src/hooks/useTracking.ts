import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PageVisit {
  path: string;
  timestamp: number;
}

export function useTracking() {
  const location = useLocation();

  useEffect(() => {
    // Basic local tracking for demonstration
    // In a real production app, you would send this to Google Analytics or PostHog
    const trackVisit = () => {
      const visitsJson = localStorage.getItem("analytics_visits");
      const visits: PageVisit[] = visitsJson ? JSON.parse(visitsJson) : [];
      
      visits.push({
        path: location.pathname,
        timestamp: Date.now(),
      });
      
      // Keep only last 1000 visits
      if (visits.length > 1000) {
        visits.shift();
      }
      
      localStorage.setItem("analytics_visits", JSON.stringify(visits));

      // Update total view counts
      const countsJson = localStorage.getItem("analytics_counts");
      const counts = countsJson ? JSON.parse(countsJson) : { total: 0, unique: 1 };
      counts.total += 1;
      localStorage.setItem("analytics_counts", JSON.stringify(counts));
    };

    trackVisit();
  }, [location.pathname]);
}
