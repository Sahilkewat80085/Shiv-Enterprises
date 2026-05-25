import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-cctv.jpg"
          alt="Security technician installing a CCTV camera on a modern corporate building exterior during daylight. The aesthetic is industrial, professional, and reliable."
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/70 z-10" />
      </div>

      <div className="relative z-20 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-20 text-center md:text-left text-on-primary">
        <div className="max-w-3xl">
          <span className="inline-block bg-accent-gold text-primary font-label-md px-3 py-1 rounded-xs mb-6">
            ESTABLISHED 1999
          </span>
          <h1 className="font-headline-xl-mobile md:font-headline-xl mb-6">
            Trusted Security &amp; Power Solutions Since 25+ Years
          </h1>
          <p className="font-body-lg text-inverse-on-surface mb-10 max-w-2xl">
            CCTV Installation, Solar Systems, Biometric Access, EPBX &amp; Power
            Backup Solutions for Homes and Businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-accent-gold text-primary px-8 py-3 rounded-xs font-label-md hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined">call</span>
              Call Now
            </button>
            <button className="bg-transparent border border-on-primary text-on-primary px-8 py-3 rounded-xs font-label-md hover:bg-on-primary hover:text-primary transition-all flex items-center justify-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined">chat</span>
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
