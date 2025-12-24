import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import VFX from "./pages/VFX";
import Brands from "./pages/Brands";
import RealEstate from "./pages/RealEstate";
import Content from "./pages/Content";
import About from "./pages/About";
import Culture from "./pages/Culture";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/vfx" element={<VFX />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/real-estate" element={<RealEstate />} />
            <Route path="/content" element={<Content />} />
            <Route path="/about" element={<About />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
