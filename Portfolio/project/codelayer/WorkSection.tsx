{/* FEATURED CASE STUDY */}

<div className="mb-24">

  <p className="text-xs uppercase tracking-[0.25em] text-gray-500 mb-6">
    Featured Case Study
  </p>

  <div className="relative h-[70vh] bg-neutral-800 overflow-hidden group">

    {/* Background */}
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
      style={{
        backgroundImage: "url('/projects/ps-campaign.jpg')",
        filter: "brightness(0.6)"
      }}
    />

    {/* Content */}
    <div className="absolute bottom-12 left-12 max-w-xl">

      <h3 className="font-display text-6xl leading-[0.9]">
        PARTIDO <br /> SOCIALISTA
      </h3>

      <p className="italic text-orange-500 mt-2">
        Political Communication · 2021–2024
      </p>

      <div className="flex gap-2 mt-4">
        <span className="border border-orange-500/40 px-2 py-1 text-[10px] uppercase tracking-widest text-orange-500">
          Campaign Design
        </span>
        <span className="border border-orange-500/40 px-2 py-1 text-[10px] uppercase tracking-widest text-orange-500">
          Digital
        </span>
        <span className="border border-orange-500/40 px-2 py-1 text-[10px] uppercase tracking-widest text-orange-500">
          Outdoor
        </span>
      </div>

      <p className="mt-4 text-sm text-gray-300 leading-relaxed">
        Creative direction and digital communication for national
        election campaigns, contributing to visual assets across
        billboards, digital platforms, and campaign systems.
      </p>

      <a
        href="/work/partido-socialista"
        className="inline-flex items-center gap-4 mt-6 uppercase tracking-[0.18em] text-xs"
      >
        View case study →
      </a>

    </div>

  </div>

</div>