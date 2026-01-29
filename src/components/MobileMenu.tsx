import { Link } from "react-router-dom";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: "Home", href: "/" },
  { label: "VFX", href: "/vfx" },
  { label: "Brands", href: "/brands" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Content", href: "/content" },
  { label: "About", href: "/about" },
  { label: "Culture", href: "/culture" },
  { label: "Contact", href: "/contact" },
];

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div
      className={`fixed inset-0 z-[60] bg-background transition-all duration-500 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close menu"
        className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-foreground hover:text-primary transition-colors duration-300"
      >
        <X className="w-6 h-6" />
      </button>
      <nav className="h-full flex flex-col items-center justify-center gap-2">
        {menuItems.map((item, index) => (
          <Link
            key={item.href}
            to={item.href}
            onClick={onClose}
            className="group relative py-3 overflow-hidden"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
              transition: `all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.05}s`,
            }}
          >
            <span className="font-display text-3xl md:text-5xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              {item.label}
            </span>
            <span className="absolute bottom-0 left-0 w-full h-px bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
        ))}
      </nav>

      {/* Footer in menu */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 text-sm text-muted-foreground">
        <a href="mailto:hello@resonancedigital.com" className="hover:text-foreground transition-colors">
          hello@resonancedigital.com
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
