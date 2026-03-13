export default function Marquee() {
  const services = [
    "Creative Direction",
    "Brand Strategy",
    "Campaign Design",
    "Visual Identity",
    "UX/UI Design",
    "Digital Strategy",
    "Content Systems",
    "Art Direction",
  ];

  return (
    <section className="relative bg-[#F0EDE6] border-t border-b border-[rgba(0,0,0,0.08)] overflow-hidden" style={{ padding: "1rem 0" }}>
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-[8rem] bg-gradient-to-r from-[#F0EDE6] to-transparent z-10 pointer-events-none" />
      
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-[8rem] bg-gradient-to-l from-[#F0EDE6] to-transparent z-10 pointer-events-none" />

      <div className="marquee-container hover:pause">
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .marquee-track {
            animation: scroll 40s linear infinite;
            display: flex;
            width: fit-content;
          }
          
          .marquee-container:hover .marquee-track {
            animation-play-state: paused;
          }
        `}</style>

        <div className="marquee-track">
          {/* Duplicate the services array twice for seamless loop */}
          {[...services, ...services].map((service, i) => (
            <div key={i} className="flex items-center" style={{ paddingRight: "3rem" }}>
              <span className={`text-[0.72rem] uppercase tracking-[0.18em] whitespace-nowrap ${i % 2 === 0 ? "text-[#878787]" : "text-[rgba(135,135,135,0.5)]"}`}>
                {service}
              </span>
              <span className="ml-[3rem] text-[#878787]">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
