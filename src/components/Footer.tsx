import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <div className="max-w-[1400px] mx-auto px-16 pt-24 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-28 items-start">

        {/* LEFT COLUMN */}
        <div className="flex flex-col items-start">

          <h2 className="text-3xl font-semibold mb-3">Art Comes First</h2>
          <p className="text-sm text-black/70 max-w-md mb-8">
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

            {/* GOOGLE MAP - CLICKABLE */}
            <a
              href="https://maps.app.goo.gl/mkXCTnNfDQbu8xVHA"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-64 mb-10 rounded-lg overflow-hidden shadow-lg relative group"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.835056494968!2d72.8661467!3d19.1557888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b71e5a5c5c5d%3A0x5c5c5c5c5c5c5c5c!2sLotus%20Corporate%20Park%2C%20Jay%20Coach%20Junction%2C%20Graham%20Firth%20Compound%2C%20Goregaon%2C%20Mumbai%2C%20Maharashtra%20400063!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: 'none' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Resonance Digital Office Location"
              />
              
              {/* Overlay with "Open in Maps" button */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center pointer-events-none">
                <div className="bg-sky-400 text-white px-6 py-3 rounded-full font-semibold opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-xl">
                  Open in Maps →
                </div>
              </div>
            </a>
          </div>

          {/* ADDRESS + PHONE */}
          <div className="border-t border-black/20 mt-4 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-16 text-sm">
            <div>
              <p className="text-black/50 text-xs uppercase mb-3">Address</p>
              <a
                href="https://maps.app.goo.gl/mkXCTnNfDQbu8xVHA"
                target="_blank"
                rel="noopener noreferrer"
                className="block leading-relaxed text-black/90 hover:text-sky-600 transition-colors duration-300 cursor-pointer group"
              >
                <span className="group-hover:underline">
                  F-802, Lotus Corporate Park, W.E.H,<br/>
                  Goregaon East, Near Jai Coach Signal,<br/>
                  Mumbai, Maharashtra - 400060 (INDIA)
                </span>
                <span className="block text-xs text-sky-600/80 group-hover:text-sky-600 mt-2">
                  Click for directions →
                </span>
              </a>
            </div>

            <div>
              <p className="text-black/50 text-xs uppercase mb-3">Phone Number</p>
              <p className="text-black/90">+91 9769 39 2002</p>
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
                className="flex items-center justify-between border-b border-black/20 pb-6 text-base cursor-pointer"
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
                className="w-[64px] h-[64px] border border-black/30 flex items-center justify-center rounded-full text-lg"
              >
                {icon}
              </div>
            ))}
          </div>

          {/* CONTACT BLOCK */}
          <div className="border-t border-black/20 pt-8 mt-2">
            <p className="text-black/50 text-xs uppercase mb-8">Contact with us</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 text-sm">
              <div>
                <p className="font-medium mb-3">For Business Enquiries</p>
                <p className="text-black/90">+91-7800-90-8000</p>
                <p className="text-black/90">abhyuday@resonancedigital.in</p>
              </div>

              <div>
                <p className="font-medium mb-3">For Hiring Enquiries</p>
                <p className="text-black/90">+91-9769-39-2002</p>
                <p className="text-black/90">hr@resonancedigital.in</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-black/20 py-8 text-center text-xs text-black/60">
        © {new Date().getFullYear()} Resonance Digital LLP. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
