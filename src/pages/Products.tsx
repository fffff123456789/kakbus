import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Products = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Products</h1>
            <p className="text-xl text-muted-foreground mb-16">
              Next-generation tools built for the future
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gypsy Product Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                <div className="mb-4">
                  <Badge className="animate-pulse-slow bg-gradient-button text-white">
                    Coming Soon
                  </Badge>
                </div>
                
                <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  Gypsy
                </h3>
                
                <p className="text-muted-foreground mb-6 flex-grow">
                  low power local usb based on NAS
                </p>
                
                <Button 
                  disabled 
                  className="w-full opacity-50 cursor-not-allowed"
                  title="Product not available yet"
                >
                  Not Available Yet
                </Button>
              </div>
            </motion.div>

            {/* Placeholder Product Cards */}
            {[1, 2, 3, 4].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 3) }}
                className="group"
              >
                <div className="bg-card/50 border border-border/50 rounded-2xl p-8 h-full flex flex-col opacity-60">
                  <div className="mb-4">
                    <Badge variant="outline" className="text-muted-foreground">
                      In Development
                    </Badge>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 text-muted-foreground">
                    Coming Soon
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 flex-grow">
                    More innovative products are on the way. Stay tuned for updates.
                  </p>
                  
                  <Button 
                    disabled 
                    variant="outline"
                    className="w-full opacity-50 cursor-not-allowed"
                  >
                    Coming Soon
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
