import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Camera,
  MessageCircle,
  Play,
} from "lucide-react";

import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/layout/Section";
import { contentChannels, type ContentChannelIcon } from "@/data/contentChannels";

const icons = {
  linkedin: BriefcaseBusiness,
  instagram: Camera,
  youtube: Play,
  whatsapp: MessageCircle,
} satisfies Record<ContentChannelIcon, typeof BriefcaseBusiness>;

const ariaLabels = {
  linkedin: "Abrir LinkedIn de Camila Vieira",
  instagram: "Abrir Instagram de Camila Vieira",
  youtube: "Abrir canal Kamys Academy no YouTube",
  whatsapp: "Abrir canal Kamys Academy no WhatsApp",
} satisfies Record<(typeof contentChannels)[number]["id"], string>;

export default function ContentCommunity() {
  const featuredChannels = contentChannels.filter((channel) => channel.featured);
  const complementaryChannels = contentChannels.filter((channel) => !channel.featured);

  return (
    <Section id="conteudo" className="bg-site">
      <SectionTitle
        eyebrow="Conteúdo & Comunidade"
        title="Continue acompanhando essa jornada."
        description="Conteúdos e comunidades onde tecnologia, dados, liderança, produtividade e desenvolvimento profissional se transformam em conhecimento compartilhado."
        align="center"
      />

      <div className="mt-12 overflow-hidden rounded-2xl border border-site bg-surface">
        <div className="grid divide-y divide-site md:grid-cols-2 md:divide-x md:divide-y-0">
          {featuredChannels.map((channel) => {
            const Icon = icons[channel.icon];

            return (
              <Link
                key={channel.id}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabels[channel.id]}
                className="group block cursor-pointer p-7 transition-colors hover:bg-site/70 sm:p-8 lg:p-10"
              >
                <div className="flex items-center justify-between gap-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                    {channel.platform}
                  </p>

                  <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>

                <h3 className="mt-8 text-3xl font-bold leading-tight text-primary">
                  {channel.title}
                </h3>

                <p className="mt-5 max-w-xl leading-7 text-muted-site">
                  {channel.description}
                </p>

                <span className="mt-7 inline-flex items-center gap-2 font-semibold text-primary">
                  {channel.cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="grid divide-y divide-site border-t border-site lg:grid-cols-2 lg:divide-x lg:divide-y-0">
          {complementaryChannels.map((channel) => {
            const Icon = icons[channel.icon];

            return (
              <Link
                key={channel.id}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabels[channel.id]}
                className="group block cursor-pointer p-7 transition-colors hover:bg-site/70 sm:p-8"
              >
                <div className="lg:flex lg:items-start lg:gap-6">
                  <Icon className="mb-5 h-5 w-5 shrink-0 text-secondary lg:mb-0 lg:mt-1" aria-hidden="true" />

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                      {channel.platform}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold leading-8 text-primary">
                      {channel.title}
                    </h3>

                    <p className="mt-4 leading-7 text-muted-site">
                      {channel.description}
                    </p>

                    <span className="mt-7 inline-flex items-center gap-2 font-semibold text-primary">
                      {channel.cta}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
