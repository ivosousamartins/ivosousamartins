import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "PARTIDO\nSOCIALISTA",
    client: "Political Communication · 2021–2024",
    tags: ["Campaign Design", "Digital", "Outdoor"],
    description: "Comprehensive visual identity and campaign design for national election cycles, spanning print, digital and OOH across Portugal.",
    image: "https://images.unsplash.com/photo-1646483395661-56b2e9947299?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xpdGljYWwlMjBjYW1wYWlnbiUyMHBvcnR1Z2FsJTIwc29jaWFsaXN0fGVufDF8fHx8MTc3MzQxNTUwNnww&ixlib=rb-4.1.0&q=80&w=1080",
    gridColumn: "1 / 8",
    gridRow: "1 / 3",
  },
  {
    id: "02",
    title: "LIGHTFOOT\nTRAVEL",
    client: "Luxury Travel Brand · 2022–2023",
    tags: ["Brand Identity", "Editorial", "Print"],
    description: "Full brand identity system for a premium travel company operating across UK and international luxury markets.",
    image: "https://images.unsplash.com/photo-1762742316793-b1845065429a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMHJlc29ydHxlbnwxfHx8fDE3NzM0MTU1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gridColumn: "8 / 13",
    gridRow: "1 / 2",
  },
  {
    id: "03",
    title: "OZ\nENERGIA",
    client: "Energy Sector · 2020–2022",
    tags: ["Campaign Design", "Outdoor", "Digital"],
    description: "National ATL and BTL campaign for energy provider, including large-format outdoor, digital display and broadcast assets.",
    image: "https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhciUyMHBhbmVsc3xlbnwxfHx8fDE3NzMzNTM1MzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gridColumn: "8 / 13",
    gridRow: "2 / 3",
  },
  {
    id: "04",
    title: "CÂMARA DE\nLISBOA",
    client: "Municipal Institution · 2019–2021",
    tags: ["Brand Strategy", "Visual Identity", "UX/UI"],
    description: "Digital transformation and brand communications for Lisbon's municipal government, reaching over 500K residents.",
    image: "https://images.unsplash.com/photo-1664376193961-0460bdb45620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXNib24lMjBjaXR5JTIwYXJjaGl0ZWN0dXJlJTIwdXJiYW58ZW58MXx8fHwxNzczNDE1NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    gridColumn: "1 / 5",
    gridRow: "3 / 4",
  },
  {
    id: "05",
    title: "MADAM\nBŌ",
    client: "Food & Hospitality · 2023",
    tags: ["Brand Identity", "Art Direction", "Digital"],
    description: "Complete brand world for a Lisbon-based Asian fusion restaurant concept, from naming through to spatial and digital touchpoints.",
    image: "https://images.unsplash.com/photo-1773122150545-b160a4486216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvbiUyMG1vZGVybnxlbnwxfHx8fDE3NzMzODgyOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gridColumn: "5 / 9",
    gridRow: "3 / 4",
  },
  {
    id: "06",
    title: "NOS\nTELECOM",
    client: "Telecommunications · 2021",
    tags: ["UX/UI Design", "Digital Strategy", "Campaign"],
    description: "UX strategy and digital campaign design for one of Portugal's leading telecommunications providers.",
    image: "https://images.unsplash.com/photo-1700463108455-956c595bc97b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWxlY29tbXVuaWNhdGlvbnMlMjB0ZWNobm9sb2d5JTIwbmV0d29ya3xlbnwxfHx8fDE3NzMzNTQ4MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gridColumn: "9 / 13",
    gridRow: "3 / 4",
  },
];

function ImageWithFallback(props) {
  const [didError, setDidError] = useState(false);
  const { src, alt, style, className, ...rest } = props;

  return didError ? (
    <div className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`} style={style}>
      <div className="flex items-center justify-center w-full h-full">
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==" alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={() => setDidError(true)} />
  );
}

function ProjectCard({ project, delay }: { project: typeof projects[0]; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Determine if this is a large or small card based on height
  const cardHeight = project.gridRow === "1 / 3" ? 852 : project.gridRow.includes("3") ? 360 : 420;
  const isLargeCard = cardHeight > 350;
  const titleSize = isLargeCard ? "clamp(2.2rem, 3.5vw, 4rem)" : "clamp(1.6rem, 2.5vw, 3rem)";

  return (
    <motion.div
      ref={ref}
      className="group relative overflow-hidden cursor-pointer bg-[#F0EDE6]"
      style={{ 
        gridColumn: project.gridColumn,
        gridRow: project.gridRow,
        width: "100%",
        height: "100%"
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Layer 1: Background Image */}
      <ImageWithFallback
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-[900ms] group-hover:scale-[1.07]"
        style={{
          filter: "brightness(0.45) saturate(0.7)",
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
      
      {/* Image darkening layer on hover */}
      <div 
        className="absolute inset-0 bg-black opacity-0 group-hover:opacity-[0.51] transition-opacity duration-[600ms]"
        style={{ pointerEvents: "none" }}
      />

      {/* Layer 2: Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between" style={{ padding: "2rem" }}>
        {/* Top Content Zone */}
        <div className="flex items-start justify-between">
          {/* Index (top-left) */}
          <span 
            className="text-[0.65rem] tracking-[0.15em]"
            style={{ color: "rgba(250, 250, 247, 0.45)" }}
          >
            {project.id}
          </span>

          {/* Tags (top-right) */}
          <div 
            className="flex flex-wrap gap-[0.5rem] opacity-0 group-hover:opacity-100 transition-all duration-[400ms] delay-[100ms]"
            style={{ transform: "translateY(-8px)" }}
          >
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[0.6rem] uppercase tracking-[0.18em] text-[#E8622A] border border-[rgba(232,98,42,0.4)] bg-transparent transition-all duration-[400ms] delay-[100ms] group-hover:translate-y-0"
                style={{ 
                  padding: "0.25rem 0.6rem",
                  borderRadius: "2px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Content Zone */}
        <div>
          {/* Title */}
          <h3 
            className="font-display leading-[0.95] text-[#FAFAF7]"
            style={{ 
              letterSpacing: "0.04em",
              fontSize: titleSize,
            }}
          >
            {project.title.split('\n').map((line, i) => (
              <span key={i} style={{ display: "block" }}>{line}</span>
            ))}
          </h3>

          {/* Client Subtitle */}
          <p 
            className="font-serif italic text-[0.85rem] text-[#878787]"
            style={{ marginTop: "0.5rem" }}
          >
            {project.client}
          </p>

          {/* Description */}
          <p 
            className="text-[0.8rem] leading-[1.5] max-h-0 opacity-0 overflow-hidden group-hover:max-h-[80px] group-hover:opacity-100 transition-all duration-[500ms] group-hover:delay-[100ms]"
            style={{ 
              color: "rgba(250, 250, 247, 0.7)",
              transitionProperty: "max-height, opacity",
            }}
          >
            {project.description}
          </p>

          {/* Arrow Button */}
          <div className="flex justify-end" style={{ marginTop: "1.25rem" }}>
            <div 
              className="w-[40px] h-[40px] rounded-full flex items-center justify-center border opacity-0 group-hover:opacity-100 transition-all duration-[400ms] group-hover:border-[#E8622A] group-hover:bg-[rgba(232,98,42,0.12)] group-hover:translate-y-0"
              style={{
                borderColor: "rgba(250, 250, 247, 0.3)",
                background: "transparent",
                transform: "translateY(8px)",
              }}
            >
              <ArrowUpRight 
                className="text-[#FAFAF7] transition-colors duration-[300ms]"
                style={{ width: "16px", height: "16px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="bg-[#FAFAF7]" style={{ padding: "8rem 3rem" }}>
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div ref={ref} className="flex items-end justify-between" style={{ marginBottom: "4rem" }}>
          <div>
            <motion.p
              className="text-[0.65rem] uppercase tracking-[0.25em] text-[#878787]"
              style={{ marginBottom: "0.75rem" }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              Selected Work
            </motion.p>
            <motion.h2
              className="font-display leading-[0.9]"
              style={{ 
                letterSpacing: "0.02em",
                fontSize: "clamp(4rem, 8vw, 9rem)"
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span style={{ display: "block" }}>SELECTED</span>
              <span style={{ display: "block", color: "#E8622A" }}>WORK</span>
            </motion.h2>
          </div>
          <motion.p
            className="font-serif italic text-[0.9rem] text-[#878787]"
            style={{ paddingBottom: "1rem" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            06 projects
          </motion.p>
        </div>

        {/* Project Grid */}
        <div
          className="grid gap-[12px]"
          style={{
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "420px 420px 360px",
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={0.3 + i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}