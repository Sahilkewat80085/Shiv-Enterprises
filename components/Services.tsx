import Image from "next/image";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  icon?: string;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      id: "cctv",
      title: "CCTV Cameras",
      description: "High-definition surveillance systems for complete property monitoring.",
      imageSrc: "/images/service-cctv.jpg",
      imageAlt: "CCTV camera installed on a wall",
    },
    {
      id: "solar",
      title: "Solar Systems",
      description: "Efficient, high-yield solar energy solutions for sustainable power.",
      imageSrc: "/images/service-solar.jpg",
      imageAlt: "Solar panels installed on a residential roof",
    },
    {
      id: "power",
      title: "Inverter & Battery",
      description: "Reliable power backup systems ensuring zero downtime.",
      imageSrc: "/images/service-battery.jpg",
      imageAlt: "Industrial battery and inverter setup in a clean utility room",
    },
    {
      id: "biometric",
      title: "Biometric Systems",
      description: "Secure access control and attendance management solutions.",
      imageSrc: "/images/service-biometric.jpg",
      imageAlt: "Modern biometric fingerprint scanner on a corporate office wall",
    },
    {
      id: "epbx",
      title: "EPBX Systems",
      description: "Robust internal communication networks for seamless business operations.",
      icon: "router",
    },
    {
      id: "support",
      title: "Maintenance & Support",
      description: "Comprehensive AMC and rapid-response repair services.",
      icon: "build",
    },
  ];

  return (
    <section className="py-20 bg-surface" id="services">
      <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-12 text-center md:text-left">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary mb-4">
            Our Core Services
          </h2>
          <p className="font-body-md text-secondary max-w-2xl">
            Industrial-grade installations backed by decades of technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-surface-container-lowest border border-outline-variant rounded p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between"
            >
              <div>
                {/* Image or Icon Container */}
                {service.imageSrc ? (
                  <div className="relative w-full h-48 mb-6 rounded overflow-hidden">
                    <Image
                      src={service.imageSrc}
                      alt={service.imageAlt || service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-48 bg-surface-container-high rounded mb-6 flex items-center justify-center">
                    <span className="material-symbols-outlined text-5xl text-outline">
                      {service.icon}
                    </span>
                  </div>
                )}

                <h3 className="font-headline-md text-primary mb-2">
                  {service.title}
                </h3>
                <p className="font-body-sm text-secondary mb-4">
                  {service.description}
                </p>
              </div>
              <a
                className="text-primary font-label-md flex items-center gap-1 hover:text-accent-gold transition-colors mt-auto w-fit"
                href={`#${service.id}`}
              >
                Learn More{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
