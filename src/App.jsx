import Footer from "./components/Footer"
import FooterContainer from "./components/FooterContainer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Layout from "./components/Layout"
import Preferences from "./components/Preferences"
import Profile from "./components/Profile"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


import { ToastContainer } from 'react-toastify';


function App() {

  return ( 
    <>
      <ToastContainer/>
        <Layout>
            
            <Preferences/>
            <Header/>
            <Hero/>
            <Skills/>
            <Profile/>
            <Projects/>
            
 
        </Layout>
        <FooterContainer/>

      </>
   
  )
}

export default App
