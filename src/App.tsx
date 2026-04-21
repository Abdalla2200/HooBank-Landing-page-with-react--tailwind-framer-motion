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
    <div className=" bg-background min-h-screen font-poppins">
      <Header />
      <section id="home">
        <Hero />
      </section>
      <Status />
      <section id="about-us">
        <Features />
      </section>
      <section id="features">
        <Billing />
      </section>
      <section id="solution">
        <CardDeal />
      </section>
      <Testimonials />
      <Partners />
      <section id="cta">
        <CTA />
      </section>
      <Footer />
    </div>
  );
}

export default App;
