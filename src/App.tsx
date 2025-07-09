import { Layout } from "./components/Layout";
import { Hero } from "./components/sections/Hero";
import { Brands } from "./components/sections/Brands";
import { Services } from "./components/sections/Services";
import { AboutUs } from "./components/sections/AboutUs";
import { CTA } from "./components/sections/CallToAction";

function App() {
  return (
  <Layout title="Luigi AI Automation">
    <Hero />
    <Brands />
    <Services />
    <AboutUs />
    <CTA />
  </Layout>
  );
}

export default App
