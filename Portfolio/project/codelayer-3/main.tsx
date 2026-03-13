import { useEffect } from "react";

// Static versions - no animations, perfect for Figma export
function Navigation() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] bg-[rgba(250,250,247,0.94)] backdrop-blur-[16px] border-b border-[rgba(0,0,0,0.08)]"
      style={{ padding: "1.5rem 3rem" }}
    >
      <div className="flex items-center justify-between max-w-[1440px] mx-auto">
        <a href="#" className="font-display text-[1.4rem] tracking-[0.12em]">
          ISM<span className="text-[#E8622A]">.</span>
        </a>
        <div className="flex items-center gap-[2.5rem]">
          {["Work", "About", "Contact", "CV"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-[0.68rem] uppercase tracking-[0.22em] text-[#878787]"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center" style={{ padding: "6rem 3rem 4rem" }}>
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
            <feColorMatrix values="0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 0.02 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-2 gap-[4rem] items-center relative z-10">
        <div>
          <p
            className="text-[0.65rem] uppercase tracking-[0.25em] text-[#878787]"
            style={{ marginBottom: "2rem" }}
          >
            Creative Director · Lisbon, Portugal
          </p>

          <div style={{ marginBottom: "2rem" }}>
            <h1
              className="font-display leading-[0.9] text-[clamp(5.5rem,11vw,13rem)]"
              style={{ letterSpacing: "0.02em" }}
            >
              IVO
            </h1>
            <h1
              className="font-display leading-[0.9] text-[clamp(5.5rem,11vw,13rem)] text-[#E8622A]"
              style={{ letterSpacing: "0.02em" }}
            >
              SOUSA
            </h1>
            <h1
              className="font-display leading-[0.9] text-[clamp(5.5rem,11vw,13rem)]"
              style={{ letterSpacing: "0.02em" }}
            >
              MARTINS
            </h1>
          </div>

          <p
            className="font-serif italic text-[1.15rem] text-[#878787]"
            style={{ marginTop: "2rem", marginBottom: "1.25rem" }}
          >
            Brand Identity, Campaigns & Digital Design
          </p>

          <p
            className="text-[0.9rem] text-[rgba(14,14,14,0.5)] max-w-[42ch] leading-[1.7]"
            style={{ marginBottom: "2.5rem" }}
          >
            I connect the thinking with the making. From brief to final asset, across every channel and format.
          </p>

          <a
            href="#work"
            className="inline-block text-[0.75rem] uppercase tracking-[0.18em]"
            style={{ borderBottom: "1px solid #0E0E0E", paddingBottom: "0.3rem" }}
          >
            VIEW SELECTED WORK →
          </a>
        </div>

        <div className="flex flex-col items-end max-w-[440px] ml-auto">
          <div
            className="flex items-center border border-[#2A9D5C] text-[#2A9D5C]"
            style={{ 
              gap: "0.5rem",
              padding: "0.35rem 0.8rem",
              borderRadius: "2px",
              marginBottom: "3rem"
            }}
          >
            <span className="w-[5px] h-[5px] rounded-full bg-[#2A9D5C]" />
            <span className="text-[0.65rem] uppercase tracking-[0.18em]">Available for projects</span>
          </div>

          <div
            className="w-full border-t border-[rgba(0,0,0,0.12)] flex items-end justify-between"
            style={{ paddingTop: "1.4rem", paddingBottom: "1.4rem" }}
          >
            <span className="font-display text-[3.8rem] text-[#E8622A] leading-[1]" style={{ letterSpacing: "0.02em" }}>10+</span>
            <span className="text-[0.75rem] uppercase text-[#878787] text-right max-w-[180px]" style={{ letterSpacing: "0.06em" }}>
              Years in brand & digital
            </span>
          </div>

          <div
            className="w-full border-t border-b border-[rgba(0,0,0,0.12)] flex items-end justify-between"
            style={{ paddingTop: "1.4rem", paddingBottom: "1.4rem" }}
          >
            <span className="font-display text-[3.8rem] text-[#E8622A] leading-[1]" style={{ letterSpacing: "0.02em" }}>2</span>
            <span className="text-[0.75rem] uppercase text-[#878787] text-right max-w-[180px]" style={{ letterSpacing: "0.06em" }}>
              National election campaigns
            </span>
          </div>

          <div className="w-full" style={{ marginTop: "2rem" }}>
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
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[rgba(0,0,0,0.08)]" />
    </section>
  );
}

function Marquee() {
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
      <div className="absolute left-0 top-0 bottom-0 w-[8rem] bg-gradient-to-r from-[#F0EDE6] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-[8rem] bg-gradient-to-l from-[#F0EDE6] to-transparent z-10 pointer-events-none" />

      <div className="flex" style={{ width: "fit-content" }}>
        {services.map((service, i) => (
          <div key={i} className="flex items-center" style={{ paddingRight: "3rem" }}>
            <span className={`text-[0.72rem] uppercase tracking-[0.18em] whitespace-nowrap ${i % 2 === 0 ? "text-[#878787]" : "text-[rgba(135,135,135,0.5)]"}`}>
              {service}
            </span>
            <span className="ml-[3rem] text-[#878787]">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Work() {
  const projects = [
    {
      id: "01",
      title: "PARTIDO\nSOCIALISTA",
      client: "Political Communication · 2021–2024",
      tags: ["Campaign Design", "Digital", "Outdoor"],
      description: "Comprehensive visual identity and campaign design for national election cycles.",
      image: "https://images.unsplash.com/photo-1646483395661-56b2e9947299?w=1080",
      gridColumn: "1 / 8",
      gridRow: "1 / 3",
    },
    {
      id: "02",
      title: "LIGHTFOOT\nTRAVEL",
      client: "Luxury Travel Brand · 2022–2023",
      tags: ["Brand Identity", "Editorial", "Print"],
      description: "Full brand identity system for a premium travel company.",
      image: "https://images.unsplash.com/photo-1762742316793-b1845065429a?w=1080",
      gridColumn: "8 / 13",
      gridRow: "1 / 2",
    },
    {
      id: "03",
      title: "OZ\nENERGIA",
      client: "Energy Sector · 2020–2022",
      tags: ["Campaign Design", "Outdoor", "Digital"],
      description: "National ATL and BTL campaign for energy provider.",
      image: "https://images.unsplash.com/photo-1628206554160-63e8c921e398?w=1080",
      gridColumn: "8 / 13",
      gridRow: "2 / 3",
    },
    {
      id: "04",
      title: "CÂMARA DE\nLISBOA",
      client: "Municipal Institution · 2019–2021",
      tags: ["Brand Strategy", "Visual Identity", "UX/UI"],
      description: "Digital transformation for Lisbon's municipal government.",
      image: "https://images.unsplash.com/photo-1664376193961-0460bdb45620?w=1080",
      gridColumn: "1 / 5",
      gridRow: "3 / 4",
    },
    {
      id: "05",
      title: "MADAM\nBŌ",
      client: "Food & Hospitality · 2023",
      tags: ["Brand Identity", "Art Direction", "Digital"],
      description: "Complete brand world for Asian fusion restaurant concept.",
      image: "https://images.unsplash.com/photo-1773122150545-b160a4486216?w=1080",
      gridColumn: "5 / 9",
      gridRow: "3 / 4",
    },
    {
      id: "06",
      title: "NOS\nTELECOM",
      client: "Telecommunications · 2021",
      tags: ["UX/UI Design", "Digital Strategy", "Campaign"],
      description: "UX strategy and digital campaign design.",
      image: "https://images.unsplash.com/photo-1700463108455-956c595bc97b?w=1080",
      gridColumn: "9 / 13",
      gridRow: "3 / 4",
    },
  ];

  return (
    <section id="work" className="bg-[#FAFAF7]" style={{ padding: "8rem 3rem" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-end justify-between" style={{ marginBottom: "4rem" }}>
          <div>
            <p
              className="text-[0.65rem] uppercase tracking-[0.25em] text-[#878787]"
              style={{ marginBottom: "0.75rem" }}
            >
              Selected Work
            </p>
            <h2
              className="font-display leading-[0.9]"
              style={{ 
                letterSpacing: "0.02em",
                fontSize: "clamp(4rem, 8vw, 9rem)"
              }}
            >
              <span style={{ display: "block" }}>SELECTED</span>
              <span style={{ display: "block", color: "#E8622A" }}>WORK</span>
            </h2>
          </div>
          <p
            className="font-serif italic text-[0.9rem] text-[#878787]"
            style={{ paddingBottom: "1rem" }}
          >
            06 projects
          </p>
        </div>

        <div
          className="grid gap-[12px]"
          style={{
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "420px 420px 360px",
          }}
        >
          {projects.map((project) => {
            const cardHeight = project.gridRow === "1 / 3" ? 852 : project.gridRow.includes("3") ? 360 : 420;
            const isLargeCard = cardHeight > 350;
            const titleSize = isLargeCard ? "clamp(2.2rem, 3.5vw, 4rem)" : "clamp(1.6rem, 2.5vw, 3rem)";

            return (
              <div
                key={project.id}
                className="relative overflow-hidden bg-[#F0EDE6]"
                style={{ 
                  gridColumn: project.gridColumn,
                  gridRow: project.gridRow,
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    filter: "brightness(0.45) saturate(0.7)",
                  }}
                />

                <div className="absolute inset-0 flex flex-col justify-between" style={{ padding: "2rem" }}>
                  <div className="flex items-start justify-between">
                    <span 
                      className="text-[0.65rem] tracking-[0.15em]"
                      style={{ color: "rgba(250, 250, 247, 0.45)" }}
                    >
                      {project.id}
                    </span>
                  </div>

                  <div>
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
                    <p 
                      className="font-serif italic text-[0.85rem] text-[#878787]"
                      style={{ marginTop: "0.5rem" }}
                    >
                      {project.client}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const clients = [
    { name: "Partido Socialista" },
    { name: "Lidl" },
    { name: "NOS" },
    { name: "ISCTE" },
    { name: "IDEFF" },
    { name: "Lightfoot Travel" },
    { name: "OZ Energia" },
    { name: "Madam Bō" },
    { name: "Kitchenette" },
    { name: "Skyhour" },
    { name: "Praça Beato" },
  ];

  return (
    <section className="bg-[#F0EDE6] border-t border-b border-[rgba(0,0,0,0.08)]" style={{ padding: "5rem 3rem" }}>
      <div className="max-w-[1200px] mx-auto">
        <p
          className="text-[0.65rem] uppercase tracking-[0.25em] text-[#878787] text-center"
          style={{ marginBottom: "2.5rem" }}
        >
          Brands & organisations worked with
        </p>

        <div className="flex flex-wrap justify-center">
          {clients.map((client, i) => (
            <div key={i} className="w-1/4 p-[1.25rem] flex items-center justify-center">
              <div className="w-[120px] h-[40px] flex items-center justify-center">
                <div className="text-[#0E0E0E] text-center font-display text-[1.2rem] brightness-0 opacity-30">
                  {client.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
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

  return (
    <section id="about" className="bg-[#FAFAF7]" style={{ padding: "9rem 3rem" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 gap-[6rem] items-start">
          <div>
            <p
              className="text-[0.65rem] uppercase tracking-[0.25em] text-[#878787]"
              style={{ marginBottom: "2.5rem" }}
            >
              About
            </p>

            <h2
              className="font-display leading-[0.92] text-[clamp(3rem,5.5vw,7rem)]"
              style={{ letterSpacing: "0.02em", marginBottom: "3.5rem" }}
            >
              CONNECTING<br />
              THE <span className="font-serif italic text-[#E8622A] text-[0.78em]">thinking</span><br />
              WITH THE<br />
              MAKING.
            </h2>

            <div className="flex flex-col" style={{ gap: "1.5rem" }}>
              <p className="text-[0.9rem] text-[rgba(14,14,14,0.52)] leading-[1.75]">
                Creative direction is the art of translating ambiguity into clarity — taking a brief, a feeling, or a business challenge and shaping it into something that moves people. Over 10 years, I've worked across political campaigns, lifestyle brands, public institutions and digital startups, always leading from both ends of the process.
              </p>

              <p className="text-[0.9rem] text-[rgba(14,14,14,0.52)] leading-[1.75]">
                My approach is rooted in strategy first. Before a single visual is drawn, I need to understand the audience, the moment and the why. Then the making begins — and I stay close to every stage: copywriting, design, photography, motion, development briefing and production oversight.
              </p>

              <p className="text-[0.9rem] text-[rgba(14,14,14,0.52)] leading-[1.75]">
                I've built teams, run studios and worked solo. I'm equally comfortable presenting to a government minister and rolling up my sleeves in Figma. The work only matters if it connects, converts, and lasts.
              </p>
            </div>
          </div>

          <div>
            <p
              className="text-[0.65rem] uppercase tracking-[0.25em] text-[#878787]"
              style={{ marginBottom: "2rem" }}
            >
              Areas of expertise
            </p>

            <div className="grid grid-cols-2 gap-[12px]" style={{ marginBottom: "2.5rem" }}>
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="border border-[rgba(0,0,0,0.09)] bg-[#F0EDE6]"
                  style={{ padding: "1.5rem" }}
                >
                  <h3 className="font-display text-[1.2rem] tracking-[0.06em]" style={{ marginBottom: "0.5rem" }}>{skill.title}</h3>
                  <p className="text-[0.78rem] text-[#878787] leading-[1.6]">{skill.description}</p>
                </div>
              ))}
            </div>

            <div className="flex" style={{ gap: "1rem" }}>
              <a
                href="/cv.pdf"
                className="inline-flex items-center text-white text-[0.75rem] uppercase tracking-[0.15em]"
                style={{ 
                  padding: "0.85rem 1.75rem",
                  gap: "0.5rem",
                  background: "#0E0E0E"
                }}
              >
                Download CV
              </a>

              <a
                href="https://linkedin.com"
                className="inline-flex items-center border border-[rgba(0,0,0,0.18)] text-[#0E0E0E] text-[0.75rem] uppercase tracking-[0.15em]"
                style={{ 
                  padding: "0.85rem 1.75rem",
                  gap: "0.5rem"
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const contactInfo = [
    { label: "Email", value: "hi@ivosousa.pt", link: "mailto:hi@ivosousa.pt" },
    { label: "LinkedIn", value: "/in/ivosousamartins", link: "https://linkedin.com/in/ivosousamartins" },
    { label: "Contra", value: "contra.com/ivosousamartins", link: "https://contra.com/ivosousamartins" },
    { label: "Phone", value: "+351 912 345 678", link: "tel:+351912345678" },
  ];

  return (
    <section id="contact" className="bg-[#F0EDE6] border-t border-[rgba(0,0,0,0.08)]" style={{ padding: "9rem 3rem" }}>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 gap-[6rem]">
          <div>
            <p
              className="text-[0.65rem] uppercase tracking-[0.25em] text-[#878787]"
              style={{ marginBottom: "2.5rem" }}
            >
              Get in touch
            </p>

            <h2
              className="font-display leading-[0.9] text-[clamp(3.5rem,7vw,9rem)]"
              style={{ letterSpacing: "0.02em", marginBottom: "2.5rem" }}
            >
              LET'S<br />
              <span className="text-[#E8622A]">WORK</span><br />
              TOGETHER.
            </h2>

            <p className="text-[0.9rem] text-[rgba(14,14,14,0.5)] max-w-[42ch] leading-[1.75]">
              Whether you're looking for creative direction, brand strategy, or a collaborative partner for your next project, I'd love to hear from you.
            </p>

            <div
              className="h-[2px] w-1/2 bg-gradient-to-r from-[#E8622A] to-transparent"
              style={{ marginTop: "3rem" }}
            />
          </div>

          <div style={{ paddingTop: "5rem" }}>
            <div className="border-t border-[rgba(0,0,0,0.09)]">
              {contactInfo.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  className="flex items-center border-b border-[rgba(0,0,0,0.09)]"
                  style={{ paddingTop: "1.25rem", paddingBottom: "1.25rem" }}
                >
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[#878787] w-[6rem]">
                    {item.label}
                  </span>
                  <span className="text-[1rem] text-[#0E0E0E] flex-1">{item.value}</span>
                </a>
              ))}
            </div>

            <div className="flex items-center" style={{ gap: "0.75rem", marginTop: "2.5rem" }}>
              <span className="w-[5px] h-[5px] rounded-full bg-[#2A9D5C]" />
              <span className="text-[0.72rem] uppercase tracking-[0.15em] text-[#2A9D5C]">
                Currently available for new projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#FAFAF7] border-t border-[rgba(0,0,0,0.08)]" style={{ padding: "2.5rem 3rem" }}>
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="font-display text-[1.25rem] tracking-[0.12em]">
          ISM<span className="text-[#E8622A]">.</span>
        </div>
        <div className="text-[0.7rem] text-[#878787]">
          © 2025 Ivo Sousa Martins · Creative Director · Lisbon
        </div>
        <div className="text-[0.65rem] uppercase tracking-[0.18em] text-[#878787]">
          ↑ Back to top
        </div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    
    const link1 = document.createElement('link');
    link1.rel = 'preconnect';
    link1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link1);
    
    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = 'anonymous';
    document.head.appendChild(link2);
    
    const link3 = document.createElement('link');
    link3.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Display:ital@1&family=DM+Sans:wght@300;400;500&display=swap';
    link3.rel = 'stylesheet';
    document.head.appendChild(link3);
    
    const style = document.createElement('style');
    style.textContent = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: 'DM Sans', sans-serif;
        color: #0E0E0E;
        background: #FAFAF7;
        overflow-x: hidden;
      }
      
      ::selection {
        background: #E8622A;
        color: #FAFAF7;
      }
      
      ::-webkit-scrollbar {
        width: 3px;
      }
      
      ::-webkit-scrollbar-track {
        background: #FAFAF7;
      }
      
      ::-webkit-scrollbar-thumb {
        background: #E8622A;
      }
      
      .font-display {
        font-family: 'Bebas Neue', sans-serif;
      }
      
      .font-serif {
        font-family: 'DM Serif Display', serif;
      }
      
      .font-sans {
        font-family: 'DM Sans', sans-serif;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <Marquee />
      <Work />
      <Clients />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
