import { About } from "@/components/About";
import { ContactForm } from "@/components/ContactForm";
import { Films } from "@/components/Films";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WHATSAPP_MESSAGES } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Films />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton message={WHATSAPP_MESSAGES.flutuante} />
    </>
  );
}
