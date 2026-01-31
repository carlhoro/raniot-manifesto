export function HeroSection() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 max-w-4xl mx-auto">
      <header className="space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground text-balance leading-tight">
          Carlos Hoyos
        </h1>
        
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            <span className="text-accent font-medium">RANIOT</span> es una iniciativa privada que conecta el conocimiento académico con la práctica real en transformación digital, gobernanza de sistemas y tecnologías IoT.
          </p>
          
          <p className="text-xl md:text-2xl text-foreground font-normal leading-relaxed max-w-2xl text-balance">
            La tecnología es un medio, no un fin. Cada decisión digital debe responder a un criterio, no a una tendencia.
          </p>
        </div>
      </header>
      
      <div className="mt-16 pt-8 border-t border-border">
        <nav aria-label="Secciones del sitio">
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <li><a href="#posicion" className="hover:text-accent transition-colors">Posición</a></li>
            <li><a href="#gobernanza" className="hover:text-accent transition-colors">Gobernanza</a></li>
            <li><a href="#iot" className="hover:text-accent transition-colors">IoT</a></li>
            <li><a href="#conocimiento" className="hover:text-accent transition-colors">Conocimiento</a></li>
            <li><a href="#referencias" className="hover:text-accent transition-colors">Referencias</a></li>
            <li><a href="#contacto" className="hover:text-accent transition-colors">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </section>
  )
}
