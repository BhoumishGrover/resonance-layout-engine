import AnimatedParagraph from "./AnimatedParagraph";

const BrandStatement = () => {
  return (
    <section className="relative bg-white min-h-[60vh] w-full flex items-center justify-start px-4 md:px-6 lg:px-8 py-6 md:py-8">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-start">
        {/* Verticals line */}
        <p className="mb-4 text-[18px] md:text-[20px] lg:text-[22px] font-medium tracking-wide text-left">
          <span className="text-sky-400">VFX & Animation</span>
          <span className="text-gray-300"> / </span>
          <span className="text-rose-400">Experiential Technology</span>
          <span className="text-gray-300"> / </span>
          <span className="text-lime-400">Brand Solution</span>
          <span className="text-gray-300"> / </span>
          <span className="text-purple-400">Motion Pictures</span>
        </p>

        {/* Main statement */}
        <AnimatedParagraph text="A leading digital Creative Technology Company, which focuses on delivering rememberable web designs that are searchable, alongside other online promotion solutions. We provide our clients with striking, practical, and intuitive sites that attract clientele and yield revenue." />
      </div>
    </section>
  );
};

export default BrandStatement;
