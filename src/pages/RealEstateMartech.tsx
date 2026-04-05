import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedColorText from "../components/AnimatedColorText";

const realEstateStatements = [
	{
		title: "3D Renders",
		body: "Photoreal visuals that help buyers and stakeholders experience the project before completion.",
	},
	{
		title: "Video Walkthroughs",
		body: "Cinematic property walkthroughs designed for sales, investor presentations, and digital campaigns.",
	},
	{
		title: "Films",
		body: "Branded short-form and long-form films that showcase project scale, amenities, and lifestyle.",
	},
	{
		title: "Drone Shoots",
		body: "Aerial capture for site context, connectivity, and progress highlights across construction phases.",
	},
	{
		title: "Interactive Sales Tools",
		body: "Touch-friendly sales experiences to present unit layouts, tower views, and project inventories.",
	},
	{
		title: "3D Projection Mapping",
		body: "Immersive projection stories crafted for launch events, investor meets, and marquee activations.",
	},
	{
		title: "Hologram",
		body: "Holographic presentation formats for premium real estate launches and experiential showcases.",
	},
	{
		title: "2D & 3D Isometrics",
		body: "Detailed isometric plans to communicate spatial flow, zoning, and feature hierarchy clearly.",
	},
	{
		title: "Virtual Reality",
		body: "VR-ready environments that let prospects explore interiors and amenities with true depth.",
	},
	{
		title: "Augmented Reality",
		body: "AR overlays to bring brochures, models, and sales collateral to life in real-time.",
	},
	{
		title: "Digital Twin",
		body: "Data-connected digital twins for monitoring, showcasing, and planning across project lifecycles.",
	},
];

const expertiseCategories = [
	"3D Renders",
	"3D Walkthroughs",
	"Drone Shoots",
	"Films",
	"Interactive Sales Tour",
	"Digital Twin",
	"3D Anamorphic Experience Center",
	"Virtual Reality",
	"Augmented Reality",
];

type ExpertiseShowcaseItem = {
	title: string;
	subtitle: string;
	image: string;
	category: string;
	youtubeUrl?: string; // Optional YouTube embed URL
};

const expertiseShowcase: ExpertiseShowcaseItem[] = [
	{
		title: "Lodha Altamount",
		subtitle: "Lorem ipsum",
		image: "/assets/images/movies/movies_01.png",
		category: "3D Walkthroughs",
		youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
	},
	{
		title: "Vraj Group",
		subtitle: "Lorem ipsum",
		image: "/assets/images/movies/dune.jpeg",
		category: "3D Walkthroughs",
		youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
	},
	{
		title: "DA Group",
		subtitle: "Lorem ipsum",
		image: "/assets/images/movies/flash.jpg",
		category: "3D Walkthroughs",
		youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
	},
	{
		title: "Sattva",
		subtitle: "Lorem ipsum",
		image: "/assets/images/movies/avatar.jpeg",
		category: "3D Renders",
		// No youtubeUrl - this is an image
	},
	{
		title: "Brigade",
		subtitle: "Lorem ipsum",
		image: "/assets/images/movies/batman.png",
		category: "Drone Shoots",
		youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
	},
	{
		title: "Atmos",
		subtitle: "Lorem ipsum",
		image: "/assets/images/movies/movies_03.png",
		category: "Films",
		youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
	},
];

const isometricItems = [
	{
		id: "iso-1",
		image: "/assets/images/movies/movies_01.png",
		client: "LOREM IPSUM",
		location: "Lorem Ipsum",
		service: "2D Isometrics",
	},
	{
		id: "iso-2",
		image: "/assets/images/movies/movies_03.png",
		client: "LOREM IPSUM",
		location: "Lorem Ipsum",
		service: "2D Isometrics",
	},
];

const RealEstateMartech = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);
	const [selectedExpertiseCategory, setSelectedExpertiseCategory] =
		useState<string>("3D Walkthroughs");
	const [currentExpertisePage, setCurrentExpertisePage] = useState<number>(0);
	const [expertiseDirection, setExpertiseDirection] = useState<number>(0);
	const [activeIsometricId, setActiveIsometricId] = useState<string | null>(null);
	const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);
	const [currentVideoUrl, setCurrentVideoUrl] = useState<string>("");

	const EXPERTISE_PER_PAGE = 3;
	const AUTO_ROTATE_MS = 4000;

	const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

	const openVideoModal = (youtubeUrl: string) => {
		setCurrentVideoUrl(youtubeUrl);
		setVideoModalOpen(true);
	};

	const closeVideoModal = () => {
		setVideoModalOpen(false);
		setCurrentVideoUrl("");
	};

	const filteredExpertiseItems = expertiseShowcase.filter(
		(item) => item.category === selectedExpertiseCategory,
	);
	const totalExpertisePages = Math.ceil(
		filteredExpertiseItems.length / EXPERTISE_PER_PAGE,
	);
	const canSlideExpertise = totalExpertisePages > 1;

	const handleExpertiseNext = () => {
		if (!canSlideExpertise) return;
		setExpertiseDirection(1);
		setCurrentExpertisePage((prev) => (prev + 1) % totalExpertisePages);
	};

	const handleExpertisePrev = () => {
		if (!canSlideExpertise) return;
		setExpertiseDirection(-1);
		setCurrentExpertisePage(
			(prev) => (prev - 1 + totalExpertisePages) % totalExpertisePages,
		);
	};

	useEffect(() => {
		if (!canSlideExpertise) return;

		const timer = window.setInterval(() => {
			setExpertiseDirection(1);
			setCurrentExpertisePage((prev) => (prev + 1) % totalExpertisePages);
		}, AUTO_ROTATE_MS);

		return () => window.clearInterval(timer);
	}, [canSlideExpertise, totalExpertisePages]);

	const expertiseStartIndex = currentExpertisePage * EXPERTISE_PER_PAGE;
	const expertisePageItems = filteredExpertiseItems.slice(
		expertiseStartIndex,
		expertiseStartIndex + EXPERTISE_PER_PAGE,
	);
	const activeIsometricIndex = isometricItems.findIndex(
		(item) => item.id === activeIsometricId,
	);
	const activeIsometric =
		activeIsometricIndex >= 0 ? isometricItems[activeIsometricIndex] : null;

	const handleActiveIsometricPrev = () => {
		if (activeIsometricIndex < 0) return;
		const prevIndex =
			(activeIsometricIndex - 1 + isometricItems.length) % isometricItems.length;
		setActiveIsometricId(isometricItems[prevIndex].id);
	};

	const handleActiveIsometricNext = () => {
		if (activeIsometricIndex < 0) return;
		const nextIndex = (activeIsometricIndex + 1) % isometricItems.length;
		setActiveIsometricId(isometricItems[nextIndex].id);
	};

	return (
		<>
			<Header />

			<section className="relative w-full min-h-screen bg-[#132c3b] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24">
				<div className="max-w-6xl w-full mt-20">
					<h1 className="font-display text-[65px] md:text-[75px] lg:text-[85px] font-bold text-sky-400 mb-10 leading-tight">
						Real Estate Mar-Tech
					</h1>

					<AnimatedColorText
						whiteText="A leading digital Creative Technology Company, which focuses on delivering rememberable web designs that are search"
						blueText="able, alongside other online promotion solutions in Coventry. We provide our clients with striking, practical, and intuitive sites that attract clientele and yield revenue."
					/>
				</div>
			</section>

            {/* Video player section */}
			<section className="relative w-full h-screen overflow-hidden">
				<video
					src="/assets/videos/placeholder_video.mp4"
					autoPlay
					loop
					muted
					playsInline
					className="w-full h-full object-cover"
				/>

				<div className="absolute inset-0 bg-black/20" />

				<h2 className="absolute top-[24%] left-10 md:left-16 font-display text-5xl md:text-6xl lg:text-7xl font-bold text-sky-400">
					Real Estate Mar-Tech
				</h2>
			</section>

			<section className="w-full min-h-screen bg-[#132c3b] py-10 md:py-12 px-10 md:px-16 flex flex-col justify-center">
				<h2 className="font-display text-2xl md:text-3xl font-normal text-white/60 mb-8">
					Real Estate Mar-Tech <span className="text-white/50">|</span>{" "}
					<span className="font-bold text-white">Clients</span>
				</h2>

				<div className="flex flex-col lg:flex-row gap-12">
					<div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
						<img
							src="/assets/images/RDL_logo.png"
							alt="Real Estate Clients"
							className="w-full max-w-[520px] h-auto object-contain opacity-85"
						/>
					</div>

					<div className="w-full lg:w-1/2 flex flex-col self-start pb-4">
						{realEstateStatements.map((item, i) => (
							<div key={i}>
								<div className="h-px bg-white/20 w-full" />
								<button
									onClick={() => toggle(i)}
									className="w-full flex items-center justify-between py-2.5 text-left group"
								>
									<span className="font-display text-[18px] md:text-[20px] text-white/85 group-hover:text-sky-300 transition-colors duration-200 leading-tight">
										{item.title}
									</span>
									<ChevronDown
										style={{
											transform:
												openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
											transition:
												"transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
										}}
										className="w-4 h-4 text-white/60 flex-shrink-0 ml-4"
									/>
								</button>
								<AnimatePresence initial={false}>
									{openIndex === i && (
										<motion.div
											key="content"
											initial={{ height: 0, opacity: 0 }}
											animate={{ height: "auto", opacity: 1 }}
											exit={{ height: 0, opacity: 0 }}
											transition={{
												duration: 0.5,
												ease: [0.4, 0, 0.2, 1],
											}}
											style={{ overflow: "hidden" }}
										>
											<p className="text-white/65 text-sm leading-relaxed pb-4 max-w-xl">
												{item.body}
											</p>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						))}
						<div className="h-px bg-white/20 w-full" />
					</div>
				</div>
			</section>

			<section className="w-full bg-[#132c3b] pb-10 md:pb-12 px-10 md:px-16">
				<h2 className="font-display text-3xl md:text-4xl font-normal text-white/60 mb-6">
					Real Estate Mar-Tech <span className="text-white/50">|</span>{" "}
					<span className="font-bold text-white">Areas of expertise</span>
				</h2>

				<div className="mt-6 mb-8 max-w-6xl">
					<div className="flex flex-wrap gap-4 text-xl md:text-2xl font-semibold">
						{expertiseCategories.map((category, index) => (
							<div key={category} className="flex items-center">
								<button
									onClick={() => {
										setSelectedExpertiseCategory(category);
										setCurrentExpertisePage(0);
									}}
									className={`transition-colors duration-300 ${
										selectedExpertiseCategory === category
											? "text-sky-400"
											: "text-white/40 hover:text-sky-400"
									}`}
								>
									{category}
								</button>
								{index < expertiseCategories.length - 1 && (
									<span className="text-white/30 mx-3">|</span>
								)}
							</div>
						))}
					</div>
				</div>

				<div className="relative w-full">
					<button
						onClick={handleExpertisePrev}
						disabled={!canSlideExpertise}
						className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
							!canSlideExpertise
								? "bg-sky-400/10 cursor-not-allowed opacity-50"
								: "bg-sky-400/20 hover:bg-sky-400/40 cursor-pointer"
						}`}
					>
						<ChevronLeft className="w-6 h-6" />
					</button>

					<div className="relative overflow-hidden">
						<AnimatePresence initial={false} custom={expertiseDirection}>
							<motion.div
								key={`${selectedExpertiseCategory}-${currentExpertisePage}`}
								custom={expertiseDirection}
								initial={{ x: expertiseDirection > 0 ? "100%" : "-100%" }}
								animate={{ x: 0 }}
								exit={{ x: expertiseDirection > 0 ? "-100%" : "100%" }}
								transition={{ duration: 0.8, ease: "easeInOut" }}
								className="grid grid-cols-1 md:grid-cols-3 gap-6 absolute inset-0"
							>
								{expertisePageItems.map((item, index) => (
									<div
										key={`${item.title}-${item.subtitle}-${expertiseStartIndex + index}`}
										className="group relative h-[210px] md:h-[240px] lg:h-[280px] rounded-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:z-10"
										onClick={() => item.youtubeUrl && openVideoModal(item.youtubeUrl)}
									>
										<img
											src={item.image}
											alt={item.title}
											className="absolute inset-0 w-full h-full object-cover"
										/>

										{/* Play Button Overlay - Only for items with youtubeUrl */}
										{item.youtubeUrl && (
											<div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all duration-300">
												<div className="w-16 h-16 rounded-full bg-sky-400/90 group-hover:bg-sky-400 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-2xl">
													<Play className="w-8 h-8 text-white fill-white ml-1" />
												</div>
											</div>
										)}

										<div className="absolute inset-0 bg-sky-400/0 group-hover:bg-sky-400/20 transition-all duration-500" />

										<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
											<div>
												<p className="text-white font-bold text-lg">{item.title}</p>
												<p className="text-sky-400 text-sm">{item.subtitle}</p>
											</div>
										</div>
									</div>
								))}

								{Array.from({
									length: EXPERTISE_PER_PAGE - expertisePageItems.length,
								}).map((_, index) => (
									<div key={`placeholder-${index}`} className="h-[210px] md:h-[240px] lg:h-[280px]" />
								))}
							</motion.div>
						</AnimatePresence>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 invisible">
							{Array(EXPERTISE_PER_PAGE)
								.fill(0)
								.map((_, i) => (
									<div key={i} className="h-[210px] md:h-[240px] lg:h-[280px]"></div>
								))}
						</div>
					</div>

					<button
						onClick={handleExpertiseNext}
						disabled={!canSlideExpertise}
						className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 ${
							!canSlideExpertise
								? "bg-sky-400/10 cursor-not-allowed opacity-50"
								: "bg-sky-400/20 hover:bg-sky-400/40 cursor-pointer"
						}`}
					>
						<ChevronRight className="w-6 h-6" />
					</button>
				</div>

				<p className="mt-12 text-white/70 text-[24px] md:text-[30px] leading-[1.02] font-display max-w-6xl">
					Lorem ipsum dolor sit amet, consectet uer adipi scing elit, Lorem ipsum
					dolor sit am et, consectetuer adipiscing elit, Lor em ipsum do lor sit
					amet, con sectetuer adipiscing elit,
				</p>
			</section>

			<section className="w-full bg-[#132c3b] pb-24 px-10 md:px-16">
				<div className="max-w-6xl mx-auto">
					<h2 className="font-display text-[36px] md:text-[50px] font-normal text-white/60 mb-10">
						Real Estate Mar-Tech <span className="text-white/50">|</span>{" "}
						<span className="font-bold text-white">2D & 3D Isometrics</span>
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
						{isometricItems.map((item) => (
							<div key={item.id} className="flex flex-col">
								<motion.button
									type="button"
									onClick={() => setActiveIsometricId(item.id)}
									className="w-full relative overflow-hidden border border-white/10 bg-[#0a2a3d]"
								>
									<motion.img
										layoutId={item.id}
										src={item.image}
										alt={item.service}
										className="w-full h-[240px] md:h-[280px] object-cover"
									/>
								</motion.button>
								<p className="mt-3 text-white/45 text-[18px] md:text-[34px] leading-none font-display">
									Client : {item.client} | Service : {item.service}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<AnimatePresence>
				{activeIsometric && (
					<motion.div
						className="fixed inset-0 z-50 bg-[#08354c]"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setActiveIsometricId(null)}
					>
						<div className="relative w-full h-full flex items-center justify-center px-8 md:px-16 lg:px-24">
							<button
								type="button"
								aria-label="Previous isometric"
								onClick={(e) => {
									e.stopPropagation();
									handleActiveIsometricPrev();
								}}
								className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 text-white/65 hover:text-white transition-colors"
							>
								<ChevronLeft className="w-9 h-9" />
							</button>

							<div className="w-full max-w-[1200px] flex items-end justify-center gap-4 md:gap-8 lg:gap-12">
								<div className="hidden md:block min-w-[190px] pb-4 self-end">
									<div className="font-display text-[#8f969c] text-[20px] leading-[1.2] font-semibold">
										<div className="py-1.5 border-b border-[#8f969c]/60">
											Client : {activeIsometric.client}
										</div>
										<div className="py-1.5 border-b border-[#8f969c]/60">
											Location: {activeIsometric.location}
										</div>
										<div className="py-1.5">Service : {activeIsometric.service}</div>
									</div>
								</div>

								<motion.img
									layoutId={activeIsometric.id}
									src={activeIsometric.image}
									alt={activeIsometric.service}
									className="w-full max-w-[980px] max-h-[78vh] object-contain"
									onClick={(e) => e.stopPropagation()}
								/>
							</div>

							<button
								type="button"
								aria-label="Next isometric"
								onClick={(e) => {
									e.stopPropagation();
									handleActiveIsometricNext();
								}}
								className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 text-white/65 hover:text-white transition-colors"
							>
								<ChevronRight className="w-9 h-9" />
							</button>

							<div className="md:hidden absolute left-6 bottom-8 right-6">
								<div className="font-display text-[#8f969c] text-[18px] leading-[1.2] font-semibold">
									<div className="py-1 border-b border-[#8f969c]/60">
										Client : {activeIsometric.client}
									</div>
									<div className="py-1 border-b border-[#8f969c]/60">
										Location: {activeIsometric.location}
									</div>
									<div className="py-1">Service : {activeIsometric.service}</div>
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* Video Modal */}
			<AnimatePresence>
				{videoModalOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={closeVideoModal}
						className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
					>
						{/* Close Button */}
						<button
							onClick={closeVideoModal}
							className="absolute top-6 right-6 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300"
							aria-label="Close video"
						>
							<X className="w-6 h-6" />
						</button>

						{/* Video Container */}
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							transition={{ duration: 0.3 }}
							onClick={(e) => e.stopPropagation()}
							className="w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
						>
							<iframe
								src={currentVideoUrl}
								title="Video Player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
								className="w-full h-full"
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

			<Footer />
		</>
	);
};

export default RealEstateMartech;
