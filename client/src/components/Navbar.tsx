import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Nav Bar */}
      <nav className="fixed top-3 left-0 right-0 z-[9999] hidden md:flex justify-center">
        <div className="bg-[var(--black)] rounded-2xl flex items-center justify-around max-w-[580px] px-3 py-0">
          <a href="#hero" className="text-white px-4 py-5 hover:text-[#f9e174] transition-colors">
            Home
          </a>
          <a href="https://www.dextools.io/app/en/solana/pair-explorer/F4aRW3o19cS9pxrjAeRWL3RY2p9JWWhGN8AVMsTUEWeS?t=1763495776307" className="text-white px-4 py-5 hover:text-[#f9e174] transition-colors">
            DexTools
          </a>
          <a href="https://x.com/i/communities/1989456581554012298" className="text-white px-4 py-5 pr-6 hover:text-[#f9e174] transition-colors">
            X Comm
          </a>
          <button className="bg-[#ff3979] text-white px-4 py-2 rounded-lg hover:bg-[#5100ff] transition-colors ml-2">
            X
          </button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="fixed top-0 left-0 right-0 w-full bg-[var(--black)] md:hidden z-[9999]">
        <div className="container flex items-center justify-between py-3 px-4">
          <a href="/" className="text-white font-bold text-xl" style={{ fontFamily: 'PP Right Grotesk' }}>
            DERP
          </a>
          <div className="flex items-center gap-3">
            <a href="#pfp-generator" className="text-white px-3 py-2 text-sm rounded-lg bg-[#ff3979] hover:bg-[#5100ff] transition-colors font-bold">
              GENERATE
            </a>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="bg-[var(--black)] border-t border-gray-700">
            <a href="#" onClick={() => setIsOpen(false)} className="block text-white px-6 py-3 hover:bg-[#ff3979] transition-colors">Home</a>
            <a href="https://www.dextools.io/app/en/solana/pair-explorer/F4aRW3o19cS9pxrjAeRWL3RY2p9JWWhGN8AVMsTUEWeS?t=1763495776307" onClick={() => setIsOpen(false)} className="block text-white px-6 py-3 hover:bg-[#ff3979] transition-colors">DexTools</a>
            <a href="https://x.com/i/communities/1989456581554012298" onClick={() => setIsOpen(false)} className="block text-white px-6 py-3 hover:bg-[#ff3979] transition-colors">X Comm</a>
            <a href="https://x.com/derpon_sol" onClick={() => setIsOpen(false)} className="block text-white px-6 py-3 hover:bg-[#ff3979] transition-colors">X</a>
            <div className="px-6 py-3">
              <button className="w-full bg-[#5100ff] text-white px-4 py-3 rounded-lg hover:bg-[#ff3979] transition-colors font-bold">
                X 
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
