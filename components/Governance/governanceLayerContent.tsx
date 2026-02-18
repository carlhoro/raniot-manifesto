interface LayerContentProps {
    variant: "copilot" | "n8n" | "whatsapp";
  }
  
  export default function GovernanceLayerContent({ variant }: LayerContentProps) {
  
    const config = {
      copilot: {
        title: "Gobierno Digital",
        accent: "from-blue-600 to-cyan-400",
        border: "border-blue-500/40",
        paragraphs: [
            "Microsoft 365 no se adopta como herramienta de oficina, sino como infraestructura institucional. Representa una base sólida y mantenible en el tiempo, respaldada por estándares globales de identidad, seguridad y cumplimiento. Apoyarse en plataformas consolidadas permite concentrar el esfuerzo en diseñar arquitectura, no en construir sistemas paralelos que ya existen y están probados.",
            "Su aporte clave es estructurar identidad, permisos, trazabilidad documental y control operativo. A través de Entra ID, SharePoint, Teams y el ecosistema de cumplimiento, se define quién puede hacer qué, bajo qué reglas y con qué evidencia registrada. Esto convierte la transformación digital en un proceso auditable y sostenible.",
            "Dentro del conjunto arquitectónico, esta capa actúa como el marco de gobierno. Sin identidad estructurada y control documental no existe continuidad operativa. Es la base sobre la que se orquestan las demás capas."
          ]
      },
      n8n: {
        title: "Automatización",
        accent: "from-rose-600 to-pink-400",
        border: "border-rose-500/40",
        paragraphs: [
            "n8n no es simplemente una herramienta de automatización. Es la capa de orquestación que permite integrar plataformas consolidadas sin desarrollar software innecesario. Al apoyarse en APIs abiertas y en una comunidad activa, ofrece una base flexible y sostenible en el tiempo.",
            "Su aspecto clave es la definición de contratos entre sistemas. Cada flujo conecta información y decisiones a partir de políticas previamente definidas por la organización. No se trata de ejecutar tareas sueltas, sino de materializar políticas operativas en procesos digitales coherentes y trazables.",
            "Dentro del conjunto arquitectónico, n8n conecta gobierno y comunicación. Traduce las decisiones institucionales en acciones concretas. Sin esta capa, la arquitectura sería solo estructura; con ella, se convierte en operación."
          ]
      },
      whatsapp: {
        title: "Comunicación",
        accent: "from-green-600 to-emerald-400",
        border: "border-green-500/40",
        paragraphs: [
            "WhatsApp, dentro del ecosistema Meta, no se utiliza como simple canal de mensajería, sino como infraestructura de interacción transaccional. Apoyarse en una plataforma adoptada globalmente garantiza estabilidad, continuidad y familiaridad para el usuario final.",
            "Al ser una herramienta de uso cotidiano para millones de personas, su adopción dentro de la arquitectura reduce fricción. La comunicación no requiere aprendizaje adicional: se integra naturalmente al flujo operativo, facilitando validaciones, notificaciones y decisiones en tiempo real.",
            "Dentro del conjunto, esta capa representa la interfaz entre arquitectura y realidad. Es el punto donde la operación diseñada se encuentra con personas reales. Sin comunicación integrada, la transformación digital no se completa."
          ]
      }
    };
  
    const layer = config[variant];
  
    return (
        <div className={`rounded-2xl border ${layer.border} lg:p-12 md:p-8`}>
        <div className={`h-3 w-32 rounded-full bg-linear-to-r ${layer.accent} mb-4`} />
            <div className="space-y-8 max-w-2xl mx-auto text-center">
                {layer.paragraphs.map((text, index) => (
                    <p
                    key={index}
                    className="text-xl md:text-2xl font-medium leading-relaxed 
                              tracking-wide text-gray-800 dark:text-gray-100"
                    >
                    {text}
                    </p>
                ))}
            </div>
        </div>
    );
  }
  