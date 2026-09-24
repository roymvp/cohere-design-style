import { SiteNav } from '@/components/ui/site-nav'
import { HeroSection } from '@/components/showcase/hero-section'
import { TokensSection } from '@/components/showcase/tokens-section'
import { TypeSection } from '@/components/showcase/type-section'
import { ComponentsSection } from '@/components/showcase/components-section'
import { FooterSection } from '@/components/showcase/footer-section'
import { RulesSection } from '@/components/showcase/rules-section'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <HeroSection />
        <TokensSection />
        <TypeSection />
        <ComponentsSection />
        <RulesSection />
      </main>
      <FooterSection />
    </div>
  )
}
