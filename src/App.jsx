import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Layout from "./components/Layout"
import Preferences from "./components/Preferences"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import ContextProvider from "./contexts/Context"


function App() {

  return ( 
    
        <Layout>
            
            <Preferences/>
            <Header/>
            <Hero/>
            <Skills/>
            <Profile/>
            <Projects/>
            <Footer/>
        
        </Layout>
   
  )
}

export default App
