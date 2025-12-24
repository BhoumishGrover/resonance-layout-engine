import { Link } from "react-router-dom";
import DynamicText from "./DynamicText";

const HeroSection = () => {
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
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%230a0b0f' width='1920' height='1080'/%3E%3C/svg%3E"
        >
          {/* Video source will be added later */}
          <source src="" type="video/mp4" />
        </video>
        {/* Fallback gradient for demo */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
      </div>

      {/* Dark Overlay */}
      <div className="hero-overlay absolute inset-0 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          {/* Headline */}
          <h1 className="text-display">
            <span 
              className="block text-3xl md:text-5xl lg:text-7xl opacity-0 animate-fade-up"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              We are a team of
            </span>
            <span 
              className="block text-4xl md:text-6xl lg:text-8xl my-2 md:my-4 opacity-0 animate-fade-up"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              <DynamicText />
            </span>
            <span 
              className="block text-3xl md:text-5xl lg:text-7xl opacity-0 animate-fade-up"
              style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              experts.
            </span>
          </h1>

          {/* CTA Buttons */}
          <div 
            className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <Link to="/vfx" className="btn-primary">
              Showcase
            </Link>
            <Link to="/contact" className="btn-minimal">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-0 animate-fade-up"
        style={{ animationDelay: "1s", animationFillMode: "forwards" }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Explore
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
