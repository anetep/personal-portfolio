export const locales = ["en", "pt"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export const content = {
  en: {
    navigation: {
      work: "WORK",
      about: "ABOUT",
      notes: "NOTES",
      places: "PLACES",
    },
    hero: {
      label: "PERSONAL NOTEBOOK · SOFTWARE ENGINEER",
      title: "Hi, I'm Anete.",
      description:
        "I'm a software engineer who enjoys building useful things for the web and making complicated problems feel simple.",
      currently: "currently → learning Next.js · running 5 km",
      cta: "See my work →",
      details: [
        "based in Porto, Portugal",
        "frontend-minded · fullstack curious",
        "tea + running + cats",
      ],
    },
    work: {
      title: "SELECTED WORK",
      items: [
        {
          year: "2025",
          name: "O2MOVE",
          description: "Mobility platform",
          technologies: "React · Maps · ASP.NET Core",
          href: "https://www.o2move.com/",
        },
        {
          year: "2025",
          name: "IMMERSIVE CI/CD",
          description: "VR visualization of CI/CD pipelines",
          technologies: "Unity · C# · OpenXR",
          href: "https://github.com/anetep/thesis-project",
        },
        {
          year: "2024",
          name: "MORE PROJECTS",
          description: "View the full archive",
          technologies: "→",
          href: "https://github.com/anetep",
        },
      ],
    },
    about: {
      eyebrow: "A LITTLE ABOUT ME",
      title: "I like building useful things and making them feel simple.",
      description:
        "I’m a software engineer based in Porto, currently working at OPT. My background combines frontend work, fullstack applications, data visualisation, and immersive experiences.",
      facts: [
        {
          label: "currently",
          value: "Software Engineer at OPT",
        },
        {
          label: "education",
          value: "MSc in Informatics and Computing Engineering · FEUP",
        },
        {
          label: "outside work",
          value: "running, volunteering with animals, and collecting places",
        },
      ],
      noteLabel: "SMALL NOTE",
      note: "This website is a growing archive of work, notes, places, and experiments.",
    },
    contact: {
      eyebrow: "GET IN TOUCH",
      title: "Let’s make something useful.",
      description:
        "I’m always happy to talk about software, thoughtful products, maps, and interesting ideas.",
      emailLabel: "EMAIL",
      githubLabel: "GITHUB",
      linkedinLabel: "LINKEDIN",
      note: "PS: if you are here because of a cat, we already have something in common.",
    },
    archive: {
      title: "PERSONAL ARCHIVE",
      cards: [
        {
          id: "notes",
          label: "NOTES",
          title: "things I’m learning",
          description: "Next.js, TypeScript, and small discoveries worth keeping.",
        },
        {
          id: "places",
          label: "PLACES",
          title: "a map, eventually",
          description: "Favourite places, journeys, and pins collected over time.",
        },
        {
          id: "currently",
          label: "CURRENTLY",
          title: "right now",
          description: "Next.js · 5 km runs · coffee · cats",
        },
      ],
    },
  },
  pt: {
    navigation: {
      work: "TRABALHO",
      about: "SOBRE",
      notes: "NOTAS",
      places: "LUGARES",
    },
    hero: {
      label: "CADERNO PESSOAL · ENGENHEIRA DE SOFTWARE",
      title: "Olá, sou a Anete.",
      description:
        "Sou engenheira de software e gosto de criar coisas úteis para a web e de tornar problemas complicados mais simples.",
      currently: "neste momento → a aprender Next.js · a correr 5 km",
      cta: "Ver o meu trabalho →",
      details: [
        "Porto, Portugal",
        "gosto de frontend · curiosa por fullstack",
        "chá + corrida + gatos",
      ],
    },
    work: {
      title: "TRABALHO SELECIONADO",
      items: [
        {
          year: "2025",
          name: "O2MOVE",
          description: "Plataforma de mobilidade",
          technologies: "React · Mapas · ASP.NET Core",
          href: "https://www.o2move.com/",
        },
        {
          year: "2025",
          name: "IMMERSIVE CI/CD",
          description: "Visualização de pipelines CI/CD em realidade virtual",
          technologies: "Unity · C# · OpenXR",
          href: "https://github.com/anetep/thesis-project",
        },
        {
          year: "2024",
          name: "MAIS PROJETOS",
          description: "Ver todos os projetos",
          technologies: "→",
          href: "https://github.com/anetep",
        },
      ],
    },
    about: {
      eyebrow: "UM POUCO SOBRE MIM",
      title: "Gosto de criar coisas úteis e de as tornar simples.",
      description:
        "Sou engenheira de software no Porto e trabalho atualmente na OPT. Tenho experiência em frontend, aplicações fullstack, visualização de dados e experiências imersivas.",
      facts: [
        {
          label: "ATUALMENTE",
          value: "Software Engineer na OPT",
        },
        {
          label: "FORMAÇÃO",
          value: "Mestrado em Engenharia Informática e Computação · FEUP",
        },
        {
          label: "FORA DO TRABALHO",
          value: "corrida, voluntariado com animais e colecionar lugares",
        },
      ],
      noteLabel: "PEQUENA NOTA",
      note: "Este site é um arquivo em crescimento de trabalho, notas, lugares e experiências.",
    },
    contact: {
      eyebrow: "CONTACTO",
      title: "Vamos criar algo útil.",
      description:
        "Gosto sempre de conversar sobre software, produtos bem pensados, mapas e ideias interessantes.",
      emailLabel: "EMAIL",
      githubLabel: "GITHUB",
      linkedinLabel: "LINKEDIN",
      note: "PS: se vieste pelos gatos, já temos algo em comum.",
    },
    archive: {
      title: "ARQUIVO PESSOAL",
      cards: [
        {
          id: "notes",
          label: "NOTAS",
          title: "coisas que estou a aprender",
          description: "Next.js, TypeScript e pequenas descobertas que vale a pena guardar.",
        },
        {
          id: "places",
          label: "LUGARES",
          title: "um mapa, eventualmente",
          description: "Lugares favoritos, viagens e pins colecionados ao longo do tempo.",
        },
        {
          id: "currently",
          label: "NESTE MOMENTO",
          title: "agora",
          description: "Next.js · corridas de 5 km · café · gatos",
        },
      ],
    },
  },
} as const;