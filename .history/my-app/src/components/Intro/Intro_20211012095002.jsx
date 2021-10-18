import React from "react";
import "../Intro/intro.css";
import Me from  "../../image/henry.jpg";

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left__wrapper">
                    <h2 className="intro-welcome">Hello, My name is</h2>
                    <h2 className="intro-name">Henry Tien (Dao Tien)</h2>
                    <div className="intro-title">
                        <div className="intro-title__wrapper">
                            <div className="intro-title__item">Font-End Developer </div>
                            <div className="intro-title__item">Back-End Developer </div>
                        </div>
                    </div>
                    <div className="intro-description">
                        I aspire to be a Front-end developer.
                        Never stop learning and trying to be a good person.
                        Learning new languages and technologies is what I am passionate about. I am considered a team-player because I like to help other and tend to work well within the group.
                        I can also do some mentoring tasks and do code reviews for other team members.
                    </div>
                </div>
            </div>
            <div className="intro-right">
                <div className="intro-background">
                </div>
                <img src={Me} alt="img" className="intro-img"/>
            </div>
        </div>
    )
}

export default Intro
