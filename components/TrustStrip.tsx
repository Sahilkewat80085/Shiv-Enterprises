export default function TrustStrip() {
  const items = [
    { icon: "verified", text: "25+ Years Experience" },
    { icon: "engineering", text: "Professional Team" },
    { icon: "support_agent", text: "Fast Support" },
    { icon: "payments", text: "Affordable Pricing" },
  ];

  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-3xl text-accent-gold">
              {item.icon}
            </span>
            <span className="font-label-md text-on-primary">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
