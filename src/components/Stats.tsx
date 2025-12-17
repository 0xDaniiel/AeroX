const stats = [
  { label: "Total Supply", value: "1,000,000,000" },
  { label: "Presale Allocation", value: "30%" },
  { label: "Minimum Contribution", value: "0.001 ETH" },
  { label: "Network", value: "Base" },
];

export const Stats = () => {
  return (
    <section className="py-12 md:py-16 border-y border-border">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
