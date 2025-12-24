import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const verticals = [
  {
    id: "vfx",
    title: "VFX",
    subtitle: "& Animation",
    description: "High-end visual effects and motion design for film, advertising, and digital experiences.",
    href: "/vfx",
  },
  {
    id: "brands",
    title: "Brands",
    subtitle: "& Content",
    description: "Strategic brand content and campaigns that resonate with audiences worldwide.",
    href: "/brands",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    subtitle: "Visualization",
    description: "Photorealistic renders and immersive virtual tours for architectural projects.",
    href: "/real-estate",
  },
  {
    id: "content",
    title: "Content",
    subtitle: "Production",
    description: "Full-service content creation from concept to final delivery.",
    href: "/content",
  },
];

const VerticalSelector = () => {
  return (
    <section className="h-screen w-full flex flex-col" id="verticals">
      {/* Section Header */}
      <div className="px-6 md:px-12 py-8 md:py-12 border-b border-border">
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground">
          Our Verticals
        </h2>
      </div>

      {/* Verticals Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {verticals.map((vertical, index) => (
          <Link
            key={vertical.id}
            to={vertical.href}
            className="vertical-card group relative flex flex-col justify-between p-6 md:p-8 border-b md:border-b-0 md:border-r border-border last:border-r-0 hover:bg-secondary/30"
          >
            {/* Number */}
            <span className="text-xs text-muted-foreground font-body">
              0{index + 1}
            </span>

            {/* Title */}
            <div className="my-auto">
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground group-hover:text-primary transition-colors duration-500">
                {vertical.title}
              </h3>
              <span className="block font-display text-lg md:text-xl text-muted-foreground mt-1">
                {vertical.subtitle}
              </span>
            </div>

            {/* Description & Arrow */}
            <div className="mt-auto">
              <p className="text-sm text-muted-foreground mb-6 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {vertical.description}
              </p>
              <div className="flex items-center gap-2 text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                <span className="uppercase tracking-widest text-xs">Explore</span>
                <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </div>

            {/* Hover Line */}
            <span className="absolute bottom-0 left-0 w-full h-px bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default VerticalSelector;
