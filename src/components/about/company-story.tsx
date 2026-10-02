import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";

const blocks = [
  {
    image: "/images/about-who-we-are.jpg",
    imageAlt: "Stratos Info Tech team collaborating",
    eyebrow: "Who we are",
    title: "An information technology company headquartered in Abu Dhabi",
    paragraphs: [
      "STRATOS INFO TECH is an information technology company headquartered in Abu Dhabi, United Arab Emirates. We help businesses build, connect, protect and improve their technology environments through a comprehensive range of IT services and wholesale hardware solutions.",
      "Our experienced consultants and engineers tailor solutions to each organisation's requirements, bringing together infrastructure planning, network services, cloud computing, AI development, data management and cybersecurity. Our approach connects business priorities with practical technology choices, from an initial requirement to implementation and support.",
    ],
  },
  {
    image: "/images/about-our-goals.jpg",
    imageAlt: "Stratos Info Tech engineer reviewing a connected system",
    eyebrow: "What we bring together",
    title: "A complete technology environment where systems work together",
    paragraphs: [
      "A complete technology environment depends on systems working together. Our expanded service offering connects infrastructure and cloud with business applications, analytics, collaboration, smart systems and ongoing IT support.",
      "We plan each engagement around the agreed scope and your existing environment.",
    ],
  },
];

export function CompanyStory() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container className="flex flex-col gap-20">
        {blocks.map((block, index) => (
          <Reveal key={block.eyebrow}>
            <div
              className={
                index % 2 === 1
                  ? "flex flex-col-reverse gap-10 lg:flex-row-reverse lg:items-center lg:gap-16"
                  : "flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16"
              }
            >
              <div className="flex-1">
                <Eyebrow>{block.eyebrow}</Eyebrow>
                <h2 className="mt-6 text-3xl font-semibold tracking-tight text-balance text-ink-900 sm:text-4xl">
                  {block.title}
                </h2>
                <div className="mt-5 space-y-4">
                  {block.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 24)}
                      className="text-base leading-relaxed text-pretty text-mist-500 sm:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="group flex-1">
                <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-ink-900/8">
                  <Image
                    src={block.image}
                    alt={block.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
