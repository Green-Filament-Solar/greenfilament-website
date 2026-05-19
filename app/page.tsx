import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Insight from "./components/Insight";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <Insight />
      <Projects />
      <Testimonials />
      <CTABanner />
      <Footer />
      
    </main>
  );
}