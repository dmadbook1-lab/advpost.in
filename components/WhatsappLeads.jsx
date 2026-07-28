'use client'

import {
  MessageCircle,
  ChevronLeft,
  Search,
  Bell,
  Heart,
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

/* ─── Step number badge ─── */
function StepBadge({ n, color = 'blue' }) {
  const colorMap = {
    blue: 'bg-blue-100 text-blue-600',
    orange: 'bg-orange-100 text-orange-600',
    green: 'bg-green-100 text-green-600',
  }
  return (
    <div className={`w-7 h-7 rounded-full ${colorMap[color]} grid place-items-center text-[12px] font-extrabold mx-auto mb-4`}>
      {n}
    </div>
  )
}

export default function WhatsappLeads() {
  return (
    <section className="bg-[#faf7fb] py-16 md:py-24">
      <div className="container-x">
        {/* ─── Heading ─── */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[color:var(--accent-soft)] border border-orange-100 text-[11px] font-bold text-[color:var(--accent)] tracking-[0.15em] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
            WhatsApp Leads
          </span>

          <h2 className="mt-5 text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.05] font-extrabold tracking-tight text-[color:var(--ink)]">
            Receive WhatsApp Leads<br />Instantly
          </h2>

          <p className="mt-5 text-[15px] md:text-[17px] text-[color:var(--muted)] leading-[1.6] max-w-2xl mx-auto">
            Turn every profile visitor into a potential customer. One tap connects them to
            your WhatsApp — no forms, no friction.
          </p>
        </div>

        {/* ─── 4-column flow: Browse → Enquiry → Chat → Meeting ─── */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 items-end max-w-6xl mx-auto">

          {/* ═════════ COLUMN 1 — CUSTOMER BROWSES ═════════ */}
          <div className="flex flex-col items-center">
            <StepBadge n="1" color="blue" />
            <Phone style={{ width: '220px', height: '440px' }}>
              <div className="flex flex-col h-full pt-8">
                {/* Header */}
                <div className="px-4 flex items-center justify-between">
                  <span className="text-[12px] font-extrabold text-[color:var(--ink)]">ADVpost</span>
                  <div className="flex items-center gap-2">
                    <Search className="w-3.5 h-3.5 text-[color:var(--ink)]" />
                    <Bell className="w-3.5 h-3.5 text-[color:var(--ink)]" />
                  </div>
                </div>

                {/* Filter chips */}
                <div className="px-4 mt-3 flex gap-1.5">
                  <span className="text-[8px] font-bold text-[color:var(--ink)] bg-gray-100 rounded-full px-2 py-0.5">All</span>
                  <span className="text-[8px] font-bold text-[color:var(--muted)] bg-gray-50 rounded-full px-2 py-0.5">Near</span>
                  <span className="text-[8px] font-bold text-[color:var(--muted)] bg-gray-50 rounded-full px-2 py-0.5">Fashion</span>
                </div>

                {/* Store 1 */}
                <div className="px-4 mt-3">
                  <div className="rounded-lg overflow-hidden bg-gray-100 aspect-[16/10]">
                    <img
                      src="/whatsapp/store-1.jpg"
                      alt=""
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                  </div>
                  <div className="mt-1.5 text-[10px] font-extrabold text-[color:var(--ink)]">Zara Style Hub</div>
                  <div className="text-[8px] text-[color:var(--muted)]">Fashion</div>
                  <button className="mt-1.5 w-full py-1.5 rounded-md bg-[color:var(--accent)] text-white text-[9px] font-bold">
                    Enquire
                  </button>
                </div>

                {/* Store 2 */}
                <div className="px-4 mt-3">
                  <div className="rounded-lg overflow-hidden bg-gray-100 aspect-[16/10]">
                    <img
                      src="/whatsapp/store-2.jpg"
                      alt=""
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.style.display = 'none' }}
                    />
                  </div>
                  <div className="mt-1.5 text-[10px] font-extrabold text-[color:var(--ink)]">TechZone Store</div>
                  <div className="text-[8px] text-[color:var(--muted)]">Electronics</div>
                  <button className="mt-1.5 w-full py-1.5 rounded-md bg-[color:var(--accent)] text-white text-[9px] font-bold">
                    Enquire
                  </button>
                </div>
              </div>
            </Phone>
            <div className="mt-4 text-[11px] font-bold text-[color:var(--muted)] tracking-[0.15em] uppercase">
              Customer Browses
            </div>
          </div>

          {/* ═════════ COLUMN 2 — TAPS WHATSAPP ═════════ */}
          <div className="flex flex-col items-center">
            <StepBadge n="2" color="blue" />
            <Phone style={{ width: '220px', height: '440px' }}>
              <div className="flex flex-col h-full">
                {/* Product image full-width */}
                <div className="h-[55%] bg-gradient-to-br from-green-700 to-emerald-900 relative overflow-hidden">
                  <img
                    src="/whatsapp/saree.jpg"
                    alt="Saree"
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                  {/* Top nav */}
                  <div className="absolute top-8 left-3 w-7 h-7 rounded-full bg-white grid place-items-center shadow">
                    <ChevronLeft className="w-3.5 h-3.5 text-[color:var(--ink)]" />
                  </div>
                  <div className="absolute top-8 right-3 w-7 h-7 rounded-full bg-white grid place-items-center shadow">
                    <Heart className="w-3.5 h-3.5 text-[color:var(--accent)] fill-current" />
                  </div>
                </div>

                {/* Product info */}
                <div className="flex-1 flex flex-col px-4 pt-3">
                  <div className="text-[13px] font-extrabold text-[color:var(--ink)]">Royal Silk Saree</div>
                  <div className="text-[15px] font-extrabold text-[color:var(--accent)] mt-0.5">₹2,499</div>
                  <p className="mt-1.5 text-[9px] text-[color:var(--muted)] leading-tight">
                    Handwoven pure silk from Varanasi. Available in 12 colors.
                  </p>

                  {/* Color chips */}
                  <div className="mt-2 flex gap-1">
                    <span className="text-[7px] font-semibold text-[color:var(--ink)] border border-gray-200 rounded px-1.5 py-0.5">Red</span>
                    <span className="text-[7px] font-semibold text-[color:var(--ink)] border border-gray-200 rounded px-1.5 py-0.5">Blue</span>
                    <span className="text-[7px] font-semibold text-[color:var(--ink)] border border-gray-200 rounded px-1.5 py-0.5">Gold</span>
                  </div>

                  {/* WhatsApp button */}
                  <button className="mt-auto mb-6 w-full py-2.5 rounded-lg bg-[color:var(--accent)] text-white text-[10px] font-bold flex items-center justify-center gap-1.5">
                    <MessageCircle className="w-3 h-3" />
                    WhatsApp Enquiry
                  </button>
                </div>
              </div>
            </Phone>
            <div className="mt-4 text-[11px] font-bold text-[color:var(--muted)] tracking-[0.15em] uppercase">
              Taps WhatsApp
            </div>
          </div>

          {/* ═════════ COLUMN 3 — CHAT STARTS ═════════ */}
          <div className="flex flex-col items-center">
            <StepBadge n="3" color="orange" />
            <Phone style={{ width: '220px', height: '440px' }}>
              <div className="flex flex-col h-full">
                {/* WhatsApp header */}
                <div className="bg-[#075e54] text-white pt-8 pb-2 px-3 flex items-center gap-2">
                  <ChevronLeft className="w-4 h-4" />
                  <div className="w-7 h-7 rounded-full bg-white grid place-items-center">
                    <div className="w-4 h-4 rounded-full bg-gray-300" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-[11px] font-bold">Rahul Verma</div>
                    <div className="text-[8px] opacity-80">online</div>
                  </div>
                </div>

                {/* Chat area */}
                <div className="flex-1 bg-[#ece5dd] px-3 py-3 space-y-2 overflow-hidden">
                  {/* Incoming */}
                  <div className="bg-white rounded-lg rounded-tl-none p-2 max-w-[85%] shadow-sm">
                    <div className="text-[9px] text-[color:var(--ink)] leading-tight">
                      Hi! I saw your product. Is it available?
                    </div>
                    <div className="text-[7px] text-gray-400 text-right mt-0.5">10:32</div>
                  </div>

                  {/* Outgoing (green) */}
                  <div className="bg-[#dcf8c6] rounded-lg rounded-tr-none p-2 max-w-[85%] ml-auto shadow-sm">
                    <div className="text-[9px] text-[color:var(--ink)] leading-tight">
                      Yes! Available in 3 colors. Send me your address.
                    </div>
                    <div className="text-[7px] text-gray-500 text-right mt-0.5">10:34 ✓✓</div>
                  </div>

                  {/* Incoming */}
                  <div className="bg-white rounded-lg rounded-tl-none p-2 max-w-[85%] shadow-sm">
                    <div className="text-[9px] text-[color:var(--ink)] leading-tight">
                      Great! Please share price details.
                    </div>
                    <div className="text-[7px] text-gray-400 text-right mt-0.5">10:35</div>
                  </div>
                </div>
              </div>
            </Phone>
            <div className="mt-4 text-[11px] font-extrabold text-[color:var(--accent)] tracking-[0.15em] uppercase">
              Chat Starts!
            </div>
          </div>

          {/* ═════════ COLUMN 4 — Meeting image with chat overlay ═════════ */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[260px] lg:max-w-none relative rounded-[24px] overflow-hidden aspect-[3/4] bg-gray-100 shadow-[0_20px_50px_-15px_rgba(30,20,80,0.25)]">
              <img
                src="/whatsapp/meeting.jpg"
                alt="Business meeting"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />

              {/* Chat overlay — Incoming */}
              <div className="absolute right-4 top-[55%] bg-white rounded-2xl rounded-tr-none p-3 max-w-[75%] shadow-xl">
                <div className="text-[12px] font-medium text-[color:var(--ink)] leading-tight">
                  Hi! I loved your product. Is it available?
                </div>
              </div>

              {/* Chat overlay — Outgoing (green) */}
              <div className="absolute right-4 bottom-6 bg-[#22c55e] text-white rounded-2xl rounded-br-none p-3 max-w-[75%] shadow-xl">
                <div className="text-[12px] font-medium leading-tight">
                  Yes! Available now. Let me share details 🌸
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}