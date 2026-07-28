import { FileText, Home, TrendingUp, Eye } from 'lucide-react'

export default function Stats() {
  const items = [
    { n: '50K+', l: 'Posts Published', Icon: FileText },
    { n: '5,000+', l: 'Businesses', Icon: Home },
    { n: '2,500+', l: 'Daily Leads', Icon: TrendingUp },
    { n: '1M+', l: 'Product Views', Icon: Eye },
  ]

  return (
    <section className="bg-white">
      {/* 🔑 Wider container with less vertical padding */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10 md:py-12">
        {/* Rounded card with background image */}
        <div
          className="relative overflow-hidden rounded-[32px] px-6 py-10 md:py-12 lg:py-14"
          style={{
            backgroundImage: "url('/bg-purple.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Content */}
          <div className="relative z-10">
            {/* Small orange divider */}
            <div className="flex justify-center mb-4">
              <div className="h-1 w-14 rounded-full bg-[color:var(--accent)]" />
            </div>

            {/* Heading */}
            <h2 className="text-center text-white text-[26px] md:text-[34px] lg:text-[40px] font-extrabold tracking-tight leading-tight">
              The Numbers Speak for Themselves
            </h2>

            {/* Stats grid */}
            <div className="mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
              {items.map(({ n, l, Icon }, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  {/* Orange icon */}
                  <div className="mb-2">
                    <Icon
                      className="h-6 w-6 md:h-7 md:w-7 text-[color:var(--accent)]"
                      strokeWidth={2.2}
                    />
                  </div>

                  {/* Big number */}
                  <div className="text-white text-[28px] md:text-[36px] lg:text-[40px] font-extrabold tracking-tight leading-none">
                    {n}
                  </div>

                  {/* Label */}
                  <div className="mt-1.5 text-[12px] md:text-[13px] text-white/70 font-medium">
                    {l}
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