import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import WhyAdvpost from '@/components/WhyAdvpost'
import Storefront from '@/components/Storefront'
import ProductShowcase from '@/components/ProductShowcase'
import PostsReels from '@/components/PostsReels'
import WhatsappLeads from '@/components/WhatsappLeads'
import BusinessCategories from '@/components/BusinessCategories'
import Testimonials from '@/components/Testimonials'
import DownloadCTA from '@/components/DownloadCTA'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-[color:var(--ink)]">
      <Navbar />
      <Hero />
      <Stats />
      <WhyAdvpost />
      <Storefront />
      <ProductShowcase />
      <PostsReels />
      <WhatsappLeads />
      <BusinessCategories />
      <Testimonials />
      <DownloadCTA />
      <Footer />
    </main>
  )
}
