import Billing from "./components/Billing";
import CardDeal from "./components/CardDeal";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Status from "./components/Stats";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className=" bg-background min-h-screen font-poppins overflow-x-hidden">
      <Header />
      <Hero />
      <Status />
      <Features />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Partners />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
