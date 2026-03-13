export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FAFAF7] border-t border-[rgba(0,0,0,0.08)]" style={{ padding: "2.5rem 3rem" }}>
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="font-display text-[1.25rem] tracking-[0.12em]">
          ISM<span className="text-[#E8622A]">.</span>
        </div>

        {/* Copyright */}
        <div className="text-[0.7rem] text-[#878787]">
          © 2025 Ivo Sousa Martins · Creative Director · Lisbon
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="text-[0.65rem] uppercase tracking-[0.18em] text-[#878787] transition-colors duration-300 hover:text-[#E8622A]"
        >
          ↑ Back to top
        </button>
      </div>
    </footer>
  );
}
