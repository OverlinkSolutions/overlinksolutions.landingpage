import { useRef } from "react";

import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import FloatingLogo from "./components/FloatingLogo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OurWork from "./components/OurWork";
import OurServices from "./components/OurServices";


function App() {
  const ourWorkRef = useRef<HTMLDivElement>(null);
  const ourServicesRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);

  const refs = [aboutUsRef, ourWorkRef, ourServicesRef ];

  const handleHeaderClick = (refName: number) => {
    refs[refName].current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Header handleHeaderClick={handleHeaderClick}/>
      <FloatingLogo/>
      <Banner />
      <AboutUs refs={aboutUsRef}/>
      <OurServices refs={ourServicesRef}/>
      <OurWork refs={ourWorkRef}/>
      <Footer />
    </>
  );
}

export default App;
