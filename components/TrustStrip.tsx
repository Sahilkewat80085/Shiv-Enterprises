export default function TrustStrip() {
  const items = [
    { icon: "verified", text: "25+ Years of Trust" },
    { icon: "engineering", text: "Professional Team" },
    { icon: "support_agent", text: "Fast Support" },
    { icon: "payments", text: "Affordable Pricing" },
  ];

  return (
    <section className="bg-surface-container-lowest border-b border-outline-variant py-8">
      <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-110 cursor-default"
            >
              <span className="material-symbols-outlined text-3xl text-accent-gold">
                {item.icon}
              </span>
              <span className="font-label-md text-primary">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
