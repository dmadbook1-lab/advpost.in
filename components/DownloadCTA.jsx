'use client'

import { Apple, Play, QrCode, Search, Menu, BadgeCheck, Plus } from 'lucide-react'

/* ─── Phone frame ─── */
function Phone({ children, className = '', style }) {
  return (
    <div
      className={`relative rounded-[42px] bg-[color:var(--ink)] p-2 
      shadow-[0_30px_70px_-20px_rgba(0,0,0,0.65)] ${className}`}
      style={style}
    >
      <div className="relative overflow-hidden rounded-[34px] bg-white h-full flex flex-col">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 -translate-x-1/2 h-[18px] w-24 rounded-full bg-[color:var(--ink)] z-50" />
        {children}
      </div>
    </div>
  )
}

export default function DownloadCTA() {
  return (
    <section id="pricing" className="relative bg-[#1a1b4b] text-white overflow-hidden">
      <div className="container-x py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ═════════ LEFT SIDE ═════════ */}
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[11px] font-bold tracking-[0.15em] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
              Free Download
            </span>

            <h2 className="mt-5 text-[42px] sm:text-[52px] lg:text-[64px] leading-[1.05] font-extrabold tracking-tight">
              Download<br />
              ADVpost<br />
              <span className="text-[color:var(--accent)]">Today. It's Free.</span>
            </h2>

            <p className="mt-5 text-[15px] md:text-[17px] text-white/60 leading-[1.6] max-w-lg">
              Join 5,000+ businesses already growing with ADVpost.
              Start for free, no credit card required.
            </p>

            {/* Store Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="h-14 px-5 rounded-2xl bg-[#0a0d1c] hover:bg-black transition inline-flex items-center gap-3 shadow-lg"
              >
                <Apple className="h-8 w-8 text-white" />
                <div className="leading-tight text-left">
                  <div className="text-[10px] text-white/70 uppercase tracking-wide">
                    Download on the
                  </div>
                  <div className="text-[16px] font-bold">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="h-14 px-5 rounded-2xl bg-[color:var(--accent)] hover:brightness-110 transition inline-flex items-center gap-3 shadow-lg"
              >
                <Play className="h-8 w-8 text-white fill-current" />
                <div className="leading-tight text-left">
                  <div className="text-[10px] text-white/80 uppercase tracking-wide">
                    Get it on
                  </div>
                  <div className="text-[16px] font-bold">Google Play</div>
                </div>
              </a>
            </div>

            {/* QR Card */}
            <div className="mt-6 inline-flex items-center gap-4 bg-white/5 backdrop-blur rounded-2xl px-4 py-3.5 max-w-md border border-white/10">
              <div className="w-14 h-14 rounded-xl bg-white grid place-items-center flex-shrink-0">
                <QrCode className="w-9 h-9 text-[color:var(--ink)]" strokeWidth={2} />
              </div>
              <div className="leading-tight">
                <div className="text-[14px] font-bold">Scan to Download</div>
                <div className="text-[12px] text-white/50 mt-0.5">
                  Point your camera at the QR code
                </div>
              </div>
            </div>
          </div>

          {/* ═════════ RIGHT SIDE ═════════ */}
          <div className="relative flex justify-center lg:justify-end lg:-translate-x-10">

            {/* Soft White Screen Glow */}
            <div className="absolute -z-10 w-[380px] h-[680px] 
              bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.45),rgba(255,255,255,0.18)_35%,rgba(255,255,255,0.08)_60%,transparent_80%)]
              blur-3xl opacity-70" />

            {/* Subtle Ground Shadow */}
            <div className="absolute -bottom-12 w-[260px] h-[70px] bg-black/30 blur-2xl rounded-full -z-10" />

            <Phone style={{ width: '300px', height: '600px' }}>
              <div className="flex flex-col h-full pt-9">

                {/* Header */}
                <div className="px-4 flex items-center justify-between">
                  <span className="text-[16px] font-extrabold text-[color:var(--ink)]">
                    ADVpost
                  </span>
                  <div className="flex items-center gap-3">
                    <Search className="w-4 h-4 text-[color:var(--ink)]" />
                    <Menu className="w-4 h-4 text-[color:var(--ink)]" />
                  </div>
                </div>

                {/* Story Circles */}
                <div className="px-4 mt-4 flex gap-3 items-center">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-full border-2 border-dashed border-gray-300 grid place-items-center">
                      <Plus className="w-4 h-4 text-gray-400" />
                    </div>
                    <span className="text-[8px] text-[color:var(--muted)]">
                      My Story
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500" />
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-300 to-emerald-500" />
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-300 to-sky-500" />
                </div>

                {/* Filter Tabs */}
                <div className="px-4 mt-4 flex gap-2">
                  <span className="text-[10px] font-bold text-white bg-indigo-500 rounded-full px-3 py-1">
                    All
                  </span>
                  <span className="text-[10px] font-bold text-[color:var(--muted)] bg-gray-100 rounded-full px-3 py-1">
                    Electronics
                  </span>
                  <span className="text-[10px] font-bold text-[color:var(--muted)] bg-gray-100 rounded-full px-3 py-1">
                    Food
                  </span>
                  <span className="text-[10px] font-bold text-[color:var(--muted)] bg-gray-100 rounded-full px-3 py-1">
                    Fashion
                  </span>
                </div>

                {/* Post 1 */}
                <div className="mx-4 mt-4 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                  <div className="p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-500" />
                      <div className="leading-tight">
                        <div className="text-[11px] font-extrabold text-[color:var(--ink)]">
                          TechZone Store
                        </div>
                        <div className="text-[9px] text-[color:var(--muted)] flex items-center gap-1">
                          Electronics · Verified
                          <BadgeCheck className="w-2.5 h-2.5 text-[color:var(--accent)]" />
                        </div>
                      </div>
                    </div>
                    <span className="text-[9px] text-[color:var(--muted)]">
                      2m ago
                    </span>
                  </div>
                  <div className="mx-3 mb-3 rounded-lg h-24 bg-gradient-to-br from-blue-500 to-indigo-700 relative">
                    <div className="absolute bottom-2 left-2 text-[9px] font-bold text-white">
                      iPhone 15 Pro - $999
                    </div>
                  </div>
                </div>

                {/* Post 2 */}
                <div className="mx-4 mt-3 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                  <div className="p-3 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-500" />
                    <div className="leading-tight">
                      <div className="text-[11px] font-extrabold text-[color:var(--ink)]">
                        FreshMart
                      </div>
                      <div className="text-[9px] text-[color:var(--muted)] flex items-center gap-1">
                        Grocery · Verified
                        <BadgeCheck className="w-2.5 h-2.5 text-[color:var(--accent)]" />
                      </div>
                    </div>
                  </div>
                  <div className="mx-3 mb-3 rounded-lg h-16 bg-green-500 grid place-items-center">
                    <span className="text-2xl">🥦</span>
                  </div>
                </div>

                {/* Bottom Indicator */}
                <div className="mt-auto mb-6 flex justify-center gap-2">
                  <div className="w-2 h-2 rounded-sm bg-indigo-500" />
                  <div className="w-2 h-2 rounded-full bg-gray-200" />
                  <div className="w-2 h-2 rounded-full bg-gray-200" />
                  <div className="w-2 h-2 rounded-full bg-gray-200" />
                  <div className="w-2 h-2 rounded-full bg-gray-200" />
                </div>

              </div>
            </Phone>
          </div>

        </div>
      </div>
    </section>
  )
}