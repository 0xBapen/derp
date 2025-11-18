import { lazy, Suspense } from "react";

const PFPGenerator = lazy(() => import("./PFPGenerator"));

export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-[#eb0d18] flex flex-col justify-center items-center text-white text-center overflow-hidden py-[120px] md:py-[120px] px-4 md:px-6 pb-[300px] md:pb-[500px]" 
>
      <div className="relative flex flex-col justify-center items-center w-full h-full px-4">
        <div className="relative flex">
          <h1 
            className="hero-heading text-[16vw] font-bold cursor-crosshair relative z-10 m-0"
            style={{
              fontFamily: 'PP Right Grotesk',
              textShadow: '-17px 17px 0 var(--black)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#eedf39'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            DERP
          </h1>
        </div>

        {/* Floating Images */}
        <img 
          src="/images/IMG_1407.PNG" 
          alt="" 
          className="absolute w-[14vw] min-w-[160px] max-w-[300px] z-0"
          style={{ top: '90%', left: '32%', transform: 'rotate(20deg)' }}
        />
        <img 
          src="/images/IMG_1389.PNG" 
          alt="" 
          className="absolute w-[14vw] min-w-[160px] max-w-[300px] z-0"
          style={{ top: '-3%', left: '12%', transform: 'rotate(8deg)' }}
        />
        <img 
          src="/images/IMG_1393.PNG" 
          alt="" 
          className="absolute w-[12vw] min-w-[160px] max-w-[300px] z-0"
          style={{ top: '-2%', right: '12%', transform: 'rotate(8deg)' }}
        />
        <img 
          src="/images/IMG_1391.PNG" 
          alt="" 
          className="absolute w-[14vw] min-w-[160px] max-w-[300px] z-[6]"
          style={{ top: '-18%', right: '30%', transform: 'rotate(20deg)' }}
        />
        <img 
          src="/images/IMG_1407.PNG" 
          alt="" 
          className="absolute w-[14vw] min-w-[160px] max-w-[300px] z-[1]"
          style={{ bottom: '1%', left: '10vw', transform: 'rotate(20deg)' }}
        />
        <img 
          src="/images/IMG_1389.PNG" 
          alt="" 
          className="absolute w-[14vw] min-w-[160px] max-w-[300px] z-[1]"
          style={{ bottom: '25%', right: '10vw', transform: 'scale(0.8) rotate(-14deg)' }}
        />
        <img 
          src="/images/IMG_1392.PNG" 
          alt="" 
          className="absolute w-[14vw] min-w-[160px] max-w-[300px] z-[1]"
          style={{ bottom: '-230px', right: '0', transform: 'rotate(14deg)' }}
        />
        <img 
          src="/images/IMG_1390.PNG" 
          alt="" 
          className="absolute w-[14vw] min-w-[160px] max-w-[300px] z-[1]"
          style={{ bottom: '-335px', left: 'auto', transform: 'rotate(-11deg)' }}
        />

        <a 
          href="#" 
          className="z-[1000] bg-[#ace5d7] text-[var(--black)] border-4 md:border-8 border-[var(--black)] rounded-xl px-6 md:px-10 py-3 md:py-5 text-lg md:text-2xl font-bold self-center mt-4 mb-6 transition-all duration-200"
          style={{
            fontFamily: 'PP Right Grotesk',
            letterSpacing: '0.12em',
            boxShadow: '-4px 4px 0 0 var(--black)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '-11px 11px 0 0 var(--black)';
            e.currentTarget.style.backgroundColor = '#ff00a1';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '-4px 4px 0 0 var(--black)';
            e.currentTarget.style.backgroundColor = '#ace5d7';
            e.currentTarget.style.color = 'var(--black)';
          }}
        >
          BUY NOW
        </a>

        <div className="text-center px-4">
          <strong className="text-xs md:text-base break-all">
            CONTRACT ADDRESS<br />
            <span className="text-[10px] md:text-sm">B15qLoUqCwiQdy1exThB2wrmw4YFmhD62Rn8Gipfpump</span>
          </strong>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mt-6 z-[1000]">
          <a 
            href="https://x.com/derpon_sol" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[var(--black)] p-3 rounded-full border-4 border-white hover:bg-[#ff00a1] transition-all duration-200 hover:scale-110"
            aria-label="X (Twitter)"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="white">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          
          <a 
            href="https://x.com/i/communities/1989456581554012298" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[var(--black)] px-4 py-3 rounded-full border-4 border-white hover:bg-[#5100ff] transition-all duration-200 hover:scale-110 font-bold text-white text-sm md:text-base"
            style={{ fontFamily: 'PP Right Grotesk' }}
          >
            X COMM
          </a>
          
          <a 
            href="https://www.dextools.io/app/en/solana/pair-explorer/F4aRW3o19cS9pxrjAeRWL3RY2p9JWWhGN8AVMsTUEWeS?t=1763495776307" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#00b8d4] p-3 rounded-full border-4 border-white hover:bg-[#eedf39] transition-all duration-200 hover:scale-110"
            aria-label="DexTools"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-9h2v6h-2v-6zm0-4h2v2h-2V7z"/>
            </svg>
          </a>
        </div>

      </div>

    </section>
  );
}
