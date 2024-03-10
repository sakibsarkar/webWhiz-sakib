import AboutUs from "@/components/sections/AboutUs/AboutUs";
import Banner from "@/components/sections/Banner/Banner";
import Portfolio from "@/components/sections/Portfolio/Portfolio";
import Service from "@/components/sections/Service/Service";

export default function Home() {
  return (
    <>
      <Banner />
      <Portfolio />
      <AboutUs />
      <Service />
    </>
  );
}
