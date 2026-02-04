import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/kakbus-logo-new.png";
const Hero = () => {
  return <section className="relative min-h-[90vh] lg:min-h-[88vh] flex items-center justify-center overflow-hidden py-24">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-kakbus-deep-blue via-kakbus-indigo to-kakbus-purple animate-gradient"></div>
      
      {/* Animated Stripes/Waves Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05))] bg-[length:60px_60px] animate-[gradient-move_15s_linear_infinite]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="flex-1 max-w-3xl text-center lg:text-left">
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.05] tracking-tight">
              <span className="bg-gradient-to-r from-kakbus-cyan via-kakbus-pink to-kakbus-gold bg-clip-text text-transparent animate-gradient">
                The Future Runs on Kakbus.
              </span>
            </h1>
            
            {/* Subtext */}
            <p className="text-lg md:text-xl text-kakbus-white/90 mb-10 font-medium leading-relaxed">
              Efficient. Elegant. Built for tomorrow's builders.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link to="/projects">
                <Button size="lg" className="bg-gradient-button text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5">
                  Explore Projects
                </Button>
              </Link>
              
            </div>
          </motion.div>
          </div>
          
          {/* Logo Section */}
          <div className="flex-shrink-0 lg:-ml-8 flex justify-center lg:justify-end w-full lg:w-auto">
            <img 
              src={logo} 
              alt="Kakbus Logo" 
              className="w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 drop-shadow-[0_0_35px_rgba(74,222,128,0.55)]"
            />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
