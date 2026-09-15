import type { Locale } from "./content";

export const projects = {
  en: {
    motus: {
      slug: "motus", label: "CASE STUDY · 2024–2025", title: "Mobility Dashboard",
      description: "A commercial dashboard for monitoring Sustainable Urban Mobility Plans.",
      backLabel: "Back to selected work", liveLabel: "", liveUrl: "",
      metadata: [{ label: "CONTEXT", value: "Commercial municipal platform", icon: "location_city" }, { label: "ROLE", value: "Main frontend engineer · UI/UX", icon: "code" }, { label: "WHEN", value: "2024–2025", icon: "calendar_month" }, { label: "STACK", value: "React · .NET · Nivo · Figma", icon: "data_object" }],
      visual: { description: "" },
      overview: { title: "The product", description: "This commercial dashboard helps municipalities monitor Sustainable Urban Mobility Plans through a software-based alternative or complement to spreadsheet workflows. It brings measures, indicators and progress into configurable interfaces for different municipal deployments." },
      product: { title: "Product thinking", description: "The core design challenge was making dense monitoring information understandable without losing the detail municipal teams need for day-to-day work." },
      role: { title: "What I owned", items: ["Led the dashboard frontend and implemented almost all of its interfaces, excluding an existing user-administration area.", "Designed much of the visual language and information hierarchy in Figma, from navigation and layouts to cards, tables, spacing, colour and chart choices.", "Implemented KPI calculations and the interfaces that present measures, indicators and progress to municipal teams.", "Created reusable Nivo chart components and configurable interfaces for different municipal deployments.", "Contributed selected backend and administration work, including controllers, EF migrations, filtering, search, Razor Pages improvements and licensing integration."] },
      highlights: { title: "Engineering highlights", items: [{ title: "Reusable visualisation", description: "Built chart templates that kept dashboards consistent across different indicators and datasets." }, { title: "Configurable deployments", description: "Structured the interface so the commercial product could adapt to different municipal contexts." }, { title: "Design to delivery", description: "Worked from Figma through implementation, then personally delivered training to municipal users." }] },
      outcome: { title: "Real-world use", description: "The dashboard is used by multiple Portuguese municipalities. I also attended a client meeting and personally trained municipal users." },
      technologies: ["React", ".NET", "Nivo", "Figma", "Entity Framework", "Razor Pages"],
    },
    o2move: {
      slug: "o2move",
      label: "CASE STUDY · 2025",
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
      visual: { description: "" },
      overview: {
        title: "Overview",
        description:
          "O2MOVE brings public-transport, route-planning and environmental information together on interactive mobility-hub displays. I inherited an older application whose core transport logic already existed and became responsible for adapting and developing the current version.",
      },
      role: {
        title: "What I owned",
        items: [
          "Migrated the frontend from React 16 and Create React App to React 18 and Vite, converting class components to hooks and replacing incompatible dependencies.",
          "Upgraded .NET Core 3.1 to .NET 8 while preserving the pre-existing transport logic.",
          "Implemented Leaflet stop clustering and the frontend workflow for SVGs produced by an external schematic-map service.",
          "Built environmental views, standby and inactivity behaviour, and support for different display resolutions.",
          "Designed several interfaces in Figma and manually tested the application on its physical display hardware.",
        ],
      },
      highlights: {
        title: "Engineering highlights",
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
          "A real O2MOVE installation operates in Trofa, where the municipality installed Portugal's first O2MOVE hub in 2026. The product has also been presented to international and Portuguese Smart City audiences.",
      },
      outcomeLinks: [
        { label: "Smart City Expo World Congress 2025 · Barcelona", href: "https://www.opt.pt/2025/11/o2-move-smart-city-expo-world-congress-2025-barcelona/" },
        { label: "Portugal Smart Cities Summit 2026", href: "https://www.armisgroup.com/pt/post/o2-move-no-portugal-smart-cities-summit-2026-1" },
      ],
      technologies: ["React 18", "Vite", "Leaflet", ".NET 8", "Figma", "SVG"],
    },
    "environmental-data-api": {
      slug: "environmental-data-api", label: "CASE STUDY · 2026", title: "Environmental Data API", description: "A production Earth-observation data service for wildfire-risk research.", backLabel: "Back to selected work", liveLabel: "", liveUrl: "",
      metadata: [{ label: "CONTEXT", value: "Wildfire-risk research in Portugal", icon: "forest" }, { label: "ROLE", value: "Main developer", icon: "code" }, { label: "WHEN", value: "2026", icon: "calendar_month" }, { label: "STACK", value: "FastAPI · Rasterio · STAC · Nginx", icon: "data_object" }],
      visual: { description: "The service is represented conceptually because its endpoints, infrastructure and operational details remain private." },
      overview: { title: "The service", description: "This production FastAPI service supplies environmental and Earth-observation data to an external team developing a wildfire-risk prediction model for Portugal. It integrates providers with different APIs, formats and processing requirements behind a reusable interface." },
      product: { title: "A backend complement", description: "This project shows the systems side of my work: investigating unfamiliar providers, normalising outputs and deploying a service used by another team." },
      role: { title: "What I owned", items: ["Designed the service and implemented the Landsat 9 workflow, from authenticated search and pagination through processing, caching and packaging.", "Implemented CRS-aware cropping, QA masking, surface-temperature conversion and STAC metadata.", "Built the ERA5-Land integration and a NASA Earthdata VIIRS HDF5-to-Parquet pipeline.", "Integrated pre-existing Copernicus retrieval work from another developer without attributing its algorithms to myself.", "Handled most production deployment work, including later Nginx and API-key middleware updates."] },
      highlights: { title: "Engineering highlights", items: [{ title: "Multi-provider integration", description: "Unified Copernicus, ERA5-Land, USGS Landsat and NASA Earthdata despite different access patterns and formats." }, { title: "Geospatial processing", description: "Implemented CRS-aware raster operations, quality masking and scientific-data transformations." }, { title: "Reusable metadata", description: "Introduced STAC metadata so processed outputs remained consistent and discoverable." }] },
      outcome: { title: "Real-world use", description: "The production service provides processed data to an external research team working on wildfire-risk prediction for Portugal." }, technologies: ["Python", "FastAPI", "Rasterio", "STAC", "HDF5", "Parquet", "Nginx"],
    },
    "immersive-cicd": {
      slug: "immersive-cicd", label: "MASTER'S THESIS · 2025", title: "Immersive CI/CD", description: "A VR factory for exploring GitHub Actions execution history.", backLabel: "Back to selected work", liveLabel: "View source", liveUrl: "https://github.com/anetep/thesis-project", secondaryLabel: "Read dissertation", secondaryUrl: "https://hdl.handle.net/10216/168770",
      metadata: [{ label: "CONTEXT", value: "Individual Master's thesis · FEUP", icon: "school" }, { label: "ROLE", value: "Design · engineering · evaluation", icon: "code" }, { label: "RESULT", value: "17/20 · 20 participants", icon: "workspace_premium" }, { label: "STACK", value: "Unity · C# · OpenXR · GitHub API", icon: "data_object" }],
      visual: { description: "Each workflow becomes a floor, each run a block on a conveyor-like timeline, and each job a smaller block contained within its run." },
      overview: { title: "The problem", description: "GitHub Actions is effective for inspecting one run at a time, but it is difficult to see timing, overlap, hierarchy and failures across many workflows in one view. This thesis explored whether a spatial representation could support that broader perspective." },
      product: { title: "Individual ownership", description: "I designed and implemented the prototype under academic supervision, including data integration, procedural scene generation, VR interaction, spatial audio, study design and analysis. Unity template assets and third-party media were not created by me." },
      role: { title: "What I owned", items: ["Integrated the GitHub Actions REST API and local JSON snapshots through a shared data-provider abstraction.", "Modelled workflows, runs and jobs, then generated the factory scene procedurally from their hierarchy and timestamps.", "Built VR navigation, hover information panels, floor selection, magnification and world-scaling tools.", "Added visual failure states and supplementary spatial audio for failed runs.", "Designed, conducted and analysed a counterbalanced within-subjects study with 20 participants."] },
      highlights: { title: "Engineering highlights", items: [{ title: "Time in 3D space", description: "Mapped a shared timestamp origin to the Z-axis and execution duration to block length, preserving alignment across workflow floors." }, { title: "Concurrent lanes", description: "Used greedy first-fit interval assignment so overlapping runs and jobs appear side by side while sequential activity reuses space." }, { title: "Compressed idle time", description: "Detected repository-wide inactive periods and replaced long empty distances with labelled portals that make the discontinuity explicit." }] },
      outcome: { title: "What the evaluation showed", description: "In this 20-participant study, VR was faster for temporal navigation and run-level failure scanning, while GitHub Actions was faster for detailed failed-job lookup. The result suggests complementary strengths rather than overall superiority. The thesis received 17/20." },
      caseStudy: {
        modelTitle: "How the visual model works",
        modelItems: [{ label: "Height", value: "A separate floor for each workflow" }, { label: "Depth", value: "Time, with older activity farther into the scene" }, { label: "Width", value: "Parallel lanes for intervals that overlap in time" }, { label: "Containment", value: "Workflow → run → job hierarchy" }],
        architectureTitle: "From data to an interactive scene",
        architecture: ["GitHub Actions REST API or local JSON", "Data-provider abstraction", "Workflow, run and job model", "Procedural Unity scene", "XR interaction and spatial audio"],
        interactionTitle: "Balancing overview and detail",
        interaction: "The large factory view made timing and status patterns visible across workflows, but increased the cost of inspecting individual jobs. Direct floor navigation, hover panels, a magnifier and world scaling helped bridge that gap. The study still showed that the conventional interface was faster for fine-grained job lookup.",
        visualCuesTitle: "Visual status cues",
        visualCues: "Success, in-progress and failure states use a blue, yellow and red hierarchy. I examined the palette through common colour-vision simulations, but did not validate it with colour-vision-deficient participants.",
        evaluationTitle: "Evaluation",
        tableLabel: "Task / measure",
        evaluationIntro: "Twenty mostly FEUP computer-engineering students and graduates used both interfaces. Three comparative tasks measured time and success; a fourth VR-only task isolated spatial audio.",
        results: [{ label: "Temporal navigation", github: "84.82 s", vr: "18.22 s" }, { label: "Failed-run identification", github: "119.58 s", vr: "13.17 s" }, { label: "Failed-job identification", github: "8.04 s", vr: "16.16 s" }, { label: "Mean usability score", github: "56.38", vr: "78.0" }],
        lessonsTitle: "What I learned",
        lessons: ["Spatial overview and conventional detail views solve different parts of the inspection problem.", "Concurrency inferred from timing is useful visually, but it is not the same as declared job dependencies.", "Spatial audio worked only as a supplementary cue: 13 of 20 participants completed the audio-only task, with vertical localisation the main weakness.", "The academic sample, fixed dataset and short task set limit how far the findings can be generalised."],
        imageCaptions: { hero: "Complete factory view with workflow floors, runs, jobs, timeline markers and compressed time portals.", magnifier: "The handheld magnifier makes distant workflow and run labels readable without losing the surrounding context.", runPanel: "Hovering a run opens a panel with its status, timing, attempt count and job summary.", palette: "The status palette shown under common colour-vision simulations.", evaluation: "A participant using the prototype during the comparative study at FEUP." },
        imageAlts: { hero: "Multi-floor virtual factory showing GitHub Actions workflows, runs, jobs and time portals", magnifier: "VR magnifier enlarging the label of a workflow floor", runPanel: "VR run information panel showing metadata for a failed workflow run", palette: "Status colour palette under typical and simulated colour-vision conditions", evaluation: "Study participant using a VR headset and controllers while the prototype appears on a laptop" },
      },
      technologies: ["Unity", "C#", "OpenXR", "XR Interaction Toolkit", "Universal Render Pipeline", "GitHub Actions REST API", "UnityWebRequest", "Local JSON"],
    },
    "licensing-modernisation": {
      slug: "licensing-modernisation", label: "TECHNICAL CASE STUDY · 2025", title: "Licensing Modernisation", description: "Connecting a legacy software-licensing system to modern .NET applications.", backLabel: "Back to selected work", liveLabel: "", liveUrl: "",
      metadata: [{ label: "CONTEXT", value: "Legacy system modernisation", icon: "history" }, { label: "ROLE", value: "Sole developer", icon: "code" }, { label: "WHEN", value: "2025", icon: "calendar_month" }, { label: "STACK", value: ".NET 8 · ASP.NET Core · REST · SOAP", icon: "data_object" }],
      visual: { description: "The case study focuses on the engineering problem without exposing licensing parameters, protocols or infrastructure." },
      overview: { title: "The problem", description: "An existing .NET Framework software-licensing system needed to work with modern .NET applications while preserving compatibility with a legacy integration." },
      product: { title: "Scope made explicit", description: "This is software licensing, not user authentication. I modernised the integration around the existing system and did not create its cryptographic protocol." },
      role: { title: "What I owned", items: ["Migrated the legacy library from .NET Framework to .NET 8.", "Researched the unsupported SOAP integration and implemented a replacement compatibility layer.", "Designed an ASP.NET Core REST API with routes, DTOs, a service layer and five licensing operations.", "Solved the distinction between the REST server's machine and the actual client computer represented by a licence.", "Integrated the service into the mobility dashboard for production use."] },
      highlights: { title: "Engineering highlights", items: [{ title: "Legacy compatibility", description: "Preserved required behaviour while moving the integration onto a supported runtime." }, { title: "Correct client representation", description: "Resolved the boundary between the service host and the computer actually being licensed." }, { title: "Reusable API", description: "Wrapped five operations in a structured REST interface for modern applications." }] },
      outcome: { title: "Outcome", description: "The service is integrated into the mobility dashboard and used in production, with internal licensing details kept private." }, technologies: [".NET 8", "ASP.NET Core", "REST", "SOAP", "DTOs"],
    },
  },
  pt: {
    motus: {
      slug: "motus", label: "CASO DE ESTUDO · 2024–2025", title: "Dashboard de Mobilidade", description: "Dashboard comercial para monitorização de Planos de Mobilidade Urbana Sustentável.", backLabel: "Voltar ao trabalho selecionado", liveLabel: "", liveUrl: "",
      metadata: [{ label: "CONTEXTO", value: "Plataforma comercial municipal", icon: "location_city" }, { label: "FUNÇÃO", value: "Principal responsável frontend · UI/UX", icon: "code" }, { label: "QUANDO", value: "2024–2025", icon: "calendar_month" }, { label: "STACK", value: "React · .NET · Nivo · Figma", icon: "data_object" }],
      visual: { description: "" },
      overview: { title: "O produto", description: "Este dashboard comercial ajuda municípios a monitorizar PMUS através de uma alternativa ou complemento digital aos fluxos baseados em folhas de cálculo. Reúne medidas, indicadores e progresso em interfaces configuráveis." },
      product: { title: "Pensamento de produto", description: "O desafio central foi tornar informação densa compreensível sem perder o detalhe necessário às equipas municipais." },
      role: { title: "O que esteve a meu cargo", items: ["Liderei o frontend do dashboard e implementei quase todas as interfaces, exceto uma área de administração já existente.", "Desenhei em Figma grande parte da linguagem visual e hierarquia de informação.", "Implementei cálculos de KPIs e as interfaces que apresentam medidas, indicadores e progresso às equipas municipais.", "Criei gráficos Nivo reutilizáveis e interfaces configuráveis para diferentes municípios.", "Contribuí em controllers, migrações EF, pesquisa, filtragem, Razor Pages e integração de licenciamento."] },
      highlights: { title: "Destaques de engenharia", items: [{ title: "Visualização reutilizável", description: "Criei modelos de gráficos consistentes para diferentes indicadores." }, { title: "Configuração", description: "Estruturei a interface para diferentes contextos municipais." }, { title: "Do design à entrega", description: "Trabalhei de Figma à implementação e dei formação a utilizadores municipais." }] },
      outcome: { title: "Utilização real", description: "O dashboard é utilizado por vários municípios portugueses. Participei numa reunião com cliente e dei formação sobre a plataforma." }, technologies: ["React", ".NET", "Nivo", "Figma", "Entity Framework", "Razor Pages"],
    },
    o2move: {
      slug: "o2move",
      label: "CASO DE ESTUDO · 2025",
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
      visual: { description: "" },
      overview: {
        title: "Visão geral",
        description:
          "O O2MOVE é uma plataforma pública de informação integrada num hub de mobilidade urbana sustentável. Reúne informação de mobilidade numa experiência interativa voltada para o público.",
      },
      role: {
        title: "O que esteve a meu cargo",
        items: [
          "Migrei o frontend de React 16 e Create React App para React 18 e Vite, convertendo componentes de classe para hooks e substituindo dependências incompatíveis.",
          "Atualizei .NET Core 3.1 para .NET 8, preservando a lógica de transportes preexistente.",
          "Implementei clustering de paragens com Leaflet e o fluxo frontend para SVGs produzidos por um serviço externo de mapas esquemáticos.",
          "Criei vistas ambientais, comportamento de standby e inatividade e suporte para diferentes resoluções.",
          "Desenhei várias interfaces em Figma e testei manualmente a aplicação no hardware real.",
        ],
      },
      highlights: {
        title: "Destaques de engenharia",
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
          "Existe uma instalação real do O2MOVE na Trofa, onde o município instalou o primeiro hub O2MOVE de Portugal em 2026. O produto também foi apresentado a públicos internacionais e portugueses ligados às Smart Cities.",
      },
      outcomeLinks: [
        { label: "Smart City Expo World Congress 2025 · Barcelona", href: "https://www.opt.pt/2025/11/o2-move-smart-city-expo-world-congress-2025-barcelona/" },
        { label: "Portugal Smart Cities Summit 2026", href: "https://www.armisgroup.com/pt/post/o2-move-no-portugal-smart-cities-summit-2026-1" },
      ],
      technologies: ["React 18", "Vite", "Leaflet", "ASP.NET Core"],
    },
    "environmental-data-api": {
      slug: "environmental-data-api", label: "CASO DE ESTUDO · 2026", title: "API de Dados Ambientais", description: "Serviço de produção de dados de observação da Terra para investigação de risco de incêndio.", backLabel: "Voltar ao trabalho selecionado", liveLabel: "", liveUrl: "",
      metadata: [{ label: "CONTEXTO", value: "Investigação de risco de incêndio em Portugal", icon: "forest" }, { label: "FUNÇÃO", value: "Principal responsável", icon: "code" }, { label: "QUANDO", value: "2026", icon: "calendar_month" }, { label: "STACK", value: "FastAPI · Rasterio · STAC · Nginx", icon: "data_object" }],
      visual: { description: "Endpoints, infraestrutura e detalhes operacionais permanecem privados." },
      overview: { title: "O serviço", description: "Serviço FastAPI em produção que fornece dados ambientais e de satélite a uma equipa externa que desenvolve um modelo de previsão de risco de incêndio para Portugal." },
      product: { title: "O complemento backend", description: "Mostra a vertente de sistemas do meu trabalho: investigar fornecedores, normalizar resultados e colocar em produção um serviço utilizado por outra equipa." },
      role: { title: "O que esteve a meu cargo", items: ["Desenhei o serviço e implementei todo o fluxo Landsat 9.", "Implementei recorte sensível a CRS, máscaras QA, conversão de temperatura e metadados STAC.", "Criei a integração ERA5-Land e o pipeline VIIRS de HDF5 para Parquet.", "Integrei trabalho Copernicus preexistente de outro programador sem atribuir os algoritmos a mim.", "Tratei da maior parte da colocação em produção e de atualizações posteriores de Nginx e middleware de chaves de API."] },
      highlights: { title: "Destaques de engenharia", items: [{ title: "Vários fornecedores", description: "Unifiquei Copernicus, ERA5-Land, USGS Landsat e NASA Earthdata." }, { title: "Processamento geoespacial", description: "Implementei operações raster e transformações de dados científicos." }, { title: "Metadados reutilizáveis", description: "Introduzi STAC para resultados consistentes e pesquisáveis." }] },
      outcome: { title: "Utilização real", description: "O serviço fornece dados processados a uma equipa externa que investiga risco de incêndio em Portugal." }, technologies: ["Python", "FastAPI", "Rasterio", "STAC", "HDF5", "Parquet", "Nginx"],
    },
    "immersive-cicd": {
      slug: "immersive-cicd", label: "DISSERTAÇÃO DE MESTRADO · 2025", title: "Immersive CI/CD", description: "Uma fábrica VR para explorar históricos de execução do GitHub Actions.", backLabel: "Voltar ao trabalho selecionado", liveLabel: "Ver código", liveUrl: "https://github.com/anetep/thesis-project", secondaryLabel: "Ler dissertação", secondaryUrl: "https://hdl.handle.net/10216/168770",
      metadata: [{ label: "CONTEXTO", value: "Dissertação individual · FEUP", icon: "school" }, { label: "FUNÇÃO", value: "Design · engenharia · avaliação", icon: "code" }, { label: "RESULTADO", value: "17/20 · 20 participantes", icon: "workspace_premium" }, { label: "STACK", value: "Unity · C# · OpenXR · API GitHub", icon: "data_object" }],
      visual: { description: "Cada workflow torna-se um piso, cada execução um bloco numa linha temporal e cada job um bloco menor contido na execução." },
      overview: { title: "O problema", description: "O GitHub Actions é eficaz para inspecionar uma execução, mas torna difícil ver tempo, sobreposição, hierarquia e falhas em vários workflows. A dissertação explorou se uma representação espacial poderia apoiar essa perspetiva global." },
      product: { title: "Responsabilidade individual", description: "Desenhei e implementei o protótipo sob supervisão académica, incluindo integração de dados, geração procedural, interação VR, áudio espacial, estudo e análise. Os assets de template e media de terceiros não foram criados por mim." },
      role: { title: "O que esteve a meu cargo", items: ["Integrei a API REST do GitHub Actions e snapshots JSON locais através de uma abstração comum.", "Modelei workflows, execuções e jobs e gerei proceduralmente a fábrica a partir da hierarquia e dos timestamps.", "Criei navegação VR, painéis de informação, seleção de pisos, lupa e escala do mundo.", "Adicionei estados visuais e áudio espacial suplementar para falhas.", "Desenhei, realizei e analisei um estudo contrabalançado com 20 participantes."] },
      highlights: { title: "Destaques de engenharia", items: [{ title: "Tempo no espaço 3D", description: "Mapeei uma origem temporal comum ao eixo Z e a duração ao comprimento dos blocos, alinhando todos os pisos." }, { title: "Pistas concorrentes", description: "Usei atribuição greedy first-fit para mostrar intervalos sobrepostos lado a lado e reutilizar espaço nos sequenciais." }, { title: "Tempo inativo comprimido", description: "Detetei períodos sem atividade e substituí grandes distâncias por portais identificados." }] },
      outcome: { title: "O que mostrou a avaliação", description: "Neste estudo com 20 participantes, a VR foi mais rápida na navegação temporal e identificação de falhas ao nível da execução; o GitHub Actions foi mais rápido na consulta detalhada de jobs. O resultado aponta para forças complementares. A dissertação recebeu 17/20." },
      caseStudy: {
        modelTitle: "Como funciona o modelo visual", modelItems: [{ label: "Altura", value: "Um piso separado por workflow" }, { label: "Profundidade", value: "Tempo, com atividade antiga mais distante" }, { label: "Largura", value: "Pistas paralelas para intervalos sobrepostos" }, { label: "Contenção", value: "Hierarquia workflow → execução → job" }],
        architectureTitle: "Dos dados à cena interativa", architecture: ["API REST GitHub Actions ou JSON local", "Abstração de fornecedores", "Modelo de workflows, execuções e jobs", "Cena Unity procedural", "Interação XR e áudio espacial"],
        interactionTitle: "Equilibrar visão global e detalhe", interaction: "A fábrica torna padrões temporais e estados visíveis entre workflows, mas aumenta o custo de consultar jobs individuais. Navegação direta, painéis, lupa e escala do mundo ajudam, embora o estudo tenha mostrado que a interface convencional continuou mais rápida para detalhe.",
        visualCuesTitle: "Pistas visuais de estado", visualCues: "Os estados de sucesso, em execução e falha usam uma hierarquia azul, amarela e vermelha. Analisei a paleta através de simulações comuns de visão da cor, mas não a validei com participantes com deficiência de visão da cor.",
        evaluationTitle: "Avaliação", tableLabel: "Tarefa / medida", evaluationIntro: "Vinte participantes, sobretudo estudantes e graduados de engenharia informática da FEUP, utilizaram ambas as interfaces. Três tarefas compararam tempo e sucesso; uma quarta isolou o áudio espacial.",
        results: [{ label: "Navegação temporal", github: "84,82 s", vr: "18,22 s" }, { label: "Identificação de execução falhada", github: "119,58 s", vr: "13,17 s" }, { label: "Identificação de job falhado", github: "8,04 s", vr: "16,16 s" }, { label: "Usabilidade média", github: "56,38", vr: "78,0" }],
        lessonsTitle: "O que aprendi", lessons: ["A visão espacial e a consulta convencional resolvem partes diferentes do problema.", "Concorrência inferida pelo tempo não equivale a dependências declaradas.", "O áudio funcionou apenas como pista suplementar: 13 de 20 participantes concluíram a tarefa só com som.", "A amostra académica, o dataset fixo e as tarefas curtas limitam a generalização."],
        imageCaptions: { hero: "Vista completa da fábrica com pisos, execuções, jobs, marcadores temporais e portais de compressão de tempo.", magnifier: "A lupa torna legíveis etiquetas distantes sem perder o contexto envolvente.", runPanel: "Ao apontar para uma execução, abre-se um painel com estado, tempos, tentativa e resumo dos jobs.", palette: "A paleta de estados sob simulações comuns de visão da cor.", evaluation: "Participante a utilizar o protótipo durante o estudo comparativo na FEUP." },
        imageAlts: { hero: "Fábrica virtual com vários pisos, workflows, execuções, jobs e portais temporais", magnifier: "Lupa VR a ampliar a etiqueta de um piso de workflow", runPanel: "Painel VR com informação de uma execução falhada", palette: "Paleta de estados em condições típicas e simuladas de visão da cor", evaluation: "Participante do estudo com headset e comandos VR enquanto o protótipo aparece num portátil" },
      },
      technologies: ["Unity", "C#", "OpenXR", "XR Interaction Toolkit", "Universal Render Pipeline", "API REST GitHub Actions", "UnityWebRequest", "JSON local"],
    },
    "licensing-modernisation": {
      slug: "licensing-modernisation", label: "CASO DE ESTUDO TÉCNICO · 2025", title: "Modernização de Licenciamento", description: "Ligação de um sistema de licenciamento legado a aplicações .NET modernas.", backLabel: "Voltar ao trabalho selecionado", liveLabel: "", liveUrl: "",
      metadata: [{ label: "CONTEXTO", value: "Modernização de sistema legado", icon: "history" }, { label: "FUNÇÃO", value: "Única responsável", icon: "code" }, { label: "QUANDO", value: "2025", icon: "calendar_month" }, { label: "STACK", value: ".NET 8 · ASP.NET Core · REST · SOAP", icon: "data_object" }],
      visual: { description: "O caso não expõe parâmetros, protocolos ou infraestrutura de licenciamento." },
      overview: { title: "O problema", description: "Um sistema em .NET Framework precisava de funcionar com aplicações .NET modernas, preservando compatibilidade com uma integração antiga." },
      product: { title: "Âmbito explícito", description: "É licenciamento de software, não autenticação. Modernizei a integração e não criei o protocolo criptográfico subjacente." },
      role: { title: "O que esteve a meu cargo", items: ["Migrei a biblioteca para .NET 8.", "Implementei uma camada de compatibilidade SOAP.", "Desenhei uma API REST com rotas, DTOs, serviço e cinco operações.", "Resolvi a distinção entre o servidor e o computador cliente licenciado.", "Integrei o serviço no dashboard de mobilidade em produção."] },
      highlights: { title: "Destaques de engenharia", items: [{ title: "Compatibilidade", description: "Preservei comportamento numa versão suportada." }, { title: "Cliente correto", description: "Resolvi a fronteira entre servidor e computador licenciado." }, { title: "API reutilizável", description: "Expus cinco operações para aplicações modernas." }] },
      outcome: { title: "Resultado", description: "O serviço está integrado no dashboard de mobilidade e é utilizado em produção, mantendo privados os detalhes internos." }, technologies: [".NET 8", "ASP.NET Core", "REST", "SOAP", "DTOs"],
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
