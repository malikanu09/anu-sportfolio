import React, { useContext } from "react";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { workExperiences } from "../../portfolio";
import "./WorkExperience.scss";

export default function WorkExperience() {
  const { isDark } = useContext(StyleContext);
  
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {/* Kyunki tune ExperienceCard file delete kar di hai, 
                  isliye hum yahan temporarily text dikhayenge 
                  taaki app crash na ho.
                */}
                {workExperiences.experience.map((card, i) => {
                  return (
                    <div key={i} style={{ 
                      padding: "20px", 
                      border: "1px solid #ccc", 
                      borderRadius: "10px",
                      marginBottom: "10px",
                      color: isDark ? "white" : "black"
                    }}>
                      <h3>{card.role}</h3>
                      <h4>{card.company}</h4>
                      <p>{card.date}</p>
                      <p>{card.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
