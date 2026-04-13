import { motion, Variants } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PresaleCard } from "@/components/PresaleCard";
import { Countdown } from "@/components/Countdown";
import { HowToParticipate } from "@/components/HowToParticipate";
import { Stats } from "@/components/Stats";
import { FAQ } from "@/components/FAQ";

// Animation Variants
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

const float: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col overflow-hidden">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative">
          <div className="container max-w-5xl mx-auto px-4">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* LEFT SIDE */}
              <motion.div variants={fadeUp}>
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-6"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  Presale Live on Base
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
                >
                  Early Access to the Next Big Thing on{" "}
                  <span className="text-primary">Base</span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="text-lg text-muted-foreground mb-8 max-w-lg"
                >
                  Be among the first to secure your allocation. Limited presale
                  opportunity for early supporters who believe in building on
                  Base.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-4 text-sm text-muted-foreground"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Verified Contract
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    Base Network
                  </div>
                </motion.div>
              </motion.div>

              {/* RIGHT SIDE */}
              <motion.div variants={fadeIn} className="space-y-6">
                <motion.div
                  variants={float}
                  animate="animate"
                  whileHover={{ scale: 1.03 }}
                >
                  <PresaleCard />
                </motion.div>

                <motion.div variants={fadeUp} whileHover={{ scale: 1.02 }}>
                  <Countdown />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SCROLL SECTIONS */}
        <div className="container max-w-5xl mx-auto px-4 space-y-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Stats />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <HowToParticipate />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <FAQ />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
