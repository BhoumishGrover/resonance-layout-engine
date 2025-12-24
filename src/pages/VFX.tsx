import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { ArrowRight } from "lucide-react";

const pipelineSteps = [
  { step: "01", title: "Concept", description: "Initial ideation and creative direction" },
  { step: "02", title: "Pre-Production", description: "Storyboarding, previz, and planning" },
  { step: "03", title: "Production", description: "Principal photography and on-set supervision" },
  { step: "04", title: "Post-Production", description: "VFX creation, compositing, and finishing" },
];

const caseStudies = [
  { title: "Project Aurora", category: "Film VFX", year: "2024" },
  { title: "Neon Dreams", category: "Commercial", year: "2024" },
  { title: "Beyond Horizon", category: "Streaming Series", year: "2023" },
];

const VFX = () => {
  return (
    <>
      <Helmet>
        <title>VFX & Animation | Resonance Digital</title>
        <meta 
          name="description" 
          content="High-end visual effects and animation services for film, advertising, and digital experiences. From concept to final delivery." 
        />
      </Helmet>

      <PageLayout>
        <PageHero
          subtitle="VFX & Animation"
          title="Visual Effects Mastery"
          description="We push the boundaries of visual storytelling through cutting-edge VFX and motion design, delivering photorealistic and stylized effects that captivate audiences."
        />

        {/* Showreel Section */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24">
          <div className="aspect-video bg-secondary/50 border border-border flex items-center justify-center">
            <span className="text-muted-foreground text-sm uppercase tracking-widest">
              VFX Showreel Placeholder
            </span>
          </div>
        </section>

        {/* Production Pipeline */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
          <SectionHeader
            label="Our Process"
            title="Production Pipeline"
            description="A streamlined workflow designed for efficiency and creative excellence."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pipelineSteps.map((item) => (
              <div key={item.step} className="group">
                <span className="text-5xl font-display font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-500">
                  {item.step}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
          <SectionHeader
            label="Featured Work"
            title="Case Studies"
          />
          <div className="space-y-0">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="group flex items-center justify-between py-8 border-b border-border cursor-pointer hover:bg-secondary/20 -mx-6 px-6 md:-mx-12 md:px-12 transition-colors duration-300"
              >
                <div className="flex items-center gap-8">
                  <span className="text-sm text-muted-foreground">{study.year}</span>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {study.title}
                  </h3>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground hidden md:block">{study.category}</span>
                  <ArrowRight className="w-5 h-5 text-foreground group-hover:text-primary group-hover:translate-x-2 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
          <SectionHeader
            label="The Team"
            title="VFX Artists & Technicians"
            description="Industry veterans with experience across major studios and productions."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] bg-secondary/50 mb-4" />
                <h4 className="font-display text-lg text-foreground">Team Member</h4>
                <p className="text-sm text-muted-foreground">VFX Supervisor</p>
              </div>
            ))}
          </div>
        </section>

        {/* Clients */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border bg-secondary/10">
          <SectionHeader
            label="Trusted By"
            title="Our Clients"
            align="center"
          />
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mt-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-[2/1] bg-secondary/30 flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Logo</span>
              </div>
            ))}
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default VFX;
