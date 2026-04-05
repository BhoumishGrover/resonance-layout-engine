import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const verticals = [
  {
    id: "vfx",
    title: "VFX",
    subtitle: "Movies & Ads",
    description: "High-end visual effects and motion design for film, advertising, and digital experiences.",
    href: "/vfx",
    bgImage: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2000",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    subtitle: "Mar-tech",
    description: "Photorealistic renders and immersive virtual tours for architectural projects.",
    href: "/real-estate",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000",
  },
  {
    id: "brand-solutions",
    title: "Brand Solutions",
    subtitle: "",
    description: "Strategic brand content and campaigns that resonate with audiences worldwide.",
    href: "/brandSolutions",
    bgImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000",
  },
  {
    id: "motion-pictures",
    title: "Motion Pictures",
    subtitle: "",
    description: "Full-service content creation from concept to final delivery for motion pictures.",
    href: "/motion-pictures",
    bgImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2000",
  },
  // {
  //   id: "brands",
  //   title: "Brands",
  //   subtitle: "& Content",
  //   description: "Strategic brand content and campaigns that resonate with audiences worldwide.",
  //   href: "/brands",
  // },
  // {
  //   id: "content",
  //   title: "Content",
  //   subtitle: "Production",
  //   description: "Full-service content creation from concept to final delivery.",
  //   href: "/content",
  // },
];

const VerticalSelector = () => {
  const [hoveredVertical, setHoveredVertical] = useState<string | null>("vfx");

  return (
    <section className="h-screen w-full flex flex-col relative overflow-hidden" id="verticals">
      {/* Background Image Layer */}
      <div className="absolute inset-0 transition-opacity duration-700">
        {verticals.map((vertical) => (
          <div
            key={`bg-${vertical.id}`}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
            style={{
              backgroundImage: `url(${vertical.bgImage})`,
              opacity: hoveredVertical === vertical.id ? 1 : 0,
            }}
          >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          </div>
        ))}
      </div>

      {/* Content Layer */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Section Header */}
        <div className="px-6 md:px-12 py-8 md:py-12 border-b border-border/30">
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground">
            Our Verticals
          </h2>
        </div>

        {/* Verticals Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 p-16 items-center content-center">
          {verticals.map((vertical, index) => (
            <Link
              key={vertical.id}
              to={vertical.href}
              onMouseEnter={() => setHoveredVertical(vertical.id)}
              onMouseLeave={() => setHoveredVertical("vfx")}
              className="vertical-card group relative flex flex-col justify-between p-6 md:p-8 overflow-hidden transition-all duration-300 rounded-lg hover:scale-110 hover:shadow-2xl h-[400px] max-w-[280px] mx-auto w-full"
              style={{
                backgroundImage: `url(${vertical.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Card-specific overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300 -z-10" />
              
              {/* Number */}
              <span className="text-xs text-white/70 font-body relative z-10">
                0{index + 1}
              </span>

              {/* Title */}
              <div className="my-auto relative z-10">
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
                  {vertical.title}
                </h3>
                {vertical.subtitle && (
                  <span className="block font-display text-lg md:text-xl text-white/70 mt-1 transition-colors duration-300">
                    {vertical.subtitle}
                  </span>
                )}
              </div>

              {/* Description & Arrow */}
              <div className="mt-auto relative z-10">
                <p className="text-sm text-white/70 mb-6 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {vertical.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-white group-hover:text-primary transition-colors duration-200">
                  <span className="uppercase tracking-widest text-xs">Explore</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                </div>
              </div>

              {/* Hover Line */}
              <span className="absolute bottom-0 left-0 w-full h-px bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerticalSelector;
