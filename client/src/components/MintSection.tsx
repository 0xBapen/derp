import { lazy, Suspense } from "react";

const PFPGenerator = lazy(() => import("./PFPGenerator"));

export default function MintSection() {
  return (
    <section id="mint" className="relative bg-[#f9e174] py-[120px]"
      style={{
        backgroundImage: 'url(/images/diagrams.png)',
        backgroundPosition: '50%',
        backgroundSize: 'auto',
      }}
    >
      <div className="container max-w-[550px]">
        <div className="bg-white border-8 border-[var(--black)] rounded-3xl flex flex-col items-center text-center p-14 pb-8"
          style={{ boxShadow: '-3px 3px 0 0 var(--black)' }}
        >
          {/* your mint art */}
          <img src="/images/AFSADS.png" className="w-[240px] mb-6" />

          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-pp-grotesk hover:text-[#eb0d18] transition-colors duration-300">
            Get your DERP
          </h2>

          <p className="mb-6 leading-relaxed text-sm md:text-base">
            <strong>DERP isn't just another nostalgia meme, it's the resurrection of one of the internet's most foundational cultural forces. It's rooted in the old internet, when memes were raw, simple, and spread because they were instantly relatable, not because they were over-engineered.</strong>
          </p>

          <a 
            href="#pfp-generator" 
            className="bg-[#ff55a2] hover:bg-[#eb0d18] text-white px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg font-pp-grotesk border-4 border-[var(--black)]"
            style={{ boxShadow: '-4px 4px 0 0 var(--black)' }}
          >
            Create Your DERP
          </a>
        </div>
      </div>
    </section>
  )
}
