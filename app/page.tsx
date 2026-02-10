import { HeroSection } from "@/components/Hero/hero-section"
import { KnowledgeSection } from "@/components/knowledge-section"
import { ReferencesSection } from "@/components/references-section"
import { ContactSection } from "@/components/contact-section"
import { IntentionSection } from "@/components/Intention/intention-section"
import { GovernanceSection } from "@/components/Governance/governance-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntentionSection />
      <GovernanceSection />
      <KnowledgeSection />
      <ReferencesSection />
      <ContactSection />
    </main>
  )
}
