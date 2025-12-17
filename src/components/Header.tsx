export const Header = () => {
  return (
    <header className="py-6 border-b border-border">
      <div className="container max-w-5xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">A</span>
          </div>
          <span className="font-semibold text-foreground">AeroX</span>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="px-3 py-1.5 bg-secondary rounded-full text-sm text-muted-foreground">
            <span className="text-foreground font-medium">Base</span> Network
          </div>
        </div>
      </div>
    </header>
  );
};
