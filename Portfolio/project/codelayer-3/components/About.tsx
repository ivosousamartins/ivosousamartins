import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const skills = [
  {
    title: "Creative Direction",
    description: "Setting the visual and strategic vision from concept through delivery.",
  },
  {
    title: "Brand Strategy",
    description: "Positioning, identity systems, and communication architecture.",
  },
  {
    title: "UX/UI Design",
    description: "User-centred digital products and interface design.",
  },
  {
    title: "Digital Strategy",
    description: "Cross-channel planning, content systems and performance frameworks.",
  },
  {
    title: "Art Direction",
    description: "Photographic, filmic and graphic direction for campaigns.",
  },
  {
    title: "Team Leadership",
    description: "Building, mentoring and directing multidisciplinary creative teams.",
  },
];

function SkillCard({ skill, delay }: { skill: typeof skills[0]; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className="border border-[rgba(0,0,0,0.09)] bg-[#F0EDE6] transition-all duration-300 hover:border-[rgba(232,98,42,0.35)] hover:bg-[rgba(232,98,42,0.04)]"
      style={{ padding: "1.5rem" }}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <h3 className="font-display text-[1.2rem] tracking-[0.06em]" style={{ marginBottom: "0.5rem" }}>{skill.title}</h3>
      <p className="text-[0.78rem] text-[#878787] leading-[1.6]">{skill.description}</p>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="bg-[#FAFAF7]" style={{ padding: "9rem 3rem" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 gap-[6rem] items-start">
          {/* Left Column */}
          <div>
            <motion.p
              ref={ref}
              className="text-[0.65rem] uppercase tracking-[0.25em] text-[#878787]"
              style={{ marginBottom: "2.5rem" }}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              About
            </motion.p>

            <motion.h2
              className="font-display leading-[0.92] text-[clamp(3rem,5.5vw,7rem)]"
              style={{ letterSpacing: "0.02em", marginBottom: "3.5rem" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              CONNECTING<br />
              THE <span className="font-serif italic text-[#E8622A] text-[0.78em]">thinking</span><br />
              WITH THE<br />
              MAKING.
            </motion.h2>

            <motion.div
              className="flex flex-col"
              style={{ gap: "1.5rem" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.p 
                className="text-[0.9rem] text-[rgba(14,14,14,0.52)] leading-[1.75]"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                Creative direction is the art of translating ambiguity into clarity — taking a brief, a feeling, or a business challenge and shaping it into something that moves people. Over 10 years, I've worked across political campaigns, lifestyle brands, public institutions and digital startups, always leading from both ends of the process.
              </motion.p>

              <motion.p 
                className="text-[0.9rem] text-[rgba(14,14,14,0.52)] leading-[1.75]"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                My approach is rooted in strategy first. Before a single visual is drawn, I need to understand the audience, the moment and the why. Then the making begins — and I stay close to every stage: copywriting, design, photography, motion, development briefing and production oversight.
              </motion.p>

              <motion.p 
                className="text-[0.9rem] text-[rgba(14,14,14,0.52)] leading-[1.75]"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
              >
                I've built teams, run studios and worked solo. I'm equally comfortable presenting to a government minister and rolling up my sleeves in Figma. The work only matters if it connects, converts, and lasts.
              </motion.p>
            </motion.div>
          </div>

          {/* Right Column */}
          <div>
            <motion.p
              className="text-[0.65rem] uppercase tracking-[0.25em] text-[#878787]"
              style={{ marginBottom: "2rem" }}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Areas of expertise
            </motion.p>

            <div className="grid grid-cols-2 gap-[12px]" style={{ marginBottom: "2.5rem" }}>
              {skills.map((skill, i) => (
                <SkillCard key={i} skill={skill} delay={0.15 + i * 0.08} />
              ))}
            </div>

            <motion.div
              className="flex"
              style={{ gap: "1rem" }}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href="/cv.pdf"
                className="inline-flex items-center text-white text-[0.75rem] uppercase tracking-[0.15em] transition-colors duration-300 hover:bg-[#E8622A]"
                style={{ 
                  padding: "0.85rem 1.75rem",
                  gap: "0.5rem",
                  background: "#0E0E0E"
                }}
              >
                Download CV <ExternalLink style={{ width: "13px", height: "13px" }} />
              </a>

              <a
                href="https://linkedin.com"
                className="inline-flex items-center border border-[rgba(0,0,0,0.18)] text-[#0E0E0E] text-[0.75rem] uppercase tracking-[0.15em] transition-all duration-300 hover:border-[#E8622A] hover:text-[#E8622A]"
                style={{ 
                  padding: "0.85rem 1.75rem",
                  gap: "0.5rem"
                }}
              >
                LinkedIn <ExternalLink style={{ width: "13px", height: "13px" }} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}