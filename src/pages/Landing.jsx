import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer"

export default function Landing() {
  return (
    <div>
      <Navbar />

      <section id="home">
        <Hero/>
      </section>

      <section id="about">
        <About/>
      </section>

      <section id="contact">
        <Contact/>
      </section>
      <section id="footer">
        <Footer/>
      </section>
    </div>
  );
}
