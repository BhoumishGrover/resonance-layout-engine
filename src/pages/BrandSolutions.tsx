import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedColorText from "../components/AnimatedColorText";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

type BrandShowcaseItem = {
  title: string;
  image: string;
  client: string;
  year: string;
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
  },
  {
    title: "Bharti AXA",
    image: "/assets/images/BrandStatements/bhartiAXA.jpg",
    client: "Bharti AXA",
    year: "2024",
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
  },
  {
    title: "Travel + Leisure",
    image: "/assets/images/BrandStatements/T+L.jpg",
    client: "Travel + Leisure",
    year: "2024",
  },
  {
    title: "Oppo",
    image: "/assets/images/BrandStatements/oppo.png",
    client: "Oppo",
    year: "2024",
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
  },
  {
    title: "ICICI Lombard - Elevate",
    image: "/assets/images/BrandStatements/images.jpeg",
    client: "ICICI Lombard",
    year: "2020",
  },
  {
    title: "Bharti AXA - Secure Living",
    image: "/assets/images/BrandStatements/bhartiAXA.jpg",
    client: "Bharti AXA",
    year: "2023",
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
  },
  {
    title: "Travel + Leisure - Goa Edit",
    image: "/assets/images/BrandStatements/T+L.jpg",
    client: "Travel + Leisure",
    year: "2025",
  },
  {
    title: "Oppo - Future Assistant",
    image: "/assets/images/BrandStatements/oppo.png",
    client: "Oppo",
    year: "2023",
    videoSrc: "/assets/videos/ads.mp4",
    videoTitle: "OPPO",
    videoSubtitle: "Future Assistant",
    videoHighlight: "5M+ Reached",
    videoFooter: "Pre to Post Production",
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
  const [currentShowcasePage, setCurrentShowcasePage] = useState(0);
  const [showcaseDirection, setShowcaseDirection] = useState(0);
  const defaultVideoIndex = Math.max(
    0,
    brandShowcase.findIndex((item) => Boolean(item.videoSrc)),
  );
  const [activeVideoCardIndex, setActiveVideoCardIndex] =
    useState(defaultVideoIndex);

  const SHOWCASE_COLUMNS = 3;
  const SHOWCASE_ROWS = 2;
  const SHOWCASE_PER_PAGE = SHOWCASE_COLUMNS * SHOWCASE_ROWS;
  const AUTO_ROTATE_MS = 4000;
  const totalShowcasePages = Math.ceil(
    brandShowcase.length / SHOWCASE_PER_PAGE,
  );

  const handleShowcaseNext = () => {
    if (totalShowcasePages <= 1) return;
    setShowcaseDirection(1);
    setCurrentShowcasePage((prev) => (prev + 1) % totalShowcasePages);
  };

  const handleShowcasePrev = () => {
    if (totalShowcasePages <= 1) return;
    setShowcaseDirection(-1);
    setCurrentShowcasePage(
      (prev) => (prev - 1 + totalShowcasePages) % totalShowcasePages,
    );
  };

  useEffect(() => {
    if (totalShowcasePages <= 1) return;

    const timer = window.setInterval(() => {
      setShowcaseDirection(1);
      setCurrentShowcasePage((prev) => (prev + 1) % totalShowcasePages);
    }, AUTO_ROTATE_MS);

    return () => window.clearInterval(timer);
  }, [totalShowcasePages]);

  const showcaseStartIndex = currentShowcasePage * SHOWCASE_PER_PAGE;
  const showcaseItems = brandShowcase.slice(
    showcaseStartIndex,
    showcaseStartIndex + SHOWCASE_PER_PAGE,
  );
  const activeVideoCard = brandShowcase[activeVideoCardIndex];

  const handleShowcaseCardClick = (cardIndex: number) => {
    const selectedCard = brandShowcase[cardIndex];
    if (!selectedCard?.videoSrc) return;
    setActiveVideoCardIndex(cardIndex);
  };

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen bg-[#132c3b] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24">
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

      {/* Brand Solutions Showcase Carousel */}
      <section className="w-full bg-[#f6f4ef] pb-24 px-10 md:px-16">
        <h2 className="font-display text-3xl md:text-4xl font-normal text-gray-400 mb-12">
          Brand Solutions <span className="text-gray-400">|</span>{" "}
          <span className="font-bold text-gray-700">Showcase</span>
        </h2>

        <div className="relative">
          {/* Prev */}
          <button
            onClick={handleShowcasePrev}
            disabled={totalShowcasePages <= 1}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              totalShowcasePages <= 1
                ? "bg-gray-200 cursor-not-allowed opacity-40"
                : "bg-gray-300 hover:bg-gray-400 cursor-pointer"
            }`}
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          <div className="relative overflow-hidden">
            <AnimatePresence initial={false} custom={showcaseDirection}>
              <motion.div
                key={currentShowcasePage}
                custom={showcaseDirection}
                initial={{ x: showcaseDirection > 0 ? "100%" : "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: showcaseDirection > 0 ? "-100%" : "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 absolute inset-0"
              >
                {showcaseItems.map((item, index) => (
                  <div
                    key={`${item.title}-${item.year}-${showcaseStartIndex + index}`}
                    className={`flex flex-col ${item.videoSrc ? "cursor-pointer" : "cursor-default"}`}
                    onClick={() =>
                      handleShowcaseCardClick(showcaseStartIndex + index)
                    }
                  >
                    <div className="relative aspect-video overflow-hidden rounded-sm">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <p className="mt-3 text-sm text-gray-500 uppercase tracking-wide">
                      {item.client} <span className="text-gray-400">|</span>{" "}
                      {item.year}
                    </p>
                  </div>
                ))}

                {Array.from({
                  length: SHOWCASE_PER_PAGE - showcaseItems.length,
                }).map((_, index) => (
                  <div key={`placeholder-${index}`} className="flex flex-col">
                    <div className="aspect-video" />
                    <div className="h-6 mt-3" />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
            {/* Spacer */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 invisible">
              {Array(SHOWCASE_PER_PAGE)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex flex-col">
                    <div className="aspect-video" />
                    <div className="h-6 mt-3" />
                  </div>
                ))}
            </div>
          </div>

          {/* Next */}
          <button
            onClick={handleShowcaseNext}
            disabled={totalShowcasePages <= 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              totalShowcasePages <= 1
                ? "bg-gray-200 cursor-not-allowed opacity-40"
                : "bg-gray-300 hover:bg-gray-400 cursor-pointer"
            }`}
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
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

      <Footer />
    </>
  );
};

export default BrandSolutions;
