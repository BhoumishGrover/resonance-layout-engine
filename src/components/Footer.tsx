import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Logo & Tagline */}
          <div>
            <Link to="/" className="font-display text-xl font-bold tracking-tight text-foreground flex items-center gap-1">
              <span className="text-primary">R</span>
              <img src="/assets/images/resonance-logo.png" alt="Resonance" className="h-6" />
              <span className="block text-[10px] tracking-[0.3em] text-muted-foreground font-body font-light">
                DIGITAL
              </span>
            </Link>
            <p className="mt-6 text-muted-foreground text-sm max-w-xs">
              Crafting visual excellence through innovation, creativity, and technical mastery.
            </p>
          </div>

          {/* Empty space or additional content */}
          <div></div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Resonance Digital. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
