import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import DynamicText from "./DynamicText";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress relative to the hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  // Transform values based on scroll - text fades out early to show clean video
  const contentY = useTransform(scrollYProgress, [0, 0.4], [0, -150]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative h-[200vh] w-full"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 left-0 w-full h-screen z-0 overflow-hidden">
        
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="/assets/videos/placeholder_video.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 hero-overlay z-10" />

        {/* Content - Animated */}
        <motion.div 
          className="absolute left-6 md:left-12 lg:left-24 top-1/2 -translate-y-1/2 z-20"
          style={{
            y: contentY,
            opacity: contentOpacity,
          }}
        >
        {/* Headline */}
        <h1
          style={{
            fontFamily: '"Gotham-Bold", "Gotham", sans-serif',
            fontWeight: 700,

            /* Illustrator 105pt ≈ ~88–92pt on web due to line-gap + metrics */
            fontSize: "75pt",

            /* Kill browser-added line gap */
            lineHeight: "0.88",

            /* Tighten tracking to match Illustrator optical kerning */
            letterSpacing: "-0.06em",

            /* Force real kerning + no extra spacing */
            fontKerning: "normal",
            fontFeatureSettings: '"kern" 1, "liga" 0',

            /* Prevent subpixel rounding expansion */
            textRendering: "geometricPrecision",
          }}
        >
          <span
            style={{
              display: "block",
              color: "#ffffff",
            }}
          >
            We are a team of
          </span>

          <span
            style={{
              display: "block",
              color: "#C8D46A", // Brand Solution green from PPT
              letterSpacing: "-0.065em",
              lineHeight: "0.88",
            }}
          >
            <DynamicText />
          </span>

          <span
            style={{
              display: "block",
              color: "#ffffff",
            }}
          >
            experts.
          </span>
        </h1>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-row items-center gap-4">
          <a href="/vfx" className="btn-primary-custom">
            SHOWCASE
          </a>
          <a href="/contact" className="btn-minimal">
            CONTACT US
          </a>
        </div>
      </motion.div>
      
      </div>
    </section>
  );
};

export default Hero;
