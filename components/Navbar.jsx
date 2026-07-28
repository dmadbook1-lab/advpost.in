'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-[color:var(--line)]">
      <div className="container-x h-[72px] flex items-center justify-between">

        {/* ✅ Logo from public/logo.png */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="ADVpost Logo"
            width={40}
            height={40}
            className="rounded-lg object-contain"
            priority
          />
          <div className="leading-tight">
            <div className="font-extrabold text-[18px]">ADVpost</div>
            <div className="text-[11px] text-[color:var(--muted)] -mt-0.5">
              India's #1 Business Network
            </div>
          </div>
        </div>

        {/* ✅ Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[color:var(--ink-2)]">
          <a href="#features" className="hover:text-[color:var(--accent)] transition">
            Features
          </a>
          <a href="#categories" className="hover:text-[color:var(--accent)] transition">
            Categories
          </a>
          <a href="#stories" className="hover:text-[color:var(--accent)] transition">
            Success Stories
          </a>
        </nav>

        {/* ✅ Right Side */}
        <div className="flex items-center gap-3">

          {/* ✅ Fixed Centered Rounded Button */}
          <button
            className="
              hidden sm:flex
              items-center justify-center
              h-11 px-7
              rounded-full
              bg-[color:var(--accent)]
              text-white
              font-semibold
              text-[14px]
              hover:bg-orange-600
              transition
              shadow-md
            "
          >
            Download Now
          </button>

          {/* ✅ Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2"
            aria-label="Toggle Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6 pt-2 bg-white border-t border-[color:var(--line)] flex flex-col gap-4 text-[15px] font-medium">

          <a
            href="#features"
            onClick={() => setOpen(false)}
            className="hover:text-[color:var(--accent)] transition"
          >
            Features
          </a>

          <a
            href="#categories"
            onClick={() => setOpen(false)}
            className="hover:text-[color:var(--accent)] transition"
          >
            Categories
          </a>

          <a
            href="#stories"
            onClick={() => setOpen(false)}
            className="hover:text-[color:var(--accent)] transition"
          >
            Success Stories
          </a>

          {/* ✅ Mobile Button */}
          <button
            onClick={() => setOpen(false)}
            className="
              mt-4
              flex items-center justify-center
              h-11
              rounded-full
              bg-[color:var(--accent)]
              text-white
              font-semibold
              hover:bg-orange-600
              transition
            "
          >
            Download Now
          </button>
        </div>
      </div>
    </header>
  )
}