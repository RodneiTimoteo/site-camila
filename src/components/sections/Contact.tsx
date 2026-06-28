import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import SectionTitle from "@/components/common/SectionTitle";
import Section from "@/components/layout/Section";
import { contactInfo } from "@/data/contact";
import Image from "next/image";

export default function Contact() {
  return (
    <Section id="contato" className="bg-site">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <SectionTitle
            eyebrow="Contato"
            title="Vamos conversar?"
            description="Entre em contato comigo pelos canais abaixo ou envie uma mensagem pelo formulário."
          />

          <div className="mx-auto mt-8 w-full max-w-md overflow-hidden rounded-2xl border border-site bg-surface shadow-sm">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/camila-contato.jpeg"
                alt="Camila Timóteo Vieira"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[center_25%]"
              />
            </div>
          </div>

          <div className="mt-10 space-y-5">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-4 text-site transition hover:text-primary"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface shadow-sm">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>

              <span>
                <span className="block text-sm text-muted-site">E-mail</span>
                <span className="font-medium">{contactInfo.email}</span>
              </span>
            </a>

            <a
              href={`tel:${contactInfo.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-4 text-site transition hover:text-primary"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface shadow-sm">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>

              <span>
                <span className="block text-sm text-muted-site">Telefone</span>
                <span className="font-medium">{contactInfo.phone}</span>
              </span>
            </a>

            <div className="flex items-center gap-4 text-site">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface shadow-sm">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>

              <span>
                <span className="block text-sm text-muted-site">Localização</span>
                <span className="font-medium">{contactInfo.location}</span>
              </span>
            </div>

            <a
              href={contactInfo.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-hover)]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Falar comigo pelo WhatsApp
            </a>
          </div>
        </div>

        <form className="rounded-2xl border border-site bg-surface p-6 shadow-sm sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-site"
              >
                Nome
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Digite seu nome"
                className="min-h-12 w-full rounded-xl border border-site px-4 outline-none transition focus:border-[var(--color-primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-site"
              >
                E-mail
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="seuemail@exemplo.com"
                className="min-h-12 w-full rounded-xl border border-site px-4 outline-none transition focus:border-[var(--color-primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-site"
              >
                Telefone
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(00) 00000-0000"
                className="min-h-12 w-full rounded-xl border border-site px-4 outline-none transition focus:border-[var(--color-primary)]"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-site"
              >
                Mensagem
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Escreva sua mensagem"
                className="w-full resize-none rounded-xl border border-site px-4 py-3 outline-none transition focus:border-[var(--color-primary)]"
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-hover)]"
              >
                Enviar mensagem
              </button>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-muted-site">
            Este formulário ainda é visual. A integração de envio será
            configurada posteriormente.
          </p>
        </form>
      </div>
    </Section>
  );
}
