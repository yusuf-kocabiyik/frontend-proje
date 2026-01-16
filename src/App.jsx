import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Preferences from "./components/Preferences"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


function App() {
/*  <Header/>
      <Hero/>
      <Skills/>
      <Profile/>
      <Projects/>
      <Footer/>
 */
  return ( 
    
      <section className="flex flex-col gap-2  mx-auto ">
     <Preferences/>
     <Header/>
      <Hero/>
      <Skills/>
      <Profile/>
      <Projects/>
      <Footer/>
      


      </section>
     
   
  )
}

export default App
