import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PresaleCard } from "@/components/PresaleCard";
import { Countdown } from "@/components/Countdown";
import { HowToParticipate } from "@/components/HowToParticipate";
import { Stats } from "@/components/Stats";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary mb-6">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Presale Live on Base
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Early Access to the Next Big Thing on{" "}
                  <span className="text-primary">Base</span>
                </h1>

                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  Be among the first to secure your allocation. Limited presale
                  opportunity for early supporters who believe in building on
                  Base.
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    Verified Contract
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    Base Network
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <PresaleCard />
                <Countdown />
              </div>
            </div>
          </div>
        </section>

        <div className="container max-w-5xl mx-auto px-4">
          <Stats />
          <HowToParticipate />
          <FAQ />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
