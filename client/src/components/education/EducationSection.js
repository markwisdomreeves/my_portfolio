import React from 'react'
import "./education.css"


const EducationScreen = ({title, id}) => {
  return (
    <>
    <div className="education-section-container">
      <div className="education-section-content" id={id}>
          <h1>{title}</h1>
        <div className="education-container">
          <div className="education-content-box">

            <div className="education-box">
              <h2>Full Stack Web Development Program</h2>
              <div className="cert-link-box">
                <h3>Acheivement: </h3>
                <a href="https://sites.google.com/view/mark-treehouse-tech-degree" className="cert-link-style" rel="noreferrer" target="_blank">Tech Degree</a>
              </div>
              <a href="https://teamtreehouse.com" className="tech-school-link" rel="noreferrer" target="_blank">Team Tree House</a>
              <h4>Year: Dec 12, 2019 – Sept 09, 2020</h4>
            </div>

            <div className="education-vertical-line-box">
              <div className="education-vertical-line"></div>
            </div>

            <div className="education-box">
              <h2>JavaScript & Data Structures Course</h2>
              <div className="cert-link-box">
                <h3>Acheivement: </h3>
                <a href="https://sites.google.com/view/mark-javascript" className="cert-link-style" rel="noreferrer" target="_blank">Certificate</a>
              </div>
              <a href="https://www.freecodecamp.org" className="tech-school-link" rel="noreferrer" target="_blank">Free Code Camp</a>
              <h4>Year: Aug 08, 2020 – Oct 10, 2020</h4>
            </div>

            <div className="education-vertical-line-box">
              <div className="education-vertical-line"></div>
            </div>

            <div className="education-box">
              <h2>Responsive Web Development Course</h2>
              <div className="cert-link-box">
                <h3>Acheivement: </h3>
                <a href="https://sites.google.com/view/markwisdomreeves" className="cert-link-style" rel="noreferrer" target="_blank">Certificate</a>
              </div>
              <a href="https://www.freecodecamp.org" className="tech-school-link" rel="noreferrer" target="_blank">Free Code Camp</a>
              <h4>Year: Mar 03, 2020 – Jun 06, 2020</h4>
            </div>

          </div>
        </div>

      </div>
    </div>
    </>
  );
}


export default EducationScreen
