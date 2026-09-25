import type { Dictionary } from "@/content/types";

const en: Dictionary = {
  meta: {
    title: "Mariana Vega — Full Stack Developer",
    description:
      "I build complete web applications — from the interface to the server and the database.",
  },
  nav: [
    { hash: "sobre-mi", label: "About" },
    { hash: "experiencia", label: "Experience" },
    { hash: "skills", label: "Skills" },
    { hash: "proyectos", label: "Projects" },
    { hash: "contacto", label: "Contact" },
  ],
  hero: {
    pill: "Open to new opportunities",
    greeting: "Hi, I'm",
    role: "Full Stack Developer",
    tagline:
      "I build complete web applications — from the interface to the server and the database.",
    ctaProjects: "View projects",
    ctaCv: "Download CV",
  },
  about: {
    eyebrow: "About me",
    heading: "Full stack developer, from idea to deploy",
    paragraphs: [
      "I'm a full stack developer focused on building complete web products: from clean, accessible interfaces to well-structured APIs and databases. I care about the details, maintainable code, and experiences that feel fast.",
      "I work mostly with the JavaScript/TypeScript ecosystem — React and Next.js on the frontend, Node.js on the backend — and I enjoy taking an idea end to end: design, development, and deployment.",
    ],
    highlights: [
      {
        title: "From design to deploy",
        desc: "I take a product from idea to production: UI, business logic, database, and deployment.",
      },
      {
        title: "Solid backend",
        desc: "REST APIs, authentication, real-time, and data modeling in SQL and NoSQL.",
      },
      {
        title: "Careful frontend",
        desc: "Accessible, responsive, high-performance interfaces with React, Next.js, and Tailwind.",
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    heading: "Professional experience",
    items: [
      {
        role: "Full Stack Developer",
        company: "Naked's",
        period: "Feb 2025 – Dec 2025",
        context: "Social network startup with e-commerce · 2-developer team",
        summary:
          "Migrated a social network from Bubble (no-code) to custom code, mainly owning the frontend.",
        bullets: [
          "Took part in migrating the platform from Bubble (no-code) to a custom-coded application, mainly owning the frontend.",
          "Built the main sections with React, Next.js, TypeScript, and Tailwind CSS: feed, profiles, communities, messaging, notifications, and settings, with responsive design.",
          "Integrated the frontend with the Node.js, Express, and MongoDB backend, including user authentication with Supabase and JWT, and real-time chat with Socket.io.",
          "Collaborated through Git/GitHub on technical documentation and problem-solving during development.",
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
    heading: "Technologies I work with",
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
    eyebrow: "Projects",
    heading: "Each project, a different skill",
    intro:
      "Three projects with different but complementary stacks, designed to showcase different parts of my full stack work.",
    demonstrates: "Demonstrates:",
    viewCase: "View case study",
    back: "Back to projects",
    viewDemo: "View demo",
    viewCode: "View code",
    demoSoon: "Demo coming soon",
    roleLabel: "Role",
    statusLabel: "Status",
    badges: { production: "In production", inProgress: "In progress" },
    gallery: { close: "Close", prev: "Previous", next: "Next" },
    blocks: {
      overview: "Overview",
      challenge: "The challenge",
      solution: "The solution",
      features: "Features",
      techDecisions: "Key technical decisions",
      result: "Result",
      stack: "Tech stack",
      learnings: "Takeaways",
    },
    text: {
      "crm-podologia": {
        title: "CRM for a Podiatry Clinic",
        summary:
          "A CRM built for a clinic with around 800 patients a month: it manages patients, clinical records, appointments, inventory, and payments. It includes Google Calendar sync and automated commission calculation.",
        skill:
          "A real product for a client, Google Calendar integration, and business logic",
        category: "Full Stack · CRM",
        subtitle:
          "A tailor-made management system for a clinic with around 800 patients a month, replacing Excel sheets and paper records with a digital flow: patients, appointments, payments, commissions, and inventory.",
        role: "Full-stack development (product, design, and code)",
        status: "In production for the client + public demo",
        demoLabel: "Try the live demo",
        demoNote:
          "You get in with one click via the “Enter the demo” button, using fictional data.",
        challenge:
          "The owner of a podiatry clinic managed everything manually: client data in Excel notes and clinical records in physical files in a cabinet. That made looking up history slow, reports (like the one for the Ministry of Health) impossible, and the podiatrists' commission calculations error-prone. He needed a single tool that would organize his operation without changing how he already works (he still schedules in Google Calendar and his clients reach him via WhatsApp).",
        solution:
          "A custom web CRM that covers the clinic's entire cycle:",
        solutionPoints: [
          "Patients with a digital clinical record (unique ID, medical flags, allergies) and PDF printing.",
          "Calendar connected to Google Calendar (read-only), grouped by week and day, with attendance marking.",
          "Payments, commissions, and inventory: each appointment records its payment (cash/card), the podiatrist's commission is calculated automatically, and products deduct stock and record profit.",
          "Cash close and reports: daily totals by method, expected cash on hand, and a printable report of attended patients.",
        ],
        techDecisions: [
          {
            title: "The calendar as the source of truth",
            desc: "The system reads Google Calendar (never writes), respecting the business flow; the appointment↔patient matching auto-links only exact matches and offers suggestions + search, designed to scale to thousands of clients.",
          },
          {
            title: "A commission model true to the business",
            desc: "After analyzing the owner's real Excel, the commission is a fixed percentage per podiatrist (not per service), and the report separates cash vs. card; the system replicates that logic.",
          },
          {
            title: "Dates in a fixed Mexico time zone",
            desc: "Everything is computed in America/Mexico_City so cash closes and groupings land on the correct day regardless of where the server runs.",
          },
          {
            title: "A modern, understated architecture",
            desc: "Next.js with Server Components and Server Actions; a custom design system with light/dark theme and reusable components.",
          },
          {
            title: "A public demo without exposing real data",
            desc: "Same codebase, but separate database and deployment; the demo uses fictional data, guest login, and automatic daily reset.",
          },
        ],
        result:
          "Automated commissions and the daily cash close save the owner about 6 hours a week. Plus: a patient's history in seconds, commissions broken down by payment method, the Ministry of Health report in one click, a cash close that balances the cash on hand, and a live demo anyone can try without signing up.",
        metrics: [
          { value: "~800", label: "patients a month" },
          { value: "~6 h", label: "saved per week" },
          { value: "1 click", label: "health ministry report" },
        ],
        screenshots: [
          { src: "/project-screens/podocrm/panel.png", caption: "Dashboard with the day's summary and trends" },
          { src: "/project-screens/podocrm/analitica.png", caption: "Business analytics: revenue and attendance" },
          { src: "/project-screens/podocrm/citas.png", caption: "Appointments grouped by week" },
          { src: "/project-screens/podocrm/caja.png", caption: "Daily cash close" },
          { src: "/project-screens/podocrm/ficha.png", caption: "Patient record with health alerts" },
          { src: "/project-screens/podocrm/pacientes.png", caption: "Patient search with filters" },
          { src: "/project-screens/podocrm/login.png", caption: "One-click access to the demo" },
        ],
      },
      "app-tiempo-real": {
        title: "Real-Time Collaborative App",
        summary:
          "Collaborative tool with instant updates via WebSockets and a custom API.",
        skill: "Backend API design and real-time",
        category: "Real-time · MERN",
        overview:
          "An application where multiple users collaborate live — chat and a shared board — seeing each other's changes instantly, without reloading the page.",
        challenge:
          "Syncing state across multiple clients in real time, handling reconnections, and keeping data consistent when several people edit at once.",
        solution:
          "I built a REST API with Node/Express and MongoDB, and a real-time layer with Socket.io that emits and reconciles changes. Authentication is handled with JWT, and Socket rooms isolate each collaborative session.",
        features: [
          "Live collaboration with multiple users",
          "Chat and presence (who's online)",
          "Custom REST API with JWT authentication",
          "Automatic reconnection and conflict handling",
          "Data persistence in MongoDB",
        ],
        learnings:
          "I went deep into real-time event design, distributed state across clients, and the importance of a well-structured API as the foundation of the system.",
      },
      "app-movil-integraciones": {
        title: "Mobile App with Integrations",
        summary:
          "Cross-platform mobile app that consumes external APIs and runs on iOS and Android.",
        skill: "Consuming external APIs and cross-platform development",
        category: "Mobile · React Native",
        overview:
          "A mobile app built with React Native and Expo that integrates external services (for example maps, weather, or a public API) into a native experience for iOS and Android from a single codebase.",
        challenge:
          "Delivering a smooth, native experience on two platforms at once, managing remote data state, caching, and the loading/error states of several external APIs.",
        solution:
          "I built the app with Expo and TypeScript, using React Query for fetching, caching, and syncing remote data, and a service layer to normalize the responses from the different APIs.",
        features: [
          "A single codebase for iOS and Android",
          "Integration with external APIs (REST and GraphQL)",
          "Caching and syncing with React Query",
          "Well-handled loading, error, and empty states",
          "Native navigation and responsive UI",
        ],
        learnings:
          "I understood the differences of mobile versus web development, how to handle remote data efficiently, and how to abstract third-party integrations so they're easy to maintain.",
      },
    },
  },
  contact: {
    eyebrow: "Contact",
    heading: "Shall we build something together?",
    text: "I'm open to new opportunities and happy to chat about your project or role. Drop me a line and I'll get back to you soon.",
    labelName: "Name",
    labelEmail: "Email",
    labelMessage: "Message",
    placeholderName: "Your name",
    placeholderEmail: "you@email.com",
    placeholderMessage: "Tell me about your project or role…",
    submit: "Send message",
    note: "This will open your email client with the message ready to send.",
    mailSubject: "Contact from the portfolio",
  },
  footer: {
    role: "Full Stack Developer",
    tagline:
      "I build complete web applications — from the interface to the server and the database.",
    navTitle: "Navigation",
    followTitle: "Follow me",
    madeWith: "Built with Next.js & Tailwind CSS.",
    backToTop: "Back to top",
  },
};

export default en;
