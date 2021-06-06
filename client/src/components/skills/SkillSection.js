import React from 'react'
import "./skills.css"


const SkillScreen = ({title, id}) => {
  return (
    <>
    <div className="skill-section-container">
      <div className="skill-section-content" id={id}>
        <h1>{title}</h1>

        <div className="main-skills-container">
          <div className="skills-box">
            <div className="inner-skill-box">
              <li className="skill">Html5</li>
              <li className="skill">Css3</li>
              <li className="skill">Scss</li>
              <li className="skill">BootStrap4</li>
              <li className="skill">JavaScript</li>
              <li className="skill">jQuery</li>
              <li className="skill">ReactJS</li>
              <li className="skill">Redux</li>
              <li className="skill">NodeJS</li>
              <li className="skill">ExpressJS</li>
              <li className="skill">MongoDB</li>
              <li className="skill">NextJS</li>
              <li className="skill">TypeScrpt</li>
              <li className="skill">Graphql</li>
              <li className="skill">Apollo Client</li>
              <li className="skill">Webpack</li>
              <li className="skill">Npm</li>
              <li className="skill">Git</li>
              <li className="skill">Github</li>
            </div>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}


export default SkillScreen
