import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <Link to="/" className="font-display text-xl font-bold tracking-tight text-foreground">
              <span className="text-primary">R</span>ESONANCE
              <span className="block text-[10px] tracking-[0.3em] text-muted-foreground font-body font-light">
                DIGITAL
              </span>
            </Link>
            <p className="mt-6 text-muted-foreground text-sm max-w-xs">
              Crafting visual excellence through innovation, creativity, and technical mastery.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Verticals
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "VFX", href: "/vfx" },
                { label: "Brands", href: "/brands" },
                { label: "Real Estate", href: "/real-estate" },
                { label: "Content", href: "/content" },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Connect
            </h4>
            <nav className="flex flex-col gap-2">
              <Link
                to="/about"
                className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                About Us
              </Link>
              <Link
                to="/culture"
                className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                Culture
              </Link>
              <Link
                to="/contact"
                className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                Contact
              </Link>
            </nav>
          </div>
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
