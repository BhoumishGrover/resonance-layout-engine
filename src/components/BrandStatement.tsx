"use client";

import { useRef, useState, useEffect } from "react";
import AnimatedParagraph from "./AnimatedParagraph";

const BrandStatement = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollDeltaRef = useRef(0);
  const isLockedRef = useRef(false);
  const hasCompletedRef = useRef(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Handle wheel/touch scroll attempts during animation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (hasCompletedRef.current) {
        return;
      }

      const delta = e.deltaY;
      const isScrollingDown = delta > 0;

      if (!sectionRef.current) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const isCentered = Math.abs(elementCenter - viewportCenter) < 80;

      if (!isLockedRef.current) {
        // Only lock when user scrolls down and section is centered
        if (isInView && isCentered && isScrollingDown) {
          isLockedRef.current = true;
          setIsAnimating(true);
          scrollDeltaRef.current = 0;
          document.body.style.overflow = "hidden";
        } else {
          return; // Let normal scrolling happen
        }
      }

      // Lock active: consume scroll to drive animation
      e.preventDefault();

      scrollDeltaRef.current += delta;
      const progress = Math.min(Math.max(scrollDeltaRef.current / 800, 0), 1);
      setScrollProgress(progress);

      if (progress >= 1) {
        document.body.style.overflow = "";
        isLockedRef.current = false;
        hasCompletedRef.current = true;
        setIsAnimating(false);
        // Allow normal scrolling to resume after completion
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!sectionRef.current || hasCompletedRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const isCentered = Math.abs(elementCenter - viewportCenter) < 80;

      if (!isLockedRef.current) {
        if (isInView && isCentered) {
          isLockedRef.current = true;
          setIsAnimating(true);
          scrollDeltaRef.current = 0;
          document.body.style.overflow = "hidden";
        } else {
          return;
        }
      }

      e.preventDefault();
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f6f5ee] min-h-screen w-full flex items-center px-6 md:px-10 lg:px-16 z-30 -mt-[100vh]"
    >
      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-start pl-4 md:pl-8 lg:pl-12">
        {/* Verticals line - NEVER animates */}
        <p className="mb-8 text-[18px] md:text-[20px] lg:text-[22px] font-medium tracking-wide text-left">
          <span className="text-sky-400">VFX & Animation</span>
          <span className="text-gray-300"> / </span>
          <span className="text-rose-400">Experiential Technology</span>
          <span className="text-gray-300"> / </span>
          <span className="text-lime-400">Brand Solution</span>
          <span className="text-gray-300"> / </span>
          <span className="text-purple-400">Motion Pictures</span>
        </p>

        {/* Main statement - driven by scroll progress */}
        <AnimatedParagraph
          text="A leading digital Creative Technology Company, which focuses on delivering rememberable web designs that are searchable, alongside other online promotion solutions. We provide our clients with striking, practical, and intuitive sites that attract clientele and yield revenue."
          scrollProgress={scrollProgress}
        />
      </div>
    </section>
  );
};

export default BrandStatement;
