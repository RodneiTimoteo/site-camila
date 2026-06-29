import Container from "@/components/layout/Container";
import { achievementsData } from "@/data/achievements";

export default function Achievements() {
  return (
    <section id="conquistas" className="scroll-mt-24 bg-primary py-24 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            {achievementsData.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {achievementsData.title}
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/70">
            {achievementsData.description}
          </p>
        </div>

        <div className="mt-14 grid divide-y divide-white/15 border-y border-white/15 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
          {achievementsData.items.map((item) => {
            const isCampusParty = item.title === "Palestrante na Campus Party";

            return (
              <article key={item.title} className="px-0 py-8 md:px-8 lg:px-7">
                <p className="text-sm font-semibold text-secondary">
                  {isCampusParty ? "Palestrante" : item.year}
                </p>

                <h3 className="mt-4 text-xl font-bold leading-7 text-white">
                  {isCampusParty ? "Campus Party" : item.title}
                </h3>

                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                  {item.category}
                </p>

                <p className="mt-5 text-sm leading-6 text-white/70">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
