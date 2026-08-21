import type { Locale } from "./content";

export const projects = {
  en: {
    motus: {
      slug: "motus", label: "FLAGSHIP CASE STUDY · 2024–2025", title: "MOTUS",
      description: "A commercial dashboard for monitoring Sustainable Urban Mobility Plans.",
      backLabel: "Back to selected work", liveLabel: "", liveUrl: "",
      metadata: [{ label: "CONTEXT", value: "Commercial municipal platform", icon: "location_city" }, { label: "ROLE", value: "Main frontend engineer · UI/UX", icon: "code" }, { label: "WHEN", value: "2024–2025", icon: "calendar_month" }, { label: "STACK", value: "React · .NET · Nivo · Figma", icon: "data_object" }],
      visual: { label: "EMPLOYER VISUALS KEPT PRIVATE", title: "Clear, trackable information for complex mobility plans", description: "This case study is intentionally text-led while screenshots and Figma designs remain private.", icon: "monitoring" },
      overview: { title: "The product", description: "MOTUS helps municipalities monitor Sustainable Urban Mobility Plans through a software-based alternative or complement to spreadsheet workflows. It brings measures, indicators and progress into configurable interfaces for different municipal deployments." },
      product: { title: "Product thinking", description: "The core design challenge was making dense monitoring information understandable without losing the detail municipal teams need for day-to-day work." },
      role: { title: "What I owned", items: ["Led the dashboard frontend and implemented almost all of its interfaces, excluding an existing user-administration area.", "Designed much of the visual language and information hierarchy in Figma, from navigation and layouts to cards, tables, spacing, colour and chart choices.", "Created reusable Nivo chart components and configurable interfaces for different municipal deployments.", "Contributed selected backend and administration work, including controllers, EF migrations, filtering, search, Razor Pages improvements and licensing integration."] },
      highlights: { title: "Engineering highlights", items: [{ title: "Reusable visualisation", description: "Built chart templates that kept dashboards consistent across different indicators and datasets." }, { title: "Configurable deployments", description: "Structured the interface so the commercial product could adapt to different municipal contexts." }, { title: "Design to delivery", description: "Worked from Figma through implementation, then personally delivered training to municipal users." }] },
      outcome: { title: "Real-world use", description: "MOTUS is a commercial product used by multiple Portuguese municipalities. I also attended a client meeting and personally trained municipal users." },
      screenshots: [], technologies: ["React", ".NET", "Nivo", "Figma", "Entity Framework", "Razor Pages"],
    },
    o2move: {
      slug: "o2move",
      label: "FLAGSHIP CASE STUDY · 2025",
      title: "O2MOVE",
      description: "Interactive public-transport information for mobility hubs.",
      backLabel: "Back to projects",
      liveLabel: "Visit O2MOVE",
      liveUrl: "https://www.o2move.com/",
      secondaryLabel: "Trofa installation",
      secondaryUrl: "https://www.onoticiasdatrofa.pt/trofa-recebe-o-primeiro-hub-o2move-de-portugal/",
      metadata: [
        { label: "CONTEXT", value: "BE.Neutral Agenda · PPS2", icon: "hub" },
        {
          label: "ROLE",
          value: "Primary engineer on the current version",
          icon: "code",
        },
        { label: "WHEN", value: "2024–2025", icon: "calendar_month" },
        { label: "STACK", value: "React 18 · Vite · Leaflet · .NET 8", icon: "data_object" },
      ],
      visual: {
        label: "AUTHORISED SCREENSHOTS COMING NEXT",
        title: "A public interface designed for real mobility infrastructure",
        description:
          "Approved standby, route-planning, schedule and generated spider-map screens will be added here.",
        icon: "touch_app",
      },
      overview: {
        title: "Overview",
        description:
          "O2MOVE brings public-transport, route-planning and environmental information together on interactive mobility-hub displays. I inherited an older application whose core transport logic already existed and became responsible for adapting and developing the current version.",
      },
      role: {
        title: "My contribution",
        items: [
          "Migrated the frontend from React 16 and Create React App to React 18 and Vite, converting class components to hooks and replacing incompatible dependencies.",
          "Upgraded .NET Core 3.1 to .NET 8 while preserving the pre-existing transport logic.",
          "Implemented Leaflet stop clustering and the frontend workflow for SVGs produced by an external schematic-map service.",
          "Built environmental views, standby and inactivity behaviour, and support for different display resolutions.",
          "Designed several interfaces in Figma and manually tested the application on its physical display hardware.",
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
          "A real O2MOVE installation operates in Trofa, where the municipality installed Portugal's first O2MOVE hub in 2026. The product was also demonstrated at Smart City events.",
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
      technologies: ["React 18", "Vite", "Leaflet", ".NET 8", "Figma", "SVG"],
    },
    "environmental-data-api": {
      slug: "environmental-data-api", label: "FLAGSHIP CASE STUDY · 2026", title: "Environmental Data API", description: "A production Earth-observation data service for wildfire-risk research.", backLabel: "Back to selected work", liveLabel: "", liveUrl: "",
      metadata: [{ label: "CONTEXT", value: "Wildfire-risk research in Portugal", icon: "forest" }, { label: "ROLE", value: "Main developer", icon: "code" }, { label: "WHEN", value: "2026", icon: "calendar_month" }, { label: "STACK", value: "FastAPI · Rasterio · STAC · Nginx", icon: "data_object" }],
      visual: { label: "DATA SERVICE · NO PUBLIC INTERFACE", title: "From provider data to research-ready outputs", description: "The service is represented conceptually because its endpoints, infrastructure and operational details remain private.", icon: "satellite_alt" },
      overview: { title: "The service", description: "This production FastAPI service supplies environmental and Earth-observation data to an external team developing a wildfire-risk prediction model for Portugal. It integrates providers with different APIs, formats and processing requirements behind a reusable interface." },
      product: { title: "A backend complement", description: "This project shows the systems side of my work: investigating unfamiliar providers, normalising outputs and deploying a service used by another team." },
      role: { title: "What I owned", items: ["Designed the service and implemented the Landsat 9 workflow, from authenticated search and pagination through processing, caching and packaging.", "Implemented CRS-aware cropping, QA masking, surface-temperature conversion and STAC metadata.", "Built the ERA5-Land integration and a NASA Earthdata VIIRS HDF5-to-Parquet pipeline.", "Integrated pre-existing Copernicus retrieval work from another developer without attributing its algorithms to myself.", "Handled most production deployment work, including later Nginx and API-key middleware updates."] },
      highlights: { title: "Engineering highlights", items: [{ title: "Multi-provider integration", description: "Unified Copernicus, ERA5-Land, USGS Landsat and NASA Earthdata despite different access patterns and formats." }, { title: "Geospatial processing", description: "Implemented CRS-aware raster operations, quality masking and scientific-data transformations." }, { title: "Reusable metadata", description: "Introduced STAC metadata so processed outputs remained consistent and discoverable." }] },
      outcome: { title: "Real-world use", description: "The production service provides processed data to an external research team working on wildfire-risk prediction for Portugal." }, screenshots: [], technologies: ["Python", "FastAPI", "Rasterio", "STAC", "HDF5", "Parquet", "Nginx"],
    },
    "immersive-cicd": {
      slug: "immersive-cicd", label: "MASTER'S THESIS · 2025", title: "Immersive CI/CD", description: "Visualising GitHub Actions pipeline executions in virtual reality.", backLabel: "Back to selected work", liveLabel: "View source", liveUrl: "https://github.com/anetep/thesis-project", secondaryLabel: "Read dissertation", secondaryUrl: "https://hdl.handle.net/10216/168770",
      metadata: [{ label: "CONTEXT", value: "Master's thesis · FEUP", icon: "school" }, { label: "ROLE", value: "Independent research project", icon: "code" }, { label: "RESULT", value: "17/20", icon: "workspace_premium" }, { label: "STACK", value: "Unity · C# · OpenXR", icon: "data_object" }],
      visual: { label: "PUBLIC RESEARCH PROJECT", title: "Exploring pipelines as spatial and temporal structures", description: "The implementation and dissertation are publicly available.", icon: "view_in_ar" },
      overview: { title: "The project", description: "A Unity VR system for examining GitHub Actions executions through temporal and structural visualisations, including concurrent and sequential layouts and spatial audio." },
      product: { title: "Research scope", description: "The evaluation involved ten participants, so its findings are presented as exploratory rather than broad evidence about developer performance." },
      role: { title: "What I built", items: ["Created temporal and structural visualisations for pipeline executions.", "Implemented concurrent and sequential layouts and spatial audio.", "Designed and ran a ten-participant study comparing tasks with the GitHub Actions interface."] },
      highlights: { title: "Technical highlights", items: [{ title: "Spatial representation", description: "Translated abstract workflow executions into navigable three-dimensional structures." }, { title: "Temporal behaviour", description: "Represented ordering, concurrency and execution state in an immersive environment." }, { title: "User evaluation", description: "Tested the prototype through a small comparative study and reported its results cautiously." }] },
      outcome: { title: "Outcome", description: "The thesis received 17/20. Both the source repository and dissertation record are publicly accessible." }, screenshots: [], technologies: ["Unity", "C#", "OpenXR", "GitHub Actions", "Spatial audio"],
    },
    "licensing-modernisation": {
      slug: "licensing-modernisation", label: "TECHNICAL CASE STUDY · 2025", title: "Licensing Modernisation", description: "Connecting a legacy software-licensing system to modern .NET applications.", backLabel: "Back to selected work", liveLabel: "", liveUrl: "",
      metadata: [{ label: "CONTEXT", value: "Legacy system modernisation", icon: "history" }, { label: "ROLE", value: "Sole developer", icon: "code" }, { label: "WHEN", value: "2025", icon: "calendar_month" }, { label: "STACK", value: ".NET 8 · ASP.NET Core · REST · SOAP", icon: "data_object" }],
      visual: { label: "SECURITY-SENSITIVE DETAILS OMITTED", title: "A compatibility bridge between legacy and modern applications", description: "The case study focuses on the engineering problem without exposing licensing parameters, protocols or infrastructure.", icon: "key" },
      overview: { title: "The problem", description: "An existing .NET Framework software-licensing system needed to work with modern .NET applications while preserving compatibility with a legacy integration." },
      product: { title: "Scope made explicit", description: "This is software licensing, not user authentication. I modernised the integration around the existing system and did not create its cryptographic protocol." },
      role: { title: "What I owned", items: ["Migrated the legacy library from .NET Framework to .NET 8.", "Researched the unsupported SOAP integration and implemented a replacement compatibility layer.", "Designed an ASP.NET Core REST API with routes, DTOs, a service layer and five licensing operations.", "Solved the distinction between the REST server's machine and the actual client computer represented by a licence.", "Integrated the service into MOTUS for production use."] },
      highlights: { title: "Engineering highlights", items: [{ title: "Legacy compatibility", description: "Preserved required behaviour while moving the integration onto a supported runtime." }, { title: "Correct client representation", description: "Resolved the boundary between the service host and the computer actually being licensed." }, { title: "Reusable API", description: "Wrapped five operations in a structured REST interface for modern applications." }] },
      outcome: { title: "Outcome", description: "The service is integrated into MOTUS and used in production, with internal licensing details kept private." }, screenshots: [], technologies: [".NET 8", "ASP.NET Core", "REST", "SOAP", "DTOs"],
    },
  },
  pt: {
    motus: {
      slug: "motus", label: "CASO DE ESTUDO PRINCIPAL · 2024–2025", title: "MOTUS", description: "Dashboard comercial para monitorização de Planos de Mobilidade Urbana Sustentável.", backLabel: "Voltar ao trabalho selecionado", liveLabel: "", liveUrl: "",
      metadata: [{ label: "CONTEXTO", value: "Plataforma comercial municipal", icon: "location_city" }, { label: "FUNÇÃO", value: "Principal responsável frontend · UI/UX", icon: "code" }, { label: "QUANDO", value: "2024–2025", icon: "calendar_month" }, { label: "STACK", value: "React · .NET · Nivo · Figma", icon: "data_object" }],
      visual: { label: "VISUAIS MANTIDOS PRIVADOS", title: "Informação clara para planos de mobilidade complexos", description: "Este caso de estudo mantém-se centrado no texto enquanto screenshots e designs permanecem privados.", icon: "monitoring" },
      overview: { title: "O produto", description: "O MOTUS ajuda municípios a monitorizar PMUS através de uma alternativa ou complemento digital aos fluxos baseados em folhas de cálculo. Reúne medidas, indicadores e progresso em interfaces configuráveis." },
      product: { title: "Pensamento de produto", description: "O desafio central foi tornar informação densa compreensível sem perder o detalhe necessário às equipas municipais." },
      role: { title: "O que desenvolvi", items: ["Liderei o frontend do dashboard e implementei quase todas as interfaces, exceto uma área de administração já existente.", "Desenhei em Figma grande parte da linguagem visual e hierarquia de informação.", "Criei gráficos Nivo reutilizáveis e interfaces configuráveis para diferentes municípios.", "Contribuí em controllers, migrações EF, pesquisa, filtragem, Razor Pages e integração de licenciamento."] },
      highlights: { title: "Destaques de engenharia", items: [{ title: "Visualização reutilizável", description: "Criei modelos de gráficos consistentes para diferentes indicadores." }, { title: "Configuração", description: "Estruturei a interface para diferentes contextos municipais." }, { title: "Do design à entrega", description: "Trabalhei de Figma à implementação e dei formação a utilizadores municipais." }] },
      outcome: { title: "Utilização real", description: "O MOTUS é utilizado por vários municípios portugueses. Participei numa reunião com cliente e dei formação sobre a plataforma." }, screenshots: [], technologies: ["React", ".NET", "Nivo", "Figma", "Entity Framework", "Razor Pages"],
    },
    o2move: {
      slug: "o2move",
      label: "CASO DE ESTUDO PRINCIPAL · 2025",
      title: "O2MOVE",
      description:
        "Uma plataforma pública de informação para um hub de mobilidade urbana sustentável.",
      backLabel: "Voltar aos projetos",
      liveLabel: "Visitar O2MOVE",
      liveUrl: "https://www.o2move.com/",
      secondaryLabel: "Instalação na Trofa",
      secondaryUrl: "https://www.onoticiasdatrofa.pt/trofa-recebe-o-primeiro-hub-o2move-de-portugal/",
      metadata: [
        { label: "CONTEXTO", value: "Agenda BE.Neutral · PPS2", icon: "hub" },
        {
          label: "FUNÇÃO",
          value: "Principal engenheira da versão atual",
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
        icon: "touch_app",
      },
      overview: {
        title: "Visão geral",
        description:
          "O O2MOVE é uma plataforma pública de informação integrada num hub de mobilidade urbana sustentável. Reúne informação de mobilidade numa experiência interativa voltada para o público.",
      },
      role: {
        title: "A minha contribuição",
        items: [
          "Migrei o frontend de React 16 e Create React App para React 18 e Vite, convertendo componentes de classe para hooks e substituindo dependências incompatíveis.",
          "Atualizei .NET Core 3.1 para .NET 8, preservando a lógica de transportes preexistente.",
          "Implementei clustering de paragens com Leaflet e o fluxo frontend para SVGs produzidos por um serviço externo de mapas esquemáticos.",
          "Criei vistas ambientais, comportamento de standby e inatividade e suporte para diferentes resoluções.",
          "Desenhei várias interfaces em Figma e testei manualmente a aplicação no hardware real.",
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
          "Existe uma instalação real do O2MOVE na Trofa, onde o município instalou o primeiro hub O2MOVE de Portugal em 2026. O produto também foi demonstrado em eventos Smart City.",
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
    "environmental-data-api": {
      slug: "environmental-data-api", label: "CASO DE ESTUDO PRINCIPAL · 2026", title: "API de Dados Ambientais", description: "Serviço de produção de dados de observação da Terra para investigação de risco de incêndio.", backLabel: "Voltar ao trabalho selecionado", liveLabel: "", liveUrl: "",
      metadata: [{ label: "CONTEXTO", value: "Investigação de risco de incêndio em Portugal", icon: "forest" }, { label: "FUNÇÃO", value: "Principal responsável", icon: "code" }, { label: "QUANDO", value: "2026", icon: "calendar_month" }, { label: "STACK", value: "FastAPI · Rasterio · STAC · Nginx", icon: "data_object" }],
      visual: { label: "SERVIÇO DE DADOS · SEM INTERFACE PÚBLICA", title: "De dados de fornecedores a resultados prontos para investigação", description: "Endpoints, infraestrutura e detalhes operacionais permanecem privados.", icon: "satellite_alt" },
      overview: { title: "O serviço", description: "Serviço FastAPI em produção que fornece dados ambientais e de satélite a uma equipa externa que desenvolve um modelo de previsão de risco de incêndio para Portugal." },
      product: { title: "O complemento backend", description: "Mostra a vertente de sistemas do meu trabalho: investigar fornecedores, normalizar resultados e colocar em produção um serviço utilizado por outra equipa." },
      role: { title: "O que desenvolvi", items: ["Desenhei o serviço e implementei todo o fluxo Landsat 9.", "Implementei recorte sensível a CRS, máscaras QA, conversão de temperatura e metadados STAC.", "Criei a integração ERA5-Land e o pipeline VIIRS de HDF5 para Parquet.", "Integrei trabalho Copernicus preexistente de outro programador sem atribuir os algoritmos a mim.", "Tratei da maior parte da colocação em produção e de atualizações posteriores de Nginx e middleware de chaves de API."] },
      highlights: { title: "Destaques de engenharia", items: [{ title: "Vários fornecedores", description: "Unifiquei Copernicus, ERA5-Land, USGS Landsat e NASA Earthdata." }, { title: "Processamento geoespacial", description: "Implementei operações raster e transformações de dados científicos." }, { title: "Metadados reutilizáveis", description: "Introduzi STAC para resultados consistentes e pesquisáveis." }] },
      outcome: { title: "Utilização real", description: "O serviço fornece dados processados a uma equipa externa que investiga risco de incêndio em Portugal." }, screenshots: [], technologies: ["Python", "FastAPI", "Rasterio", "STAC", "HDF5", "Parquet", "Nginx"],
    },
    "immersive-cicd": {
      slug: "immersive-cicd", label: "DISSERTAÇÃO DE MESTRADO · 2025", title: "Immersive CI/CD", description: "Visualização de execuções GitHub Actions em realidade virtual.", backLabel: "Voltar ao trabalho selecionado", liveLabel: "Ver código", liveUrl: "https://github.com/anetep/thesis-project", secondaryLabel: "Ler dissertação", secondaryUrl: "https://hdl.handle.net/10216/168770",
      metadata: [{ label: "CONTEXTO", value: "Dissertação · FEUP", icon: "school" }, { label: "FUNÇÃO", value: "Investigação independente", icon: "code" }, { label: "RESULTADO", value: "17/20", icon: "workspace_premium" }, { label: "STACK", value: "Unity · C# · OpenXR", icon: "data_object" }],
      visual: { label: "PROJETO PÚBLICO", title: "Pipelines como estruturas espaciais e temporais", description: "A implementação e a dissertação estão disponíveis publicamente.", icon: "view_in_ar" },
      overview: { title: "O projeto", description: "Sistema VR em Unity para analisar execuções através de visualizações temporais e estruturais, layouts concorrentes e sequenciais e áudio espacial." },
      product: { title: "Âmbito", description: "A avaliação envolveu dez participantes, pelo que os resultados são apresentados como exploratórios." },
      role: { title: "O que desenvolvi", items: ["Criei visualizações temporais e estruturais.", "Implementei layouts concorrentes e sequenciais e áudio espacial.", "Realizei um estudo com dez participantes comparando tarefas com a interface GitHub Actions."] },
      highlights: { title: "Destaques técnicos", items: [{ title: "Representação espacial", description: "Traduzi execuções abstratas em estruturas 3D navegáveis." }, { title: "Comportamento temporal", description: "Representei ordem, concorrência e estado." }, { title: "Avaliação", description: "Testei o protótipo num pequeno estudo comparativo." }] },
      outcome: { title: "Resultado", description: "A dissertação recebeu 17/20. O código e o registo académico são públicos." }, screenshots: [], technologies: ["Unity", "C#", "OpenXR", "GitHub Actions", "Áudio espacial"],
    },
    "licensing-modernisation": {
      slug: "licensing-modernisation", label: "CASO DE ESTUDO TÉCNICO · 2025", title: "Modernização de Licenciamento", description: "Ligação de um sistema de licenciamento legado a aplicações .NET modernas.", backLabel: "Voltar ao trabalho selecionado", liveLabel: "", liveUrl: "",
      metadata: [{ label: "CONTEXTO", value: "Modernização de sistema legado", icon: "history" }, { label: "FUNÇÃO", value: "Única responsável", icon: "code" }, { label: "QUANDO", value: "2025", icon: "calendar_month" }, { label: "STACK", value: ".NET 8 · ASP.NET Core · REST · SOAP", icon: "data_object" }],
      visual: { label: "DETALHES SENSÍVEIS OMITIDOS", title: "Ponte entre aplicações antigas e modernas", description: "O caso não expõe parâmetros, protocolos ou infraestrutura de licenciamento.", icon: "key" },
      overview: { title: "O problema", description: "Um sistema em .NET Framework precisava de funcionar com aplicações .NET modernas, preservando compatibilidade com uma integração antiga." },
      product: { title: "Âmbito explícito", description: "É licenciamento de software, não autenticação. Modernizei a integração e não criei o protocolo criptográfico subjacente." },
      role: { title: "O que desenvolvi", items: ["Migrei a biblioteca para .NET 8.", "Implementei uma camada de compatibilidade SOAP.", "Desenhei uma API REST com rotas, DTOs, serviço e cinco operações.", "Resolvi a distinção entre o servidor e o computador cliente licenciado.", "Integrei o serviço no MOTUS em produção."] },
      highlights: { title: "Destaques de engenharia", items: [{ title: "Compatibilidade", description: "Preservei comportamento numa versão suportada." }, { title: "Cliente correto", description: "Resolvi a fronteira entre servidor e computador licenciado." }, { title: "API reutilizável", description: "Expus cinco operações para aplicações modernas." }] },
      outcome: { title: "Resultado", description: "O serviço está integrado no MOTUS e é utilizado em produção, mantendo privados os detalhes internos." }, screenshots: [], technologies: [".NET 8", "ASP.NET Core", "REST", "SOAP", "DTOs"],
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
