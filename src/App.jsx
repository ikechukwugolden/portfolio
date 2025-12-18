import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import Services from "./components/Services";
import Contact from "./components/Contact";


const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Testimonial />
              <Projects />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/testimonials" element={<Testimonial />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
  );
};

export default App;
