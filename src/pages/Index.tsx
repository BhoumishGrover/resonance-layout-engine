import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import VerticalSelector from "@/components/VerticalSelector";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Resonance Digital | VFX & Creative Studio</title>
        <meta 
          name="description" 
          content="Resonance Digital is a premium VFX and creative studio specializing in visual effects, brand content, real estate visualization, and immersive experiences." 
        />
        <meta name="keywords" content="VFX, visual effects, animation, creative studio, brand content, real estate visualization" />
        <link rel="canonical" href="https://resonancedigital.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <BrandStatement />
          <VerticalSelector />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
