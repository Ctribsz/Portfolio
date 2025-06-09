import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import detailImg from "../assets/transparent_footer1.png";

export default function Contact() {
  const icons = [
    { Component: FaLinkedin, url: "https://www.linkedin.com/in/christian-echeverr%C3%ADa-591581264/" },
    { Component: FaGithub,  url: "https://github.com/Ctribsz?tab=overview&from=2025-06-01&to=2025-06-09" },
  ];

  return (
    <section
      id="contact-me"
      className="relative w-full py-24 bg-primaryBg flex flex-col items-center "
    >
      <h2 className="text-4xl font-bold text-primaryText mb-8">CONTACT</h2>
      
      <div className="flex space-x-12 mb-12">
        {icons.map(({ Component, url }, i) => (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-primaryText hover:text-accent transition-transform duration-300 hover:scale-125"
          >
            <Component />
          </a>
        ))}
      </div>


      <img
        src={detailImg}
        alt=""
        className="w-64 opacity-30 animate-fadeIn"
      />
    </section>
  );
}
