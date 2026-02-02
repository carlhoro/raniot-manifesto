import { SectionContainer } from "@/components/layout/SectionContainer"
import { HeroDeclaration } from "./HeroDeclaration"
import { HeroClosingQuote } from "./HeroClosingQuote"

export function HeroSection() {
  return (
        <SectionContainer
          as="div"
          size="hero"
        >
          <HeroDeclaration
            title="Ing. Carlos Hoyos"
            lead="RANIOT es una iniciativa privada que conecta el conocimiento académico con la práctica real en transformación digital, gobernanza de sistemas y tecnologías IoT."
            statement="La tecnología es un medio, no un fin. Cada decisión digital debe responder a un criterio, no a una tendencia."
          />
          <HeroClosingQuote
            closingStatement="La tecnología es un medio, no un fin.  
            Cada decisión digital debe responder a un criterio, no a una tendencia.">
          </HeroClosingQuote>
          
          <div className="mt-16 pt-8 border-t border-border">
            <nav aria-label="Secciones del sitio">
              <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm  justify-center text-muted-foreground">
                <li><a href="#posicion" className="hover:text-accent transition-colors">Posición</a></li>
                <li><a href="#gobernanza" className="hover:text-accent transition-colors">Gobernanza</a></li>
                <li><a href="#iot" className="hover:text-accent transition-colors">IoT</a></li>
                <li><a href="#conocimiento" className="hover:text-accent transition-colors">Conocimiento</a></li>
                <li><a href="#referencias" className="hover:text-accent transition-colors">Referencias</a></li>
                <li><a href="#contacto" className="hover:text-accent transition-colors">Contacto</a></li>
              </ul>
            </nav>
          </div>
        </SectionContainer>
  )
}
