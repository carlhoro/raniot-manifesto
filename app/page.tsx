import { HeroSection } from "@/components/Hero/hero-section"
import { KnowledgeSection } from "@/components/knowledge-section"
import { ReferencesSection } from "@/components/references-section"
import { ContactSection } from "@/components/contact-section"
import { IntentionSection } from "@/components/Intention/intention-section"
import { GovernanceSection } from "@/components/Governance/governance-section"
import { IotSection } from "@/components/IoT/iot-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntentionSection />
      <GovernanceSection />
      <IotSection/>
      <KnowledgeSection />
      <ReferencesSection />
      <ContactSection />
    </main>
  )
}
