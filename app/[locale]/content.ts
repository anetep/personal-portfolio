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
      contact: "say hello",
    },
    hero: {
      label: "personal notebook · software engineer",
      titlePrefix: "Hi, I’m",
      titleName: "Anete.",
      description: "",
      currently: "Currently working with Next.js and PostgreSQL on a new project.",
      cta: "see selected work",
      photoLabel: "a photo, soon",
      details: ["tea + running + cats + books"],
    },
    work: {
      title: "01. selected work",
      viewAll: "view all projects",
      items: [
        {
          year: "2025",
          name: "O2MOVE",
          description: "Mobility platform for urban hubs.",
          technologies: "React · Leaflet · ASP.NET Core",
          slug: "o2move",
          accent: "#e95863",
          wash: "#ffe8e5",
          doodle: "map",
        },
        {
          year: "2025",
          name: "IMMERSIVE CI/CD",
          description: "VR visualisation of CI/CD pipelines.",
          technologies: "Unity · C# · OpenXR",
          href: "https://github.com/anetep/thesis-project",
          accent: "#a587c9",
          wash: "#eee7fa",
          doodle: "account_tree",
        },
        {
          year: "2024",
          name: "PMUS DASHBOARD",
          description: "Monitoring dashboard · details soon.",
          technologies: "Case study in progress",
          accent: "#bd8852",
          wash: "#f7e8d2",
          doodle: "directions_transit",
        },
      ],
    },
    about: {
      eyebrow: "02. a little about me",
      title: "I like building useful things and making them feel simple.",
      description:
        "I’m a software engineer based in Porto, currently working at OPT. My work brings together frontend, fullstack applications, data visualisation, and immersive experiences.",
      facts: [
        { label: "currently", value: "Software Engineer at OPT", href: "https://www.opt.pt/" },
        { label: "education", value: "MSc in Informatics and Computing Engineering · FEUP" },
        { label: "based in", value: "Porto, Portugal" },
      ],
      noteLabel: "things I love",
      note: "cats · running · books · travel · music",
    },
    contact: {
      eyebrow: "03. contact",
      title: "let’s talk",
      description: "I’m always open to chatting about projects, ideas, or the next adventure.",
      emailLabel: "EMAIL",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
      note: "",
    },
    archive: {
      title: "personal archive",
      cards: [
        { id: "notes", label: "notes", title: "things I’m learning", description: "Next.js, TypeScript, and small discoveries worth keeping." },
        { id: "currently", label: "currently", title: "right now", description: "Next.js · PostgreSQL · 5 km runs · cats" },
      ],
    },
  },
  pt: {
    navigation: {
      work: "trabalho",
      about: "sobre",
      notes: "notas",
      contact: "diz olá",
    },
    hero: {
      label: "caderno pessoal · engenheira de software",
      titlePrefix: "Olá, sou a",
      titleName: "Anete.",
      description: "",
      currently: "Neste momento, estou a trabalhar com Next.js e PostgreSQL num projeto novo.",
      cta: "ver trabalho selecionado",
      photoLabel: "uma foto, em breve",
      details: ["chá + corrida + gatos + livros"],
    },
    work: {
      title: "01. trabalho selecionado",
      viewAll: "ver todos os projetos",
      items: [
        {
          year: "2025",
          name: "O2MOVE",
          description: "Plataforma de mobilidade para hubs urbanos.",
          technologies: "React · Leaflet · ASP.NET Core",
          slug: "o2move",
          accent: "#e95863",
          wash: "#ffe8e5",
          doodle: "map",
        },
        {
          year: "2025",
          name: "IMMERSIVE CI/CD",
          description: "Visualização de pipelines CI/CD em realidade virtual.",
          technologies: "Unity · C# · OpenXR",
          href: "https://github.com/anetep/thesis-project",
          accent: "#a587c9",
          wash: "#eee7fa",
          doodle: "account_tree",
        },
        {
          year: "2024",
          name: "DASHBOARD PMUS",
          description: "Dashboard de monitorização · detalhes em breve.",
          technologies: "Caso de estudo em preparação",
          accent: "#bd8852",
          wash: "#f7e8d2",
          doodle: "directions_transit",
        },
      ],
    },
    about: {
      eyebrow: "02. um pouco sobre mim",
      title: "Gosto de criar coisas úteis e de as tornar simples.",
      description:
        "Sou engenheira de software no Porto e trabalho atualmente na OPT. O meu trabalho reúne frontend, aplicações fullstack, visualização de dados e experiências imersivas.",
      facts: [
        { label: "atualmente", value: "Software Engineer na OPT", href: "https://www.opt.pt/" },
        { label: "formação", value: "Mestrado em Engenharia Informática e Computação · FEUP" },
        { label: "localização", value: "Porto, Portugal" },
      ],
      noteLabel: "coisas de que gosto",
      note: "gatos · corrida · livros · viagens · música",
    },
    contact: {
      eyebrow: "03. contacto",
      title: "vamos conversar",
      description: "Estou sempre disponível para conversar sobre projetos, ideias ou a próxima aventura.",
      emailLabel: "EMAIL",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
      note: "",
    },
    archive: {
      title: "arquivo pessoal",
      cards: [
        { id: "notes", label: "notas", title: "coisas que estou a aprender", description: "Next.js, TypeScript e pequenas descobertas que vale a pena guardar." },
        { id: "currently", label: "neste momento", title: "agora", description: "Next.js · PostgreSQL · corridas de 5 km · gatos" },
      ],
    },
  },
} as const;
