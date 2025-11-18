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

          <h2 className="text-5xl font-bold mb-4 font-pp-grotesk">WHAT IS DERP?</h2>

          <p className="mb-6 leading-relaxed ">
            <strong>DERP isn't just another nostalgia meme,  it's the resurrection of one of the internet's most foundational cultural forces. <p>
It's rooted in the old internet, when memes were raw, simple, and spread because they were instantly relatable, not because they were over-engineered. . </p>

</strong>
          </p>

          <a className="bg-[#ff55a2] ... font-pp-grotesk">derp</a>
        </div>
      </div>
    </section>
  )
}
