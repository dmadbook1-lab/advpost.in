'use client'

import { Star } from 'lucide-react'

export default function Testimonials() {
  const items = [
    {
      n: 'Priya Sharma',
      b: 'Priya Fashion House · Jaipur',
      g: '+180%',
      q: '"ADVpost transformed my boutique. I now get 30-40 WhatsApp leads every single day. My revenue tripled in 6 months!"',
      img: '/testimonials/priya.jpg',
    },
    {
      n: 'Rahul Mehta',
      b: 'Raj Electronics · Surat',
      g: '+240%',
      q: '"Before ADVpost, I only had walk-in customers. Now I get buyers from across the city discovering my shop every day."',
      img: '/testimonials/rahul.jpg',
    },
    {
      n: 'Sunita Patel',
      b: 'Sunita Jewels · Ahmedabad',
      g: '+310%',
      q: '"The product catalogue feature is brilliant. My customers browse and enquire before even visiting. Sales are up massively."',
      img: '/testimonials/sunita.jpg',
    },
    {
      n: 'Arjun Nair',
      b: "Arjun's Spice Garden · Kochi",
      g: '+150%',
      q: '"My restaurant was unknown outside the neighbourhood. ADVpost helped me reach customers 10km away. Fully booked weekends now."',
      img: '/testimonials/arjun.jpg',
    },
  ]

  // Reusable card component
  const Card = ({ t }) => (
    <div className="bg-white rounded-[24px] p-6 shadow-[0_4px_20px_-8px_rgba(30,20,80,0.08)] hover:shadow-[0_10px_30px_-8px_rgba(30,20,80,0.15)] transition">
      {/* Top row: avatar + name/business + growth badge */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-200 to-blue-400 flex-shrink-0">
            <img
              src={t.img}
              alt={t.n}
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
          </div>

          <div className="min-w-0">
            <div className="text-[15px] font-extrabold text-[color:var(--ink)]">{t.n}</div>
            <div className="text-[11px] text-[color:var(--muted)] truncate">{t.b}</div>
          </div>
        </div>

        <div className="bg-[#f4f2fb] rounded-lg px-2.5 py-1.5 text-center flex-shrink-0">
          <div className="text-[13px] font-extrabold text-[color:var(--accent)] leading-none">{t.g}</div>
          <div className="text-[8px] text-[color:var(--muted)] tracking-wider uppercase font-semibold mt-0.5">Growth</div>
        </div>
      </div>

      {/* Stars */}
      <div className="mt-4 flex items-center gap-0.5">
        {[0, 1, 2, 3, 4].map((s) => (
          <Star key={s} className="w-4 h-4 fill-[color:var(--accent)] text-[color:var(--accent)]" />
        ))}
      </div>

      {/* Quote */}
      <p className="mt-3 text-[14px] leading-[1.6] text-[color:var(--ink)] font-medium">
        {t.q}
      </p>
    </div>
  )

  const firstThree = items.slice(0, 3)
  const lastOne = items[3]

  return (
    <section id="stories" className="bg-[#f4f2fb] py-16 md:py-24">
      <div className="container-x">
        {/* ─── Heading ─── */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[12px] font-bold text-[color:var(--ink)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
            Success Stories
          </span>

          <h2 className="mt-5 text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.05] font-extrabold tracking-tight text-[color:var(--ink)]">
            Real Results from Real Businesses
          </h2>

          <p className="mt-4 text-[15px] md:text-[17px] text-[color:var(--muted)] leading-[1.6] max-w-2xl mx-auto">
            Thousands of Indian entrepreneurs are growing their sales every day with ADVpost.
          </p>
        </div>

        {/* ─── First row: 3 cards ─── */}
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {firstThree.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>

        {/* ─── Second row: 4th card centered ─── */}
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="hidden lg:block" /> {/* empty spacer col-1 */}
          <Card t={lastOne} />
          <div className="hidden lg:block" /> {/* empty spacer col-3 */}
        </div>
      </div>
    </section>
  )
}