import React from "react";
import "./About.css";
import Alisha from "../../images/Alisha.jpg";
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img src={Alisha} alt="profile-pic"></img>
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Hey there! I'm Chaudhary Alisha, a computer science student with
                a seventh-semester badge of honor and a lifelong fascination
                with all things tech. There's just something about building
                things from scratch, unraveling complex problems, and diving
                headfirst into the ever-changing world of code that sets my soul
                on fire. 🔥 I'm not just a coder; I'm a creator, a
                problem-solver, and a born leader. Whether it's brainstorming
                innovative solutions or rallying my team to conquer a challenge,
                I thrive on taking ownership and pushing boundaries. My work
                ethic? Let's just say I'm the kind of person who's always got a
                side hustle brewing. I'm fueled by the thrill of learning new
                technologies and finding creative ways to solve problems. So, if
                you're looking for a tech enthusiast with a knack for leadership
                and a sprinkle of that Gen Z magic, you've found your match! 😉
                Let's build something awesome together!
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
