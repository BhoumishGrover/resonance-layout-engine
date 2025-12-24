import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

const values = [
  {
    title: "Craft",
    description: "Every pixel, every frame, every detail matters. We obsess over quality.",
  },
  {
    title: "Innovation",
    description: "Pushing boundaries with emerging technologies and creative approaches.",
  },
  {
    title: "Collaboration",
    description: "Great work happens when talented people come together with shared purpose.",
  },
  {
    title: "Impact",
    description: "We create work that moves audiences and delivers measurable results.",
  },
];

const leadership = [
  { name: "Creative Director", role: "Vision & Strategy" },
  { name: "Technical Director", role: "Innovation & Pipeline" },
  { name: "Executive Producer", role: "Client Relations" },
  { name: "Head of Production", role: "Operations" },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Resonance Digital</title>
        <meta 
          name="description" 
          content="Learn about Resonance Digital's story, philosophy, and the team behind our award-winning VFX and creative work." 
        />
      </Helmet>

      <PageLayout>
        <PageHero
          subtitle="About Us"
          title="The Story of Resonance"
          description="We are a collective of artists, technologists, and storytellers united by a passion for visual excellence."
        />

        {/* Company Story */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
            <div>
              <span className="text-xs text-primary uppercase tracking-widest">Our Story</span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-semibold text-foreground">
                Born from a passion for visual storytelling
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Resonance Digital was founded on a simple belief: that visual storytelling has the power to move people, change perspectives, and create lasting impact.
              </p>
              <p>
                What began as a small team of VFX artists has evolved into a full-service creative studio, partnering with leading brands, filmmakers, and developers worldwide.
              </p>
              <p>
                Today, we continue to push the boundaries of what's possible, combining artistic vision with technical innovation to create work that resonates.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border bg-secondary/10">
          <SectionHeader
            label="Philosophy"
            title="What We Believe"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <span className="text-6xl font-display font-bold text-primary/20">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
          <SectionHeader
            label="Leadership"
            title="The Team"
            description="Industry veterans driving creative excellence and innovation."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {leadership.map((person, index) => (
              <div key={index} className="group">
                <div className="aspect-[3/4] bg-secondary/50 mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/5 to-transparent" />
                </div>
                <h4 className="font-display text-lg text-foreground">{person.name}</h4>
                <p className="text-sm text-muted-foreground">{person.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "200+", label: "Projects Delivered" },
              { value: "50+", label: "Team Members" },
              { value: "15+", label: "Industry Awards" },
            ].map((stat, index) => (
              <div key={index}>
                <span className="font-display text-4xl md:text-6xl font-bold text-primary">
                  {stat.value}
                </span>
                <p className="mt-2 text-sm text-muted-foreground uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default About;
