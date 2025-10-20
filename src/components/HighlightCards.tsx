import { motion } from "framer-motion";
import iconLightning from "@/assets/icon-lightning.png";
import iconUx from "@/assets/icon-ux.png";
import iconDeveloper from "@/assets/icon-developer.png";

const highlights = [
  {
    title: "Low power, high impact",
    icon: iconLightning,
  },
  {
    title: "Modern UX by default",
    icon: iconUx,
  },
  {
    title: "Built for developers",
    icon: iconDeveloper,
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
                <h3 className="text-2xl font-bold text-foreground">
                  {highlight.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightCards;
