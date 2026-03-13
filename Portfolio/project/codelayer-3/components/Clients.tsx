import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const clients = [
  { name: "Partido Socialista", type: "multi-color" },
  { name: "Lidl", type: "multi-color" },
  { name: "NOS", type: "standard" },
  { name: "ISCTE", type: "white-fill" },
  { name: "IDEFF", type: "standard" },
  { name: "Lightfoot Travel", type: "standard" },
  { name: "OZ Energia", type: "white-fill" },
  { name: "Madam Bō", type: "standard" },
  { name: "Kitchenette", type: "standard" },
  { name: "Skyhour", type: "standard" },
  { name: "Praça Beato", type: "white-fill" },
];

function ClientLogo({ client, delay }: { client: typeof clients[0]; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const getHoverStyle = () => {
    switch (client.type) {
      case "multi-color":
        return "grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100";
      case "white-fill":
        return "opacity-30 group-hover:opacity-100";
      default:
        return "brightness-0 opacity-30 group-hover:opacity-100";
    }
  };

  return (
    <motion.div
      ref={ref}
      className="w-1/4 p-[1.25rem] flex items-center justify-center group cursor-pointer"
      initial={{ opacity: 0, y: 14 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-[120px] h-[40px] flex items-center justify-center">
        <div className={`text-[#0E0E0E] text-center font-display text-[1.2rem] transition-all duration-300 ${getHoverStyle()}`}>
          {client.name}
        </div>
      </div>
    </motion.div>
  );
}

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#F0EDE6] border-t border-b border-[rgba(0,0,0,0.08)]" style={{ padding: "5rem 3rem" }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.p
          ref={ref}
          className="text-[0.65rem] uppercase tracking-[0.25em] text-[#878787] text-center"
          style={{ marginBottom: "2.5rem" }}
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Brands & organisations worked with
        </motion.p>

        <div className="flex flex-wrap justify-center">
          {clients.map((client, i) => (
            <ClientLogo key={i} client={client} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}