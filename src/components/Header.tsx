import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="relative z-50 font-display text-xl md:text-2xl font-bold tracking-tight text-foreground"
        >
          <span className="text-primary">R</span>ESONANCE
          <span className="block text-[10px] md:text-xs tracking-[0.3em] text-muted-foreground font-body font-light">
            DIGITAL
          </span>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative z-50 w-12 h-12 flex items-center justify-center text-foreground hover:text-primary transition-colors duration-300"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
