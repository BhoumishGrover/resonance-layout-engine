import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

const verticals = [
  {
    id: "vfx",
    title: "VFX",
    subtitle: "Movies & Ads",
    description: "High-end visual effects and motion design for film, advertising, and digital experiences.",
    href: "/vfx",
    bgImage: "https://resonancedigital.in/assets/images/VFX/Sandman-vfx.webp",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    subtitle: "Mar-tech",
    description: "Photorealistic renders and immersive virtual tours for architectural projects.",
    href: "/real-estate",
    bgImage: "https://resonancedigital.in/assets/images/realEstate/verticalSelectorImg.png",
  },
  {
    id: "brand-solutions",
    title: "Brand Solutions",
    subtitle: "",
    description: "Strategic brand content and campaigns that resonate with audiences worldwide.",
    href: "/brandSolutions",
    bgImage: "https://resonancedigital.in/assets/images/brandSolutions/black_dog-copy.jpg",
  },
  {
    id: "motion-pictures",
    title: "Motion Pictures",
    subtitle: "",
    description: "Full-service content creation from concept to final delivery for motion pictures.",
    href: "/motion-pictures",
    bgImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2000",
  },
];

const VERTICAL_IDS = verticals.map((v) => v.id);

const VerticalSelector = () => {
  const [activeVertical, setActiveVertical] = useState<string>("vfx");
  const [isMobile, setIsMobile] = useState(false);

  // refs for the auto-rotate interval and the "resume after tap" timeout
  const rotateRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── detect mobile ──────────────────────────────────────────────────────────
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ── auto-rotate (mobile only) ─────────────────────────────────────────────
  const startAutoRotate = useCallback(() => {
    if (rotateRef.current) clearInterval(rotateRef.current);
    rotateRef.current = setInterval(() => {
      setActiveVertical((prev) => {
        const idx = VERTICAL_IDS.indexOf(prev);
        return VERTICAL_IDS[(idx + 1) % VERTICAL_IDS.length];
      });
    }, 3000);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    startAutoRotate();
    return () => {
      if (rotateRef.current) clearInterval(rotateRef.current);
      if (resumeRef.current) clearTimeout(resumeRef.current);
    };
  }, [isMobile, startAutoRotate]);

  // ── mobile card interaction ───────────────────────────────────────────────
  // First tap on a non-active card → activate it & pause rotation for 6 s
  // Tap on an already-active card → navigate (link default behaviour)
  const handleCardTap = useCallback(
    (e: React.MouseEvent, id: string) => {
      if (activeVertical === id) return; // already active → let the link navigate
      e.preventDefault();               // not yet active → activate first
      setActiveVertical(id);
      if (rotateRef.current) clearInterval(rotateRef.current);
      if (resumeRef.current) clearTimeout(resumeRef.current);
      resumeRef.current = setTimeout(startAutoRotate, 6000);
    },
    [activeVertical, startAutoRotate],
  );

  return (
    <section
      className="w-full h-screen relative overflow-hidden"
      id="verticals"
    >
      {/* ── Full-screen background image layer (shared by both layouts) ──── */}
      <div className="absolute inset-0">
        {verticals.map((vertical) => (
          <div
            key={`bg-${vertical.id}`}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
            style={{
              backgroundImage: `url(${vertical.bgImage})`,
              opacity: activeVertical === vertical.id ? 1 : 0,
            }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          </div>
        ))}
      </div>

      {/* ── Content layer ──────────────────────────────────────────────────── */}
      <div className="relative z-10 h-full flex flex-col">

        {/* Section header */}
        <div className="px-6 md:px-12 py-8 md:py-12 border-b border-white/20">
          <h2 className="text-xs uppercase tracking-widest text-white/50">
            Our Verticals
          </h2>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            DESKTOP — 4-col tall card layout (completely unchanged from original)
            ════════════════════════════════════════════════════════════════════ */}
        <div className="hidden md:grid flex-1 grid-cols-4 gap-12 px-16 pt-2 pb-28 items-start content-start">
          {verticals.map((vertical, index) => (
            <Link
              key={vertical.id}
              to={vertical.href}
              onMouseEnter={() => setActiveVertical(vertical.id)}
              className="vertical-card group relative flex flex-col justify-between p-6 md:p-8 overflow-hidden transition-all duration-300 rounded-lg hover:scale-110 hover:shadow-2xl h-[600px] max-w-[280px] mx-auto w-full"
              style={{
                backgroundImage: `url(${vertical.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Card overlay */}
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

              {/* Description & arrow */}
              <div className="mt-auto relative z-10">
                <p className="text-sm text-white/70 mb-6 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {vertical.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-white group-hover:text-primary transition-colors duration-200">
                  <span className="uppercase tracking-widest text-xs">Explore</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                </div>
              </div>

              {/* Hover bottom line */}
              <span className="absolute bottom-0 left-0 w-full h-px bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10" />
            </Link>
          ))}
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            MOBILE — 2×2 tap-to-activate grid + auto-rotating background
            ════════════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col md:hidden flex-1">
          {/* 2×2 grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 p-8 flex-1 h-full">
            {verticals.map((vertical, index) => {
              const isActive = activeVertical === vertical.id;
              return (
                <Link
                  key={vertical.id}
                  to={vertical.href}
                  onClick={(e) => handleCardTap(e, vertical.id)}
                  className="relative overflow-hidden rounded-xl h-full"
                >
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${vertical.bgImage})` }}
                  />

                  {/* Overlay — lighter when active */}
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      isActive ? "bg-black/25" : "bg-black/60"
                    }`}
                  />

                  {/* Card content */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-between">
                    {/* Number */}
                    <span className="text-xs text-white/50">0{index + 1}</span>

                    {/* Middle: title + subtitle + description */}
                    <div>
                      <h3
                        className={`font-display text-xl font-bold leading-tight transition-colors duration-300 ${
                          isActive ? "text-[#4ab6ff]" : "text-white"
                        }`}
                      >
                        {vertical.title}
                      </h3>
                      {vertical.subtitle && (
                        <span className="block text-xs text-white/60 mt-0.5">
                          {vertical.subtitle}
                        </span>
                      )}
                      {/* Description: slides in when active */}
                      <p
                        className={`text-xs text-white/70 mt-2 leading-relaxed transition-all duration-400 overflow-hidden ${
                          isActive ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        {vertical.description}
                      </p>
                    </div>

                    {/* Explore row */}
                    <div
                      className={`flex items-center gap-1 text-xs uppercase tracking-widest transition-colors duration-200 ${
                        isActive ? "text-[#4ab6ff]" : "text-white/50"
                      }`}
                    >
                      <span>{isActive ? "Tap again to visit →" : "Explore"}</span>
                      {!isActive && <ArrowUpRight className="w-3 h-3" />}
                    </div>
                  </div>

                  {/* Active bottom border — animates in */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#4ab6ff] transition-all duration-500 ease-out ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Auto-rotate indicator dots */}
          <div className="flex justify-center items-center gap-2 py-5">
            {verticals.map((vertical) => (
              <button
                key={`dot-${vertical.id}`}
                aria-label={`View ${vertical.title}`}
                onClick={() => handleCardTap({ preventDefault: () => {} } as React.MouseEvent, vertical.id)}
                className={`rounded-full transition-all duration-400 ${
                  activeVertical === vertical.id
                    ? "w-6 h-[6px] bg-[#4ab6ff]"
                    : "w-[6px] h-[6px] bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default VerticalSelector;
