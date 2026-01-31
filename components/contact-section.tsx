export function ContactSection() {
  return (
    <section id="contacto" className="px-6 md:px-12 lg:px-24 py-24 max-w-4xl mx-auto">
      <div className="border-t border-border pt-16">
        <span className="text-xs uppercase tracking-widest text-accent font-medium">
          Contacto
        </span>
        
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mt-6 mb-8 text-balance leading-snug">
          Conversemos
        </h2>
        
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
          Si tienes preguntas sobre gobernanza digital, implementaciones IoT o transformación tecnológica, puedes escribirme directamente.
        </p>
        
        <a 
          href="mailto:carlos.hoyos@raniot.tech"
          className="inline-flex items-center text-lg text-foreground hover:text-accent transition-colors font-medium"
        >
          carlos.hoyos@raniot.tech
          <span className="ml-2 text-accent">→</span>
        </a>
      </div>
      
      <footer className="mt-24 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Carlos Hoyos · RANIOT
          </p>
          <p>
            Conocimiento técnico aplicado a la práctica empresarial
          </p>
        </div>
      </footer>
    </section>
  )
}
