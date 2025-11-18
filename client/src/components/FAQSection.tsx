import '@/styles/faq-animations.css'

export default function FAQSection() {
  return (
    <div id="faq" className="relative bg-[#cae9fa] flex flex-col items-center  py-[300px] x-6 pb-[300px] overflow-hidden">
      <div className="container max-w-[720px] relative z-10">
        <div className="pt-16 pb-12">
          <h3 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            AYOOO DERP, HIT THAT FINE SHI
          </h3>
          <div className="w-full" style={{ aspectRatio: '1.77777778', overflow: 'hidden' }}>
            <iframe 
              width="100%" 
              height="100%" 
              src="https://app.vidzflow.com/v/gazJd8uygI?dq=576&ap=false&muted=false&loop=false&ctp=true&bv=false&piv=false&playsinline=false&bc=%234E5FFD&controls=play-large%2Cplay%2Cprogress%2Ccurrent-time%2Cmute%2Cvolume%2Csettings%2Cfullscreen" 
              title="IMG_6566" 
              style={{ aspectRatio: '1.77777778', overflow: 'hidden' }}
              frameBorder="0" 
              scrolling="no" 
              allow="fullscreen"
            />
          </div>
        </div>
      </div>

      {/* FAQ Left Images */}
      <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-around hidden lg:flex pointer-events-none">
        <img src="/images/IMG_1392.PNG" alt="" className="w-[238.5px] derp-float derp-wobble" style={{ animationDelay: '0s' }} />
        <img src="/images/IMG_1390.PNG" alt="" className="w-[234px] derp-float derp-spin-slow" style={{ animationDelay: '1s' }} />
        <img src="/images/IMG_1407.PNG" alt="" className="w-[311px] derp-float derp-tilt" style={{ animationDelay: '2s' }} />
      </div>

      {/* FAQ Right Images */}
      <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-around hidden lg:flex pointer-events-none">
        <img src="/images/IMG_1393.PNG" alt="" className="w-[238.5px] derp-float derp-wobble" style={{ animationDelay: '1.5s' }} />
        <img src="/images/IMG_1407.PNG" alt="" className="w-[234px] derp-float derp-spin-slow" style={{ animationDelay: '0.5s' }} />
        <img src="/images/IMG_1391.PNG" alt="" className="w-[234px] derp-float derp-tilt" style={{ animationDelay: '2.5s' }} />
      </div>

      {/* FAQ Top Images */}
      <div className="absolute top-0 left-0 right-0 flex justify-center gap-4 hidden lg:flex pointer-events-none">
        <img src="/images/IMG_1390.PNG" alt="" className="w-[234px] derp-bounce derp-spin-slow" style={{ animationDelay: '0.3s' }} />
        <img src="/images/IMG_1389.PNG" alt="" className="w-[234px] derp-bounce derp-wobble" style={{ animationDelay: '0.8s' }} />
        <img src="/images/IMG_1389.PNG" alt="" className="w-[234px] derp-bounce derp-tilt" style={{ animationDelay: '1.3s' }} />
      </div>

      {/* FAQ Bottom Images */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 hidden lg:flex pointer-events-none">
        <img src="/images/IMG_1392.PNG" alt="" className="w-[234px] derp-bounce derp-wobble" style={{ animationDelay: '0.6s' }} />
        <img src="/images/IMG_1390.PNG" alt="" className="w-[234px] derp-bounce derp-spin-slow" style={{ animationDelay: '1.2s' }} />
        <img src="/images/IMG_1407.PNG" alt="" className="w-[234px] derp-bounce derp-tilt" style={{ animationDelay: '1.8s' }} />
      </div>
    </div>
  );
}
