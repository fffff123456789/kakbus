import { motion } from "framer-motion";
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="w-16 h-16 mb-6 flex items-center justify-center">
                  <img 
                    src={highlight.icon} 
                    alt={highlight.title} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{highlight.title}</h3>
                {highlight.url ? (
                  <a
                    href={highlight.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-4 py-2 rounded-md bg-foreground text-background font-medium hover:opacity-90"
                  >
                    Visit {highlight.title}
                  </a>
                ) : (
                  <span className="mt-4 inline-block px-4 py-2 rounded-md bg-muted text-muted-foreground font-medium opacity-70">
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
