import { Link } from "wouter";

export default function Unauthorized() {
  return (
    <div className="min-h-screen bg-[#eb0d18] flex flex-col justify-center items-center text-white text-center px-4">
      <h1 
        className="text-[20vw] font-bold mb-8"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          textShadow: '-17px 17px 0 var(--black)',
        }}
      >
        401
      </h1>
      <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        Unauthorized
      </h2>
      <p className="text-xl mb-8">
        You don't have permission to access this page.
      </p>
      <Link href="/">
        <a 
          className="bg-[#ace5d7] text-[var(--black)] border-8 border-[var(--black)] rounded-xl px-10 py-5 text-2xl font-bold transition-all duration-200"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            letterSpacing: '0.12em',
            boxShadow: '-6px 6px 0 0 var(--black)',
          }}
        >
          Go Home
        </a>
      </Link>
    </div>
  );
}
