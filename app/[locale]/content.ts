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
  },
} as const;