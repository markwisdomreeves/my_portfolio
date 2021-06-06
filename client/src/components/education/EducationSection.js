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
              <h2>Full Stack Web Development</h2>
              <h3>Full Stack Tech Degree</h3>
              <a href="https://teamtreehouse.com" rel="noreferrer" target="_blank">Team Tree House</a>
              <h4>2019-12 – 2020-09</h4>
            </div>

            <div className="education-vertical-line-box">
              <div className="education-vertical-line"></div>
            </div>

            <div className="education-box">
              <h2>JavaScript & Data Structures</h2>
              <h3>Certificate</h3>
              <a href="https://www.freecodecamp.org" rel="noreferrer" target="_blank">Free Code Camp</a>
              <h4>2020-08 – 2020-10</h4>
            </div>

            <div className="education-vertical-line-box">
              <div className="education-vertical-line"></div>
            </div>

            <div className="education-box">
              <h2>Responsive Web Develpment</h2>
              <h3>Certificate</h3>
              <a href="https://www.freecodecamp.org" rel="noreferrer" target="_blank">Free Code Camp</a>
              <h4>2020-03 – 2020-06</h4>
            </div>

          </div>
        </div>

      </div>
    </div>
    </>
  );
}


export default EducationScreen
