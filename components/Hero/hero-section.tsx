import { SectionContainer } from "@/components/layout/SectionContainer"
import { HeroDeclaration } from "./HeroDeclaration"
import { HeroClosingQuote } from "./HeroClosingQuote"
import { HERO_CONTENT, HERO_SECTIONS } from "@/core/lib/constants/constants"

export function HeroSection() {
  return (
        <SectionContainer
          as="div"
          size="hero"
        >
          <HeroDeclaration
            title={HERO_CONTENT.title}
            lead={HERO_CONTENT.lead}
            statement={HERO_CONTENT.statement}
          />
          <HeroClosingQuote
            closingStatement={HERO_CONTENT.closing} >
          </HeroClosingQuote>
          
          <main>
            <div className="grid grid-cols-3 sm:grid-cols-5 auto-rows-fr border-t mt-10 pt-8 gap-2 w-full">
              <a href="#intention" className="relative overflow-hidden rounded-2xl col-span-2 bg-gray-100 py-2 sm:py-4 opacity-70
                      hover:border-0 hover:bg-linear-to-br from-cyan-600 via-cyan-500 to-cyan-200  hover:scale-95 hover:text-accent-foreground
                      transition-transform duration-200 ease-out">
                <span className="grid place-items-center min-h-18 px-4 text-center">{HERO_SECTIONS.Intention}</span>
              </a>
              <a href="#iot" className="relative overflow-hidden rounded-2xl col-span-1 bg-gray-100 py-2 sm:py-4 opacity-70
                      hover:border-0 hover:bg-linear-to-br from-cyan-600 via-cyan-500 to-cyan-200  hover:scale-95 hover:text-accent-foreground
                      transition-transform duration-200 ease-out">
                <span className="grid place-items-center min-h-18 px-4 text-center">{HERO_SECTIONS.InternetOfThings}</span>
              </a>
              <a href="#architecture" className="relative overflow-hidden rounded-2xl col-span-1 sm:col-span-2 bg-gray-100 py-2 sm:py-4 opacity-70
                      hover:border-0 hover:bg-linear-to-br from-cyan-600 via-cyan-500 to-cyan-200  hover:scale-95 hover:text-accent-foreground
                      transition-transform">
                <span className="grid place-items-center min-h-18 px-4 text-center">{HERO_SECTIONS.DigiGov}</span>
              </a>
              <a href="#Knowledge" className="relative overflow-hidden rounded-2xl col-span-2 bg-gray-100 py-2 sm:py-4 opacity-70
                      hover:border-0 hover:bg-linear-to-br from-cyan-600 via-cyan-500 to-cyan-200  hover:scale-95 hover:text-accent-foreground
                      transition-transform duration-200 ease-out">
                <span className="grid place-items-center min-h-18 px-4 text-center"> {HERO_SECTIONS.knowledge}</span>
              </a>
              <a href="#personal" className="relative overflow-hidden rounded-2xl col-span-2 bg-gray-100 py-2 sm:py-4 opacity-70
                      hover:border-0 hover:bg-linear-to-br from-cyan-600 via-cyan-500 to-cyan-200  hover:scale-95 hover:text-accent-foreground
                      transition-transform duration-200 ease-out">
                <span className="grid place-items-center min-h-18 px-4 text-center">{HERO_SECTIONS.Reference}</span>
              </a>  
              <a href="#contacto" className="relative overflow-hidden rounded-2xl col-span-1 bg-gray-100 py-2 sm:py-4 opacity-70
                      hover:border-0 hover:bg-linear-to-br from-cyan-600 via-cyan-500 to-cyan-200  hover:scale-95 hover:text-accent-foreground
                      transition-transform duration-200 ease-out">
                <span className="grid place-items-center min-h-18 px-4 text-center">{HERO_SECTIONS.Contact}</span>
              </a>  
            </div>
          </main>
        </SectionContainer>
  )
}
