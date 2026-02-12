"use client";

import { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";

const VFX = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [selectedMovieCategory, setSelectedMovieCategory] = useState<string>("Rotoscopy");
  const [selectedAdCategory, setSelectedAdCategory] = useState<string>("Brand Commercials");
  const [currentMovieIndex, setCurrentMovieIndex] = useState<number>(0);
  const [currentAdIndex, setCurrentAdIndex] = useState<number>(0);
  const expandedContentRef = useRef<HTMLDivElement>(null);
  const splitSectionRef = useRef<HTMLDivElement>(null);

  const ITEMS_PER_PAGE = 4;

  const handleMovieNext = () => {
    if (currentMovieIndex + ITEMS_PER_PAGE < moviesShowcase.length) {
      setCurrentMovieIndex(currentMovieIndex + ITEMS_PER_PAGE);
    }
  };

  const handleMoviePrev = () => {
    if (currentMovieIndex > 0) {
      setCurrentMovieIndex(Math.max(0, currentMovieIndex - ITEMS_PER_PAGE));
    }
  };

  const handleAdNext = () => {
    if (currentAdIndex + ITEMS_PER_PAGE < adsShowcase.length) {
      setCurrentAdIndex(currentAdIndex + ITEMS_PER_PAGE);
    }
  };

  const handleAdPrev = () => {
    if (currentAdIndex > 0) {
      setCurrentAdIndex(Math.max(0, currentAdIndex - ITEMS_PER_PAGE));
    }
  };

  const movieCategories = [
    "Rotoscopy",
    "Cleanup",
    "Matchmove",
    "Compositing",
    "Mobile & Monitor Comps",
    "FX & Simulations",
    "Set Extensions",
    "Environments & Creatures"
  ];

  const adCategories = [
    "Brand Commercials",
    "Product Visualization",
    "Social Media Content",
    "Broadcast Advertising",
    "Motion Graphics",
    "Visual Effects"
  ];

  const moviesShowcase = [
    {
      title: "Chamkila",
      image: "/assets/images/movies/movies_01.png",
      platform: "Netflix Original",
      year: "2024",
      category: "Rotoscopy"
    },
    {
      title: "Discovery of Witches",
      image: "/assets/images/movies/movies_02Witches.png",
      platform: "Sky Original",
      year: "2023",
      category: "Compositing"
    },
    {
      title: "Empire",
      image: "/assets/images/movies/movies_03.png",
      platform: "Disney+ Hotstar",
      year: "2025",
      category: "FX & Simulations"
    },
    {
      title: "The Batman",
      image: "/assets/images/movies/batman.png",
      platform: "Warner Bros",
      year: "2022",
      category: "Compositing"
    },
    {
      title: "The Flash",
      image: "/assets/images/movies/movies_01.png",
      platform: "Warner Bros",
      year: "2023",
      category: "Rotoscopy"
    },
    {
      title: "Stranger Things",
      image: "/assets/images/movies/movies_02Witches.png",
      platform: "Netflix",
      year: "2024",
      category: "Cleanup"
    },
    {
      title: "Avatar 3",
      image: "/assets/images/movies/movies_03.png",
      platform: "20th Century Studios",
      year: "2025",
      category: "Environments & Creatures"
    },
    {
      title: "Dune: Part Three",
      image: "/assets/images/movies/batman.png",
      platform: "Warner Bros",
      year: "2026",
      category: "Set Extensions"
    },
  ];

  const adsShowcase = [
    {
      title: "Nike Campaign 2024",
      image: "/assets/images/ads/nike.jpg",
      client: "Nike",
      year: "2024",
      category: "Brand Commercials"
    },
    {
      title: "Coca-Cola Summer",
      image: "/assets/images/ads/cocacola.jpg",
      client: "Coca-Cola",
      year: "2024",
      category: "Brand Commercials"
    },
    {
      title: "Apple Vision Pro",
      image: "/assets/images/ads/apple.jpg",
      client: "Apple",
      year: "2024",
      category: "Product Visualization"
    },
    {
      title: "Mercedes-Benz EQS",
      image: "/assets/images/ads/mercedes.jpg",
      client: "Mercedes-Benz",
      year: "2023",
      category: "Product Visualization"
    },
    {
      title: "Samsung Galaxy",
      image: "/assets/images/ads/nike.jpg",
      client: "Samsung",
      year: "2024",
      category: "Motion Graphics"
    },
    {
      title: "Pepsi Max",
      image: "/assets/images/ads/cocacola.jpg",
      client: "Pepsi",
      year: "2024",
      category: "Visual Effects"
    },
  ];

  useEffect(() => {
    if (expandedSection && expandedContentRef.current) {
      // Animate expansion
      gsap.fromTo(
        expandedContentRef.current,
        {
          opacity: 0,
          scale: 0.95,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }
  }, [expandedSection]);

  const handleExpand = (section: string) => {
    if (splitSectionRef.current) {
      // Animate out the split section
      gsap.to(splitSectionRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          setExpandedSection(section);
        },
      });
    } else {
      setExpandedSection(section);
    }
  };

  const handleCollapse = () => {
    if (expandedContentRef.current) {
      // Animate out the expanded content
      gsap.to(expandedContentRef.current, {
        opacity: 0,
        scale: 0.95,
        y: -50,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          setExpandedSection(null);
          // Animate in the split section
          if (splitSectionRef.current) {
            gsap.fromTo(
              splitSectionRef.current,
              { opacity: 0, scale: 0.98 },
              { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
            );
          }
        },
      });
    } else {
      setExpandedSection(null);
    }
  };

  return (
    <>
      <Helmet>
        <title>VFX: Movies & Ads | Resonance Digital</title>
        <meta
          name="description"
          content="High-end VFX and animation services for movies and commercial advertising."
        />
      </Helmet>

      <Header />

      {/* Hero Section */}
      {!expandedSection && (
        <section className="relative w-full min-h-screen bg-[#132c3b] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24">
          {/* Main Title */}
          <div className="max-w-6xl w-full mt-20">
            <h1 className="font-display text-[85px] md:text-[95px] lg:text-[105px] font-bold text-sky-400 mb-10 leading-tight">
              VFX: Movies & Ads
            </h1>

            {/* Description */}
            <p className="font-display text-[32px] md:text-[36px] lg:text-[40px] leading-[1.3] max-w-[1200px] font-bold">
              <span className="text-white">
                A leading digital Creative Technology Company, which focuses on delivering rememberable web designs that are searchable,{" "}
              </span>
              <span className="text-sky-400/60">
                alongside other online promotion solutions in Coventry. We provide our clients with striking, practical, and intuitive sites that attract clientele and yield revenue.
              </span>
            </p>
          </div>
        </section>
      )}

      {/* Split Movies / Ads Section - Becomes Expandable */}
      {!expandedSection && (
        <section ref={splitSectionRef} className="relative w-full h-screen overflow-hidden">
          {/* Movies (Left, diagonally clipped) */}
          <div
            onClick={() => handleExpand("movies")}
            className="absolute inset-0 group cursor-pointer"
            style={{
              clipPath: "polygon(0 0, 65% 0, 45% 100%, 0 100%)",
            }}
          >
            <video
              src="/assets/videos/movies.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />

            <h2 className="absolute left-20 top-1/2 -translate-y-1/2 font-display text-[88px] font-bold text-white group-hover:text-sky-400 transition-all duration-500 group-hover:scale-110">
              Movies
            </h2>
          </div>

          {/* Ads (Right, diagonally clipped) */}
          <div
            onClick={() => handleExpand("ads")}
            className="absolute inset-0 group cursor-pointer"
            style={{
              clipPath: "polygon(65% 0, 100% 0, 100% 100%, 45% 100%)",
            }}
          >
            <video
              src="/assets/videos/ads.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500" />

            <h2 className="absolute right-20 top-1/2 -translate-y-1/2 font-display text-[88px] font-bold text-white group-hover:text-sky-400 transition-all duration-500 group-hover:scale-110">
              Ads
            </h2>
          </div>
        </section>
      )}

      {/* Expanded Movies Section */}
      {expandedSection === "movies" && (
        <div ref={expandedContentRef} className="w-full bg-[#0f2733]">
          {/* Hero Section */}
          <section className="relative w-full min-h-screen bg-[#132c3b] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24">
            {/* Main Title */}
            <div className="max-w-6xl w-full mt-20">
              <h1 className="font-display text-[85px] md:text-[95px] lg:text-[105px] font-bold text-sky-400 mb-10 leading-tight">
                VFX: Movies
              </h1>

              {/* Description */}
              <p className="font-display text-[32px] md:text-[36px] lg:text-[40px] leading-[1.3] max-w-[1200px] font-bold">
                <span className="text-white">
                  We bring stories to life with cutting-edge visual effects that captivate audiences worldwide.{" "}
                </span>
                <span className="text-sky-400/60">
                  Our team has contributed to major productions across streaming platforms and theatrical releases, creating immersive worlds and unforgettable moments.
                </span>
              </p>
            </div>
          </section>

          {/* Hero Video Section */}
          <section className="relative w-full h-screen overflow-hidden">
            {/* Back Button */}
            <button
              onClick={handleCollapse}
              className="absolute top-8 right-8 z-50 bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              ← Back
            </button>

            <video
              src="/assets/videos/movies.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0f2733]" />

            <div className="absolute left-12 md:left-24 top-1/2 -translate-y-1/2">
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
                VFX: Movie <span className="text-sky-400">|</span> <span className="text-white/60">Showcase</span>
              </h1>
            </div>
          </section>

          {/* Movies Showcase Carousel */}
          <section className="relative w-full bg-[#0f2733] py-24 px-12 md:px-24">
            <div className="max-w-7xl mx-auto">
              <div className="relative">
                {/* Carousel Navigation */}
                <button
                  onClick={handleMoviePrev}
                  disabled={currentMovieIndex === 0}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                    currentMovieIndex === 0
                      ? "bg-sky-400/10 cursor-not-allowed opacity-50"
                      : "bg-sky-400/20 hover:bg-sky-400/40 cursor-pointer"
                  }`}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {moviesShowcase.slice(currentMovieIndex, currentMovieIndex + ITEMS_PER_PAGE).map((movie, index) => (
                    <div
                      key={currentMovieIndex + index}
                      className="group relative aspect-[2/3] rounded-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:z-10"
                    >
                      {/* Movie Poster */}
                      <img
                        src={movie.image}
                        alt={movie.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-sky-400/0 group-hover:bg-sky-400/20 transition-all duration-500" />
                      
                      {/* Title overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                        <div>
                          <p className="text-white font-bold text-lg">{movie.title}</p>
                          <p className="text-sky-400 text-sm">{movie.platform}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleMovieNext}
                  disabled={currentMovieIndex + ITEMS_PER_PAGE >= moviesShowcase.length}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                    currentMovieIndex + ITEMS_PER_PAGE >= moviesShowcase.length
                      ? "bg-sky-400/10 cursor-not-allowed opacity-50"
                      : "bg-sky-400/20 hover:bg-sky-400/40 cursor-pointer"
                  }`}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Additional Content */}
              <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="font-display text-4xl font-bold text-white mb-6">
                    Cinematic Excellence
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed mb-4">
                    We bring stories to life with cutting-edge visual effects that captivate audiences worldwide. Our team has contributed to major productions across streaming platforms and theatrical releases.
                  </p>
                  <p className="text-white/60 text-base leading-relaxed">
                    From concept art to final compositing, we deliver VFX that seamlessly blend with live-action footage, creating immersive worlds and unforgettable moments.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <h4 className="text-sky-400 font-semibold text-xl mb-2">Our Expertise</h4>
                    <ul className="text-white/70 space-y-2">
                      <li>• CGI & Digital Animation</li>
                      <li>• Motion Capture & Performance</li>
                      <li>• Virtual Production</li>
                      <li>• Color Grading & Finishing</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Areas of Expertise Section */}
              <div className="mt-32">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                  VFX: Movie <span className="text-sky-400">|</span> <span className="text-white/60">Areas of expertise</span>
                </h2>

                {/* Category Filter */}
                <div className="mt-8 mb-12">
                  <div className="flex flex-wrap gap-4 text-xl md:text-2xl font-semibold">
                    {movieCategories.map((category, index) => (
                      <div key={category} className="flex items-center">
                        <button
                          onClick={() => setSelectedMovieCategory(category)}
                          className={`transition-colors duration-300 ${
                            selectedMovieCategory === category
                              ? "text-sky-400"
                              : "text-white/40 hover:text-sky-400"
                          }`}
                        >
                          {category}
                        </button>
                        {index < movieCategories.length - 1 && (
                          <span className="text-white/30 mx-3">|</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Filtered Movies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {moviesShowcase
                    .filter((movie) => movie.category === selectedMovieCategory)
                    .map((movie, index) => (
                      <div
                        key={index}
                        className="group relative aspect-[16/9] rounded-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105"
                      >
                        {/* Movie Image */}
                        <img
                          src={movie.image}
                          alt={movie.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        
                        {/* Movie Info */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p className="text-white/80 text-sm font-medium mb-1">
                            {movie.title.toUpperCase()} | {movie.year}
                          </p>
                        </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-sky-400/0 group-hover:bg-sky-400/20 transition-all duration-500" />
                      </div>
                    ))}
                </div>

                {/* No results message */}
                {moviesShowcase.filter((movie) => movie.category === selectedMovieCategory).length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-white/60 text-lg">No projects available in this category yet.</p>
                  </div>
                )}

                {/* Lorem Ipsum Text */}
                <div className="mt-16">
                  <p className="text-white/50 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectet uer adipi scing elit. Lorem ipsum dolor sit am et, consectetuer adipi scing elit. Lorem ipsum dolor sit amet, consectet uer adipi scing elit. Lorem ipsum dolor sit am.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Expanded Ads Section */}
      {expandedSection === "ads" && (
        <div ref={expandedContentRef} className="w-full bg-[#0f2733]">
          {/* Hero Section */}
          <section className="relative w-full min-h-screen bg-[#132c3b] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24">
            {/* Main Title */}
            <div className="max-w-6xl w-full mt-20">
              <h1 className="font-display text-[85px] md:text-[95px] lg:text-[105px] font-bold text-sky-400 mb-10 leading-tight">
                VFX: Ads
              </h1>

              {/* Description */}
              <p className="font-display text-[32px] md:text-[36px] lg:text-[40px] leading-[1.3] max-w-[1200px] font-bold">
                <span className="text-white">
                  Crafting compelling commercial content that resonates with audiences and drives results.{" "}
                </span>
                <span className="text-sky-400/60">
                  From concept to final delivery, we blend creativity with strategic thinking to produce commercials that make an impact across all platforms.
                </span>
              </p>
            </div>
          </section>

          {/* Hero Video Section */}
          <section className="relative w-full h-screen overflow-hidden">
            {/* Back Button */}
            <button
              onClick={handleCollapse}
              className="absolute top-8 right-8 z-50 bg-sky-400 hover:bg-sky-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              ← Back
            </button>

            <video
              src="/assets/videos/ads.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0f2733]" />

            <div className="absolute left-12 md:left-24 top-1/2 -translate-y-1/2">
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
                VFX: Ads <span className="text-sky-400">|</span> <span className="text-white/60">Showcase</span>
              </h1>
            </div>
          </section>

          {/* Ads Showcase Carousel */}
          <section className="relative w-full bg-[#0f2733] py-24 px-12 md:px-24">
            <div className="max-w-7xl mx-auto">
              <div className="relative">
                {/* Carousel Navigation */}
                <button
                  onClick={handleAdPrev}
                  disabled={currentAdIndex === 0}
                  className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                    currentAdIndex === 0
                      ? "bg-sky-400/10 cursor-not-allowed opacity-50"
                      : "bg-sky-400/20 hover:bg-sky-400/40 cursor-pointer"
                  }`}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {adsShowcase.slice(currentAdIndex, currentAdIndex + ITEMS_PER_PAGE).map((ad, index) => (
                    <div
                      key={currentAdIndex + index}
                      className="group relative aspect-[2/3] rounded-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:z-10"
                    >
                      {/* Ad Creative */}
                      <img
                        src={ad.image}
                        alt={ad.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-sky-400/0 group-hover:bg-sky-400/20 transition-all duration-500" />
                      
                      {/* Title overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                        <div>
                          <p className="text-white font-bold text-lg">{ad.title}</p>
                          <p className="text-sky-400 text-sm">{ad.client}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleAdNext}
                  disabled={currentAdIndex + ITEMS_PER_PAGE >= adsShowcase.length}
                  className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
                    currentAdIndex + ITEMS_PER_PAGE >= adsShowcase.length
                      ? "bg-sky-400/10 cursor-not-allowed opacity-50"
                      : "bg-sky-400/20 hover:bg-sky-400/40 cursor-pointer"
                  }`}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Additional Content */}
              <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="font-display text-4xl font-bold text-white mb-6">
                    Commercial Impact
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed mb-4">
                    Crafting compelling commercial content that resonates with audiences and drives results. We create ads that don't just look stunning—they convert.
                  </p>
                  <p className="text-white/60 text-base leading-relaxed">
                    From concept to final delivery, we blend creativity with strategic thinking to produce commercials that make an impact across all platforms.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <h4 className="text-sky-400 font-semibold text-xl mb-2">Our Services</h4>
                    <ul className="text-white/70 space-y-2">
                      <li>• Brand Commercials</li>
                      <li>• Product Visualization</li>
                      <li>• Social Media Content</li>
                      <li>• Broadcast Advertising</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Areas of Expertise Section */}
              <div className="mt-32">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                  VFX: Ads <span className="text-sky-400">|</span> <span className="text-white/60">Areas of expertise</span>
                </h2>

                {/* Category Filter */}
                <div className="mt-8 mb-12">
                  <div className="flex flex-wrap gap-4 text-xl md:text-2xl font-semibold">
                    {adCategories.map((category, index) => (
                      <div key={category} className="flex items-center">
                        <button
                          onClick={() => setSelectedAdCategory(category)}
                          className={`transition-colors duration-300 ${
                            selectedAdCategory === category
                              ? "text-sky-400"
                              : "text-white/40 hover:text-sky-400"
                          }`}
                        >
                          {category}
                        </button>
                        {index < adCategories.length - 1 && (
                          <span className="text-white/30 mx-3">|</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Filtered Ads Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {adsShowcase
                    .filter((ad) => ad.category === selectedAdCategory)
                    .map((ad, index) => (
                      <div
                        key={index}
                        className="group relative aspect-[16/9] rounded-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105"
                      >
                        {/* Ad Image */}
                        <img
                          src={ad.image}
                          alt={ad.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        
                        {/* Ad Info */}
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <p className="text-white/80 text-sm font-medium mb-1">
                            {ad.title.toUpperCase()} | {ad.year}
                          </p>
                        </div>

                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-sky-400/0 group-hover:bg-sky-400/20 transition-all duration-500" />
                      </div>
                    ))}
                </div>

                {/* No results message */}
                {adsShowcase.filter((ad) => ad.category === selectedAdCategory).length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-white/60 text-lg">No projects available in this category yet.</p>
                  </div>
                )}

                {/* Lorem Ipsum Text */}
                <div className="mt-16">
                  <p className="text-white/50 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectet uer adipi scing elit. Lorem ipsum dolor sit am et, consectetuer adipi scing elit. Lorem ipsum dolor sit amet, consectet uer adipi scing elit. Lorem ipsum dolor sit am.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Original Expandable Items Section - Only show when nothing is expanded */}
      {!expandedSection && (
        <section className="w-full bg-[#132c3b]">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12 space-y-4">
            {/* You can add additional content here if needed */}
          </div>
        </section>
      )}


      <Footer />
    </>
  );
};

export default VFX;
