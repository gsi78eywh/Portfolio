import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaPhp, FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Git & GitHub", icon: <FaGithub /> },
];

const Profile = () => {
  return (
    <div className="cv-container">
      {/* --- HEADER --- */}
      <header className="cv-header">
        <h1>Seth Andrey Jabagat</h1>
        <p className="subtitle">Computer Technology Student | Aspiring Software Developer</p>
        <div className="contact-links">
          <a href="mailto:sethandreyabrasad0@gmail.com">📧 sethandreyabrasad0@gmail.com</a>
          <a href="https://github.com/gsi78eywh">💻 github.com/gsi78eywh</a>
          <a href="#">📍 Dalaguete, Cebu, Philippines</a>
        </div>
        <div style={{ marginTop: "15px" }}>
          <button className="tag">Schedule a Call</button>
          <button className="tag">Send Email</button>
          <button className="tag">Download CV</button>
        </div>
      </header>

      {/* --- ABOUT --- */}
      <section>
        <h2>About Me</h2>
        <p>
          Computer Technology student specializing in Software Development with
          experience building responsive websites using HTML, CSS, JavaScript,
          and React basics. Passionate about UI/UX design and user-focused
          interfaces. Quick learner and collaborative team player eager to contribute
          to impactful web and design projects.
        </p>
      </section>

      {/* --- SKILLS --- */}
      <section>
        <h2>Tech Stack</h2>
        <div className="skills-tags">
          {skills.map((skill) => (
            <span key={skill.name} className="tag">
              {skill.icon} {skill.name}
            </span>
          ))}
        </div>
      </section>

      {/* --- CERTIFICATIONS --- */}
      <section>
        <h2>Certifications</h2>
        <div className="skills-tags certs">
          <span className="tag">Skills to Succeed Academy</span>
          <span className="tag">Google Data Analytics</span>
          <span className="tag">Google Coursera Python Automation</span>
          <span className="tag">Google UI/UX Training Module</span>
          <span className="tag">Rapid Application Development</span>
        </div>
      </section>

      {/* --- EXPERIENCE --- */}
      <section>
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Library Management System (School Project)</h3>
          <p className="date">Aug 2025 - Nov 2025</p>
          <p>Developed a responsive, user-friendly online library system that improved accessibility for students. 70% of users reported easier access to resources.</p>
        </div>
        <div className="experience-item">
          <h3>Mini E-commerce Frontend (School Project)</h3>
          <p className="date">Sep 2025 - Nov 2025</p>
          <p>Designed a simple online shopping interface with responsive design, product browsing, cart addition, and checkout functionality.</p>
        </div>
        <div className="experience-item">
          <h3>Kombat Console Games (School Project)</h3>
          <p className="date">Jul 2025 - Sep 2025</p>
          <p>Developed a console-based combat game with character selection, turn-based battles, and health tracking, showcasing programming fundamentals.</p>
        </div>
      </section>

      {/* --- EDUCATION --- */}
      <section>
        <h2>Education</h2>
        <div className="education-item">
          <h3>Associate in Computer Technology</h3>
          <p className="date">2023 - 2026</p>
          <p>University of San Jose - Recoletos</p>
        </div>
        <div className="education-item">
          <h3>Senior High School</h3>
          <p className="date">2021 - 2023</p>
          <p>Mantalongon National High School, Dalaguete, Cebu</p>
        </div>
      </section>
    </div>
  );
};

export default Profile;
