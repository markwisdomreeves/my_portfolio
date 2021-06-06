import React from 'react';
import './App.css';
import Navbar from "./components/navbar/navbar"
import IntroSection from "./components/intro/IntroSection"
import ProjectSection from "./components/project/ProjectSection"
import EducationSection from "./components/education/EducationSection"
import SkillSection from "./components/skills/SkillSection"
import ContactSection from "./components/contact/ContactSection"
import FooterSection from "./components/footer/FooterSection"
import GitContribution2 from "./components/gitContribution/GithubContribution"


function App() {
  return (
    <>
    <div className="App">

      <Navbar />

      <div id="main-component-container">
        <div id="main-inner-component-box">
          <IntroSection
            title="Intro"
            dark={true}
            id="intro"
          />

          <GitContribution2 />

          <ProjectSection
            title="Project"
            dark={true}
            id="project"
          />
          <EducationSection
            title="Education"
            dark={true}
            id="education"
          />
          <SkillSection
            title="Skills"
            dark={true}
            id="skill"
          />
          <ContactSection
            title="Contact"
            dark={true}
            id="contact"
          />
        </div>
      </div>

    </div>

    <FooterSection />

    </>
  );
}


export default App;
