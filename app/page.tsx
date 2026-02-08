import { HeroSection } from "@/components/Hero/hero-section"
import { GovernanceSection } from "@/components/governance-section"
import { IotSection } from "@/components/iot-section"
import { KnowledgeSection } from "@/components/knowledge-section"
import { ReferencesSection } from "@/components/references-section"
import { ContactSection } from "@/components/contact-section"
import { IntentionSection } from "@/components/Intention/intention-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntentionSection />
      <GovernanceSection />
      <IotSection />
      <KnowledgeSection />
      <ReferencesSection />
      <ContactSection />
    </main>
  )
}
