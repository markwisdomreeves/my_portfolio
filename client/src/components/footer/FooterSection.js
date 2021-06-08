import React, { useState, useEffect } from 'react'
import ScrollToTopButton from "../ScrollToTop"
import "./footer.css"


const FooterSection = () => {

  const [date , setDate] = useState();

  const getYear = () =>  setDate(new Date().getFullYear())

  useEffect(() => {
    getYear()
  }, [])

  return (
    <div className="parent-footer-box">
      <div className="footer-container">
      <hr id="footer-line" />
        <div className="social-container">
          <a href="https://www.linkedin.com/in/mark-wisdom-reeves/" rel="noreferrer" target="_blank">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/markwisdomreeves" rel="noreferrer" target="_blank">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <a href="https://www.facebook.com/markreeves.wisdom/" rel="noreferrer" target="_blank">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/markwisdomreeves/" rel="noreferrer" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
        <div id="main-info-tool-box">
          <p>All rights reserved</p>
          <p>Web Developer</p>
          <span>&copy; {date}</span>
          <h5>This Portfolio was built with React & Node</h5>
        </div>

      </div>

      <ScrollToTopButton />
    </div>
  )
}


export default FooterSection;
