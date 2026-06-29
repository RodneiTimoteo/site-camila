import { ArrowUpRight, BriefcaseBusiness, Camera } from "lucide-react";
import Image from "next/image";

import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/layout/Section";
import { contactChannels, type ContactChannelIcon } from "@/data/contact";

const channelIcons = {
  linkedin: BriefcaseBusiness,
  instagram: Camera,
} satisfies Record<ContactChannelIcon, typeof BriefcaseBusiness>;

export default function Contact() {
  return (
    <Section id="contato" className="bg-site">
      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="relative min-h-[300px] overflow-hidden rounded-2xl sm:min-h-[460px] lg:min-h-[560px]">
          <Image
            src="/images/camila-contato.jpeg"
            alt="Camila Timóteo Vieira"
            fill
            sizes="(max-width: 1024px) 100vw, 44vw"
            className="object-cover object-[center_24%]"
            priority={false}
          />
        </div>

        <div className="lg:py-10">
          <SectionTitle
            eyebrow="Contato"
            title="Conexões relevantes começam com uma boa conversa."
            description="Para convites relacionados a palestras, eventos, parcerias estratégicas, iniciativas educacionais e projetos institucionais, entre em contato."
          />

          <p className="mt-6 max-w-2xl text-base leading-8 text-site">
            Será um prazer conhecer o contexto e entender como essa conexão pode gerar valor.
          </p>

          <div className="mt-10 divide-y divide-site border-y border-site">
            {contactChannels.map((channel) => {
              const Icon = channelIcons[channel.icon];

              return (
                <a
                  key={channel.id}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${channel.title} de Camila Timóteo Vieira em uma nova aba`}
                  className="group flex gap-4 py-6 text-site transition hover:text-primary sm:items-center"
                >
                  <Icon
                    className="mt-1 h-5 w-5 shrink-0 text-secondary transition group-hover:text-primary sm:mt-0"
                    aria-hidden="true"
                  />

                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-semibold">
                      {channel.title}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-muted-site">
                      {channel.description}
                    </span>
                    <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      {channel.cta}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
