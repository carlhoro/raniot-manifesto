import { title } from "process"

export const HERO_CONTENT = {
    title: "Ing. Carlos Hoyos",
    lead: "Arquitectura digital, IoT y orquestación de operaciones con criterio academico. Desde los articulos publicados filtramos y extraemos la implementaciones en transformacion digital.",
    statement: "Declaración",
    closing: "Primero se diseña la arquitectura. Después se automatiza."
} as const 

export const HERO_SECTIONS = {
    Intention: "Mi intención",
    InternetOfThings: "IoT",
    DigiGov: "Gobierno digital",
    knowledge: "Conocimiento",
    Reference: "Trayectoria",
    Contact: "Contacto"
} as const

export const DIGITAL_GOV_CONTENT = {
    title: "Orquestación de operaciones digitales.",
    caption: "La transformación digital real no se trata de automatizar tareas aisladas, sino de orquestar operaciones digitales con criterio, usando herramientas que representan una infraestructura confiable sobre la cual construir una arquitectura sostenible. Por esto, como ingeniero, entiendo la creación de tres capas pensadas en la escalabilidad de cada una de ellas. Cada capa cumple una función clara.",
    tool365: "Por qué Copilot 365",
    tooln8n: "Por qué n8n",
    toolWhatsapp: "Por qué WhatsApp",
    headerGov: "Orquestar antes que automatizar.",
    digitalGovermentTitle: "Gobierno Digital",
    digitalGovermentCaption: "Microsoft 365 como núcleo de identidad, control documental y trazabilidad institucional. No es solo herramienta, es la base de gobierno, cumplimiento y continuidad operativa.",
    orchestrationTitle: "Automatización",
    orchestrationCaption: "n8n como capa de orquestación entre sistemas. Permite integrar datos, ejecutar lógica operativa y mantener coherencia entre procesos distribuidos.",
    comunicationTitle: "Comunicación",
    comunicationCaption: "WhatsApp y el ecosistema Meta como canal estructurado de interacción. No solo notificación, sino cierre del ciclo operativo con evidencia y registro.",
    operativeTitle: "Acceso a la capa operativa",
    operativeCaption: "La capa operativa contiene contratos versionados, flujos reales y decisiones arquitectónicas aplicadas en contexto. Es la dimensión donde la teoría se convierte en implementación trazable."
} as const 

export const GOVERMENT_MODAL_OPTIONS = {
    whatsapp: "whatsapp",
    n8n: "n8n",
    copilot: "copilot",
    whatsappTitle: "Comunicación",
    copilotTitle: "Gobierno digital",
    n8nTitle: "Automatización"
} as const

export const INTENTION_SECTION = {
    tittle: "La transformación digital que se propone aquí no es discursiva ni basada en tendencias, sino construida a partir de evidencia empírica.",
    introCaption: "Esta página está viva y evoluciona con el contenido de transformación digital que le da vida.\nAsí refleja cómo pensar, diseñar y orquestar tecnología con criterio, antes que con tendencias.",
    closingCaption: "Aquí se documentan y presentan decisiones reales sobre transformación digital, automatización e IoT.",
    buttonCaption: "Explorar manifiesto en GitHub."
} as const


export const ARCHITECTURE_SECTION = {
    buttonCaption: "Explorar repositorio de arquitectura."
} as const


export const IOT_SECTION = {
    buttonCaption: "Explorar repositorio piloto de IoT.",
    headerCaption: "PMV IoT · El punto donde tu digitalización se conecta con el mundo real",
    title: "Durante la planeación y antes de escalar, se prueba.",
    subHeader: "Los sistemas de transformación digital no operan en abstracto. Desde la arquitectura se debe planear cómo los procesos de transformación digital interactuarán con el mundo real, del mismo modo en que lo hacen las organizaciones: a través de procesos físicos, personas, infraestructura y límites concretos del negocio.",
    caption: "Una arquitectura digital se completa cuando es capaz de ser contrastada con la realidad. Por eso, junto a la orquestación de operaciones digitales mostrada anteriormente, se diseña un repositorio específico para pruebas piloto IoT que permiten validar decisiones técnicas antes de escalar, cuidando y acotando la inversión necesaria.",
    listItem1: "Los sensores, actuadores y flujos de datos se prueban en condiciones reales para identificar límites físicos, errores y comportamientos no ideales.",
    strongListItem1: "Prototipos funcionales usando el ESP8266:",
    strongListItem2: "Evidencia para decidir invertir.",
    listItem2: "El objetivo de los códigos del repositorio PMV-IoT no es construir productos finales, sino generar evidencia técnica que respalde decisiones de arquitectura y operación.",
    secondCaption: "Este enfoque se refleja en el repositorio piloto IoT PMV-IoT, donde la experimentación se documenta como parte integral del proceso de diseño. Probar primero permite diseñar después con mayor claridad, coherencia y sostenibilidad.",
    closingCaption: "No se trata de diseñar componentes aislados; se trata de pasar a la fase de implementación con la información empírica necesaria. Así, los sistemas digitales se crean de forma consistente con la evidencia y con las personas que los operan.",
    closingHeader: "Arquitectura digital con capacidad de dialogar con la realidad."
} as const


export const CONTACT_SECTION = {
    headercaption: "Contacto",
    title: "Si te interesa hablar sobre transformación digital, IoT, arquitectura de sistemas o colaboración académica, el mejor canal es LinkedIn.",
    caption: "Comparto avances, reflexiones y proyectos en desarrollo. Escríbeme directamente y conversemos sobre cómo llevar la tecnología de la idea a la implementación real.",
    linkButton: "Click para conectar conmigo en LinkedIn",
    footer: "Tecnología con criterio. Implementación con propósito."
} as const 


export const KNOWLEDGE_SECTION = {
    headercaption: "Usar el conocimiento de la academia para implementar transformación digital en empresas ·",
    tittle: "Construir desde la premisa de que las pymes no siempre tienen la capacidad de generar su propio conocimiento.",
    titleList: "Puente entre academia y operación real.",
    captionOpenning: "El objetivo es generar un conocimiento acumulativo y trazable. Cada implementación, experimento o ajuste operativo deja evidencia: lo que funcionó, lo que no, bajo qué condiciones y por qué. Nada se pierde ni se reinicia; lo aprendido se documenta, se versiona y se reutiliza cuando es pertinente.",
    captionClosing: "El resultado es un cuerpo de conocimiento vivo que crece con cada caso real y permite reducir la improvisación en futuras decisiones. La transformación digital deja de depender de intuiciones aisladas y pasa a apoyarse en aprendizajes comprobados, replicables y contextualizados."
} as const


export const PERSONAL_SECTION = {
    intro: "Ingeniero biomédico y desarrollador que entiende que la tecnología no tiene valor si no resuelve problemas reales. Mi interés por el IoT no nació como una tendencia, sino como una inquietud personal por integrar hardware, software y datos en un solo sistema funcional. Quería construir, probar, fallar, mejorar y volver a construir. RANIOT fue el primer escenario donde esa intención tomó forma concreta, siendo un desafío técnico, regulatorio y estratégico, y el inicio del camino hacia el desarrollo y la transformación digital.",
    recognition: "Los reconocimientos obtenidos como proyecto destacado a nivel regional y nacional sustentan el potencial de integrar datos desde el hardware y demuestran que no hay que temer abordar temas regulatorios.",
    inflection: "Ahora entiendo que los equipos que buscan fomentar una disciplina interna y aumentar el valor de su producto representan la oportunidad de seguir construyendo. No desde el discurso, sino desde el prototipo, desde el microcontrolador, desde el dato capturado en el mundo físico. No era solo conectar sensores; era diseñar sistemas completos.",
    inflectionTitle: "El punto de inflexión",
    inflectionCaption: "Con el tiempo entendí que el IoT era solo una capa. El verdadero desafío no era conectar dispositivos, sino transformar organizaciones. Allí empezó una evolución natural hacia la transformación digital. Lo aprendido construyendo dispositivos físicos ahora lo aplico orquestando sistemas digitales completos con respaldo en evidencia académica.",
    orchestrationTitle: "Orquestación de procesos digitales.",
    orchestrationCaption: "No busco digitalizar por moda. Busco transformar con criterio, diferenciando la digitalización de la digitización.",
    visionTitle: "Mi visión es consolidar un HUB de I+D enfocado en la transformación digital y el desarrollo de talento.",
    visionItem1: "Tecnología aplicada.",
    visionItem2: "Orquestación digital.",
    visionItem3: "Integración entre mundo físico y digital.",
    visionItem4: "Investigación práctica con impacto real.",
    visionCaption: "El IoT fue el inicio. La transformación digital es la evolución."
} as const
