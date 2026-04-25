import React from "react";
import { socialMediaLinks } from "../../portfolio";
import "./SocialMedia.scss";

export default function SocialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }

  return (
    <div className="social-media-div">
      {/* GITHUB */}
      {socialMediaLinks.github && (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      )}

      {/* LINKEDIN */}
      {socialMediaLinks.linkedin && (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      )}

      {/* GMAIL: Direct Gmail Website kholne ke liye */}
{socialMediaLinks.gmail && (
  <a 
    href="https://mail.google.com/mail/?view=cm&fs=1&to=malikanu72909@gmail.com"
    className="icon-button google"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fas fa-envelope"></i>
  </a>
)}
</div>
  );
};
