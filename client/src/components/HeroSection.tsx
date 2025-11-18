import { lazy, Suspense, useEffect, useState } from "react";

const PFPGenerator = lazy(() => import("./PFPGenerator"));

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative bg-[#eb0d18] flex flex-col justify-center items-center text-white text-center overflow-hidden py-[120px] md:py-[120px] px-4 md:px-6 pb-[300px] md:pb-[500px]" 
>
      <div className="relative flex flex-col justify-center items-center w-full h-full px-4">
        <div className="relative flex">
          <h1 
            className="hero-heading font-bold cursor-crosshair relative z-10 m-0"
            style={{
              fontFamily: 'PP Right Grotesk',
              textShadow: `-${17 - scrollY * 0.05}px ${17 - scrollY * 0.05}px 0 var(--black)`,
              fontSize: `${16 - scrollY * 0.02}vw`,
              transform: `scale(${Math.max(0.7, 1 - scrollY * 0.0008)})`,
              transition: 'transform 0.05s ease-out, font-size 0.05s ease-out',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#eedf39'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
          >
            DERP
          </h1>
        </div>

        {/* Derp Hero Characters with Parallax - Better Spacing */}
        <img 
          src="/images/derphero1.png" 
          alt="" 
          className="absolute w-[18vw] min-w-[160px] max-w-[280px] z-[2] hidden md:block"
          style={{ 
            top: '2%', 
            left: '3%', 
            transform: `translateY(${scrollY * 0.15}px) rotate(-8deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <img 
          src="/images/derphero2.png" 
          alt="" 
          className="absolute w-[17vw] min-w-[150px] max-w-[270px] z-[3] hidden md:block"
          style={{ 
            top: '8%', 
            right: '2%', 
            transform: `translateY(${scrollY * 0.2}px) rotate(12deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <img 
          src="/images/derphero3.png" 
          alt="" 
          className="absolute w-[20vw] min-w-[180px] max-w-[320px] z-[2] hidden md:block"
          style={{ 
            bottom: '5%', 
            left: '1%', 
            transform: `translateY(${scrollY * 0.12}px) rotate(5deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <img 
          src="/images/derphero4.png" 
          alt="" 
          className="absolute w-[18vw] min-w-[160px] max-w-[290px] z-[3] hidden md:block"
          style={{ 
            bottom: '8%', 
            right: '1%', 
            transform: `translateY(${scrollY * 0.18}px) rotate(-10deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        />

        {/* Floating Decorative Images with Parallax - Repositioned for Better Spacing */}
        <img 
          src="/images/IMG_1407.PNG" 
          alt="" 
          className="absolute w-[12vw] min-w-[130px] max-w-[250px] z-0"
          style={{ 
            top: '85%', 
            left: '35%', 
            transform: `translateY(${scrollY * 0.25}px) rotate(20deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <img 
          src="/images/IMG_1389.PNG" 
          alt="" 
          className="absolute w-[11vw] min-w-[120px] max-w-[230px] z-0"
          style={{ 
            top: '12%', 
            left: '22%', 
            transform: `translateY(${scrollY * 0.08}px) rotate(8deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <img 
          src="/images/IMG_1393.PNG" 
          alt="" 
          className="absolute w-[10vw] min-w-[110px] max-w-[220px] z-0"
          style={{ 
            top: '15%', 
            right: '20%', 
            transform: `translateY(${scrollY * 0.1}px) rotate(8deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <img 
          src="/images/IMG_1391.PNG" 
          alt="" 
          className="absolute w-[12vw] min-w-[130px] max-w-[240px] z-[1]"
          style={{ 
            top: '-10%', 
            right: '38%', 
            transform: `translateY(${scrollY * 0.13}px) rotate(20deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <img 
          src="/images/IMG_1407.PNG" 
          alt="" 
          className="absolute w-[11vw] min-w-[120px] max-w-[230px] z-[1]"
          style={{ 
            bottom: '-5%', 
            left: '18%', 
            transform: `translateY(${scrollY * 0.22}px) rotate(20deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <img 
          src="/images/IMG_1392.PNG" 
          alt="" 
          className="absolute w-[12vw] min-w-[130px] max-w-[240px] z-[1]"
          style={{ 
            bottom: '-230px', 
            right: '5%', 
            transform: `translateY(${scrollY * 0.2}px) rotate(14deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <img 
          src="/images/IMG_1390.PNG" 
          alt="" 
          className="absolute w-[12vw] min-w-[130px] max-w-[240px] z-[1]"
          style={{ 
            bottom: '-335px', 
            left: '45%', 
            transform: `translateY(${scrollY * 0.24}px) rotate(-11deg)`,
            transition: 'transform 0.1s ease-out'
          }}
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
