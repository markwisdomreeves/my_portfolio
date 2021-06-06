import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import ProfileImg from "../../assets/profile-img.png"
import "./navbar.css"


class Navbar extends Component {

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav id="navbar-bg-img">

        <div className="profile-section-items-box">

          <div className="img-box">
            <img
              src={ProfileImg}
              alt="Profile"
              onClick={this.scrollToTop}
            />
          </div>

          <div className="profile-vertical-line"></div>

          <div className="profile-info-box">
            <h3>Mark Wisdom Reeves</h3>
            <p>Junior Full Stack Web Developer</p>
          </div>

          <div className="profile-vertical-line"></div>

          <div className="navbar-menu-link-box">

            <div className="nav-items">
              <li className="nav-item-list">
                <Link
                  activeClass="active"
                  className="custom-link-style"
                  to="intro"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Intro</Link>
              </li>
              <li className="nav-item-list">
                <Link
                  activeClass="active"
                  className="custom-link-style"
                  to="project"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Project</Link>
              </li>
              <li className="nav-item-list">
                <Link
                  activeClass="active"
                  className="custom-link-style"
                  to="education"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Education</Link>
              </li>
              <li className="nav-item-list">
                <Link
                  activeClass="active"
                  className="custom-link-style"
                  to="skill"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Skills</Link>
              </li>
              <li className="nav-item-list">
                <Link
                  activeClass="active"
                  className="custom-link-style"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >Contact</Link>
              </li>
            </div>
          </div>

        </div>

      </nav>
    );
  }
}


export default Navbar
