import BlurBackground from "./components/BlurBackground"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import About from "./components/About"
import Testimonials from "./components/Testimonials"
import Contacts from "./components/Contacts"
const App = () => {
  return (
    <>
     <BlurBackground />
     <Navbar />
     <Hero />
     <Projects />
     <About />
     <Experience />
     <Testimonials />
     <Contacts />
    </>
  )
}

export default App