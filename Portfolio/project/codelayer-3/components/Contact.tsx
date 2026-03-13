import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const contactInfo = [
  { label: "Email", value: "hi@ivosousa.pt", link: "mailto:hi@ivosousa.pt" },
  { label: "LinkedIn", value: "/in/ivosousamartins", link: "https://linkedin.com/in/ivosousamartins" },
  { label: "Contra", value: "contra.com/ivosousamartins", link: "https://contra.com/ivosousamartins" },
  { label: "Phone", value: "+351 912 345 678", link: "tel:+351912345678" },
];

function ContactRow({ item, delay }: { item: typeof contactInfo[0]; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.a
      ref={ref}
      href={item.link}
      className="group flex items-center border-b border-[rgba(0,0,0,0.09)] transition-all duration-300 hover:border-[#E8622A]"
      style={{ paddingTop: "1.25rem", paddingBottom: "1.25rem" }}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[#878787] w-[6rem]">
        {item.label}
      </span>
      <span className="text-[1rem] text-[#0E0E0E] flex-1">{item.value}</span>
      <ArrowRight className="w-4 h-4 text-[#E8622A] transition-transform duration-300 group-hover:translate-x-[6px]" />
    </motion.a>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="bg-[#F0EDE6] border-t border-[rgba(0,0,0,0.08)]" style={{ padding: "9rem 3rem" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 gap-[6rem]">
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
              Get in touch
            </motion.p>

            <motion.h2
              className="font-display leading-[0.9] text-[clamp(3.5rem,7vw,9rem)]"
              style={{ letterSpacing: "0.02em", marginBottom: "2.5rem" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              LET'S<br />
              <span className="text-[#E8622A]">WORK</span><br />
              TOGETHER.
            </motion.h2>

            <motion.p
              className="text-[0.9rem] text-[rgba(14,14,14,0.5)] max-w-[42ch] leading-[1.75]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Whether you're looking for creative direction, brand strategy, or a collaborative partner for your next project, I'd love to hear from you.
            </motion.p>

            <motion.div
              className="h-[2px] w-1/2 bg-gradient-to-r from-[#E8622A] to-transparent"
              style={{ marginTop: "3rem", transformOrigin: "left" }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          {/* Right Column */}
          <div style={{ paddingTop: "5rem" }}>
            <div className="border-t border-[rgba(0,0,0,0.09)]">
              {contactInfo.map((item, i) => (
                <ContactRow key={i} item={item} delay={0.2 + i * 0.1} />
              ))}
            </div>

            <motion.div
              className="flex items-center"
              style={{ gap: "0.75rem", marginTop: "2.5rem" }}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="w-[5px] h-[5px] rounded-full bg-[#2A9D5C] animate-pulse" />
              <span className="text-[0.72rem] uppercase tracking-[0.15em] text-[#2A9D5C]">
                Currently available for new projects
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}