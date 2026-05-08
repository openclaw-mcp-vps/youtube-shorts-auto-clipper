export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          AI-Powered Clipping
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Turn Long Videos into{" "}
          <span className="text-[#58a6ff]">Viral Shorts</span>{" "}
          — Automatically
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          ShortClip AI scans your long-form content, pinpoints the highest-engagement moments, and exports ready-to-publish YouTube Shorts with captions and thumbnails. No editing skills needed.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $15 / month
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No contracts.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["10x", "Faster than manual editing"],
            ["3–8", "Shorts per video on average"],
            ["Auto", "Captions & thumbnails included"],
          ].map(([stat, label]) => (
            <div key={stat} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-extrabold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Upload unlimited long-form videos",
              "AI detects top viral moments",
              "Auto-generated captions & thumbnails",
              "Direct YouTube Shorts export",
              "Priority processing queue",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "What video formats are supported?",
              "We support MP4, MOV, and MKV files up to 4 GB. Most YouTube exports work out of the box.",
            ],
            [
              "How does the AI pick viral moments?",
              "Our model analyzes speech energy, pacing, sentiment, and viewer-retention patterns from millions of videos to score each segment.",
            ],
            [
              "Can I edit the clips before exporting?",
              "Yes — after AI selection you get a lightweight trim editor to fine-tune start/end points, captions, and thumbnail before export.",
            ],
          ].map(([q, a]) => (
            <details
              key={q}
              className="bg-[#161b22] border border-[#30363d] rounded-xl px-6 py-4 group"
            >
              <summary className="cursor-pointer font-semibold text-[#c9d1d9] list-none flex justify-between items-center">
                {q}
                <span className="text-[#58a6ff] text-lg">+</span>
              </summary>
              <p className="mt-3 text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-10">
        © {new Date().getFullYear()} ShortClip AI. All rights reserved.
      </footer>
    </main>
  );
}
