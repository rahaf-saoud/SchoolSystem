import React from "react";
import HeroSection from "../component/sections/HeroSection";
import AboutUsSection from "../component/sections/AboutUsSection";
import BlogSection from "../component/sections/BlogSection";
import TestimonialsSection from "../component/sections/TestimonialsSection";
import ServicesSection from "../component/sections/ServicesSection";
import ContactSection from "../component/sections/ContactSection";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function Home() {
  return (
    <>
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Login /> */}
      <HeroSection />
      <ServicesSection />
      <BlogSection />
      <AboutUsSection />
      <ContactSection />
      <TestimonialsSection />
    </>
  );
}
