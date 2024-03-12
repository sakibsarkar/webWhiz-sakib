import AboutUs from "@/components/sections/AboutUs/AboutUs";
import Banner from "@/components/sections/Banner/Banner";
import ClientReview from "@/components/sections/ClientReview/ClientReview";
import Contact from "@/components/sections/Contact/Contact";
import Portfolio from "@/components/sections/Portfolio/Portfolio";
import SatisfiedCustomer from "@/components/sections/SatisfiedCustomer/SatisfiedCustomer";
import Service from "@/components/sections/Service/Service";

export default function Home() {
  return (
    <main>
      <Banner />
      <Portfolio />
      <AboutUs />
      <Service />
      <ClientReview />
      <Contact />
      <SatisfiedCustomer />
    </main>
  );
}
