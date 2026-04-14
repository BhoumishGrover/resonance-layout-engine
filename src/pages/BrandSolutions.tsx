import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedColorText from "../components/AnimatedColorText";
import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";

type BrandShowcaseItem = {
  title: string;
  image: string;
  client: string;
  year: string;
  service: string;
  objective?: string;
  videoSrc?: string;
  videoTitle?: string;
  videoSubtitle?: string;
  videoHighlight?: string;
  videoFooter?: string;
};

const brandShowcase: BrandShowcaseItem[] = [
  {
    title: "ICICI Lombard",
    image: "/assets/images/BrandStatements/ICICI-Lombard.jpg",
    client: "ICICI Lombard",
    year: "2018",
    service: "Film Production & Campaign",
    objective: "Digital content to drive engagement and brand recall across insurance touchpoints — concept to final delivery.",
    videoSrc: "/assets/videos/ads.mp4",
    videoTitle: "ICICI LOMBARD",
    videoSubtitle: "Insurance for Every Moment",
    videoHighlight: "8M+ Reached",
    videoFooter: "Concept to Final Delivery",
  },
  {
    title: "ICICI Lombard",
    image: "/assets/images/BrandStatements/images.jpeg",
    client: "ICICI Lombard",
    year: "2018",
    service: "Social Media Management",
    objective: "Sustained social media presence and content calendar management for quarterly campaigns.",
  },
  {
    title: "Bharti AXA",
    image: "/assets/images/BrandStatements/bhartiAXA.jpg",
    client: "Bharti AXA",
    year: "2024",
    service: "Pre to Post Production",
    objective: "End-to-end production of a branded film across digital platforms to drive emotional brand connection.",
    videoSrc: "/assets/videos/movies.mp4",
    videoTitle: "BHARTI AXA",
    videoSubtitle: "Hum Kaise Maan Le",
    videoHighlight: "10M+ Reached",
    videoFooter: "Pre to Post Production",
  },
  {
    title: "Morde",
    image: "/assets/images/BrandStatements/morde.jpg",
    client: "Morde",
    year: "2024",
    service: "Launch New Packaging",
    objective: "Digital content to drive engagement and increase footfalls for the brand at Bakery Business South, Hyderabad.",
  },
  {
    title: "Travel + Leisure",
    image: "/assets/images/BrandStatements/T+L.jpg",
    client: "Travel + Leisure",
    year: "2024",
    service: "Original Content & Copywriting",
    objective: "Crafting destination-led editorial content and visual storytelling for the Travel + Leisure India brand.",
  },
  {
    title: "Oppo",
    image: "/assets/images/BrandStatements/oppo.png",
    client: "Oppo",
    year: "2024",
    service: "Video Editing & Animation",
    objective: "Product launch video editing and motion graphics for digital-first distribution across platforms.",
    videoSrc: "/assets/videos/placeholder_video.mp4",
    videoTitle: "OPPO",
    videoSubtitle: "Future Tech Stories",
    videoHighlight: "6M+ Reached",
    videoFooter: "Editing and Delivery",
  },
  {
    title: "ICICI Lombard - Campus Cut",
    image: "/assets/images/BrandStatements/ICICI-Lombard.jpg",
    client: "ICICI Lombard",
    year: "2019",
    service: "Campaign Planning",
    objective: "Campus-focused insurance awareness campaign targeting young professionals and graduates.",
  },
  {
    title: "ICICI Lombard - Elevate",
    image: "/assets/images/BrandStatements/images.jpeg",
    client: "ICICI Lombard",
    year: "2020",
    service: "Graphic Design & Illustration",
    objective: "A refreshed design language for the Elevate product line across digital and print touchpoints.",
  },
  {
    title: "Bharti AXA - Secure Living",
    image: "/assets/images/BrandStatements/bhartiAXA.jpg",
    client: "Bharti AXA",
    year: "2023",
    service: "Script to Post",
    objective: "Full campaign production from scripting to post — driving 4M+ views across digital platforms.",
    videoSrc: "/assets/videos/movies.mp4",
    videoTitle: "BHARTI AXA",
    videoSubtitle: "Secure Living Campaign",
    videoHighlight: "4M+ Reached",
    videoFooter: "Script to Post",
  },
  {
    title: "Morde - Festive Pack",
    image: "/assets/images/BrandStatements/morde.jpg",
    client: "Morde",
    year: "2025",
    service: "Print, OOH & Mainline Advertising",
    objective: "Festive packaging campaign designed for in-store visibility and regional distribution across bakery trade shows.",
  },
  {
    title: "Travel + Leisure - Goa Edit",
    image: "/assets/images/BrandStatements/T+L.jpg",
    client: "Travel + Leisure",
    year: "2025",
    service: "Original Content & Copywriting",
    objective: "A special destination edit on Goa — photo essays, reels, and editorial copy for digital and print.",
  },
  {
    title: "Oppo - Future Assistant",
    image: "/assets/images/BrandStatements/oppo.png",
    client: "Oppo",
    year: "2023",
    service: "Pre to Post Production",
    objective: "Campaign production for Oppo's AI assistant feature — scripted, shot, and delivered for digital platforms.",
    videoSrc: "/assets/videos/ads.mp4",
    videoTitle: "OPPO",
    videoSubtitle: "Future Assistant",
    videoHighlight: "5M+ Reached",
    videoFooter: "Pre to Post Production",
  },
  {
    title: "ICICI Lombard - Digital Drive",
    image: "/assets/images/BrandStatements/ICICI-Lombard.jpg",
    client: "ICICI Lombard",
    year: "2025",
    service: "Social Media Management",
    objective: "Sustained digital-first campaign to drive insurance policy renewals and brand affinity across social platforms.",
  },
];

const brandStatements = [
  {
    title: "Social Media Management",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    title: "Original Content and Copywriting",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    title: "Print, OOH, Mainline Advertising",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    title: "New Brand Launch and Rebranding",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    title: "Graphic Design, Iconography and Illustration",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    title: "Video Editing and Animation",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    title: "Film Production, Avs and Product Photography",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
  {
    title: "Campaign Planning",
    body: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
];

const BrandSolutions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const defaultVideoIndex = Math.max(
    0,
    brandShowcase.findIndex((item) => Boolean(item.videoSrc)),
  );
  const [activeVideoCardIndex, setActiveVideoCardIndex] =
    useState(defaultVideoIndex);
  const [activeCaseStudyIndex, setActiveCaseStudyIndex] = useState<number | null>(null);

  const activeVideoCard = brandShowcase[activeVideoCardIndex];
  const activeCaseStudy =
    activeCaseStudyIndex !== null ? brandShowcase[activeCaseStudyIndex] : null;

  const openCaseStudy = (index: number) => {
    setActiveCaseStudyIndex(index);
    // Also update the video section if the card has a video
    if (brandShowcase[index]?.videoSrc) {
      setActiveVideoCardIndex(index);
    }
  };

  const closeCaseStudy = () => setActiveCaseStudyIndex(null);

  const prevCaseStudy = () => {
    if (activeCaseStudyIndex === null) return;
    setActiveCaseStudyIndex(
      (activeCaseStudyIndex - 1 + brandShowcase.length) % brandShowcase.length,
    );
  };

  const nextCaseStudy = () => {
    if (activeCaseStudyIndex === null) return;
    setActiveCaseStudyIndex(
      (activeCaseStudyIndex + 1) % brandShowcase.length,
    );
  };

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  // Total cards and grid geometry
  const SHOWCASE_COLS = 3;
  const fullRows = Math.floor(brandShowcase.length / SHOWCASE_COLS); // 4
  const remainder = brandShowcase.length % SHOWCASE_COLS; // 1

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen bg-[#080032] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-6xl w-full mt-20">
          <h1 className="font-display text-[85px] md:text-[95px] lg:text-[105px] font-bold text-[#4ab6ff] mb-10 leading-tight">
            Brand Solutions
          </h1>

          <AnimatedColorText
            whiteText="A leading digital Creative Technology"
            blueText="Company, which focuses on delivering rememberable web designs that are searchable, alongside other online promotion solutions in Coventry. We provide our clients with striking, practical, and intuitive sites that attract clientele and yield revenue."
          />
        </div>
      </section>

      {/* Full-viewport Video Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          src="/assets/videos/movies.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay to slightly darken the video */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Top-left label */}
        <h2 className="absolute top-[35%] left-10 md:left-16 font-display text-5xl md:text-6xl lg:text-7xl font-bold text-[#4ab6ff]">
          Brand Solutions
        </h2>
      </section>

      {/* Clients + Statements Section */}
      <section className="w-full bg-[#f6f4ef] py-20 px-10 md:px-16">
        {/* Section heading */}
        <h2 className="font-display text-3xl md:text-4xl font-normal text-gray-400 mb-12">
          Brand Solutions <span className="text-gray-400">|</span>{" "}
          <span className="font-bold text-gray-700">Clients</span>
        </h2>

        {/* 50/50 split */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left — clients grid image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://resonancedigital.in/assets/images/brandSolutions/Brand-solution-logo.png"
              alt="Brand Solutions Clients"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right — accordion statements */}
          <div className="w-full lg:w-1/2 flex flex-col self-start pb-16">
            {brandStatements.map((item, i) => (
              <div key={i}>
                <div className="h-[2px] bg-gray-300 w-full" />
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <span className="font-display text-[18px] md:text-[20px] text-gray-700 group-hover:text-[#4a97d3] transition-colors duration-200">
                    {item.title}
                  </span>
                  <ChevronDown
                    style={{
                      transform:
                        openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="text-gray-500 text-sm leading-relaxed pb-5 max-w-lg">
                        {item.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            {/* Final bottom border */}
            <div className="h-[2px] bg-gray-300 w-full" />
          </div>
        </div>
      </section>

      {/* Brand Solutions Showcase — Vertical Scrollable Grid */}
      <section className="w-full bg-[#f6f4ef] pb-24 px-10 md:px-16">
        <h2 className="font-display text-3xl md:text-4xl font-normal text-gray-400 mb-12">
          Brand Solutions <span className="text-gray-400">|</span>{" "}
          <span className="font-bold text-gray-700">Showcase</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Full rows (first 12 cards) */}
            {brandShowcase.slice(0, fullRows * SHOWCASE_COLS).map((item, index) => (
              <div
                key={`${item.title}-${item.year}-${index}`}
                className="flex flex-col cursor-pointer group"
                onClick={() => openCaseStudy(index)}
              >
                <div className="relative aspect-video overflow-hidden rounded-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs uppercase tracking-widest font-semibold border border-white/60 px-4 py-2">
                      View Case Study
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-500 uppercase tracking-wide">
                  {item.client} <span className="text-gray-400">|</span>{" "}
                  {item.year}
                </p>
              </div>
            ))}

            {/* Remainder row — last card(s) centered in middle column */}
            {remainder > 0 && (
              <>
                {/* Empty first column */}
                <div className="hidden md:block" />

                {brandShowcase
                  .slice(fullRows * SHOWCASE_COLS)
                  .map((item, index) => {
                    const globalIndex = fullRows * SHOWCASE_COLS + index;
                    return (
                      <div
                        key={`${item.title}-${item.year}-${globalIndex}`}
                        className="flex flex-col cursor-pointer group"
                        onClick={() => openCaseStudy(globalIndex)}
                      >
                        <div className="relative aspect-video overflow-hidden rounded-sm">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs uppercase tracking-widest font-semibold border border-white/60 px-4 py-2">
                              View Case Study
                            </span>
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-gray-500 uppercase tracking-wide">
                          {item.client}{" "}
                          <span className="text-gray-400">|</span> {item.year}
                        </p>
                      </div>
                    );
                  })}
              </>
            )}
        </div>
      </section>

      {activeVideoCard?.videoSrc && (
        <section className="relative w-full h-screen overflow-hidden">
          <div className="relative w-full h-full overflow-hidden">
            <video
              key={activeVideoCard.videoSrc}
              src={activeVideoCard.videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            <div className="pointer-events-none absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
              <p className="font-display text-2xl md:text-3xl leading-tight">
                {activeVideoCard.videoTitle ??
                  activeVideoCard.client.toUpperCase()}
              </p>
              <p className="text-2xl md:text-3xl leading-tight">
                {activeVideoCard.videoSubtitle ?? activeVideoCard.title}
              </p>
              <p className="inline-block mt-2 bg-[#1498e1] px-2 py-0.5 text-2xl md:text-3xl leading-tight">
                {activeVideoCard.videoHighlight ?? "Campaign Highlight"}
              </p>
              <p className="text-2xl md:text-3xl leading-tight">
                {activeVideoCard.videoFooter ?? "Pre to Post Production"}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Section */}
      <section className="w-full bg-[#e7e5df] pt-24 pb-28 pl-20 pr-10 md:pl-28 md:pr-16">
        <h2 className="font-display text-4xl md:text-5xl font-normal text-gray-400 mb-20">
          Brand Solutions <span className="text-gray-400">|</span>{" "}
          <span className="font-semibold text-gray-700">Case Studies</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[460px_1fr] gap-8 items-start">
          {/* LEFT */}
          <div className="relative">
            <button className="absolute -left-8 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
              ‹
            </button>

            <div className="bg-white p-5 pl-20">
              <img
                src="/assets/images/BrandStatements/morde.jpg"
                className="w-full object-contain"
              />
            </div>

            <div className="mt-2 bg-[#bdbdbd] text-gray-800 flex justify-between items-center px-4 py-2 text-[13px]">
              <span>View Case</span>
              <span>→</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="pt-[2px] max-w-lg">
            <div className="space-y-1 text-[17px]">
              <div className="grid grid-cols-[100px_1fr] items-center border-b border-gray-300 pb-[2px]">
                <span className="text-gray-400">Client</span>
                <span className="text-gray-700 font-bold">MORDE</span>
              </div>

              <div className="grid grid-cols-[100px_1fr] items-center border-b border-gray-300 pb-[2px]">
                <span className="text-gray-400">Service</span>
                <span className="text-gray-700 font-bold tracking-wide">
                  LAUNCH NEW PACKAGING
                </span>
              </div>

              <div className="grid grid-cols-[100px_1fr] items-center border-b border-gray-300 pb-[2px]">
                <span className="text-gray-400">Year</span>
                <span className="text-gray-700 font-bold">2025</span>
              </div>
            </div>

            <p className="mt-3 text-[15px] leading-relaxed text-gray-500">
              <span className="font-semibold text-gray-700">Objective:</span>{" "}
              Digital content to drive engagement and increase footfalls for the
              brand at Bakery Business South, Hyderabad with emailers, videos,
              e-brochures, Insta reels, posts, and carousels.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Campaign Visual Section */}
      <section className="w-full bg-[#e7e5df] pb-32 px-10 md:px-16">
        <h2 className="font-display text-4xl md:text-5xl font-normal text-gray-400 mb-20">
          Brand Solutions <span className="text-gray-400">|</span>{" "}
          <span className="font-semibold text-gray-700">Case Studies</span>
        </h2>

        <div className="w-full max-w-[1500px] mx-auto">
          <img
            src="/assets/images/BrandStatements/ICICI-Lombard.jpg"
            alt="Campaign Case Study Visual"
            className="w-full h-[400px] object-contain"
          />
        </div>
      </section>

      {/* Case Study Full-Screen Overlay */}
      <AnimatePresence>
        {activeCaseStudy && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#f0ede6] overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Close button */}
            <button
              type="button"
              aria-label="Close case study"
              onClick={closeCaseStudy}
              className="fixed top-6 right-6 z-[60] w-11 h-11 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Prev */}
            <button
              type="button"
              aria-label="Previous case study"
              onClick={prevCaseStudy}
              className="fixed left-4 top-1/2 -translate-y-1/2 z-[60] w-11 h-11 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            {/* Next */}
            <button
              type="button"
              aria-label="Next case study"
              onClick={nextCaseStudy}
              className="fixed right-4 top-1/2 -translate-y-1/2 z-[60] w-11 h-11 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            {/* Content */}
            <div className="min-h-screen flex flex-col lg:flex-row">
              {/* Left — full-height image */}
              <motion.div
                key={activeCaseStudy.image + activeCaseStudyIndex}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="w-full lg:w-[55%] relative min-h-[40vh] lg:min-h-screen"
              >
                <img
                  src={activeCaseStudy.image}
                  alt={activeCaseStudy.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Counter badge */}
                <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-sm px-3 py-1 text-xs text-gray-500 uppercase tracking-widest">
                  {(activeCaseStudyIndex ?? 0) + 1} / {brandShowcase.length}
                </div>
              </motion.div>

              {/* Right — metadata */}
              <motion.div
                key={activeCaseStudyIndex}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="w-full lg:w-[45%] flex flex-col justify-center px-10 md:px-16 py-24 lg:py-32"
              >
                {/* Section label */}
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-8">
                  Brand Solutions | Case Study
                </p>

                {/* Title */}
                <h2 className="font-display text-[36px] md:text-[52px] font-bold text-gray-800 leading-none mb-10">
                  {activeCaseStudy.title}
                </h2>

                {/* Metadata rows */}
                <div className="space-y-0 mb-8">
                  <div className="grid grid-cols-[110px_1fr] items-baseline border-b border-gray-300 py-3">
                    <span className="text-gray-400 text-sm uppercase tracking-wide">Client</span>
                    <span className="text-gray-800 font-bold uppercase tracking-wide text-sm">{activeCaseStudy.client}</span>
                  </div>
                  <div className="grid grid-cols-[110px_1fr] items-baseline border-b border-gray-300 py-3">
                    <span className="text-gray-400 text-sm uppercase tracking-wide">Service</span>
                    <span className="text-gray-800 font-bold uppercase tracking-wide text-sm">{activeCaseStudy.service}</span>
                  </div>
                  <div className="grid grid-cols-[110px_1fr] items-baseline border-b border-gray-300 py-3">
                    <span className="text-gray-400 text-sm uppercase tracking-wide">Year</span>
                    <span className="text-gray-800 font-bold text-sm">{activeCaseStudy.year}</span>
                  </div>
                  {activeCaseStudy.videoHighlight && (
                    <div className="grid grid-cols-[110px_1fr] items-baseline border-b border-gray-300 py-3">
                      <span className="text-gray-400 text-sm uppercase tracking-wide">Reach</span>
                      <span className="text-[#1498e1] font-bold text-sm">{activeCaseStudy.videoHighlight}</span>
                    </div>
                  )}
                </div>

                {/* Objective */}
                {activeCaseStudy.objective && (
                  <div className="mb-10">
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">Objective</p>
                    <p className="text-gray-600 text-[15px] leading-relaxed">
                      {activeCaseStudy.objective}
                    </p>
                  </div>
                )}

                {/* Dismiss hint */}
                <button
                  onClick={closeCaseStudy}
                  className="self-start text-xs uppercase tracking-widest text-gray-400 hover:text-gray-700 transition-colors duration-200 border-b border-gray-300 hover:border-gray-600 pb-0.5"
                >
                  ← Back to Showcase
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer theme="dark" />
    </>
  );
};

export default BrandSolutions;
