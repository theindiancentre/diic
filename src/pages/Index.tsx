
import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Opportunity from "@/components/Opportunity";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior to the document
    document.documentElement.style.scrollBehavior = "smooth";

    // Intersection Observer setup for animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Target all elements with reveal-text class
    document.querySelectorAll(".reveal-text").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      // Cleanup
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Vision />
      <Opportunity />
      <Services />
      <Advantages />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
