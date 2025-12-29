import LandingSection from './landing.jsx'
import ProjectsSection from './ProjectsSection.jsx'
import OtherProjectsSection from './OtherProjectsSection.jsx'
import ContactSection from './ContactSection.jsx'
import SkillsSection from './SkillsSection.jsx'

const Heropage = () => {
  return (
    <>
      <div id="home">
        <LandingSection />
      </div>

      <div id="projects">
        <ProjectsSection />
        <OtherProjectsSection />
      </div>

      <div id="skills">
        <SkillsSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>
    </>
  )
}

export default Heropage
