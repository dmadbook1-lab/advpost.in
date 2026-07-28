'use client'

import {
  Sparkles,
  Play,
  Heart,
  MessageCircle,
  Share2,
  ChevronRight,
  Apple,
  BadgeCheck,
  ChevronLeft,
  Menu,
  Search,
  Home,
  Plus,
} from 'lucide-react'

/* ─── Phone frame ─── */
function Phone({ children, className = '', style }) {
  return (
    <div
      className={`rounded-[38px] bg-[color:var(--ink)] p-2 shadow-[0_30px_60px_-20px_rgba(30,20,80,0.35)] ${className}`}
      style={style}
    >
      <div className="relative overflow-hidden rounded-[30px] bg-white h-full flex flex-col">
        <div className="absolute left-1/2 top-2 -translate-x-1/2 h-[18px] w-24 rounded-full bg-[color:var(--ink)] z-50" />
        {children}
      </div>
    </div>
  )
}

/* ─── Floating badge card ─── */
function FloatingCard({ className = '', style, children }) {
  return (
    <div
      className={`absolute bg-white rounded-2xl shadow-[0_12px_24px_-6px_rgba(30,20,80,0.15)] px-2.5 py-2 md:px-3 md:py-2.5 flex items-center gap-2 md:gap-2.5 ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}

/* ─── Store badges ─── */
function StoreBadges() {
  return (
    <div className="flex flex-wrap gap-3">
      <a href="#" className="flex items-center gap-3 rounded-xl bg-[color:var(--ink)] text-white px-4 py-2.5 shadow-sm">
        <Play className="h-6 w-6" />
        <div className="leading-tight text-left">
          <div className="text-[10px] opacity-80">GET IT ON</div>
          <div className="text-sm font-semibold">Google Play</div>
        </div>
      </a>
      <a href="#" className="flex items-center gap-3 rounded-xl bg-[color:var(--ink)] text-white px-4 py-2.5 shadow-sm">
        <Apple className="h-6 w-6" />
        <div className="leading-tight text-left">
          <div className="text-[10px] opacity-80">DOWNLOAD ON THE</div>
          <div className="text-sm font-semibold">App Store</div>
        </div>
      </a>
    </div>
  )
}

/* ─── Reusable Phone Screens (so we don't duplicate) ─── */

function CenterPhoneScreen() {
  return (
    <div className="flex flex-col h-full bg-white relative pb-16">
      <div className="flex items-center justify-between px-4 pt-10 pb-3">
        <Menu className="w-5 h-5 text-[color:var(--ink)]" />
        <div className="flex items-center gap-1.5 font-extrabold text-[color:var(--ink)] text-[12px] tracking-tight">
          <div className="w-5 h-5 rounded-full bg-orange-400 text-white flex items-center justify-center text-[9px]">A</div>
          ADVPOST
        </div>
        <Search className="w-5 h-5 text-[color:var(--ink)]" />
      </div>

      <div className="flex gap-1.5 px-4 overflow-hidden mb-4">
        <span className="px-3.5 py-1.5 bg-[color:var(--ink)] text-white rounded-full text-[10px] font-semibold">You For</span>
        <span className="px-3.5 py-1.5 bg-gray-100 text-gray-500 rounded-full text-[10px] font-semibold">Following</span>
        <span className="px-3.5 py-1.5 bg-gray-100 text-gray-500 rounded-full text-[10px] font-semibold">Near</span>
      </div>

      <div className="px-4 flex flex-col">
        <div className="flex items-center gap-2 mb-2.5">
          <div className="w-8 h-8 rounded-full bg-orange-400" />
          <div className="leading-tight">
            <div className="text-[11px] font-bold text-[color:var(--ink)]">Modern Furniture House</div>
            <div className="text-[9px] text-gray-400 mt-0.5">Pune, Maharashtra</div>
          </div>
        </div>

        <img src="/hero-sofa.jpg" className="w-full h-40 object-cover rounded-[16px]" alt="Post" />

        <h4 className="text-[13px] font-bold text-[color:var(--ink)] mt-2.5">Premium Quality Furniture</h4>
        <div className="text-[10px] font-bold text-orange-400 mt-0.5">Special Offer 20% OFF</div>

        <div className="flex items-center gap-4 text-gray-400 mt-1.5 text-[11px] font-medium">
          <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 fill-current text-red-500" /> 92</span>
          <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> 35</span>
        </div>
      </div>

      <div className="absolute bottom-0 w-full bg-white px-6 py-2 pb-5 flex justify-between items-center z-10">
        <div className="flex flex-col items-center gap-0.5">
          <Home className="w-4 h-4 text-[color:var(--ink)]" />
          <span className="text-[8px] font-bold text-[color:var(--ink)]">Home</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <Search className="w-4 h-4 text-gray-400" />
          <span className="text-[8px] font-medium text-gray-400">Search</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-[color:var(--ink)] flex items-center justify-center -mt-5">
          <Plus className="w-5 h-5 text-white" />
        </div>
        <div className="flex flex-col items-center gap-0.5 relative">
          <MessageCircle className="w-4 h-4 text-gray-400" />
          <span className="text-[8px] font-medium text-gray-400">Chat</span>
          <div className="absolute -top-1 -right-2 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center text-[7px] text-white font-bold border border-white">2</div>
        </div>
      </div>
    </div>
  )
}

function LeftPhoneScreen() {
  return (
    <div className="flex flex-col h-full p-4 pt-9">
      <div className="flex items-center justify-between mb-4">
        <ChevronLeft className="w-5 h-5 text-[color:var(--ink)]" />
        <div className="w-10 h-3 bg-gray-100 rounded-full" />
      </div>
      <div className="flex-1 flex flex-col min-h-0">
        <img src="/hero-chair.jpg" alt="chair" className="w-full flex-1 object-cover rounded-[18px]" />
        <h2 className="text-[16px] font-extrabold text-[color:var(--ink)] mt-4 tracking-tight">
          Wooden Chair
        </h2>
      </div>
      <button className="w-full mt-3 bg-[color:var(--ink)] text-white py-2.5 rounded-[12px] font-bold text-[12px]">
        Enquire
      </button>
    </div>
  )
}

function RightPhoneScreen() {
  return (
    <div className="flex flex-col h-full p-4 pt-9">
      <div className="flex items-center justify-between mb-5">
        <ChevronLeft className="w-5 h-5 text-[color:var(--ink)]" />
        <div className="flex items-center gap-3">
          <Search className="w-4 h-4 text-[color:var(--ink)]" />
          <Share2 className="w-4 h-4 text-[color:var(--ink)]" />
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="w-[68px] h-[68px] bg-[color:var(--ink)] rounded-full flex items-center justify-center text-white text-xl font-bold mb-2.5">
          FH
        </div>
        <h3 className="text-[14px] font-extrabold text-[color:var(--ink)] leading-tight tracking-tight">The Fashion Hub</h3>
        <p className="text-gray-400 text-[10px] mt-0.5">Fashion & Lifestyle</p>
      </div>

      <div className="flex gap-2 w-full mt-5">
        <button className="flex-1 py-2 bg-gray-50 text-[color:var(--ink)] font-bold rounded-lg text-[11px]">Message</button>
        <button className="flex-1 py-2 bg-[color:var(--ink)] text-white font-bold rounded-lg text-[11px]">Follow</button>
      </div>

      <div className="flex justify-center gap-8 mt-5 border-b border-gray-100 pb-4">
        <div className="text-center">
          <div className="font-extrabold text-[color:var(--ink)] text-[16px] leading-none">2.8K</div>
          <div className="text-[9px] text-gray-400 mt-1 font-medium">Followers</div>
        </div>
        <div className="text-center">
          <div className="font-extrabold text-[color:var(--ink)] text-[16px] leading-none">100</div>
          <div className="text-[9px] text-gray-400 mt-1 font-medium">Following</div>
        </div>
      </div>

      <div className="flex gap-2 mt-3 flex-1">
        <div className="flex-1 rounded-t-[12px] bg-gradient-to-b from-[color:var(--ink)] to-[#e89a5e]" />
        <div className="flex-1 rounded-t-[12px] bg-gradient-to-b from-[color:var(--ink)] to-[#e89a5e]" />
      </div>
    </div>
  )
}

/* ─── Hero ─── */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute right-0 bottom-0 w-[130%] lg:w-[85%] h-[60%] sm:h-[75%] lg:h-[120%] z-0"
        style={{
          backgroundImage: "url('/purple.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right bottom',
          backgroundSize: 'contain',
        }}
      />

      <div className="relative z-10 container-x pt-10 pb-16 sm:pt-14 sm:pb-20 md:pt-16 md:pb-28 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* ── Copy ── */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--accent-soft)] border border-orange-100 text-[12px] sm:text-[13px] font-semibold text-[color:var(--ink)]">
            <Sparkles className="h-3.5 w-3.5 text-[color:var(--accent)]" />
            India's #1 Business Network
          </span>

          <h1 className="mt-4 sm:mt-5 text-[32px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] leading-[1.05] font-extrabold tracking-tight text-[color:var(--ink)]">
            Promote Products.<br />Reach Customers.<br />Grow Business.
          </h1>

          <p className="mt-4 sm:mt-5 max-w-xl mx-auto lg:mx-0 text-[14px] sm:text-base md:text-[17px] leading-[1.6] text-[color:var(--muted)]">
            Download ADVpost and grow your business by showcasing products,
            publishing posts & reels, receiving WhatsApp enquiries, and
            connecting directly with customers.
          </p>

          <div className="mt-6 sm:mt-7 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
            <a href="#" className="h-12 sm:h-14 px-5 sm:px-7 rounded-full btn-navy font-semibold inline-flex items-center gap-2 text-[13px] sm:text-[15px] shadow-lg shadow-indigo-900/20">
              ⬇ Download App
            </a>
            <a href="#" className="h-12 sm:h-14 px-5 sm:px-7 rounded-full bg-white border border-[color:var(--line)] text-[color:var(--ink)] font-semibold inline-flex items-center gap-2 text-[13px] sm:text-[15px]">
              <Play className="h-4 w-4 fill-current" /> Watch Demo
            </a>
          </div>

          <div className="mt-5 sm:mt-6 flex justify-center lg:justify-start">
            <StoreBadges />
          </div>
        </div>

        {/* ═══════════════════════════════════════════════ */}
        {/* 📱 MOBILE VIEW — single centered phone, no badges */}
        {/* ═══════════════════════════════════════════════ */}
        <div className="sm:hidden relative mx-auto w-full flex justify-center py-4">
          <Phone
            style={{ width: '260px', height: '540px' }}
          >
            <CenterPhoneScreen />
          </Phone>
        </div>

        {/* ═══════════════════════════════════════════════ */}
        {/* 📱📱 TABLET VIEW — 3 phones, compact, no badges */}
        {/* ═══════════════════════════════════════════════ */}
        <div className="hidden sm:flex lg:hidden relative mx-auto w-full max-w-2xl h-[500px] justify-center items-center">
          <Phone
            className="absolute rotate-[-8deg]"
            style={{ width: '180px', height: '380px', left: '5%', top: '60px', zIndex: 10 }}
          >
            <LeftPhoneScreen />
          </Phone>

          <Phone
            className="absolute rotate-[8deg]"
            style={{ width: '180px', height: '380px', right: '5%', top: '70px', zIndex: 10 }}
          >
            <RightPhoneScreen />
          </Phone>

          <Phone
            className="absolute"
            style={{
              width: '220px',
              height: '460px',
              left: '50%',
              top: '20px',
              transform: 'translateX(-50%)',
              zIndex: 30,
            }}
          >
            <CenterPhoneScreen />
          </Phone>
        </div>

        {/* ═══════════════════════════════════════════════ */}
        {/* 💻 DESKTOP VIEW — full layout with all badges */}
        {/* ═══════════════════════════════════════════════ */}
        <div className="hidden lg:block relative mx-auto 
                        h-[560px] md:h-[680px] 
                        w-full max-w-2xl 
                        overflow-visible">

          {/* Floating badges */}
          <FloatingCard style={{ top: '-10px', left: '-30px', zIndex: 5 }}>
            <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
              <img src="/hero-chair.jpg" alt="" className="h-full w-full object-cover" />
            </div>
            <div className="leading-tight pr-2">
              <div className="text-[13px] font-bold text-[color:var(--ink)]">New Lead</div>
              <div className="text-[11px] text-[color:var(--muted)]">from Pune</div>
            </div>
            <div className="h-8 w-8 rounded-full bg-green-500 grid place-items-center flex-shrink-0">
              <MessageCircle className="h-4 w-4 text-white" />
            </div>
          </FloatingCard>

          <FloatingCard style={{ top: '10px', right: '-40px', zIndex: 5 }}>
            <div className="h-10 w-10 rounded-lg overflow-hidden flex-shrink-0">
              <img src="/hero-chair.jpg" alt="" className="h-full w-full object-cover" />
            </div>
            <div className="leading-tight pr-2">
              <div className="text-[13px] font-bold text-[color:var(--ink)]">Product Viewed</div>
              <div className="text-[11px] text-[color:var(--muted)]">Wooden Chair</div>
            </div>
          </FloatingCard>

          <FloatingCard style={{ bottom: '-10px', left: '-30px', zIndex: 40 }}>
            <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
              <img src="/hero-sofa.jpg" alt="" className="h-full w-full object-cover" />
            </div>
            <div className="leading-tight pr-2">
              <div className="text-[13px] font-bold text-[color:var(--ink)]">WhatsApp Message</div>
              <div className="text-[11px] text-[color:var(--muted)]">Hi, is this available?</div>
            </div>
            <div className="h-8 w-8 rounded-full bg-green-500 grid place-items-center flex-shrink-0">
              <MessageCircle className="h-4 w-4 text-white" />
            </div>
          </FloatingCard>

          <FloatingCard style={{ bottom: '20px', right: '-40px', zIndex: 40 }}>
            <div className="h-8 w-8 rounded-md bg-[color:var(--ink)] grid place-items-center flex-shrink-0">
              <BadgeCheck className="h-5 w-5 text-white" />
            </div>
            <div className="text-[13px] font-bold text-[color:var(--ink)] pr-1">Business Verified</div>
            <BadgeCheck className="h-5 w-5 text-[#3b82f6] flex-shrink-0" />
          </FloatingCard>

          {/* Left phone */}
          <Phone
            className="absolute rotate-[-8deg]"
            style={{ width: '240px', height: '480px', left: '-50px', top: '80px', zIndex: 10 }}
          >
            <LeftPhoneScreen />
          </Phone>

          {/* Right phone */}
          <Phone
            className="absolute rotate-[8deg]"
            style={{ width: '240px', height: '480px', right: '-20px', top: '90px', zIndex: 10 }}
          >
            <RightPhoneScreen />
          </Phone>

          {/* Center phone */}
          <Phone
            className="absolute"
            style={{ width: '280px', height: '580px', left: '50%', top: '30px', transform: 'translateX(-50%)', zIndex: 30 }}
          >
            <CenterPhoneScreen />
          </Phone>
        </div>

      </div>
    </section>
  )
}