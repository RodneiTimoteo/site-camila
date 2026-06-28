export type ContentChannelIcon = "linkedin" | "instagram" | "youtube" | "whatsapp";

export const contentChannels = [
  {
    id: "linkedin",
    platform: "LinkedIn",
    title: "Ideias sobre dados, IA e liderança",
    description:
      "Reflexões práticas sobre tecnologia, negócios, carreira e desenvolvimento de lideranças.",
    cta: "Acompanhar conteúdos",
    href: "https://www.linkedin.com/in/camila-tim%C3%B3teo-vieira-b8178125/",
    icon: "linkedin",
    featured: true,
  },
  {
    id: "instagram",
    platform: "Instagram",
    title: "Produtividade, rotina e desenvolvimento",
    description:
      "Conteúdos sobre performance, organização, tecnologia e evolução profissional.",
    cta: "Seguir no Instagram",
    href: "https://www.instagram.com/kamysvieira/",
    icon: "instagram",
    featured: true,
  },
  {
    id: "youtube",
    platform: "YouTube",
    title: "Aulas e conteúdos da Kamys Academy",
    description:
      "Vídeos sobre tecnologia, dados, inteligência artificial, carreira, produtividade e desenvolvimento profissional.",
    cta: "Explorar os vídeos",
    href: "https://www.youtube.com/@kamysacademy",
    icon: "youtube",
    featured: false,
  },
  {
    id: "whatsapp",
    platform: "WhatsApp",
    title: "Entre para a comunidade Kamys Academy",
    description:
      "Receba conteúdos, novidades e reflexões sobre carreira, liderança, produtividade, dados e tecnologia.",
    cta: "Entrar na comunidade",
    href: "https://www.whatsapp.com/channel/0029Van5p6SKWEKt5BEDsQ36",
    icon: "whatsapp",
    featured: false,
  },
] as const;
