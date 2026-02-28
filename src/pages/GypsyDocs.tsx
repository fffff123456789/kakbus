import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import gypsyBoard from "@/assets/gypsy-board.png";

const GypsyDocs = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link to="/projects" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
            </Button>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Gypsy Documentation</h1>
            <p className="text-xl text-muted-foreground">
              Modular IoT Node Project – Comprehensive Guide
            </p>
          </motion.div>

          {/* Board Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <div className="bg-card border border-border rounded-2xl p-8 flex justify-center">
              <img
                src={gypsyBoard}
                alt="Gypsy IoT Node Board - Top and Bottom Views"
                className="max-w-2xl w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose prose-invert max-w-4xl mx-auto"
          >
            {/* Overview Section */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-bold mb-6">Gypsy – Modular IoT Node Project</h2>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Gypsy is an experimental IoT node platform built around the ESP8266, designed to act as a compact and deployable sensor hub.
              </p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                The project focuses on creating a standardized "mother IoT node" capable of interfacing with multiple types of sensors using UART, I2C, and SPI communication protocols. Communication parameters such as baud rate, clock speed, and interface configuration are handled in firmware according to the connected sensor's specifications.
              </p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Unlike a typical development board, Gypsy is designed with deployment in mind. It integrates:
              </p>

              <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                <li>Battery-optimized power architecture</li>
                <li>Built-in microSD card logging</li>
                <li>Over-the-Air (OTA) firmware updates</li>
                <li>Structured firmware framework for modular sensor integration</li>
                <li>Expandable hardware interface support</li>
              </ul>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                The long-term goal of the project is to reduce the complexity of building sensor-based IoT systems by providing a reusable, adaptable core node that can be extended for different applications.
              </p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Gypsy is currently in early beta testing, with selected users evaluating the hardware and firmware to guide future revisions. Feedback collected during this phase will directly influence improvements in power optimization, sensor abstraction, and software tooling.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                This project is an ongoing effort toward building a flexible and scalable IoT node platform.
              </p>
            </div>

            {/* Pin Description Section */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Pin Description</h2>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Gypsy exposes commonly used communication and control pins for flexible sensor integration.
              </p>

              {/* Power Pins */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Power Pins</h3>
                <div className="bg-background/50 rounded-lg p-6 space-y-2">
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <span className="font-semibold text-primary">3.3V</span>
                    <span className="text-muted-foreground">Regulated 3.3V output for powering external sensors</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <span className="font-semibold text-primary">GND</span>
                    <span className="text-muted-foreground">Ground reference</span>
                  </div>
                </div>
              </div>

              {/* UART Interface */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">UART Interface</h3>
                <div className="bg-background/50 rounded-lg p-6 space-y-4">
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <span className="font-semibold text-primary">RX</span>
                    <span className="text-muted-foreground">UART Receive</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <span className="font-semibold text-primary">TX</span>
                    <span className="text-muted-foreground">UART Transmit</span>
                  </div>
                  <div className="pt-4 border-t border-border text-muted-foreground">
                    <p className="mb-2">Used for serial communication with UART-based sensors or modules.</p>
                    <p>Baud rate and configuration are set in firmware based on the connected device.</p>
                  </div>
                </div>
              </div>

              {/* Analog Input */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Analog Input</h3>
                <div className="bg-background/50 rounded-lg p-6 space-y-2">
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <span className="font-semibold text-primary">ADC</span>
                    <span className="text-muted-foreground">Analog input pin for reading analog sensors (voltage-based signals within supported range)</span>
                  </div>
                </div>
              </div>

              {/* Digital I/O */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Digital I/O</h3>
                <div className="bg-background/50 rounded-lg p-6 space-y-2">
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <span className="font-semibold text-primary">GPIO16</span>
                    <span className="text-muted-foreground">General purpose digital input/output pin</span>
                  </div>
                  <div className="text-muted-foreground pt-4 border-t border-border">
                    Can be used for interrupts, digital sensors, or control signals.
                  </div>
                </div>
              </div>

              {/* I2C Interface */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">I2C Interface</h3>
                <div className="bg-background/50 rounded-lg p-6 space-y-4">
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <span className="font-semibold text-primary">SCL</span>
                    <span className="text-muted-foreground">I2C Clock</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <span className="font-semibold text-primary">SDA</span>
                    <span className="text-muted-foreground">I2C Data</span>
                  </div>
                  <div className="pt-4 border-t border-border text-muted-foreground">
                    <p>Used for connecting I2C sensors and modules.</p>
                  </div>
                </div>
              </div>

              {/* Warning Note */}
              <div className="bg-amber-950/20 border border-amber-700/50 rounded-lg p-6 flex gap-4">
                <div className="text-2xl font-bold text-amber-600">⚠</div>
                <div>
                  <h4 className="font-semibold text-amber-600 mb-2">Note</h4>
                  <p className="text-muted-foreground">
                    SCL and SDA pins can also be repurposed as normal GPIO pins in firmware if I2C communication is not required.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default GypsyDocs;
