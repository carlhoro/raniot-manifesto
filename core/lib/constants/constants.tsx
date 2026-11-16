import { title } from "process"

export const HERO_CONTENT = {
    title: "Ing. Carlos Hoyos",
    lead: "Ingeniería aplicada a la arquitectura digital, la automatización con Power Automate, el IoT y la IA. Entender, prototipar y validar antes de escalar.",
    statement: "Declaración",
    closing: "Primero se diseña la arquitectura. Después se automatiza."
} as const 

export const HERO_SECTIONS = {
    Intention: "Mi intención",
    InternetOfThings: "IoT",
    DigiGov: "Microsoft y automatización",
    EnterpriseAI: "IA empresarial",
    knowledge: "Conocimiento",
    Reference: "Trayectoria",
    Contact: "Contacto"
} as const

export const DIGITAL_GOV_CONTENT = {
    title: "Orquestación de operaciones digitales.",
    caption: "Mi trabajo con Power Automate forma parte de un enfoque más amplio: diseñar procesos con criterio, conectar herramientas y conservar trazabilidad. Microsoft 365, Power Automate, n8n y los canales de comunicación cumplen funciones diferentes; la elección depende del proceso y de sus límites.",
    tool365: "Por qué Microsoft 365",
    toolPowerAutomate: "Por qué Power Automate",
    tooln8n: "Por qué n8n",
    toolWhatsapp: "Por qué WhatsApp",
    headerGov: "Orquestar antes que automatizar.",
    digitalGovermentTitle: "Gobierno Digital",
    digitalGovermentCaption: "Microsoft 365 ofrece identidad, colaboración y gestión documental sobre las que se pueden definir permisos y trazabilidad. Su configuración y gobierno dependen de cada organización.",
    orchestrationTitle: "Automatización con Power Automate y n8n",
    orchestrationCaption: "Power Automate permite diseñar flujos dentro del ecosistema Microsoft y conectarlos con otros servicios; n8n ofrece otra vía para orquestar integraciones entre sistemas. Son herramientas distintas, no intercambiables por defecto.",
    comunicationTitle: "Comunicación",
    comunicationCaption: "WhatsApp y el ecosistema Meta como canal estructurado de interacción. No solo notificación, sino cierre del ciclo operativo con evidencia y registro.",
    operativeTitle: "Acceso a la capa operativa",
    operativeCaption: "La capa operativa contiene contratos versionados, flujos reales y decisiones arquitectónicas aplicadas en contexto. Es la dimensión donde la teoría se convierte en implementación trazable."
} as const 

export const GOVERMENT_MODAL_OPTIONS = {
    whatsapp: "whatsapp",
    n8n: "n8n",
    powerAutomate: "powerAutomate",
    copilot: "copilot",
    whatsappTitle: "Comunicación",
    copilotTitle: "Gobierno digital",
    n8nTitle: "Orquestación con n8n",
    powerAutomateTitle: "Power Automate"
} as const

export const INTENTION_SECTION = {
    tittle: "Transformar con criterio: primero entender la capacidad, después elegir la tecnología.",
    introCaption: "Este manifiesto reúne mi trabajo en arquitectura digital, automatización con Power Automate, IoT e inteligencia artificial. Cada iniciativa parte del trabajo de las personas y de los problemas que vale la pena resolver.",
    closingCaption: "Distingo las propuestas de las implementaciones y busco evidencia antes de escalar. La IA guiada por capacidades empresariales es una de las iniciativas que desarrolla este enfoque.",
    buttonCaption: "Explorar manifiesto en GitHub."
} as const

export const ENTERPRISE_AI_SECTION = {
    eyebrow: "Iniciativa en desarrollo · IA empresarial",
    title: "Espacios de IA al servicio de las capacidades de la empresa.",
    intro: "La propuesta es que los empleados encuentren apoyo especializado para su trabajo, sin convertir cada necesidad en un agente autónomo. La organización define el propósito de cada espacio, qué conocimiento utiliza y a qué recursos puede acceder.",
    experienceTitle: "Para las personas",
    experience: "Cada empleado conversa desde su propia cuenta en espacios autorizados. Puede recibir apoyo para consultar información y realizar tareas pertinentes a su área, mientras su historial de conversación permanece individual.",
    architectureTitle: "Para la organización",
    architecture: "Open WebUI configura espacios de trabajo especializados y cuentas individuales; Hermes reúne modelos, memoria y herramientas permitidas en perfiles por capacidad, que pueden servir a varios espacios y empleados. El proxy HIG se propone para verificar identidad y acceso al espacio antes de encaminar cada solicitud al perfil autorizado; no es un perfil por empleado.",
    governanceTitle: "Para decidir con criterio",
    governance: "El historial individual en Open WebUI, los documentos asignados al espacio y la memoria del perfil Hermes son ámbitos distintos. La memoria del perfil puede compartirse entre empleados autorizados, pero no recibe automáticamente todas sus conversaciones. Su contenido, las sesiones y los permisos de las herramientas requieren políticas y pruebas de separación; un perfil distinto no garantiza por sí solo aislamiento de recursos.",
    value: "El valor buscado es incorporar IA al trabajo cotidiano con conocimiento pertinente, integración gradual y gobierno tecnológico propio, sin depender de una licencia exclusiva de esta propuesta. La arquitectura puede ser implementada por los equipos de la organización o por profesionales competentes.",
    status: "Es una propuesta de arquitectura, no una implementación validada de HIG ni de todos sus controles e integraciones. Antes de operar, deben probarse la vinculación entre empleado, espacio y conversación, el acceso directo al modelo base, los límites de memoria y herramientas, la seguridad y los costos."
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
    title: "Si te interesa conversar sobre Power Automate, automatización, IoT, arquitectura digital, IA o colaboración académica, el mejor canal es LinkedIn.",
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
