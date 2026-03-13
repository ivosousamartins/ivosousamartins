import { motion } from "motion/react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const slideInVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center" style={{ padding: "6rem 3rem 4rem" }}>
      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
            <feColorMatrix values="0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 0.02 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Content Grid */}
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-2 gap-[4rem] items-center relative z-10">
        {/* Left Column */}
        <div>
          <motion.p
            className="text-[0.65rem] uppercase tracking-[0.25em] text-[#878787]"
            style={{ marginBottom: "2rem" }}
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUpVariants}
          >
            Creative Director · Lisbon, Portugal
          </motion.p>

          <div style={{ marginBottom: "2rem" }}>
            <motion.h1
              className="font-display leading-[0.9] text-[clamp(5.5rem,11vw,13rem)]"
              style={{ letterSpacing: "0.02em" }}
              initial="hidden"
              animate="visible"
              custom={0.2}
              variants={fadeUpVariants}
            >
              IVO
            </motion.h1>
            <motion.h1
              className="font-display leading-[0.9] text-[clamp(5.5rem,11vw,13rem)] text-[#E8622A]"
              style={{ letterSpacing: "0.02em" }}
              initial="hidden"
              animate="visible"
              custom={0.32}
              variants={fadeUpVariants}
            >
              SOUSA
            </motion.h1>
            <motion.h1
              className="font-display leading-[0.9] text-[clamp(5.5rem,11vw,13rem)]"
              style={{ letterSpacing: "0.02em" }}
              initial="hidden"
              animate="visible"
              custom={0.44}
              variants={fadeUpVariants}
            >
              MARTINS
            </motion.h1>
          </div>

          <motion.p
            className="font-serif italic text-[1.15rem] text-[#878787]"
            style={{ marginTop: "2rem", marginBottom: "1.25rem" }}
            initial="hidden"
            animate="visible"
            custom={0.5}
            variants={fadeUpVariants}
          >
            Brand Identity, Campaigns & Digital Design
          </motion.p>

          <motion.p
            className="text-[0.9rem] text-[rgba(14,14,14,0.5)] max-w-[42ch] leading-[1.7]"
            style={{ marginBottom: "2.5rem" }}
            initial="hidden"
            animate="visible"
            custom={0.6}
            variants={fadeUpVariants}
          >
            I connect the thinking with the making. From brief to final asset, across every channel and format.
          </motion.p>

          <motion.a
            href="#work"
            className="inline-block text-[0.75rem] uppercase tracking-[0.18em] group"
            style={{ borderBottom: "1px solid #0E0E0E", paddingBottom: "0.3rem" }}
            initial="hidden"
            animate="visible"
            custom={0.7}
            variants={fadeUpVariants}
          >
            <span className="transition-colors duration-300 group-hover:text-[#E8622A]">
              VIEW SELECTED WORK
            </span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-[4px] ml-[0.6rem]">→</span>
          </motion.a>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-end max-w-[440px] ml-auto">
          <motion.div
            className="flex items-center border border-[#2A9D5C] text-[#2A9D5C]"
            style={{ 
              gap: "0.5rem",
              padding: "0.35rem 0.8rem",
              borderRadius: "2px",
              marginBottom: "3rem"
            }}
            initial="hidden"
            animate="visible"
            custom={0.3}
            variants={slideInVariants}
          >
            <span className="w-[5px] h-[5px] rounded-full bg-[#2A9D5C] animate-pulse" />
            <span className="text-[0.65rem] uppercase tracking-[0.18em]">Available for projects</span>
          </motion.div>

          {/* Stat 1 */}
          <motion.div
            className="w-full border-t border-[rgba(0,0,0,0.12)] flex items-end justify-between"
            style={{ paddingTop: "1.4rem", paddingBottom: "1.4rem" }}
            initial="hidden"
            animate="visible"
            custom={0.4}
            variants={slideInVariants}
          >
            <span className="font-display text-[3.8rem] text-[#E8622A] leading-[1]" style={{ letterSpacing: "0.02em" }}>10+</span>
            <span className="text-[0.75rem] uppercase text-[#878787] text-right max-w-[180px]" style={{ letterSpacing: "0.06em" }}>
              Years in brand & digital
            </span>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            className="w-full border-t border-b border-[rgba(0,0,0,0.12)] flex items-end justify-between"
            style={{ paddingTop: "1.4rem", paddingBottom: "1.4rem" }}
            initial="hidden"
            animate="visible"
            custom={0.5}
            variants={slideInVariants}
          >
            <span className="font-display text-[3.8rem] text-[#E8622A] leading-[1]" style={{ letterSpacing: "0.02em" }}>2</span>
            <span className="text-[0.75rem] uppercase text-[#878787] text-right max-w-[180px]" style={{ letterSpacing: "0.06em" }}>
              National election campaigns
            </span>
          </motion.div>

          {/* Markets */}
          <motion.div
            className="w-full"
            style={{ marginTop: "2rem" }}
            initial="hidden"
            animate="visible"
            custom={0.6}
            variants={slideInVariants}
          >
            <div className="grid grid-cols-4 gap-0">
              {[
                { code: "PT", city: "Lisbon" },
                { code: "UK", city: "London" },
                { code: "US", city: "New York" },
                { code: "ES", city: "Madrid" },
              ].map((market, i) => (
                <div 
                  key={i} 
                  className={i > 0 ? "border-l border-[rgba(0,0,0,0.12)]" : ""}
                  style={{ 
                    paddingTop: "0.9rem", 
                    paddingBottom: "0.9rem",
                    paddingLeft: i > 0 ? "1rem" : "0",
                    paddingRight: "1rem"
                  }}
                >
                  <div className="font-display text-[2rem] leading-[1]" style={{ letterSpacing: "0.06em" }}>{market.code}</div>
                  <div className="font-serif italic text-[0.75rem] text-[#878787]" style={{ marginTop: "0.2rem" }}>{market.city}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[rgba(0,0,0,0.08)]" />
    </section>
  );
}