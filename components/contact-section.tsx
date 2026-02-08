export function ContactSection() {
  return (
    <section id="contacto" className="px-6 md:px-12 lg:px-24 py-24 max-w-4xl mx-auto">
      <div className="border-t border-border pt-16">
        <span className="text-xs uppercase tracking-widest text-accent font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore culpa aspernatur ut quod et iure! Blanditiis iste pariatur ut, unde ipsum asperiores debitis dolorum quis quam assumenda aspernatur voluptatem fuga.
        </span>
        
        <h2 className="text-2xl md:text-3xl font-medium text-foreground mt-6 mb-8 text-balance leading-snug">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, illum illo. Libero voluptas tempora fugit veniam, minus eius nobis totam eaque facilis. Quidem provident debitis repellat aspernatur aperiam hic voluptatum?
        </h2>
        
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit, hic minus beatae facilis quis? Animi quod accusamus vitae quidem fugit hic nihil suscipit consequuntur aspernatur itaque, dolore modi blanditiis!
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ducimus qui omnis quos eum mollitia, sint, aliquid molestias sed, tempora neque. Dolorem quas officia temporibus ab cum magni architecto laboriosam.
          </p>
        </div>
      </footer>
    </section>
  )
}
