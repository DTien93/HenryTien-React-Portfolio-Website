import React from "react";
import "../about/about.css";

const About = () => {
    return (
      <div className="about">
        <div className="about-left">
          <div className="about-card bg"></div>
          <div className="about-card">
            <img
              src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="about-img"
            />
          </div>
        </div>
        <div className="about-right">
          <h1 className="about-title">About Me</h1>
          <p className="about-sub">
                Hi my name is Dao Tien (HenryTien). I am Front-End Developer      
          </p>
          <p className="about-desc">
            <b>Education:</b> Quy Nhon Universty<br />
            <b>Major:</b> Information Technology <br/>
            <b>Graduate</b> : Rather
          </p>
          <div className="about-award">
            <div className="about-award-texts">
              <h4 className="about-award-title" style={{ color: 'green'}}>Experience</h4>
              <p className="about-award-desc">
                <b>2/2020 - 3/2020</b> :
              Intern in IT department of Department of Natural Resources and Environment and participated in creating a website for the Department of Natural Resources and Environment with 7 other members of the university.
              </p>
              <br/>
              <h4 className="about-award-title" style={{ color: 'green'}}>Skill</h4>
              <p className="about-award-desc">
                <b>Programming Languages:</b> :
                  Javascript, HTML, CSS
              </p>
              <p className="about-award-desc">
                <b>Frameworks/ Platforms:</b> :
                    React JS, ES6, Bootstrap, Node JS Express, Typescript
              </p>
              <p className="about-award-desc">
                <b>Frameworks/ Platforms</b> :
                    React JS, ES6, Bootstrap, Node JS Express, Typescript
              </p>
              <p className="about-award-desc">
                <b>Database Management Systems</b> :
                    SQL, MongoDB
              </p>
              <p className="about-award-desc">
                <b>Foreign Languages </b> :
                    English: B1
              </p>
              <p className="about-award-desc">
                <b>Soft Skills </b> :
                Teamwork, Learn, solve problems
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default About
