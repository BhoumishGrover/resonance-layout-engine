import { Link } from "react-router-dom";
import DynamicText from "./DynamicText";

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="../dist/assets/videos/placeholder_video.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      {/* Dark Overlay */}
      <div className="hero-overlay absolute inset-0 z-10" />

      {/* Content */}
      <div className="absolute left-6 md:left-12 lg:left-24 top-1/2 -translate-y-1/2 z-20">
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
      </div>
    </section>
  );
};

export default Hero;
