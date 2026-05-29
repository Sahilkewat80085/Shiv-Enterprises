import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import TrustedCustomers from "@/components/TrustedCustomers";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <TrustedCustomers />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

