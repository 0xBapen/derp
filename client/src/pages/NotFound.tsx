import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#eb0d18] flex flex-col justify-center items-center text-white text-center px-4">
      <h1 
        className="text-[20vw] font-bold mb-8"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          textShadow: '-17px 17px 0 var(--black)',
        }}
      >
        404
      </h1>
      <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
        Page Not Found
      </h2>
      <p className="text-xl mb-8">
        The page you're looking for doesn't exist.
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
