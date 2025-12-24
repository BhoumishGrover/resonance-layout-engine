import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { ArrowUpRight } from "lucide-react";

const collaborations = [
  { brand: "Global Tech Corp", type: "Brand Campaign", outcome: "200% engagement increase" },
  { brand: "Luxury Maison", type: "Product Launch", outcome: "Award-winning campaign" },
  { brand: "Sports League", type: "Broadcast Package", outcome: "10M+ views" },
];

const caseStudies = [
  {
    title: "Redefining Luxury",
    client: "Fashion House",
    description: "A complete brand refresh with cinematic content strategy.",
  },
  {
    title: "The Future of Mobility",
    client: "Auto Manufacturer",
    description: "Product reveal campaign reaching global audiences.",
  },
  {
    title: "Game Day Experience",
    client: "Sports Network",
    description: "Immersive broadcast graphics and motion design.",
  },
];

const Brands = () => {
  return (
    <>
      <Helmet>
        <title>Brand Content | Resonance Digital</title>
        <meta 
          name="description" 
          content="Strategic brand content and campaigns that resonate with audiences worldwide. We create compelling visual narratives for leading brands." 
        />
      </Helmet>

      <PageLayout>
        <PageHero
          subtitle="Brands & Content"
          title="Brand Storytelling"
          description="We partner with world-class brands to create content that captivates, converts, and builds lasting connections with audiences."
        />

        {/* Collaborations */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
          <SectionHeader
            label="Partnerships"
            title="Brand Collaborations"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collaborations.map((collab, index) => (
              <div key={index} className="p-8 border border-border hover:border-primary/50 transition-colors duration-300">
                <span className="text-xs text-primary uppercase tracking-widest">{collab.type}</span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">{collab.brand}</h3>
                <p className="mt-4 text-sm text-muted-foreground">{collab.outcome}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
          <SectionHeader
            label="Featured Work"
            title="Case Studies"
            description="Deep dives into our most impactful brand partnerships."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] bg-secondary/50 mb-6 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-transparent group-hover:scale-105 transition-transform duration-700" />
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-widest">{study.client}</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {study.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{study.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Work Showcase */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
          <SectionHeader
            label="Showcase"
            title="Selected Work"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video bg-secondary/50 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Campaign Video 1</span>
            </div>
            <div className="aspect-video bg-secondary/50 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Campaign Video 2</span>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border bg-secondary/10">
          <SectionHeader
            label="Clients"
            title="Brands We've Worked With"
            align="center"
          />
          <div className="grid grid-cols-4 md:grid-cols-8 gap-6 mt-12">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square bg-secondary/30 flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Logo</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 border-t border-border text-center">
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground">
            Let's create something remarkable.
          </h2>
          <a href="/contact" className="inline-flex items-center gap-2 mt-8 btn-primary">
            Start a Project
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </section>
      </PageLayout>
    </>
  );
};

export default Brands;
