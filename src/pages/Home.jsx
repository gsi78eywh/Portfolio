
import {StarRating} from "../components/StarRating";
/* ------------------------------ */
const Home = () => {
  return (
    <>
      {/* The sticky navigation lives in App.jsx (or a separate Nav component) */}
      <main className="cv-container pt-20">
        <Hero />
        <Quote />               {/* optional second quote – you can delete */}
        <About />
        <Skills />
        <Tools />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Testimonials />
        <Footer />
        <StarRating/>
      </main>
    </>
  );
};

export default Home;
