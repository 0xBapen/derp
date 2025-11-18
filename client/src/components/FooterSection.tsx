export default function FooterSection() {
  return (
    <div className="bg-[var(--black)] text-white text-center flex flex-col justify-center items-center py-12 md:py-20 px-4">
      <div 
        className="text-[16vw] md:text-[16vw] leading-[0.8em] hover:text-[#f9e174] transition-colors cursor-pointer"
        style={{ fontFamily: 'PP Right Grotesk' }}
      >
        GET<br />
      </div>
      <div 
        className="text-[16vw] md:text-[16vw] leading-[0.8em] pb-6 md:pb-8 hover:text-[#a774f9] transition-colors cursor-pointer"
        style={{ fontFamily: 'PP Right Grotesk' }}
      >
        DERPY<br />
      </div>
      <a 
        href="#" 
        className="bg-[#672fcf] text-white border-4 border-[#461a97] rounded-lg px-6 md:px-8 py-3 md:py-5 text-lg md:text-2xl font-bold self-center transition-all duration-200"
        style={{
          fontFamily: 'PP Right Grotesk',
          letterSpacing: '0.12em',
          boxShadow: '-4px 4px #461a97',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#ff0d11';
          e.currentTarget.style.boxShadow = '-6px 6px #461a97';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#672fcf';
          e.currentTarget.style.boxShadow = '-4px 4px #461a97';
        }}
      >
        BUY NOW
      </a>
    </div>
  );
}
