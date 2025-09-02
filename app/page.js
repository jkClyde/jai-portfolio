"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Certifications from "./Section/Certfification";
import HeroSection from "./Section/HeroSection";
import AboutMe from "./Section/AboutMe";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const checkFullPage = setInterval(() => {
      if (typeof window !== "undefined" && window.fullpage) {
        new window.fullpage("#fullpage", {
          autoScrolling: true,
          scrollHorizontally: true,
          scrollingSpeed: 800,
          navigation: true,
        });
        clearInterval(checkFullPage);
      }
    }, 100);

    return () => clearInterval(checkFullPage);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div id="fullpage">
     {/* Hero */}
      <HeroSection/>

      {/* About */}
      <AboutMe/>

      {/* Certifications */}
    <Certifications/>

   

      
    </div>
  );
}
