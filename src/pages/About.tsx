import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedColorText from "@/components/AnimatedColorText";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Resonance Digital</title>
        <meta 
          name="description" 
          content="Learn about Resonance Digital's story, philosophy, and the team behind our award-winning VFX and creative work." 
        />
      </Helmet>

      <Header />

      {/* Hero Section with Animated Text */}
      <section className="relative w-full min-h-screen bg-[#1a3a52] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-7xl w-full mt-20">
          <h1 className="font-display text-[65px] md:text-[85px] lg:text-[105px] font-bold text-sky-400 mb-16 leading-tight">
            About us
          </h1>

          <div className="max-w-[1400px]">
            <AnimatedColorText
              whiteText="From concept to execution, Resonance Digital delivers end-to-end creative, tech, production, and post-production solutions tailored for world-class"
              blueText="brands. With a global footprint spanning countries like the United States, Canada, Europe, and APAC, we bring bold ideas to life across screens. We don't merely support brand ambition, we accelerate it."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-[#f6f4ef] py-20 px-10 md:px-16">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Stat 1 */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-[80px] md:text-[100px] font-display font-bold text-gray-300 leading-none">
                250
              </span>
              <span className="text-[50px] md:text-[60px] font-display font-light text-gray-300 leading-none">
                +
              </span>
            </div>
            <p className="text-gray-400 text-sm md:text-base tracking-wide">
              Experts in our team
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-[80px] md:text-[100px] font-display font-bold text-gray-300 leading-none">
                20
              </span>
              <span className="text-[50px] md:text-[60px] font-display font-light text-gray-300 leading-none">
                +
              </span>
            </div>
            <p className="text-gray-400 text-sm md:text-base tracking-wide">
              Countries served
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-[80px] md:text-[100px] font-display font-bold text-gray-300 leading-none">
                10
              </span>
              <span className="text-[50px] md:text-[60px] font-display font-light text-gray-300 leading-none">
                +
              </span>
            </div>
            <p className="text-gray-400 text-sm md:text-base tracking-wide">
              Years of lagecy
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {/* VFX: Movies & Ads */}
          <div>
            <h3 className="font-display text-xl md:text-2xl font-normal text-gray-400 mb-4">
              VFX: Movies & Ads
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Successfully delivered visual effects for more than 200 Hollywood projects & 50 Bollywood projects.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Films, Episodic, Commercials, Automobiles, Architectural & more.
            </p>
          </div>

          {/* Brand Solutions */}
          <div>
            <h3 className="font-display text-xl md:text-2xl font-normal text-gray-400 mb-4">
              Brand Solutions
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Multiple campaigns for more than 50 brands/corporates in varied mediums.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Branding, Digital Marketing, Mainline advertising, Product photography, TVC production, Audio Visual films and Content creation.
            </p>
          </div>

          {/* Real Estate Mar-tech */}
          <div>
            <h3 className="font-display text-xl md:text-2xl font-normal text-gray-400 mb-4">
              Real Estate Mar-tech
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Ideated and designed technology campaigns for large scale brands and corporates across India.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              AR, VR, MR, Projection Mapping, Interactive Media, Custom Web & App development.
            </p>
          </div>

          {/* Motion Pictures */}
          <div>
            <h3 className="font-display text-xl md:text-2xl font-normal text-gray-400 mb-4">
              Motion Pictures
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Produced IP's ranging from web series, documentaries to short films.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Series, documentaries & short films.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="w-full bg-[#1a3a52] py-20 px-10 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-[60px] md:text-[80px] lg:text-[100px] font-bold text-sky-400 mb-12 leading-tight">
            Meet our team
          </h2>

          <div className="max-w-[1200px]">
            <AnimatedColorText
              whiteText="Guided by strong vision and thoughtful, Resonance is proud to be a reliable"
              blueText="partner for major creative initiatives"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
