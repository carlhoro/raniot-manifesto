import { HeroSection } from "@/components/hero-section"
import { PositionSection } from "@/components/position-section"
import { GovernanceSection } from "@/components/governance-section"
import { IotSection } from "@/components/iot-section"
import { KnowledgeSection } from "@/components/knowledge-section"
import { ReferencesSection } from "@/components/references-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PositionSection />
      <GovernanceSection />
      <IotSection />
      <KnowledgeSection />
      <ReferencesSection />
      <ContactSection />
    </main>
  )
}
