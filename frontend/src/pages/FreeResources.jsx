import React from "react";
import { Link } from "react-router-dom";
import HeroBanner from "./HeroBanner";
import BrandLogoScroller from "./ScrabbleImages";
import DiscountCardGrid from "../components/ResourcesCard";
import Footer from "../components/Footer";
import ResourcesNav from "../components/ResourcesNav";

const FreeResources = () => {
  return (
    <div>
      <div>
        <ResourcesNav/>
        <HeroBanner />
        <BrandLogoScroller />
        <DiscountCardGrid />
        <Footer />
      </div>
    </div>
  );
};

export default FreeResources;
