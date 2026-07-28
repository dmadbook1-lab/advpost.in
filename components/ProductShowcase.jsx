'use client'

import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'

/* Product data — used for both grid + phone rotation */
const products = [
  {
    img: '/products/necklace.jpg',
    name: 'Diamond Necklace',
    price: '₹45,999',
    desc: 'Elegant handcrafted diamond necklace with 22k gold setting.',
    colors: ['#e63946', '#2563eb', '#f59e0b'],
  },
  {
    img: '/products/sarees.jpg',
    name: 'Royal Silk Saree',
    price: '₹2,499',
    desc: 'Handwoven pure silk from Varanasi. Available in 12 colors.',
    colors: ['#e63946', '#2563eb', '#f59e0b'],
  },
  {
    img: '/products/sofa.jpg',
    name: 'Modern Sofa Set',
    price: '₹38,500',
    desc: 'Premium 3-seater sofa with plush cushioning and solid wood frame.',
    colors: ['#1e3a8a', '#78716c', '#a16207'],
  },
  {
    img: '/products/chair.jpg',
    name: 'Wooden Chair',
    price: '₹4,299',
    desc: 'Solid oak wishbone chair with woven seat. 1-year warranty.',
    colors: ['#78350f', '#000000', '#f5f5f4'],
  },
]

export default function ProductShowcase() {
  const [activeIdx, setActiveIdx] = useState(1) // start with Royal Silk Saree

  // 🔄 Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % products.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const active = products[activeIdx]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-x">
        {/* ─── Heading ─── */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[color:var(--accent-soft)] text-[11px] font-bold text-[color:var(--accent)] tracking-[0.15em] uppercase">
            Product Showcase
          </span>

          <h2 className="mt-5 text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.05] font-extrabold tracking-tight text-[color:var(--ink)]">
            Showcase Products Beautifully
          </h2>

          <p className="mt-4 text-[15px] md:text-[17px] text-[color:var(--muted)] leading-[1.6]">
            Present your products with stunning visuals that captivate buyers and drive enquiries.
          </p>
        </div>

        {/* ─── Main grid: images left + phone right ─── */}
        <div className="mt-14 grid lg:grid-cols-[1fr_360px] gap-8 lg:gap-12 items-start">

          {/* LEFT — 2x2 product image grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {products.map((p, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`
                  relative rounded-[24px] overflow-hidden aspect-[4/3] group
                  transition-all duration-500
                  ${activeIdx === i
                    ? 'ring-4 ring-[color:var(--accent)] ring-offset-2 scale-[1.02]'
                    : 'ring-0 hover:scale-[1.01]'}
                `}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </button>
            ))}
          </div>

          {/* RIGHT — Phone frame with auto-rotating product */}
          <div className="relative mx-auto lg:mx-0">
            <div className="rounded-[42px] bg-[color:var(--ink)] p-2 shadow-[0_25px_60px_-15px_rgba(30,20,80,0.4)] w-[300px]">
              <div className="relative overflow-hidden rounded-[34px] bg-white flex flex-col" style={{ height: '600px' }}>
                {/* Notch */}
                <div className="absolute left-1/2 top-2 -translate-x-1/2 h-[18px] w-24 rounded-full bg-[color:var(--ink)] z-50" />

                {/* Product image */}
                <div className="relative h-[280px] overflow-hidden bg-gray-100">
                  <img
                    key={active.img}
                    src={active.img}
                    alt={active.name}
                    className="w-full h-full object-cover animate-fadeIn"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>

                {/* Product info */}
                <div className="flex-1 flex flex-col px-5 pt-4">
                  <div
                    key={activeIdx}
                    className="animate-fadeIn"
                  >
                    <h3 className="text-[18px] font-extrabold text-[color:var(--ink)] tracking-tight">
                      {active.name}
                    </h3>
                    <div className="text-[20px] font-extrabold text-[color:var(--accent)] mt-1">
                      {active.price}
                    </div>
                    <p className="mt-3 text-[13px] text-[color:var(--muted)] leading-[1.5]">
                      {active.desc}
                    </p>

                    {/* Color swatches */}
                    <div className="mt-4 flex items-center gap-2">
                      {active.colors.map((c, i) => (
                        <div
                          key={i}
                          className="w-5 h-5 rounded-full border-2 border-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Progress dots */}
                  <div className="mt-4 flex justify-center gap-1.5">
                    {products.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          i === activeIdx
                            ? 'w-6 bg-[color:var(--accent)]'
                            : 'w-1.5 bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* WhatsApp Enquiry button */}
                  <button className="mt-auto mb-5 w-full h-12 rounded-full bg-[#22c55e] hover:bg-[#16a34a] transition text-white font-bold text-[14px] flex items-center justify-center gap-2 shadow-lg shadow-green-500/30">
                    <MessageCircle className="w-4 h-4 fill-current" />
                    WhatsApp Enquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </section>
  )
}