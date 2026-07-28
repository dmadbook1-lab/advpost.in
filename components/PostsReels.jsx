'use client'

import {
  Heart,
  MessageCircle,
  Share2,
  Play,
  Video,
  Image as ImageIcon,
  Megaphone,
  Tag,
  Plus,
  Flame,
} from 'lucide-react'

/* ─── Phone frame ─── */
function Phone({ children, className = '', style }) {
  return (
    <div
      className={`rounded-[32px] bg-[color:var(--ink)] p-1.5 shadow-[0_20px_50px_-15px_rgba(30,20,80,0.4)] ${className}`}
      style={style}
    >
      <div className="relative overflow-hidden rounded-[26px] h-full flex flex-col">
        {children}
      </div>
    </div>
  )
}

export default function PostsReels() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ═══════════════════════════════════════════ */}
          {/* LEFT — Reel image with floating stat cards  */}
          {/* ═══════════════════════════════════════════ */}
          <div className="relative">
            <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] bg-gray-100">
              <img
                src="/reel.png"
                alt="Reel creator"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />

              {/* 🔴 2.4K Likes badge */}
              <div className="absolute top-6 right-6 bg-white rounded-full shadow-[0_10px_30px_-8px_rgba(30,20,80,0.25)] px-3.5 py-2 flex items-center gap-2 z-10">
                <div className="w-6 h-6 rounded-full bg-[color:var(--accent-soft)] grid place-items-center">
                  <Heart className="w-3 h-3 text-[color:var(--accent)] fill-current" />
                </div>
                <span className="text-[13px] font-extrabold text-[color:var(--ink)]">2.4K Likes</span>
              </div>

              {/* 💬 312 Comments badge */}
              <div className="absolute top-[85px] right-6 bg-white rounded-full shadow-[0_10px_30px_-8px_rgba(30,20,80,0.25)] px-3.5 py-2 flex items-center gap-2 z-10">
                <div className="w-6 h-6 rounded-full bg-[color:var(--accent-soft)] grid place-items-center">
                  <MessageCircle className="w-3 h-3 text-[color:var(--accent)]" />
                </div>
                <span className="text-[13px] font-extrabold text-[color:var(--ink)]">312 Comments</span>
              </div>

              {/* 🔗 890 Shares badge */}
              <div className="absolute top-[144px] right-6 bg-white rounded-full shadow-[0_10px_30px_-8px_rgba(30,20,80,0.25)] px-3.5 py-2 flex items-center gap-2 z-10">
                <div className="w-6 h-6 rounded-full bg-[color:var(--accent-soft)] grid place-items-center">
                  <Share2 className="w-3 h-3 text-[color:var(--accent)]" />
                </div>
                <span className="text-[13px] font-extrabold text-[color:var(--ink)]">890 Shares</span>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════ */}
          {/* RIGHT — Copy + 3 phones + 4 feature cards   */}
          {/* ═══════════════════════════════════════════ */}
          <div>
            {/* Pill */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[color:var(--accent-soft)] border border-orange-100 text-[11px] font-bold text-[color:var(--ink)] tracking-wider uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
              Posts & Reels
            </span>

            {/* Heading */}
            <h2 className="mt-4 text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.05] font-extrabold tracking-tight text-[color:var(--ink)]">
              Publish Posts &amp; Reels to<br />Grow Faster
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6] text-[color:var(--muted)] max-w-lg">
              Engage your audience with posts, short videos, promotional
              offers, and trending product showcases. Go viral with your
              local business.
            </p>

            {/* 3-Phone cluster */}
            <div className="mt-8 relative h-[440px] mx-auto max-w-[560px]">

              {/* ⬅️ LEFT PHONE — Posts list (tilted -10°) */}
              {/* ⬅️ LEFT PHONE — Posts list (overlaps center) */}
              <Phone
                className="absolute bg-white rotate-[-10deg]"
                style={{
                  width: '160px',
                  height: '340px',
                  left: '30px',       // 🔑 was 0px — moved inward
                  top: '50px',
                  zIndex: 10,
                }}
              >
                <div className="flex flex-col h-full bg-white p-3 pt-4">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-[15px] font-extrabold text-[color:var(--ink)]">Posts</div>
                    <button className="text-[9px] font-bold text-white bg-[color:var(--accent)] rounded-full px-2 py-1 flex items-center gap-0.5">
                      <Plus className="w-2.5 h-2.5" /> Create
                    </button>
                  </div>

                  {/* Filter chips */}
                  <div className="flex gap-1 mb-3">
                    <span className="text-[8px] font-bold text-white bg-[color:var(--ink)] rounded-full px-2 py-0.5">All</span>
                    <span className="text-[8px] font-bold text-[color:var(--muted)] bg-gray-100 rounded-full px-2 py-0.5">Offers</span>
                    <span className="text-[8px] font-bold text-[color:var(--muted)] bg-gray-100 rounded-full px-2 py-0.5">Promo</span>
                  </div>

                  {/* Post 1 */}
                  <div className="mb-2 rounded-lg overflow-hidden border border-gray-100">
                    <div className="p-2 flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-pink-300" />
                      <div className="leading-tight flex-1 min-w-0">
                        <div className="text-[8px] font-bold text-[color:var(--ink)] truncate">StyleHub Fashion</div>
                        <div className="text-[7px] text-[color:var(--muted)]">Fashion · Verified</div>
                      </div>
                    </div>
                    <div className="mx-2 mb-2 rounded-md h-16 bg-pink-100 relative">
                      <span className="absolute top-1 left-1 text-[7px] font-bold text-white bg-[color:var(--accent)] px-1 py-0.5 rounded">50% OFF</span>
                    </div>
                  </div>

                  {/* Post 2 */}
                  <div className="rounded-lg overflow-hidden border border-gray-100">
                    <div className="p-2 flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-orange-400" />
                      <div className="leading-tight flex-1 min-w-0">
                        <div className="text-[8px] font-bold text-[color:var(--ink)] truncate">AutoPro Motors</div>
                        <div className="text-[7px] text-[color:var(--muted)]">Automobile · Verified</div>
                      </div>
                    </div>
                    <div className="mx-2 mb-2 rounded-md h-10 bg-amber-100 relative">
                      <span className="absolute top-1 left-1 text-[7px] font-bold text-white bg-[color:var(--accent)] px-1 py-0.5 rounded">NEW</span>
                    </div>
                  </div>
                </div>
              </Phone>

              {/* 🟣 CENTER PHONE — Reel player (main, upright) */}
              <Phone
                className="absolute"
                style={{
                  width: '200px',
                  height: '420px',
                  left: '50%',
                  top: '10px',
                  transform: 'translateX(-50%)',
                  zIndex: 30,
                }}
              >
                <div className="flex flex-col h-full bg-[color:var(--ink)] text-white relative">
                  {/* Notch */}
                  <div className="absolute left-1/2 top-2 -translate-x-1/2 h-4 w-16 rounded-full bg-black z-50" />

                  {/* Status bar */}
                  <div className="flex items-center justify-between px-4 pt-6 pb-2">
                    <span className="text-[9px] font-semibold">9:41</span>
                    <div className="w-6 h-2 rounded-sm border border-white/50" />
                  </div>

                  {/* Play button center */}
                  <div className="flex-1 flex flex-col items-center justify-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-white/20 grid place-items-center backdrop-blur">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                    <div className="text-[11px] font-medium text-white/80">Fashion Collection 2024</div>
                  </div>

                  {/* Bottom stats */}
                  <div className="px-4 pb-2 text-right">
                    <div className="text-[13px] font-extrabold">8.2K</div>
                    <div className="text-[13px] font-extrabold mt-0.5">342</div>
                  </div>

                  {/* Bottom card */}
                  <div className="mx-3 mb-3 bg-white/10 backdrop-blur rounded-2xl p-2.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-white grid place-items-center flex-shrink-0">
                        <div className="w-5 h-5 rounded-full bg-[color:var(--ink)]" />
                      </div>
                      <div className="leading-tight flex-1 min-w-0">
                        <div className="text-[10px] font-bold text-white truncate">StyleHub Fashion</div>
                        <div className="text-[8px] text-white/70">New Summer Collection</div>
                      </div>
                      <div className="text-[9px] font-bold text-white">1.1K</div>
                    </div>
                    <div className="mt-2 flex items-center gap-1.5">
                      <button className="flex-1 bg-[color:var(--accent)] text-white text-[9px] font-bold py-1.5 rounded-md">
                        Shop Now — $49.99
                      </button>
                      <button className="w-7 h-7 rounded-md bg-green-500 grid place-items-center flex-shrink-0">
                        <span className="text-[8px] font-bold text-white">WA</span>
                      </button>
                    </div>
                  </div>
                </div>
              </Phone>


              {/* ➡️ RIGHT PHONE — Trending reels (overlaps center) */}
              <Phone
                className="absolute rotate-[10deg]"
                style={{
                  width: '160px',
                  height: '340px',
                  right: '30px',      // 🔑 was 0px — moved inward
                  top: '60px',
                  zIndex: 10,
                }}
              >
                <div className="flex flex-col h-full bg-gradient-to-b from-[#6b46c1] to-[#4c1d95] text-white p-3 pt-4 relative">
                  {/* TRENDING badge */}
                  <div className="inline-flex items-center gap-1 bg-[color:var(--accent)] text-white text-[8px] font-bold px-2 py-1 rounded-md self-start">
                    <Flame className="w-2.5 h-2.5" />
                    TRENDING
                  </div>

                  {/* Play button center */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 grid place-items-center backdrop-blur">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>

                  {/* Right side icons */}
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-white/20 grid place-items-center">
                      <Heart className="w-3 h-3 text-white" />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-white/20 grid place-items-center">
                      <MessageCircle className="w-3 h-3 text-white" />
                    </div>
                    <div className="w-6 h-6 rounded-full bg-white/20 grid place-items-center">
                      <Share2 className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* Bottom title */}
                  <div className="mt-auto">
                    <div className="text-[11px] font-extrabold">Weekend Sale — 30% Off</div>
                  </div>
                </div>
              </Phone>
            </div>

            {/* 4 Feature cards */}
            <div className="mt-6 grid grid-cols-4 gap-2 md:gap-3">
              {[
                { icon: Video, label: 'Reels' },
                { icon: ImageIcon, label: 'Posts' },
                { icon: Megaphone, label: 'Promotions' },
                { icon: Tag, label: 'Offers' },
              ].map((c, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-gray-50 hover:bg-gray-100 transition px-3 py-5 flex flex-col items-center text-center cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-white grid place-items-center mb-2 shadow-sm">
                    <c.icon className="w-4 h-4 text-[color:var(--accent)]" strokeWidth={2.2} />
                  </div>
                  <div className="text-[11px] md:text-[12px] font-extrabold text-[color:var(--ink)]">
                    {c.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}