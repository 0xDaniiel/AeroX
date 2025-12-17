import { Wallet, ArrowRight, Gift } from "lucide-react";

const steps = [
  {
    icon: Wallet,
    title: "Connect Wallet",
    description: "Use any Base-compatible wallet like MetaMask, Coinbase Wallet, or Rainbow.",
  },
  {
    icon: ArrowRight,
    title: "Send Base ETH",
    description: "Transfer ETH on Base network to the presale address. Minimum 0.001 ETH.",
  },
  {
    icon: Gift,
    title: "Receive Tokens",
    description: "Tokens will be airdropped to your wallet after the presale ends.",
  },
];

export const HowToParticipate = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          How to Participate
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Three simple steps to join the presale
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <step.icon className="w-6 h-6 text-primary" />
            </div>
            <div className="text-sm text-muted-foreground mb-2">Step {index + 1}</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
