import { Helmet } from "react-helmet-async";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formType, setFormType] = useState<"general" | "hiring">("general");

  return (
    <>
      <Helmet>
        <title>Contact Us | Resonance Digital</title>
        <meta 
          name="description" 
          content="Get in touch with Resonance Digital. General inquiries, project discussions, and career opportunities." 
        />
      </Helmet>

      <PageLayout>
        <PageHero
          subtitle="Get in Touch"
          title="Let's Create Together"
          description="Whether you have a project in mind or want to join our team, we'd love to hear from you."
        />

        <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              {/* Form Type Toggle */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setFormType("general")}
                  className={`text-sm uppercase tracking-widest pb-2 border-b-2 transition-colors duration-300 ${
                    formType === "general"
                      ? "text-primary border-primary"
                      : "text-muted-foreground border-transparent hover:text-foreground"
                  }`}
                >
                  General Inquiry
                </button>
                <button
                  onClick={() => setFormType("hiring")}
                  className={`text-sm uppercase tracking-widest pb-2 border-b-2 transition-colors duration-300 ${
                    formType === "hiring"
                      ? "text-primary border-primary"
                      : "text-muted-foreground border-transparent hover:text-foreground"
                  }`}
                >
                  Careers
                </button>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {formType === "general" ? (
                  <>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                        Project Type
                      </label>
                      <select className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors">
                        <option value="">Select a vertical</option>
                        <option value="vfx">VFX & Animation</option>
                        <option value="brands">Brand Content</option>
                        <option value="real-estate">Real Estate Visualization</option>
                        <option value="content">Content Production</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                        Tell Us About Your Project
                      </label>
                      <textarea
                        rows={5}
                        className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Describe your project, timeline, and goals..."
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                        Position Interest
                      </label>
                      <select className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors">
                        <option value="">Select a department</option>
                        <option value="vfx">VFX Artist</option>
                        <option value="design">Motion Designer</option>
                        <option value="producer">Producer</option>
                        <option value="tech">Technical Director</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                        Portfolio / Resume Link
                      </label>
                      <input
                        type="url"
                        className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="https://..."
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                        Why Resonance?
                      </label>
                      <textarea
                        rows={5}
                        className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Tell us about yourself and why you'd like to join our team..."
                      />
                    </div>
                  </>
                )}

                <button type="submit" className="btn-primary flex items-center gap-2">
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-12 lg:border-l border-border">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
                Contact Information
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                    <a href="mailto:hello@resonancedigital.com" className="text-foreground hover:text-primary transition-colors">
                      hello@resonancedigital.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Phone</p>
                    <a href="tel:+1234567890" className="text-foreground hover:text-primary transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Studio</p>
                    <address className="text-foreground not-italic">
                      123 Creative District<br />
                      Los Angeles, CA 90001
                    </address>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Follow Us</p>
                <div className="flex gap-6">
                  {["LinkedIn", "Instagram", "Vimeo", "Behance"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="text-sm text-foreground hover:text-primary transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
};

export default Contact;
