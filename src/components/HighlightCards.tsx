import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import iconLightning from "@/assets/icon-lightning.png";
import iconUx from "@/assets/icon-ux.png";
import iconDeveloper from "@/assets/icon-developer.png";

const highlights = [
  {
    title: "Instagram",
    icon: iconUx,
    url: "https://www.instagram.com/terrabus369/",
  },
  {
    title: "Discord",
    icon: iconDeveloper,
    url: "https://discord.gg/nCUj8E6R",
  },
  {
    title: "LinkedIn",
    icon: iconLightning,
    url: "https://www.linkedin.com/company/kakbus/?viewAsMember=true",
  },
];

const HighlightCards = () => {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-xl p-8 lg:p-9 shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:-translate-y-1">
                <div className="w-14 h-14 mb-6 flex items-center justify-center">
                  <img 
                    src={highlight.icon} 
                    alt={highlight.title} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground">{highlight.title}</h3>
                {highlight.url ? (
                  <Button size="sm" variant="secondary" asChild className="mt-4 font-semibold">
                    <a
                      href={highlight.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit {highlight.title}
                    </a>
                  </Button>
                ) : (
                  <span className="mt-4 inline-flex items-center h-9 px-4 rounded-lg bg-muted text-muted-foreground font-medium opacity-70">
                    {highlight.title} (coming soon)
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightCards;
