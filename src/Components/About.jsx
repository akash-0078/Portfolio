import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>AKASH DAS</b> and I am from Lucknow,
            India. I'm a <b>Frontend web developer</b> and a Third year
            student of IIT Jammu pursuing <b>Btech in Computer Science</b>. <br />
            <br />
            I love to create projects with beautiful designs and put my own
            twists on it, you can check out some of my work in the projects
            section.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
            Apart from coding I love to play cricket and go to gym in my spare time.
          </p>
          <a href="Akash's Resume.pdf" download className="resume-btn">
            <button>
              Download Resume <FaFileDownload></FaFileDownload>
            </button>
          </a>
        </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading"> Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Bootstrap" />
        <Skills skill="Tailwind" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="C++" />
        <Skills skill="Figma" />
        <Skills skill="Npm" />
      </div>
    </>
  );
};

export default About;
