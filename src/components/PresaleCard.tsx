import { useState } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const PRESALE_ADDRESS = "0x908Af7c602D10755101233596feDbB2c8C9F58E0";

export const PresaleCard = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    await navigator.clipboard.writeText(PRESALE_ADDRESS);
    setCopied(true);
    toast.success("Address copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 md:p-8 glow-box">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-slow" />
        <span className="text-sm font-medium text-green-500">Live Now</span>
      </div>
      
      <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
        Presale Address
      </h2>
      <p className="text-muted-foreground text-sm mb-6">
        Send Base ETH to participate in the presale
      </p>

      <div className="bg-secondary/50 border border-border rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between gap-3">
          <code className="text-sm md:text-base text-foreground break-all font-mono">
            {PRESALE_ADDRESS}
          </code>
          <button
            onClick={copyAddress}
            className="flex-shrink-0 p-2 rounded-md bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            aria-label="Copy address"
          >
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <a
        href={`https://basescan.org/address/${PRESALE_ADDRESS}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
      >
        View on BaseScan
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
};
