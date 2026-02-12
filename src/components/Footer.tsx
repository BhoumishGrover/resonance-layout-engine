import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#132c3b] text-white">
      <div className="max-w-[1400px] mx-auto px-16 pt-24 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-28 items-start">

        {/* LEFT COLUMN */}
        <div className="flex flex-col items-start">
          <img
            src="/assets/images/RDL_logo.png"
            alt="Resonance"
            className="h-10 w-auto object-contain max-w-none mb-12 self-start"
          />

          <h2 className="text-3xl font-semibold mb-3">Art Comes First</h2>
          <p className="text-sm text-white/70 max-w-md mb-8">
            We shape distinctive success stories with breakthrough ideas and
            creative mastery, elevating you ahead of the competition.
          </p>

          <div className="w-full max-w-xl">
            <div className="bg-white/35 hover:bg-white/40 flex items-center justify-between px-8 py-6 w-full mb-10 cursor-pointer transition">
              <span className="font-semibold text-base text-white">
                Got A Project? let’s Talk
              </span>
              <span className="text-xl text-white">↗</span>
            </div>

            {/* MAP PLACEHOLDER */}
            <div className="w-full h-64 bg-gray-300 mb-10"></div>
          </div>

          {/* ADDRESS + PHONE */}
          <div className="border-t border-white/40 mt-4 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-16 text-sm">
            <div>
              <p className="text-white/50 text-xs uppercase mb-3">Address</p>
              <p className="leading-relaxed text-white/90">
                F-802, Lotus Corporate Park, W.E.H,<br/>
                Goregaon East, Near Jai Coach Signal,<br/>
                Mumbai, Maharashtra - 400060 (INDIA)
              </p>
            </div>

            <div>
              <p className="text-white/50 text-xs uppercase mb-3">Phone Number</p>
              <p className="text-white/90">+91 9769 39 2002</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col pt-28">

          {/* LINKS */}
          <div className="space-y-16 mb-8">
            {["Works", "Verticals", "About us", "Awards"].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between border-b border-white/30 pb-6 text-base cursor-pointer"
              >
                <span>{item}</span>
                <span>↗</span>
              </div>
            ))}
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-8 mt-0 mb-6">
            {["🌐", "f", "▶", "◎", "in"].map((icon, i) => (
              <div
                key={i}
                className="w-[64px] h-[64px] border border-white/40 flex items-center justify-center rounded-full text-lg"
              >
                {icon}
              </div>
            ))}
          </div>

          {/* CONTACT BLOCK */}
          <div className="border-t border-white/40 pt-8 mt-2">
            <p className="text-white/50 text-xs uppercase mb-8">Contact with us</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 text-sm">
              <div>
                <p className="font-medium mb-3">For Business Enquiries</p>
                <p className="text-white/90">+91-7800-90-8000</p>
                <p className="text-white/90">abhyuday@resonancedigital.in</p>
              </div>

              <div>
                <p className="font-medium mb-3">For Hiring Enquiries</p>
                <p className="text-white/90">+91-9769-39-2002</p>
                <p className="text-white/90">hr@resonancedigital.in</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-white/40 py-8 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Resonance Digital LLP. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
