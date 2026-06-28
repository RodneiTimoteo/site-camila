import Container from "@/components/layout/Container";
import { authorityStats } from "@/data/authority";

export default function AuthorityStats() {
  return (
    <section className="bg-site pb-16">
      <Container>
        <div className="grid gap-4 rounded-2xl border border-site bg-surface p-5 shadow-sm sm:grid-cols-2 sm:p-6 lg:grid-cols-4">
          {authorityStats.map((stat) => (
            <article
              key={stat.label}
              className="border-site px-4 py-5 text-center sm:[&:nth-child(2n)]:border-l lg:border-l lg:first:border-l-0"
            >
              <p className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                {stat.value}
              </p>

              <p className="mx-auto mt-3 max-w-44 text-sm font-medium leading-6 text-muted-site">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
