import type { Locale } from "./content";

export const projects = {
  en: {
    o2move: {
      slug: "o2move",
      label: "CASE STUDY · 2025",
      title: "O2MOVE",
      description:
        "A public information platform for a sustainable urban mobility hub.",
      backLabel: "Back to projects",
      liveLabel: "Visit O2MOVE",
      liveUrl: "https://www.o2move.com/",
      metadata: [
        { label: "CONTEXT", value: "BE.Neutral Agenda · PPS2", icon: "hub" },
        {
          label: "ROLE",
          value: "Frontend development · backend contributions",
          icon: "code",
        },
        { label: "WHEN", value: "2024–2025", icon: "calendar_month" },
        { label: "STACK", value: "React 18 · Vite · Leaflet · ASP.NET Core", icon: "data_object" },
      ],
      visual: {
        label: "MAIN VISUAL · PLACEHOLDER",
        title: "A public interface for moving through the city",
        description:
          "Replace this area with an O2MOVE main-interface screenshot, a public-display mockup, or a photo from the mobility hub demonstration.",
      },
      overview: {
        title: "Overview",
        description:
          "O2MOVE is a public information platform integrated into a sustainable urban mobility hub. It brings together mobility information for an interactive public-facing experience.",
      },
      role: {
        title: "My contribution",
        items: [
          "Upgraded parts of the existing frontend from React 16 to React 18.",
          "Redesigned and updated a large part of the platform's visual identity and frontend interface.",
          "Built adaptive layouts for Full HD, 2K, and 4K public touchscreen displays.",
          "Implemented the frontend experience for displaying and interacting with generated spider maps.",
        ],
      },
      highlights: {
        title: "Technical highlights",
        items: [
          {
            title: "Public-display responsive design",
            description:
              "The interface needed to remain usable and readable across large interactive screens, rather than only conventional desktop or mobile breakpoints.",
          },
          {
            title: "Spider map interaction",
            description:
              "I implemented the frontend functionality that presents and lets people interact with spider maps generated through the platform's API flow.",
          },
          {
            title: "Frontend modernisation",
            description:
              "I helped move parts of the application forward with React 18, while evolving an existing product rather than rebuilding it from scratch.",
          },
        ],
      },
      product: {
        title: "Product and UX context",
        description:
          "The platform was designed for a public touchscreen setting. The broader product includes information such as public transport lines and stops, estimated arrivals, timetables, route planning, interactive maps, weather, UV index, and air quality.",
      },
      outcome: {
        title: "Real-world context",
        description:
          "O2MOVE was developed within a Portuguese consortium in the context of the PRR / BE.Neutral initiative and was demonstrated as part of a prototype mobility hub at Smart City Expo World Congress 2025.",
      },
      screenshots: [
        {
          title: "Interactive map",
          description: "Add a screenshot of the map and public-transport information.",
        },
        {
          title: "Spider map",
          description: "Add a screenshot of the generated spider-map interaction.",
        },
        {
          title: "Public display",
          description: "Add a Full HD, 2K, or 4K display layout or demo photo.",
        },
      ],
      technologies: ["React 18", "Vite", "Leaflet", "ASP.NET Core"],
    },
  },
  pt: {
    o2move: {
      slug: "o2move",
      label: "CASO DE ESTUDO · 2025",
      title: "O2MOVE",
      description:
        "Uma plataforma pública de informação para um hub de mobilidade urbana sustentável.",
      backLabel: "Voltar aos projetos",
      liveLabel: "Visitar O2MOVE",
      liveUrl: "https://www.o2move.com/",
      metadata: [
        { label: "CONTEXTO", value: "Agenda BE.Neutral · PPS2", icon: "hub" },
        {
          label: "FUNÇÃO",
          value: "Desenvolvimento frontend · contribuições no backend",
          icon: "code",
        },
        { label: "QUANDO", value: "2024–2025", icon: "calendar_month" },
        { label: "STACK", value: "React 18 · Vite · Leaflet · ASP.NET Core", icon: "data_object" },
      ],
      visual: {
        label: "VISUAL PRINCIPAL · PLACEHOLDER",
        title: "Uma interface pública para navegar na cidade",
        description:
          "Substitui esta área por um screenshot da interface principal do O2MOVE, um mockup de um ecrã público ou uma fotografia da demonstração do hub de mobilidade.",
      },
      overview: {
        title: "Visão geral",
        description:
          "O O2MOVE é uma plataforma pública de informação integrada num hub de mobilidade urbana sustentável. Reúne informação de mobilidade numa experiência interativa voltada para o público.",
      },
      role: {
        title: "A minha contribuição",
        items: [
          "Atualizei partes do frontend existente de React 16 para React 18.",
          "Redesenhei e atualizei grande parte da identidade visual e da interface frontend da plataforma.",
          "Desenvolvi layouts adaptativos para ecrãs táteis públicos em Full HD, 2K e 4K.",
          "Implementei a experiência frontend para mostrar e interagir com spider maps gerados.",
          "Contribuí com nova funcionalidade de backend, sem atribuir a mim a lógica de mobilidade, rotas e operadores que já existia.",
        ],
      },
      highlights: {
        title: "Destaques técnicos",
        items: [
          {
            title: "Design responsivo para ecrãs públicos",
            description:
              "A interface tinha de manter legibilidade e boa utilização em ecrãs interativos de grande formato, e não apenas em breakpoints convencionais de desktop ou mobile.",
          },
          {
            title: "Interação com spider maps",
            description:
              "Implementei a funcionalidade frontend que apresenta e permite interagir com spider maps gerados através do fluxo de API da plataforma.",
          },
          {
            title: "Modernização do frontend",
            description:
              "Ajudei a evoluir partes da aplicação com React 18, trabalhando sobre um produto existente em vez de o reconstruir de raiz.",
          },
        ],
      },
      product: {
        title: "Contexto de produto e UX",
        description:
          "A plataforma foi pensada para um contexto público com ecrã tátil. O produto mais amplo inclui informação como linhas e paragens de transporte público, tempos estimados, horários, planeamento de rotas, mapas interativos, meteorologia, índice UV e qualidade do ar.",
      },
      outcome: {
        title: "Contexto real",
        description:
          "O O2MOVE foi desenvolvido num consórcio português no contexto do PRR / iniciativa BE.Neutral e foi demonstrado como parte de um protótipo de hub de mobilidade na Smart City Expo World Congress 2025.",
      },
      screenshots: [
        {
          title: "Mapa interativo",
          description: "Adiciona um screenshot do mapa e da informação de transporte público.",
        },
        {
          title: "Spider map",
          description: "Adiciona um screenshot da interação com o spider map gerado.",
        },
        {
          title: "Ecrã público",
          description: "Adiciona um layout Full HD, 2K ou 4K, ou uma fotografia da demonstração.",
        },
      ],
      technologies: ["React 18", "Vite", "Leaflet", "ASP.NET Core"],
    },
  },
} as const;

export type ProjectSlug = keyof typeof projects.en;

export function isProjectSlug(slug: string): slug is ProjectSlug {
  return slug in projects.en;
}

export function getProject(locale: Locale, slug: ProjectSlug) {
  return projects[locale][slug];
}

export function getProjectSlugs() {
  return Object.keys(projects.en) as ProjectSlug[];
}
