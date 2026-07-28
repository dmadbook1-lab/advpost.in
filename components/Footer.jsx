import { Heart, Facebook, Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  const cols = [
    { h: 'COMPANY', links: ['About Us', 'Careers', 'Blog', 'Press'] },
    { h: 'LEGAL', links: ['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Licenses'] },
    { h: 'SUPPORT', links: ['Help Centre', 'Contact Us', 'Community', 'Status'] },
  ]

  return (
    <footer className="bg-[#141541] text-white">
      <div className="container-x pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand column */}
          <div>
            <div className="text-[26px] font-extrabold text-white">ADVpost</div>
            <p className="mt-4 text-[14px] text-white/50 leading-[1.6] max-w-xs">
              The all-in-one platform for business networking,
              product discovery, and WhatsApp lead generation.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-2">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition grid place-items-center text-white">
                <Facebook className="w-4 h-4" strokeWidth={2} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition grid place-items-center text-white">
                <Linkedin className="w-4 h-4" strokeWidth={2} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition grid place-items-center text-white">
                <Twitter className="w-4 h-4" strokeWidth={2} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition grid place-items-center text-white">
                <Mail className="w-4 h-4" strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {cols.map((c, i) => (
            <div key={i}>
              <div className="text-[13px] font-bold tracking-[0.15em] text-white/70 uppercase">
                {c.h}
              </div>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[14px] text-white/80 hover:text-white transition">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-14 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[13px] text-white/50">
            <div>© 2026 ADVpost. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}