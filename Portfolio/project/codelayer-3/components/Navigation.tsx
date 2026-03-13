import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? "bg-[rgba(250,250,247,0.94)] backdrop-blur-[16px] border-b border-[rgba(0,0,0,0.08)]" : ""
      }`}
      style={{ padding: "1.5rem 3rem" }}
    >
      <div className="flex items-center justify-between max-w-[1440px] mx-auto">
        {/* Logo */}
        <a href="#" className="font-display text-[1.4rem] tracking-[0.12em]">
          ISM<span className="text-[#E8622A]">.</span>
        </a>

        {/* Nav Links */}
        <div className="flex items-center gap-[2.5rem]">
          {["Work", "About", "Contact", "CV"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-[0.68rem] uppercase tracking-[0.22em] text-[#878787] transition-colors duration-300 hover:text-[#0E0E0E] group"
            >
              {item}
              <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-[#E8622A] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
