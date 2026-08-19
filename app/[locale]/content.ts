export const locales = ["en", "pt"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export const content = {
  en: {
    navigation: {
      work: "work",
      about: "about",
      notes: "notes",
      places: "places",
      contact: "say hello",
    },
    hero: {
      label: "personal notebook · software engineer",
      titlePrefix: "Hi, I’m",
      titleName: "Anete.",
      description: "I build thoughtful interfaces and turn complex problems into simple, useful things.",
      currently: "Currently → learning Next.js and exploring new ideas",
      cta: "see selected work ↓",
      photoLabel: "a photo, soon",
      details: ["tea + running + cats", "frontend-minded", "curious"],
    },
    work: {
      title: "01. selected work",
      viewAll: "view all projects →",
      items: [
        {
          year: "2025",
          name: "O2MOVE",
          description: "Mobility platform for urban hubs.",
          technologies: "React · Leaflet · ASP.NET Core",
          slug: "o2move",
          accent: "#e95863",
          wash: "#ffe8e5",
          doodle: "⌖",
        },
        {
          year: "2025",
          name: "IMMERSIVE CI/CD",
          description: "VR visualisation of CI/CD pipelines.",
          technologies: "Unity · C# · OpenXR",
          href: "https://github.com/anetep/thesis-project",
          accent: "#a587c9",
          wash: "#eee7fa",
          doodle: "✦",
        },
        {
          year: "2024",
          name: "PMUS DASHBOARD",
          description: "Monitoring dashboard · details soon.",
          technologies: "Case study in progress",
          accent: "#bd8852",
          wash: "#f7e8d2",
          doodle: "⌁",
        },
      ],
    },
    about: {
      eyebrow: "02. a little about me",
      title: "I like building useful things and making them feel simple.",
      description:
        "I’m a software engineer based in Porto, currently working at OPT. My work brings together frontend, fullstack applications, data visualisation, and immersive experiences.",
      facts: [
        { label: "currently", value: "Software Engineer at OPT" },
        { label: "education", value: "MSc in Informatics and Computing Engineering · FEUP" },
        { label: "outside work", value: "running, animals, and collecting places" },
      ],
      noteLabel: "things I love",
      note: "cats · running · books · travel · music · good coffee",
    },
    contact: {
      eyebrow: "03. contact",
      title: "let’s talk",
      description: "I’m always open to chatting about projects, ideas, or the next adventure.",
      emailLabel: "EMAIL",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
      note: "PS: if you are here because of a cat, we already have something in common.",
    },
    archive: {
      title: "personal archive",
      cards: [
        { id: "notes", label: "notes", title: "things I’m learning", description: "Next.js, TypeScript, and small discoveries worth keeping." },
        { id: "places", label: "places", title: "a map, eventually", description: "Favourite places, journeys, and pins collected over time." },
        { id: "currently", label: "currently", title: "right now", description: "Next.js · 5 km runs · coffee · cats" },
      ],
    },
  },
  pt: {
    navigation: {
      work: "trabalho",
      about: "sobre",
      notes: "notas",
      places: "lugares",
      contact: "diz olá",
    },
    hero: {
      label: "caderno pessoal · engenheira de software",
      titlePrefix: "Olá, sou a",
      titleName: "Anete.",
      description: "Crio interfaces pensadas com cuidado e torno problemas complexos em coisas simples e úteis.",
      currently: "Neste momento → a aprender Next.js e a explorar ideias novas",
      cta: "ver trabalho selecionado ↓",
      photoLabel: "uma foto, em breve",
      details: ["chá + corrida + gatos", "gosto de frontend", "curiosa"],
    },
    work: {
      title: "01. trabalho selecionado",
      viewAll: "ver todos os projetos →",
      items: [
        {
          year: "2025",
          name: "O2MOVE",
          description: "Plataforma de mobilidade para hubs urbanos.",
          technologies: "React · Leaflet · ASP.NET Core",
          slug: "o2move",
          accent: "#e95863",
          wash: "#ffe8e5",
          doodle: "⌖",
        },
        {
          year: "2025",
          name: "IMMERSIVE CI/CD",
          description: "Visualização de pipelines CI/CD em realidade virtual.",
          technologies: "Unity · C# · OpenXR",
          href: "https://github.com/anetep/thesis-project",
          accent: "#a587c9",
          wash: "#eee7fa",
          doodle: "✦",
        },
        {
          year: "2024",
          name: "DASHBOARD PMUS",
          description: "Dashboard de monitorização · detalhes em breve.",
          technologies: "Caso de estudo em preparação",
          accent: "#bd8852",
          wash: "#f7e8d2",
          doodle: "⌁",
        },
      ],
    },
    about: {
      eyebrow: "02. um pouco sobre mim",
      title: "Gosto de criar coisas úteis e de as tornar simples.",
      description:
        "Sou engenheira de software no Porto e trabalho atualmente na OPT. O meu trabalho reúne frontend, aplicações fullstack, visualização de dados e experiências imersivas.",
      facts: [
        { label: "atualmente", value: "Software Engineer na OPT" },
        { label: "formação", value: "Mestrado em Engenharia Informática e Computação · FEUP" },
        { label: "fora do trabalho", value: "corrida, animais e colecionar lugares" },
      ],
      noteLabel: "coisas de que gosto",
      note: "gatos · corrida · livros · viagens · música · bom café",
    },
    contact: {
      eyebrow: "03. contacto",
      title: "vamos conversar",
      description: "Estou sempre disponível para conversar sobre projetos, ideias ou a próxima aventura.",
      emailLabel: "EMAIL",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
      note: "PS: se vieste pelos gatos, já temos algo em comum.",
    },
    archive: {
      title: "arquivo pessoal",
      cards: [
        { id: "notes", label: "notas", title: "coisas que estou a aprender", description: "Next.js, TypeScript e pequenas descobertas que vale a pena guardar." },
        { id: "places", label: "lugares", title: "um mapa, eventualmente", description: "Lugares favoritos, viagens e pins colecionados ao longo do tempo." },
        { id: "currently", label: "neste momento", title: "agora", description: "Next.js · corridas de 5 km · café · gatos" },
      ],
    },
  },
} as const;
