import { ArrowUpRight } from "lucide-react"

export function ReferencesSection() {
  return (
    <section id="referencias" className="px-6 md:px-12 lg:px-24 py-24 max-w-4xl mx-auto">
      <div className="border-t border-border pt-16">
        <span className="text-xs uppercase tracking-widest text-accent font-medium">
          Referencias
        </span>
        
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mt-6 mb-8 text-balance leading-snug">
          Materiales de consulta
        </h2>
        
        <p className="text-muted-foreground leading-relaxed mb-10">
          Estos repositorios contienen materiales de referencia, documentación estructurada y recursos informativos. No son servicios ni productos comerciales, sino espacios de conocimiento abierto.
        </p>
        
        <div className="space-y-6">
          <a 
            href="#" 
            className="group flex items-start justify-between p-6 border border-border hover:border-accent/50 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                Repositorio público de IoT
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Documentación técnica, arquitecturas de referencia y casos de estudio sobre implementaciones de Internet de las Cosas en contextos empresariales.
              </p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors shrink-0 ml-4" />
          </a>
          
          <a 
            href="#" 
            className="group flex items-start justify-between p-6 border border-border hover:border-accent/50 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                Estructura de gobernanza digital
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Repositorio informativo y versionado sobre modelos de gobernanza, taxonomías y marcos de decisión para sistemas digitales. Orientado a la comprensión, no al código.
              </p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors shrink-0 ml-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
