import { useState, useEffect } from "react";

const phrases = [
  "VFX & Animation",
  "Brand Content",
  "Real Estate Visualization",
  "Immersive Experiences",
];

const DynamicText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block overflow-hidden">
      <span
        className={`inline-block text-primary transition-all duration-500 ${
          isAnimating
            ? "opacity-0 transform -translate-y-full"
            : "opacity-100 transform translate-y-0"
        }`}
      >
        {phrases[currentIndex]}
      </span>
    </span>
  );
};

export default DynamicText;
