export type ContactChannelIcon = "linkedin" | "instagram";

export const contactChannels = [
  {
    id: "linkedin",
    title: "LinkedIn",
    description: "Conexões profissionais, conteúdos e trajetória.",
    cta: "Conectar pelo LinkedIn",
    href: "https://www.linkedin.com/in/camila-tim%C3%B3teo-vieira-b8178125/",
    icon: "linkedin",
  },
  {
    id: "instagram",
    title: "Instagram",
    description:
      "Conteúdos sobre produtividade, tecnologia e desenvolvimento profissional.",
    cta: "Acompanhar no Instagram",
    href: "https://www.instagram.com/kamysvieira/",
    icon: "instagram",
  },
] as const;
