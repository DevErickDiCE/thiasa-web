import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustIndicators } from "@/components/trust-indicators";
import { Services } from "@/components/services";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ProjectGallery } from "@/components/project-gallery";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustIndicators />
      <Services />
      <WhyChooseUs />
      <ProjectGallery />
      <Contact />
      <Footer />
    </main>
  );
}
