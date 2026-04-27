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
  const { isDark } = useContext(StyleContext);

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

          <div className="greeting-image-div" style={{ position: "relative", zIndex: "5" }}>
            <img
              alt="Anu Malik"
              src={profilePic}
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "auto", // Auto height better rehti hai aspect ratio ke liye
                aspectRatio: "1/1", // Isse perfect circle banega
                borderRadius: "50%",
                boxShadow: isDark ? "0px 10px 40px rgba(0,0,0,0.8)" : "0px 10px 30px rgba(0,0,0,0.2)",
                objectFit: "cover",
                border: "5px solid rgba(255, 255, 255, 0.1)",
                display: "block",
                filter: "brightness(1) contrast(1.1)", // Thoda aur contrast badhaya hai
                backgroundColor: "#171c28" // Dark background taaki transparency issues na aayein
              }}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}