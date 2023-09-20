import React from "react";
import LandingSection from "./LandingSection/LandingSection";
import FeatureSection from "./FeatureSection/FeatureSection";
import ArticleSection from "./ArticleSection/ArticleSection";
import Footer from "./Footer/Footer";

export default function App() {
  return (
    <div className="text-custom-font font-public-sans">
      <LandingSection />
      <FeatureSection />
      <ArticleSection />
      <Footer />
    </div>
  );
}
