import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedColorText from "@/components/AnimatedColorText";

const Awards = () => {
  return (
    <>
      <Helmet>
        <title>Awards & Achievements | Resonance Digital</title>
        <meta 
          name="description" 
          content="Resonance Digital's awards and achievements in VFX, creative technology, and digital innovation." 
        />
      </Helmet>

      <Header />

      {/* Hero Section - Split Layout */}
      <section className="relative w-full min-h-screen bg-[#1a3a52] flex items-center overflow-hidden">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center px-10 md:px-16 lg:px-24 py-24 lg:py-32">
            <h1 className="font-display text-[60px] md:text-[75px] lg:text-[90px] font-bold text-sky-400 mb-12 leading-tight">
              Awards &<br />Achievements
            </h1>

            <div className="max-w-[600px]">
              <AnimatedColorText
                whiteText="A leading digital Creative Technology Company, which We"
                blueText="provide our clients with striking, practical, and intuitive sites that attract clientele and yield revenue."
              />
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative flex items-center justify-center lg:justify-end px-10 lg:px-0 py-24 lg:py-0">
            <div className="relative w-full max-w-md lg:max-w-lg h-[400px] lg:h-[600px] flex items-center justify-center">
              <img 
                src="/assets/images/RDL_logo.png" 
                alt="Awards" 
                className="w-full h-full object-contain opacity-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Awards Showcase Section */}
      <section className="relative w-full bg-[#1a4a5a] py-24">
        <div className="max-w-7xl mx-auto px-8">
          {/* Row 1 */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 border-t border-white/10 pt-12">
            <div className="relative flex justify-center">
              <div className="w-48 h-64 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center text-6xl shadow-2xl">
                🏆
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-sky-400 text-3xl md:text-4xl font-bold mb-2">24 FPS</h3>
                <p className="text-white/60 text-lg">BEST VFX</p>
                <p className="text-white text-xl">Web Series 2022</p>
              </div>
              <div>
                <h3 className="text-white/80 text-2xl md:text-3xl font-bold mb-2">BEST VFX</h3>
                <p className="text-white text-xl">Web Series 2024</p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 border-t border-white/10 pt-12">
            <div className="space-y-8 order-2 md:order-1">
              <div>
                <h3 className="text-sky-400 text-3xl md:text-4xl font-bold mb-2">FILMFARE</h3>
                <p className="text-white/60 text-lg">BEST VFX</p>
                <p className="text-white text-xl">Web Series 2022</p>
              </div>
            </div>
            <div className="relative flex justify-center order-1 md:order-2">
              <div className="w-32 h-72 bg-gradient-to-b from-gray-800 to-black rounded-t-full flex items-center justify-center text-5xl shadow-2xl">
                🏆
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 border-t border-white/10 pt-12">
            <div className="relative flex justify-center">
              <div className="w-32 h-64 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-6xl shadow-2xl transform -rotate-6">
                🏆
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-sky-400 text-3xl md:text-4xl font-bold mb-2">KYOORIUS</h3>
                <p className="text-white/60 text-lg">BEST VFX</p>
                <p className="text-white text-xl">Web Series 2022</p>
              </div>
            </div>
          </div>

          {/* Row 4 */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 border-t border-white/10 pt-12">
            <div className="space-y-8 order-2 md:order-1">
              <div>
                <h3 className="text-sky-400 text-3xl md:text-4xl font-bold mb-2">ITA</h3>
                <p className="text-white/60 text-lg">BEST VFX</p>
                <p className="text-white text-xl">Web Series 2022</p>
              </div>
            </div>
            <div className="relative flex justify-center order-1 md:order-2">
              <div className="w-48 h-64 bg-gradient-to-t from-yellow-300 via-yellow-400 to-yellow-200 rounded-lg flex items-center justify-center text-6xl shadow-2xl">
                🏆
              </div>
            </div>
          </div>

          {/* Row 5 */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-t border-white/10 pt-12">
            <div className="relative flex justify-center">
              <div className="w-40 h-56 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-5xl shadow-2xl">
                🏆
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-white/80 text-2xl md:text-3xl font-bold mb-2">BEST VFX</h3>
                <p className="text-white text-xl">Web Series 2025</p>
              </div>
              <div>
                <h3 className="text-white/80 text-2xl md:text-3xl font-bold mb-2">BEST VFX</h3>
                <p className="text-white text-xl">Web Series 2023</p>
              </div>
              <div>
                <h3 className="text-white/80 text-2xl md:text-3xl font-bold mb-2">BEST VFX</h3>
                <p className="text-white text-xl">Web Series 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Awards;
