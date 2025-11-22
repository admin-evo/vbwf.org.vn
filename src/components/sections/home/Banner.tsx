import ImageSlider from "@/components/ImageSlider";
import React from "react";

const Banner = () => {
  return (
    <ImageSlider
      images={[
        "/assets/images/banners/01.png",
        "/assets/images/banners/02.jpg",
      ]}
    />
  );
};

export default Banner;
