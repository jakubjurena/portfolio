import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BiggerProject from "@/components/BiggerProject";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <main style={{ maxWidth: 1280, margin: "0 auto", paddingBottom: 0 }}>
        <Services />
        <BiggerProject />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
