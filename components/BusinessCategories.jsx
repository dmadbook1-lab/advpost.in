'use client'

import {
  Lock,
  UtensilsCrossed,
  Monitor,
  Sofa,
  ArrowUp,
  Car,
  Heart,
  Scissors,
  ShoppingCart,
  Factory,
} from 'lucide-react'

export default function BusinessCategories() {
  const cats = [
    { t: 'Fashion Boutique', tag: 'Fashion', icon: Lock, img: '/categories/fashion.jpg' },
    { t: 'Restaurant', tag: 'Food & Dining', icon: UtensilsCrossed, img: '/categories/restaurant.jpg' },
    { t: 'Electronics Shop', tag: 'Electronics', icon: Monitor, img: '/categories/electronics.jpg' },
    { t: 'Furniture Store', tag: 'Furniture', icon: Sofa, img: '/categories/furniture.jpg' },
    { t: 'Agriculture', tag: 'Agri Business', icon: ArrowUp, img: '/categories/agriculture.jpg' },
    { t: 'Auto Dealer', tag: 'Automobile', icon: Car, img: '/categories/auto.jpg' },
    { t: 'Pharmacy', tag: 'Healthcare', icon: Heart, img: '/categories/pharmacy.jpg' },
    { t: 'Beauty Salon', tag: 'Salon & Spa', icon: Scissors, img: '/categories/salon.jpg' },
    { t: 'Local Kirana', tag: 'Local Shop', icon: ShoppingCart, img: '/categories/kirana.jpg' },
    { t: 'Manufacturer', tag: 'Manufacturing', icon: Factory, img: '/categories/manufacturer.jpg' },
  ]

  // Reusable card component
  const Card = ({ c }) => (
    <div className="group cursor-pointer bg-white rounded-[20px] p-3 shadow-[0_4px_12px_-4px_rgba(30,20,80,0.08)] hover:shadow-[0_10px_25px_-8px_rgba(30,20,80,0.15)] transition">
      <div className="relative rounded-[14px] overflow-hidden aspect-square bg-gray-100">
        <img
          src={c.img}
          alt={c.t}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />

        {/* Tag pill (bottom-right on image) */}
        <div className="absolute bottom-2 right-2 bg-white rounded-full shadow-md px-2.5 py-1 flex items-center gap-1.5">
          <c.icon className="w-3 h-3 text-[color:var(--ink)]" strokeWidth={2.2} />
          <span className="text-[10px] font-bold text-[color:var(--ink)]">{c.tag}</span>
        </div>
      </div>

      <div className="mt-3 mb-1 px-1 text-[14px] font-extrabold text-[color:var(--ink)]">
        {c.t}
      </div>
    </div>
  )

  const firstRow = cats.slice(0, 6)  // 6 cards
  const secondRow = cats.slice(6)    // 4 cards

  return (
    <section id="categories" className="bg-[#f4f2fb] py-16 md:py-24">
      <div className="container-x">
        {/* ─── Heading ─── */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-orange-100 text-[11px] font-bold text-[color:var(--ink)] tracking-[0.15em] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
            Every Business
          </span>

          <h2 className="mt-5 text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.05] font-extrabold tracking-tight text-[color:var(--ink)]">
            Built For Every Business
          </h2>

          <p className="mt-4 text-[15px] md:text-[17px] text-[color:var(--muted)] leading-[1.6] max-w-2xl mx-auto">
            From boutiques to factories, from restaurants to farms — ADVpost works for every
            kind of Indian business.
          </p>
        </div>

        {/* ─── First row: 6 cards ─── */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">
          {firstRow.map((c, i) => (
            <Card key={i} c={c} />
          ))}
        </div>

        {/* ─── Second row: 4 cards centered (with spacer on each side) ─── */}
        <div className="mt-4 md:mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">
          {/* Left spacer (only on desktop) */}
          <div className="hidden lg:block" />

          {secondRow.map((c, i) => (
            <Card key={i} c={c} />
          ))}

          {/* Right spacer (only on desktop) */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}