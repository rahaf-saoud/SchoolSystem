import React from "react";
import HeroSection from "../component/sections/HeroSection";
import AboutUsSection from "../component/sections/AboutUsSection";
import BlogSection from "../component/sections/BlogSection";
import TestimonialsSection from "../component/sections/TestimonialsSection";
import ServicesSection from "../component/sections/ServicesSection";
import ContactSection from "../component/sections/ContactSection";


export default function Home() {
  return (
    <>
      <HeroSection />
     <ServicesSection/>
      <BlogSection/>
      <AboutUsSection/>
      <ContactSection/>
      <TestimonialsSection/>

    </>
  );
}
