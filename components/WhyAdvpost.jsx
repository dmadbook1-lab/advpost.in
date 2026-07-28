'use client'

import { User, Package, MessageSquare, TrendingUp, BadgeCheck } from 'lucide-react'

export default function WhyAdvpost() {
  const features = [
    {
      num: '01',
      icon: User,
      title: 'Create Your Profile',
      desc: 'Set up a beautiful verified business profile in under 5 minutes.',
      active: true,
    },
    {
      num: '02',
      icon: Package,
      title: 'Upload Products',
      desc: 'Showcase your products with photos, prices, and descriptions.',
      active: false,
    },
    {
      num: '03',
      icon: MessageSquare,
      title: 'Receive Enquiries',
      desc: 'Get instant WhatsApp leads from customers who discover your business.',
      active: false,
    },
    {
      num: '04',
      icon: TrendingUp,
      title: 'Grow Sales',
      desc: 'Publish posts, reels, and offers to keep customers engaged.',
      active: false,
    },
  ]

  return (
    <section id="features" className="bg-white py-16 md:py-24">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ─── LEFT: Image + floating cards ─── */}
          <div className="relative">
            {/* Rounded image container */}
            <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] bg-gray-100">
              <img
                src="/why-advpost.png"
                alt="Business owner"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />

              {/* 🟠 Floating "+320% Sales Growth" card — top left */}
              <div className="absolute top-5 left-5 bg-white rounded-2xl shadow-[0_10px_30px_-8px_rgba(30,20,80,0.25)] px-3 py-2.5 flex items-center gap-2.5 z-10">
                <div className="h-9 w-9 rounded-xl bg-[color:var(--accent-soft)] grid place-items-center flex-shrink-0">
                  <TrendingUp className="h-4 w-4 text-[color:var(--accent)]" strokeWidth={2.5} />
                </div>
                <div className="leading-tight pr-1">
                  <div className="text-[15px] font-extrabold text-[color:var(--ink)]">+320%</div>
                  <div className="text-[10px] text-[color:var(--muted)] font-medium">Sales Growth</div>
                </div>
              </div>

              {/* 📱 Phone-shape card CUT OFF at bottom (only top half visible) */}
             <div
  className="absolute w-[62%] max-w-[280px] bg-white rounded-t-[28px] shadow-[0_-10px_30px_-8px_rgba(30,20,80,0.15)] px-5 pt-4 z-10"
  style={{ bottom: 0, left: '45%', height: '250px' }}
>
                {/* Notch handle */}
                <div className="w-14 h-1.5 rounded-full bg-gray-200 mx-auto mb-3" />

                {/* Avatar */}
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-[color:var(--ink)] grid place-items-center text-white font-bold text-sm mb-2">
                    F
                  </div>

                  {/* Name + Verified pill */}
                  <div className="flex items-center gap-1.5">
                    <div className="text-[13px] font-extrabold text-[color:var(--ink)]">Fabrica Boutique</div>
                    <div className="flex items-center gap-0.5 bg-[color:var(--accent)] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                      <BadgeCheck className="h-2.5 w-2.5" />
                      Verified
                    </div>
                  </div>
                  <div className="text-[10px] text-[color:var(--muted)] mt-0.5">Fashion · Mumbai</div>
                </div>

                {/* Stats row */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-[14px] font-extrabold text-[color:var(--ink)]">48</div>
                    <div className="text-[9px] text-[color:var(--muted)]">Products</div>
                  </div>
                  <div>
                    <div className="text-[14px] font-extrabold text-[color:var(--ink)]">1.2K</div>
                    <div className="text-[9px] text-[color:var(--muted)]">Followers</div>
                  </div>
                  <div>
                    <div className="text-[14px] font-extrabold text-[color:var(--ink)]">98%</div>
                    <div className="text-[9px] text-[color:var(--muted)]">Response</div>
                  </div>
                </div>

                {/* Product grid (gets cut off at bottom by design) */}
                <div className="mt-3 grid grid-cols-3 gap-1.5">
                  <div className="aspect-square rounded-md bg-gray-100" />
                  <div className="aspect-square rounded-md bg-gray-100" />
                  <div className="aspect-square rounded-md bg-gray-100" />
                </div>
              </div>
            </div>
          </div>

          {/* ─── RIGHT: Copy + feature list ─── */}
          <div>
            {/* Small pill */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[color:var(--accent-soft)] border border-orange-100 text-[12px] font-semibold text-[color:var(--ink)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
              Why ADVpost
            </span>

            {/* Heading */}
            <h2 className="mt-4 text-[32px] sm:text-[40px] lg:text-[52px] leading-[1.05] font-extrabold tracking-tight text-[color:var(--ink)]">
              Why Businesses Love<br />ADVpost
            </h2>

            {/* Subtitle */}
            <p className="mt-4 text-[15px] md:text-[16px] leading-[1.6] text-[color:var(--muted)] max-w-lg">
              Everything you need to build a digital presence, attract customers, and grow your business — all in one app.
            </p>

            {/* Feature list */}
            <div className="mt-8 space-y-3">
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`
                    flex items-start gap-4 rounded-2xl p-4 transition
                    ${f.active
                      ? 'bg-[#f4f2fb] border-2 border-[#e6e3f5]'
                      : 'bg-transparent border-2 border-transparent hover:bg-gray-50'}
                  `}
                >
                  {/* Icon circle */}
                  <div
                    className={`
                      w-11 h-11 rounded-full grid place-items-center flex-shrink-0
                      ${f.active
                        ? 'bg-[color:var(--ink)] text-white'
                        : 'bg-white border border-gray-200 text-gray-400'}
                    `}
                  >
                    <f.icon className="h-5 w-5" strokeWidth={2} />
                  </div>

                  {/* Text */}
                  <div className="flex-1 pt-0.5">
                    <div className="text-[11px] font-bold text-[color:var(--accent)] tracking-wider mb-0.5">
                      {f.num}
                    </div>
                    <h3 className="text-[16px] md:text-[17px] font-extrabold text-[color:var(--ink)]">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-[13px] md:text-[14px] text-[color:var(--muted)] leading-[1.5]">
                      {f.desc}
                    </p>
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