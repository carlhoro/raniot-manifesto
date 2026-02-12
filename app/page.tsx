import { HeroSection } from "@/components/Hero/hero-section"
import { IntentionSection } from "@/components/Intention/intention-section"
import { GovernanceSection } from "@/components/Governance/governance-section"
import { IotSection } from "@/components/IoT/iot-section"
import { KnowledgeSection } from "@/components/Knowledge/knowledge-section"
import { PersonalSection } from "@/components/Personal/personal-section"
import { ContactSection } from "@/components/Contact/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntentionSection />
      <GovernanceSection />
      <IotSection/>
      <KnowledgeSection />
      <PersonalSection/>
      <ContactSection />
    </main>
  )
}
