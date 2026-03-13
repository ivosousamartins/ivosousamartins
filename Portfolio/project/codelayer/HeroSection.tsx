<section className="relative grid grid-cols-2 min-h-screen overflow-hidden">

  {/* BACKGROUND TYPOGRAPHY */}
  <div className="absolute bottom-[-40px] right-[-20px] pointer-events-none select-none">
    <span
      className="
      font-display
      text-[clamp(200px,20vw,380px)]
      leading-none
      text-transparent
      opacity-10
      "
      style={{
        WebkitTextStroke: "1px #E8622A",
      }}
    >
      CREATIVE
    </span>
  </div>

  {/* LEFT COLUMN */}
  <div className="flex flex-col justify-end pb-16 pr-16 relative z-10">

    <p className="uppercase tracking-[0.25em] text-[10px] text-orange-500 mb-6">
      Creative Director · Lisbon, Portugal
    </p>

    <h1 className="font-display leading-[0.9] text-[clamp(80px,10vw,140px)]">
      IVO
      <span className="block text-orange-500">
        SOUSA <br /> MARTINS
      </span>
    </h1>

    <p className="font-serif italic text-gray-500 mt-6 text-xl">
      Brand Identity, Campaigns & Digital Design
    </p>

    <p className="text-gray-500 mt-6 max-w-[420px] text-sm leading-relaxed">
      I connect the thinking with the making. From brief to final asset,
      across every channel and format.
    </p>

    <a
      href="#work"
      className="mt-10 uppercase tracking-[0.18em] text-xs flex items-center gap-4"
    >
      View selected work →
    </a>
  </div>

  {/* RIGHT COLUMN (STATS) */}
  <div className="flex flex-col justify-center gap-6 pl-16">

    <span className="text-xs uppercase tracking-[0.2em] text-orange-500 border border-orange-500/30 px-3 py-1 w-fit">
      Available for projects
    </span>

    <div className="border-t border-neutral-700 pt-6 flex justify-between">
      <span className="font-display text-5xl">10+</span>
      <span className="text-xs uppercase text-gray-500 max-w-[120px] text-right">
        Years in brand & digital
      </span>
    </div>

    <div className="border-t border-neutral-700 pt-6 flex justify-between">
      <span className="font-display text-5xl">2</span>
      <span className="text-xs uppercase text-gray-500 max-w-[120px] text-right">
        National election campaigns
      </span>
    </div>

    <div className="border-t border-neutral-700 pt-6 flex justify-between">
      <span className="font-display text-lg">PT · UK · US · ES</span>
      <span className="text-xs uppercase text-gray-500 max-w-[120px] text-right">
        Markets worked across
      </span>
    </div>

  </div>

</section>