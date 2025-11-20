import { ArrowUpRight } from "lucide-react";

export default function ConnectButton() {
  return (
    <>
      {/* Inline animation */}
      <style>{`
        @keyframes spinInfiniteCustom {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div className="fixed right-20 bottom-20 w-24 h-24 flex items-center justify-center">

        {/* Black Circle Background */}
        <div className="absolute w-28 h-28 rounded-full bg-black z-0" />

        {/* Rotating Text Ring */}
        <img
          src="https://framerusercontent.com/images/dBUveX9SC6dHORKpbAMiL4CnbpA.png?scale-down-to=1024"
          alt="Rotating Connect Text"
          className="absolute w-full h-full mix-blend-screen cursor-pointer" 
          style={{
            animation: "spinInfiniteCustom 6s linear infinite",
          }}
        />

        {/* Gradient Arrow Icon */}
        <svg width="0" height="0">
          <defs>
            <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#66d1ff" />
              <stop offset="100%" stopColor="#9b7bff" />
            </linearGradient>
          </defs>
        </svg>

        <ArrowUpRight
          size={40}
          className="relative z-20"
          style={{
            stroke: "url(#arrowGradient)",
            strokeWidth: 3,
          }}
        />
      </div>
    </>
  );
}
