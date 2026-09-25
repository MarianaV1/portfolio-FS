import type { Dictionary } from "@/content/types";

const es: Dictionary = {
  meta: {
    title: "Mariana Vega — Desarrolladora Full Stack",
    description:
      "Construyo aplicaciones web completas — del diseño de la interfaz al servidor y la base de datos.",
  },
  nav: [
    { hash: "sobre-mi", label: "Sobre mí" },
    { hash: "experiencia", label: "Experiencia" },
    { hash: "skills", label: "Skills" },
    { hash: "proyectos", label: "Proyectos" },
    { hash: "contacto", label: "Contacto" },
  ],
  hero: {
    pill: "Disponible para nuevas oportunidades",
    greeting: "Hola, soy",
    role: "Desarrolladora Full Stack",
    tagline:
      "Construyo aplicaciones web completas — del diseño de la interfaz al servidor y la base de datos.",
    ctaProjects: "Ver proyectos",
    ctaCv: "Descargar CV",
  },
  about: {
    eyebrow: "Sobre mí",
    heading: "Desarrolladora full stack, de la idea al deploy",
    paragraphs: [
      "Soy desarrolladora full stack enfocada en construir productos web completos: desde interfaces limpias y accesibles hasta APIs y bases de datos bien estructuradas. Me importa el detalle, el código mantenible y las experiencias que se sienten rápidas.",
      "Trabajo sobre todo con el ecosistema JavaScript/TypeScript — React y Next.js en el frontend, Node.js en el backend — y disfruto llevar una idea de principio a fin: diseño, desarrollo y despliegue.",
    ],
    highlights: [
      {
        title: "Del diseño al deploy",
        desc: "Llevo un producto de la idea a producción: UI, lógica de negocio, base de datos y despliegue.",
      },
      {
        title: "Backend sólido",
        desc: "APIs REST, autenticación, tiempo real y modelado de datos en SQL y NoSQL.",
      },
      {
        title: "Frontend cuidado",
        desc: "Interfaces accesibles, responsivas y con buen rendimiento con React, Next.js y Tailwind.",
      },
    ],
  },
  experience: {
    eyebrow: "Experiencia",
    heading: "Experiencia profesional",
    items: [
      {
        role: "Desarrolladora Full Stack",
        company: "Naked's",
        period: "Feb 2025 – Dic 2025",
        context: "Startup de red social con e-commerce · Equipo de 2 desarrolladores",
        summary:
          "Migración de una red social de Bubble (no-code) a código propio, a cargo principalmente del frontend.",
        bullets: [
          "Participé en la migración de la plataforma de Bubble (no-code) a una aplicación desarrollada con código, a cargo principalmente del frontend.",
          "Desarrollé con React, Next.js, TypeScript y Tailwind CSS las secciones principales: feed, perfiles, comunidades, mensajería, notificaciones y configuración, con diseño responsive.",
          "Integré el frontend con el backend en Node.js, Express y MongoDB, incluyendo autenticación de usuarios con Supabase y JWT, y chat en tiempo real con Socket.io.",
          "Colaboré mediante Git/GitHub en la documentación técnica y la resolución de problemas durante el desarrollo.",
        ],
        stack: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "Express",
          "MongoDB",
          "Supabase",
          "JWT",
          "Socket.io",
        ],
      },
    ],
  },
  skills: {
    eyebrow: "Skills",
    heading: "Tecnologías con las que trabajo",
    groups: [
      {
        icon: "frontend",
        title: "Frontend",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript (ES6+)",
          "Tailwind CSS",
          "HTML5 & CSS3",
        ],
      },
      {
        icon: "backend",
        title: "Backend",
        items: [
          "Node.js",
          "Express",
          "REST APIs",
          "PostgreSQL",
          "MongoDB",
          "Prisma",
          "WebSockets (Socket.io)",
          "Auth (JWT / OAuth)",
        ],
      },
      {
        icon: "tools",
        title: "DevOps & Tools",
        items: [
          "Git & GitHub",
          "Docker",
          "CI/CD (GitHub Actions)",
          "Vercel",
          "Jest / Testing",
          "Postman",
          "Figma",
        ],
      },
    ],
  },
  projects: {
    eyebrow: "Proyectos",
    heading: "Cada proyecto, una habilidad distinta",
    intro:
      "Tres proyectos con stacks diferentes pero complementarios, pensados para mostrar distintas partes de mi trabajo full stack.",
    demonstrates: "Demuestra:",
    viewCase: "Ver caso de estudio",
    back: "Volver a proyectos",
    viewDemo: "Ver demo",
    viewCode: "Ver código",
    demoSoon: "Demo próximamente",
    roleLabel: "Rol",
    statusLabel: "Estado",
    badges: { production: "En producción", inProgress: "En curso" },
    gallery: { close: "Cerrar", prev: "Anterior", next: "Siguiente" },
    blocks: {
      overview: "Resumen",
      challenge: "El reto",
      solution: "La solución",
      features: "Funcionalidades",
      techDecisions: "Decisiones técnicas destacadas",
      result: "Resultado",
      stack: "Stack técnico",
      learnings: "Aprendizajes",
    },
    text: {
      "crm-podologia": {
        title: "CRM para Clínica de Podología",
        summary:
          "CRM desarrollado para una clínica con cerca de 800 pacientes al mes: gestiona pacientes, expedientes clínicos, citas, inventario y cobros. Incluye sincronización con Google Calendar y automatización del cálculo de comisiones.",
        skill:
          "Producto real para un cliente, integración con Google Calendar y lógica de negocio",
        category: "Full Stack · CRM",
        subtitle:
          "Un sistema de gestión a medida para una clínica con cerca de 800 pacientes al mes, que reemplazó hojas de Excel y expedientes de papel por un flujo digital: pacientes, citas, cobros, comisiones e inventario.",
        role: "Desarrollo full-stack (producto, diseño y código)",
        status: "En producción para el cliente + demo pública",
        demoLabel: "Probar la demo en vivo",
        demoNote:
          "Se entra con un clic desde el botón “Entrar a la demo”, con datos ficticios.",
        challenge:
          "El dueño de una clínica de podología gestionaba todo manualmente: datos de clientes en notas de Excel y hojas clínicas en expedientes físicos en un archivero. Eso hacía lento consultar el historial, imposible sacar reportes (como el de la Secretaría de Salud) y propenso a errores el cálculo de comisiones de las podólogas. Necesitaba una sola herramienta que ordenara su operación sin cambiar cómo ya trabaja (sigue agendando en Google Calendar y sus clientes lo contactan por WhatsApp).",
        solution:
          "Un CRM web a la medida que cubre todo el ciclo de la clínica:",
        solutionPoints: [
          "Pacientes con hoja clínica digital (folio único, banderas médicas, alergias) e impresión en PDF.",
          "Agenda conectada a Google Calendar (solo lectura), agrupada por semana y día, con marcado de asistencia.",
          "Cobros, comisiones e inventario: cada cita registra su pago (efectivo/tarjeta), la comisión de la podóloga se calcula sola y los productos descuentan stock y registran utilidad.",
          "Corte de caja y reportes: totales del día por método, efectivo esperado en caja y reporte de pacientes atendidos imprimible.",
        ],
        techDecisions: [
          {
            title: "El calendario como fuente de verdad",
            desc: "El sistema lee Google Calendar (nunca escribe), respetando el flujo del negocio; el emparejado cita↔paciente auto-liga solo coincidencias exactas y ofrece sugerencias + buscador, pensado para escalar a miles de clientes.",
          },
          {
            title: "Modelo de comisiones fiel al negocio",
            desc: "Tras analizar el Excel real del dueño, la comisión es un porcentaje fijo por podóloga (no por servicio) y el reporte separa efectivo vs. tarjeta; el sistema replica esa lógica.",
          },
          {
            title: "Fechas en zona horaria fija de México",
            desc: "Todo se calcula en America/Mexico_City para que cortes y agrupados caigan en el día correcto sin importar dónde corra el servidor.",
          },
          {
            title: "Arquitectura moderna y sobria",
            desc: "Next.js con Server Components y Server Actions; sistema de diseño propio con tema claro/oscuro y componentes reutilizables.",
          },
          {
            title: "Demo pública sin exponer datos reales",
            desc: "Misma base de código, pero base de datos y despliegue separados; la demo usa datos ficticios, login de invitado y reseteo diario automático.",
          },
        ],
        result:
          "El cálculo automático de comisiones y el corte de caja diario le ahorran al dueño cerca de 6 horas por semana. Además: historial de un paciente en segundos, comisiones desglosadas por método de pago, reporte para la Secretaría de Salud en un clic, un corte de caja que cuadra el efectivo y una demo en vivo que cualquiera puede probar sin registrarse.",
        metrics: [
          { value: "~800", label: "pacientes al mes" },
          { value: "~6 h", label: "ahorradas por semana" },
          { value: "1 clic", label: "reporte para Salud" },
        ],
        screenshots: [
          { src: "/project-screens/podocrm/panel.png", caption: "Panel con resumen del día y tendencias" },
          { src: "/project-screens/podocrm/analitica.png", caption: "Análisis del negocio: ingresos y asistencia" },
          { src: "/project-screens/podocrm/citas.png", caption: "Citas agrupadas por semana" },
          { src: "/project-screens/podocrm/caja.png", caption: "Corte de caja del día" },
          { src: "/project-screens/podocrm/ficha.png", caption: "Ficha del paciente con alertas de salud" },
          { src: "/project-screens/podocrm/pacientes.png", caption: "Buscador de pacientes con filtros" },
          { src: "/project-screens/podocrm/login.png", caption: "Acceso a la demo con un clic" },
        ],
      },
      "app-tiempo-real": {
        title: "App Colaborativa en Tiempo Real",
        summary:
          "Herramienta colaborativa con actualizaciones instantáneas vía WebSockets y una API propia.",
        skill: "Diseño de APIs backend y tiempo real",
        category: "Real-time · MERN",
        overview:
          "Una aplicación donde varios usuarios colaboran en vivo —chat y tablero compartido— viendo los cambios de los demás al instante, sin recargar la página.",
        challenge:
          "Sincronizar el estado entre múltiples clientes en tiempo real, manejar reconexiones y mantener la consistencia de los datos cuando varias personas editan a la vez.",
        solution:
          "Construí una API REST con Node/Express y MongoDB, y una capa de tiempo real con Socket.io que emite y reconcilia los cambios. La autenticación se maneja con JWT y las salas de Socket aíslan cada sesión colaborativa.",
        features: [
          "Colaboración en vivo con múltiples usuarios",
          "Chat y presencia (quién está en línea)",
          "API REST propia con autenticación JWT",
          "Reconexión automática y manejo de conflictos",
          "Persistencia de datos en MongoDB",
        ],
        learnings:
          "Profundicé en el diseño de eventos en tiempo real, el manejo de estado distribuido entre clientes y la importancia de una API bien estructurada como base del sistema.",
      },
      "app-movil-integraciones": {
        title: "App Móvil con Integraciones",
        summary:
          "Aplicación móvil multiplataforma que consume APIs externas y funciona en iOS y Android.",
        skill: "Consumo de APIs externas y desarrollo cross-platform",
        category: "Mobile · React Native",
        overview:
          "Una app móvil creada con React Native y Expo que integra servicios externos (por ejemplo mapas, clima o una API pública) en una experiencia nativa para iOS y Android desde una sola base de código.",
        challenge:
          "Ofrecer una experiencia fluida y nativa en dos plataformas a la vez, gestionando el estado de datos remotos, la caché y los estados de carga/error de varias APIs externas.",
        solution:
          "Desarrollé la app con Expo y TypeScript, usando React Query para el fetching, caché y sincronización de datos remotos, y una capa de servicios para normalizar las respuestas de las distintas APIs.",
        features: [
          "Una sola base de código para iOS y Android",
          "Integración con APIs externas (REST y GraphQL)",
          "Caché y sincronización con React Query",
          "Estados de carga, error y vacío bien cuidados",
          "Navegación nativa y UI responsiva",
        ],
        learnings:
          "Entendí las diferencias del desarrollo móvil frente al web, cómo manejar datos remotos de forma eficiente y cómo abstraer integraciones de terceros para que sean fáciles de mantener.",
      },
    },
  },
  contact: {
    eyebrow: "Contacto",
    heading: "¿Construimos algo juntos?",
    text: "Estoy abierta a nuevas oportunidades y encantada de platicar sobre tu proyecto o vacante. Escríbeme y te respondo pronto.",
    labelName: "Nombre",
    labelEmail: "Email",
    labelMessage: "Mensaje",
    placeholderName: "Tu nombre",
    placeholderEmail: "tu@correo.com",
    placeholderMessage: "Cuéntame sobre tu proyecto o vacante…",
    submit: "Enviar mensaje",
    note: "Se abrirá tu cliente de correo con el mensaje listo para enviar.",
    mailSubject: "Contacto desde el portafolio",
  },
  footer: {
    role: "Desarrolladora Full Stack",
    tagline:
      "Construyo aplicaciones web completas — del diseño de la interfaz al servidor y la base de datos.",
    navTitle: "Navegación",
    followTitle: "Sígueme",
    madeWith: "Hecho con Next.js & Tailwind CSS.",
    backToTop: "Volver arriba",
  },
};

export default es;
