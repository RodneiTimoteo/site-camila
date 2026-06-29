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
  return (
    <Section id="conteudo" className="bg-primary py-28">
      <SectionTitle
        eyebrow="Conteúdo & Comunidade"
        title="Continue acompanhando essa jornada."
        description="Conteúdos e comunidades onde tecnologia, dados, liderança, produtividade e desenvolvimento profissional se transformam em conhecimento compartilhado."
        align="center"
        theme="dark"
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:gap-6">
        {contentChannels.map((channel) => {
          const Icon = icons[channel.icon];

          const isPrimaryChannel = channel.featured;

          return (
            <Link
              key={channel.id}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ariaLabels[channel.id]}
              className={`group flex cursor-pointer flex-col rounded-2xl border bg-surface p-7 shadow-[0_12px_30px_rgba(12,18,32,0.08)] transition duration-300 hover:border-[var(--color-secondary)] hover:bg-white hover:shadow-[0_16px_34px_rgba(12,18,32,0.10)] sm:p-8 lg:p-9 ${
                isPrimaryChannel
                  ? "border-t-[3px] border-white/70 border-t-[var(--color-secondary)]"
                  : "border-white/70"
              }`}
            >
              <div className="flex items-center justify-between gap-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                  {channel.platform}
                </p>

                <Icon className="h-6 w-6 shrink-0 text-secondary transition-colors group-hover:text-primary" aria-hidden="true" />
              </div>

              <h3 className="mt-6 text-2xl font-bold leading-8 text-primary sm:text-3xl sm:leading-tight">
                {channel.title}
              </h3>

              <p className="mt-5 leading-7 text-muted-site">
                {channel.description}
              </p>

              <span className="mt-7 inline-flex items-center gap-2 font-semibold text-primary transition-colors group-hover:text-[var(--color-secondary)]">
                {channel.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
