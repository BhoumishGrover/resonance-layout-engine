import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#132c3b] text-white">
      <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Section */}
        <div>
          <img
            src="/assets/images/RDL_logo.png"
            alt="Resonance"
            className="h-8 mb-10"
          />

          <h2 className="text-2xl font-semibold mb-2">Art Comes First</h2>
          <p className="text-sm text-white/70 max-w-md mb-8">
            We shape distinctive success stories with breakthrough ideas and
            creative mastery, elevating you ahead of the competition.
          </p>

          <div className="bg-white/70 text-white flex items-center justify-between px-6 py-5 max-w-md mb-8 cursor-pointer hover:bg-white transition">
            <span className="font-semibold text-lg">
              Got A Project? let’s Talk
            </span>
            <span className="text-xl">↗</span>
          </div>

          {/* Map Placeholder */}
          <div
            className="w-full max-w-md h-48 bg-gray-200 cursor-pointer"
            title="Open in Google Maps"
          >
            {/* Google Maps embed will be added later */}
          </div>

          <div className="border-t border-white/40 my-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 text-sm">
            <div>
              <p className="text-white/60 mb-2">Address</p>
              <p className="leading-relaxed">
                F-802, Lotus Corporate Park, W.E.H,
                <br />
                Goregaon East, Near Jai Coach Signal,
                <br />
                Mumbai, Maharashtra - 400060 (INDIA)
              </p>
            </div>

            <div>
              <p className="text-white/60 mb-2">Phone Number</p>
              <p>+91 9769 39 2002</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col">
          <div className="space-y-4 text-sm">
            {["Works", "Verticals", "About us", "Awards"].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between border-b border-white/30 pb-2 cursor-pointer hover:text-white/80 transition"
              >
                <span>{item}</span>
                <span>↗</span>
              </div>
            ))}
          </div>

          <div className="flex gap-6 mt-6">
            {["🌐", "f", "▶", "◎", "in"].map((icon, i) => (
              <div
                key={i}
                className="w-10 h-10 border border-white/40 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-white hover:text-black transition"
              >
                {icon}
              </div>
            ))}
          </div>

          <div className="border-t border-white/40 my-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 text-sm">
            <div>
              <p className="text-white/60 mb-2">Contact with us</p>
              <p className="mb-1">For Business Enquiries</p>
              <p>+91-7800-90-8000</p>
              <p>abhyuday@resonancedigital.in</p>
            </div>

            <div>
              <p className="text-white/60 mb-2">For Hiring Enquiries</p>
              <p>+91-9769-39-2002</p>
              <p>hr@resonancedigital.in</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/40 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Resonance Digital LLP. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
