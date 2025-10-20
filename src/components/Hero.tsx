import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/kakbus-logo-new.png";
const Hero = () => {
  return <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-kakbus-deep-blue via-kakbus-indigo to-kakbus-purple animate-gradient"></div>
      
      {/* Animated Stripes/Waves Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05))] bg-[length:60px_60px] animate-[gradient-move_15s_linear_infinite]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between gap-12">
          {/* Main Content */}
          <div className="flex-1 max-w-3xl">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            {/* Main Headline with Premium Gradient */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-kakbus-cyan via-kakbus-pink to-kakbus-gold bg-clip-text text-transparent animate-gradient">
                The Future Runs on Kakbus.
              </span>
            </h1>
            
            {/* Subtext */}
            <p className="text-xl md:text-2xl text-kakbus-white/90 mb-12 font-medium">
              Efficient. Elegant. Built for tomorrow's builders.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-gradient-button text-white hover:scale-105 transition-transform font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl">
                  Explore Products
                </Button>
              </Link>
              
            </div>
          </motion.div>
          </div>
          
          {/* Logo Section */}
          <div className="flex-shrink-0 -ml-12">
            <img 
              src={logo} 
              alt="Kakbus Logo" 
              className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 drop-shadow-[0_0_40px_rgba(74,222,128,0.6)]"
            />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;