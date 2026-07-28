'use client'

import {
  User,
  Menu,
  Tag,
  ChevronLeft,
  ListFilter,
  Search,
  Home,
  Users,
  LayoutGrid,
} from 'lucide-react'

/* ─── Phone frame ─── */
function Phone({ children, className = '', style }) {
  return (
    <div
      className={`rounded-[36px] bg-[color:var(--ink)] p-1.5 shadow-[0_20px_50px_-15px_rgba(30,20,80,0.35)] ${className}`}
      style={style}
    >
      <div className="relative overflow-hidden rounded-[30px] bg-white h-full flex flex-col">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 -translate-x-1/2 h-[16px] w-20 rounded-full bg-[color:var(--ink)] z-50" />
        {/* Bottom indicator */}
        <div className="absolute left-1/2 bottom-2 -translate-x-1/2 h-1 w-14 rounded-full bg-gray-300 z-50" />
        {children}
      </div>
    </div>
  )
}

export default function Storefront() {
  const cards = [
    { icon: User, label: 'Profile Page' },
    { icon: Menu, label: 'Product Catalogue' },
    { icon: Tag, label: 'Offer Banners' },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ═══════════════════════════════════════════ */}
          {/* LEFT: 3 phones cluster on soft-purple pill  */}
          {/* ═══════════════════════════════════════════ */}
          <div className="relative">
            {/* Soft rounded purple background pill */}
            <div className="relative rounded-[40px] bg-[#eeeaf5]/60 h-[560px] md:h-[620px] overflow-visible">

              {/* 🟣 LEFT PHONE — Fabrica Boutique profile */}
              <Phone
                className="absolute"
                style={{
                  width: '210px',
                  height: '440px',
                  left: '20px',
                  top: '110px',
                  zIndex: 10,
                }}
              >
                <div className="flex flex-col h-full pt-6">
                  {/* Shop image */}
                  <div className="h-24 bg-gradient-to-br from-gray-300 to-gray-500 overflow-hidden">
                    <img
                      src="/storefront.jpg"
                      alt="shop"
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                  </div>

                  {/* Avatar */}
                  <div className="px-4 -mt-6">
                    <div className="w-12 h-12 rounded-full bg-[color:var(--ink)] grid place-items-center text-white font-bold text-base border-4 border-white">
                      F
                    </div>
                  </div>

                  {/* Name */}
                  <div className="px-4 mt-2">
                    <div className="text-[15px] font-extrabold text-[color:var(--ink)] leading-tight">
                      Fabrica<br />Boutique
                    </div>
                    <div className="text-[10px] text-[color:var(--muted)] mt-0.5">
                      Fashion · Mumbai
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="px-4 mt-3 flex justify-between items-center border-b border-gray-100 pb-3">
                    <div className="text-center">
                      <div className="text-[13px] font-extrabold text-[color:var(--ink)]">48</div>
                      <div className="text-[8px] text-[color:var(--muted)]">Products</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[13px] font-extrabold text-[color:var(--ink)]">1.2K</div>
                      <div className="text-[8px] text-[color:var(--muted)]">Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[13px] font-extrabold text-[color:var(--ink)]">98%</div>
                      <div className="text-[8px] text-[color:var(--muted)]">Resp Rate</div>
                    </div>
                  </div>

                  {/* Product previews */}
                  <div className="px-4 mt-3 grid grid-cols-3 gap-2">
                    <div className="aspect-square rounded-lg bg-gradient-to-br from-[color:var(--ink)] to-[color:var(--accent)]" />
                    <div className="aspect-square rounded-lg bg-gradient-to-br from-[color:var(--ink)] to-[color:var(--accent)]" />
                    <div className="aspect-square rounded-lg border-2 border-dashed border-gray-200" />
                  </div>
                </div>
              </Phone>

              {/* 🟣 CENTER PHONE — Catalogue */}
              <Phone
                className="absolute"
                style={{
                  width: '210px',
                  height: '440px',
                  left: '50%',
                  top: '30px',
                  transform: 'translateX(-50%)',
                  zIndex: 30,
                }}
              >
                <div className="flex flex-col h-full pt-8">
                  {/* Header */}
                  <div className="px-4 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <ChevronLeft className="w-4 h-4 text-[color:var(--ink)]" />
                      <span className="text-[13px] font-extrabold text-[color:var(--ink)]">Catalogue</span>
                    </div>
                    <ListFilter className="w-4 h-4 text-[color:var(--ink)]" />
                  </div>

                  {/* Product grid */}
                  <div className="px-3 mt-4 grid grid-cols-2 gap-2">
                    {[
                      { name: 'Silk Saree', price: '₹2,499' },
                      { name: 'Kantha K...', price: '₹1,299' },
                      { name: 'Designer...', price: '₹3,799' },
                      { name: 'Gold Ear...', price: '₹899' },
                    ].map((p, i) => (
                      <div key={i}>
                        <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-[color:var(--ink)] to-[color:var(--accent)]" />
                        <div className="text-[10px] font-bold text-[color:var(--ink)] mt-1">{p.name}</div>
                        <div className="text-[10px] font-bold text-[color:var(--accent)]">{p.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Phone>

              {/* 🟣 RIGHT PHONE — Nearby search */}
              <Phone
                className="absolute"
                style={{
                  width: '210px',
                  height: '440px',
                  right: '20px',
                  top: '120px',
                  zIndex: 10,
                }}
              >
                <div className="flex flex-col h-full pt-8">
                  {/* Search bar */}
                  <div className="px-3">
                    <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2">
                      <Search className="w-3.5 h-3.5 text-gray-400" />
                      <span className="text-[10px] text-gray-400">Search businesses...</span>
                    </div>
                  </div>

                  {/* Nearby heading */}
                  <div className="px-3 mt-4 mb-2">
                    <div className="text-[13px] font-extrabold text-[color:var(--ink)]">Nearby</div>
                  </div>

                  {/* Business list */}
                  <div className="px-3 space-y-2">
                    {[
                      { icon: LayoutGrid, name: 'Spice Garden Restaurant', cat: 'Restaurant', km: '0.3 km' },
                      { icon: Home, name: 'Sai Electronics', cat: 'Electronics', km: '0.8 km' },
                      { icon: Users, name: 'Bloom Salon', cat: 'Salon', km: '1.2 km' },
                    ].map((b, i) => (
                      <div key={i} className="flex items-center gap-2 py-1">
                        <div className="w-8 h-8 rounded-lg bg-[#eeeaf5] grid place-items-center flex-shrink-0">
                          <b.icon className="w-4 h-4 text-[color:var(--ink)]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <div className="text-[10px] font-bold text-[color:var(--ink)] truncate">{b.name}</div>
                            <div className="text-[9px] font-bold text-[color:var(--accent)] flex-shrink-0">{b.km}</div>
                          </div>
                          <div className="text-[9px] text-[color:var(--muted)]">{b.cat}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Phone>
            </div>
          </div>

          {/* ═══════════════════════════════════════════ */}
          {/* RIGHT: Copy + image + feature cards         */}
          {/* ═══════════════════════════════════════════ */}
          <div>
            {/* Pill */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[color:var(--accent-soft)] border border-orange-100 text-[11px] font-bold text-[color:var(--ink)] tracking-wider uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
              Digital Storefront
            </span>

            {/* Heading */}
            <h2 className="mt-4 text-[32px] sm:text-[40px] lg:text-[52px] leading-[1.05] font-extrabold tracking-tight text-[color:var(--ink)]">
              Create Your Digital<br />Storefront
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6] text-[color:var(--muted)] max-w-xl">
              Your business deserves a beautiful online presence. ADVpost gives
              every local business a professional storefront reachable by
              thousands of customers.
            </p>

            {/* Shop image */}
            <div className="mt-6 rounded-[24px] overflow-hidden bg-gray-100">
              <img
                src="/storefront.jpg"
                alt="Storefront"
                className="w-full h-[220px] md:h-[260px] object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </div>

            {/* Feature cards */}
            <div className="mt-5 grid grid-cols-3 gap-3">
              {cards.map((c, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-[#f4f2fb] px-4 py-6 flex flex-col items-center text-center"
                >
                  <div className="w-11 h-11 rounded-full bg-white grid place-items-center mb-3 shadow-sm">
                    <c.icon className="w-5 h-5 text-[color:var(--ink)]" strokeWidth={2} />
                  </div>
                  <div className="text-[13px] md:text-[14px] font-extrabold text-[color:var(--ink)]">
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