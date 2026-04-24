import React, { useContext } from "react";
import emoji from "react-easy-emoji";
import { Fade } from "react-reveal";
import profilePic from "../../assets/images/anu.jpg.jpeg";
import Button from "../../components/button/Button";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import StyleContext from "../../contexts/StyleContext";
import { greeting } from "../../portfolio";
import "./Greeting.scss";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  
  // Agar displayGreeting property miss bhi ho jaye toh bhi render karega
  if (greeting.displayGreeting === false) {
    return null;
  }
  
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p className={isDark ? "dark-mode greeting-text-p" : "greeting-text-p subTitle"}>
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a href={greeting.resumeLink} target="_blank" rel="noopener noreferrer">
                    <Button text="See my resume" />
                  </a>
                )}
              </div>
            </div>
          </div>
          
          <div className="greeting-image-div">
            <img
              alt="Anu Malik"
              src={profilePic}
              style={{
                width: "100%",
                maxWidth: "400px",
                borderRadius: "50%", // Isse photo gol (circle) dikhegi, classy lagti hai
                boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
                objectFit: "cover"
              }}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}