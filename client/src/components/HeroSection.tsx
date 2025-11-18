import { lazy, Suspense } from "react";

const PFPGenerator = lazy(() => import("./PFPGenerator"));

export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-[#eb0d18] flex flex-col justify-center items-center text-white text-center overflow-hidden  py-[120px] px-6 pb-[500px] " 
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
          className="z-[1000] bg-[#ace5d7] text-[var(--black)] border-8 border-[var(--black)] rounded-xl px-10 py-5 text-2xl font-bold self-center mt-4 mb-6 transition-all duration-200"
          style={{
            fontFamily: 'PP Right Grotesk',
            letterSpacing: '0.12em',
            boxShadow: '-6px 6px 0 0 var(--black)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '-11px 11px 0 0 var(--black)';
            e.currentTarget.style.backgroundColor = '#ff00a1';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '-6px 6px 0 0 var(--black)';
            e.currentTarget.style.backgroundColor = '#ace5d7';
            e.currentTarget.style.color = 'var(--black)';
          }}
        >
          BUY NOW
        </a>

        <div className="text-center">
          <strong>
            CONTRACT ADDRESS<br />
            B15qLoUqCwiQdy1exThB2wrmw4YFmhD62Rn8Gipfpump
 
          </strong>
        </div>

      </div>

    </section>
  );
}
