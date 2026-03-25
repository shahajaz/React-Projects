import Navbar from "./Components/Navbar";
import Home from "./Sections/Home";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Projects from "./Sections/Projects";
import Experience from "./Sections/Experience";
import Testimonial from "./Sections/Testimonial";
import Contact from "./Sections/Contact";
import Footer from "./Layout/Footer";
import ParticlesBackground from "./Components/ParticlesBackground";
import CustomCursor from "./Components/CustomCursor";


export default function App(){
  return(
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">

      {/* <CustomCursor/>
      <ParticlesBackground/> */}
      <CustomCursor className="pointer-events-none"/>
<ParticlesBackground className="pointer-events-none"/>


      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}