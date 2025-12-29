import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Navbar from './components/navbar.jsx'
import LandingSection from './components/landing.jsx'

import ProjectsSection from './components/ProjectsSection.jsx'
import OtherProjectsSection from './components/OtherProjectsSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import SkillsSection from './components/SkillsSection.jsx'
import Heropage from './components/Heropage.jsx'
import './App.css'
import { Routes, Route } from 'react-router-dom'


function App() {


  return (
    <>
    <Navbar/>
     <Routes>
       <Route path="/" element={<Heropage />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/other-projects" element={<OtherProjectsSection />} />
        <Route path="/skills" element={<SkillsSection />} />
        <Route path="/contact" element={<ContactSection />} />
     </Routes>

    </>
  )
}
export default App

