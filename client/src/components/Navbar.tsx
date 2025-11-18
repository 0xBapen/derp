import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Nav Bar */}
      <nav className="fixed top-3 left-0 right-0 z-[9999] hidden md:flex justify-center">
        <div className="bg-[var(--black)] rounded-2xl flex items-center justify-around max-w-[580px] px-3 py-0">
          <a href="#hero" className="text-white px-4 py-5 hover:text-[#f9e174] transition-colors">
            Robotos
          </a>
          <a href="#mint" className="text-white px-4 py-5 hover:text-[#f9e174] transition-colors">
            Mint
          </a>
          <a href="#rarity" className="text-white px-4 py-5 hover:text-[#f9e174] transition-colors">
            Rarity
          </a>
          <a href="#faq" className="text-white px-4 py-5 pr-6 hover:text-[#f9e174] transition-colors">
            FAQ
          </a>
          <button className="bg-[#ff3979] text-white px-4 py-2 rounded-lg hover:bg-[#5100ff] transition-colors ml-2">
            Connect
          </button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="w-full bg-[var(--black)] md:hidden">
        <div className="container flex items-center justify-between py-4">
          <a href="/" className="text-white font-bold text-xl">
            DERP
          </a>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white px-4 py-2 rounded-lg bg-[#ff3979] hover:bg-[#5100ff] transition-colors">
              LINK
            </a>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="bg-[var(--black)] pb-4">
            <a href="#" className="block text-white px-4 py-2 hover:text-[#f9e174]">LINK</a>
            <a href="#" className="block text-white px-4 py-2 hover:text-[#f9e174]">LINK</a>
            <a href="#" className="block text-white px-4 py-2 hover:text-[#f9e174]">LINK</a>
            <button className="mx-4 mt-2 bg-[#ff3979] text-white px-4 py-2 rounded-lg hover:bg-[#5100ff] transition-colors">
              BUY
            </button>
          </div>
        )}
      </div>
    </>
  );
}
