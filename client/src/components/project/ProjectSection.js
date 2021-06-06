import React from 'react'
import ProjectOneImg from "../../assets/project-img-1.jpg"
import ProjectTwoImg from "../../assets/project-img-2.jpg"
import ProjectThreeImg from "../../assets/project-img-3.jpg"
import "./project.css"


const ProjectScreen = ({title, id}) => {
  return (
    <>
    <div className="project-section-container">
      <div className="project-section-content" id={id}>
        <h1>{title}</h1>
        <div className="project-container">
          <div className="project-content-box">

            <div className="main-project-container">
              <img src={ProjectOneImg} alt="" />
              <div className="project-overlay-box project-overlay-item">
                <h3>Health care Website Project</h3>
                <p>
                  This Project was built using React, Redux, Node & Express, Mongodb.
                </p>
                <div className="project-links-box">
                  <a href="https://health-c.herokuapp.com/" rel="noreferrer" target="_blank">
                    View Project
                  </a>
                  <a href="https://github.com/markwisdomreeves/health-care-project" rel="noreferrer" target="_blank">
                    Source Code
                  </a>
                </div>
              </div>
            </div>

            <div className="project-vertical-line-box">
              <div className="project-vertical-line"></div>
            </div>

            <div className="main-project-container">
              <img src={ProjectTwoImg} alt="" />
              <div className="project-overlay-box project-overlay-item">
                <h3>Real Estate website Project</h3>
                <p>
                  This Project was built using React, Node, Express & Mongodb.
                </p>
                <div className="project-links-box">
                  <a href="https://real-estate-h.herokuapp.com/" rel="noreferrer" target="_blank">
                    View Project
                  </a>
                  <a href="https://github.com/markwisdomreeves/real-estate-project" rel="noreferrer" target="_blank">
                    Source Code
                  </a>
                </div>
              </div>
            </div>

            <div className="project-vertical-line-box">
              <div className="project-vertical-line"></div>
            </div>

            <div className="main-project-container">
              <img src={ProjectThreeImg} alt="" />
              <div className="project-overlay-box project-overlay-item">
                <h3>Bank Website Project</h3>
                <p>
                  This Project was built using React, Node, Express & Mongodb.
                </p>
                <div className="project-links-box">
                  <a href="https://rewire-bank.netlify.app/about_us" rel="noreferrer" target="_blank">
                    View Project
                  </a>
                  <a href="https://github.com/markwisdomreeves/rewire-bank-project" rel="noreferrer" target="_blank">
                    Source Code
                  </a>
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>
    </div>
    </>
  );
}


export default ProjectScreen
