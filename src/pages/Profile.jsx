import React from "react";  
import "../App.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaPhp, FaJava, FaDocker, FaNpm } from "react-icons/fa";
import { SiMysql, SiVim, SiGithubcopilot } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Java", icon: <FaJava /> },
];

const tools = [
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "NPM", icon: <FaNpm /> },
  { name: "VIM", icon: <SiVim /> },
  { name: "Copilot", icon: <SiGithubcopilot /> },
];

const Profile = () => {
  return (
    <div className="cv-container">
      {/* --- HEADER --- */}
      <header className="cv-header">
        <div className="header-content">
          <img
            src="https://image2url.com/r2/default/images/1771990345724-dc3809f5-c43d-460a-a222-2c1a9d6b59c0.jpg"
            alt="Seth Andrey Jabagat"
            className="profile-photo"
          />
          <div>
            <h1>Seth Andrey Jabagat</h1>
            <p className="subtitle">Junior Full-Stack Developer | UI/UX Enthusiast</p>
          </div>
        </div>

        <div className="contact-links">
          <a href="mailto:sethandreyabrasad0@gmail.com">📧 sethandreyabrasad0@gmail.com</a>
          <a href="https://github.com/gsi78eywh">💻 github.com/gsi78eywh</a>
          <a href="#">📍 Dalaguete, Cebu, Philippines</a>
        </div>

        <div style={{ marginTop: "15px" }}>
          <a
            href="https://teams.microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="tag"
          >
            Schedule a Call
          </a>
          <a href="mailto:sethandreyabrasad0@gmail.com" className="tag">
            Send Email
          </a>
          <button className="tag">Download CV</button>
        </div>
      </header>

      {/* --- ABOUT --- */}
      <section>
        <h2>About Me</h2>
        <p>
          Hi, I'm Seth Andrey Jabagat — a Computer Technology student from Dalaguete, Cebu specializing in software development, UI/UX design, and responsive web solutions. I focus on building user‑centered applications, creating intuitive interfaces, and delivering impactful digital experiences.
        </p>
        <p>
          Adaptable, detail‑oriented, and collaborative, I enjoy solving problems with creativity and technical clarity. My academic projects have strengthened my ability to design responsive systems, improve accessibility, and apply modern development practices in real‑world scenarios.
        </p>
        <p>
          I am open to internships, freelance, and full‑time opportunities where I can contribute to innovative projects, expand my expertise, and support organizations in achieving their digital goals. Let's connect — I'd love to collaborate on your next initiative.
        </p>
      </section>

      {/* --- EDUCATION --- */}
   <section>
  <h2>Education</h2>
  <div className="education-item">
    <div className="education-header">
      <h3>Associate in Computer Technology</h3>
      <span className="date">2024 - 2026</span>
    </div>
    <p className="school">University of San Jose - Recoletos</p>
  </div>

  <div className="education-item">
    <div className="education-header">
      <h3>Senior High School</h3>
      <span className="date">2021 - 2023</span>
    </div>
    <p className="school">Mantalongon National High School, Dalaguete, Cebu</p>
  </div>
</section>


      {/* --- TECH STACK --- */}
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

      {/* --- TOOLS --- */}
     <section>
  <h2>Tools & Technologies</h2>
  <div className="tools-tags">
    {tools.map((tool) => (
      <span key={tool.name} className={`tag ${tool.name.toLowerCase()}`}>
        {tool.icon} {tool.name}
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
          <span className="tag">Web Development Fundamentals</span>
          <span className="tag">Database Management Systems</span>
        </div>
      </section>

      {/* --- EXPERIENCE --- */}
    <section>
  <h2>Projects</h2>
  <div className="experience-item">
    <div className="experience-header">
      <h3>Library Management System (School Project)</h3>
      <span className="date">Aug 2025 - Nov 2025</span>
    </div>
    <p>
      Developed a responsive, user-friendly online library system that improved accessibility
      for students. 70% of users reported easier access to resources.
    </p>
  </div>

  <div className="experience-item">
    <div className="experience-header">
      <h3>Mini E-commerce Frontend (School Project)</h3>
      <span className="date">Sep 2025 - Nov 2025</span>
    </div>
    <p>
      Designed a simple online shopping interface with responsive design, product browsing,
      cart addition, and checkout functionality.
    </p>
  </div>

  <div className="experience-item">
    <div className="experience-header">
      <h3>Kombat Console Games (School Project)</h3>
      <span className="date">Jul 2025 - Sep 2025</span>
    </div>
    <p>
      Developed a console-based combat game with character selection, turn-based battles, and
      health tracking, showcasing programming fundamentals.
    </p>
  </div>
</section>



<section>
  <h2>Experience</h2>

  <div className="experience-item">
    <div className="experience-header">
      <h3>Youth Empowerment Participant</h3>
      <span className="date"> January 2025 - Present</span>
    </div>
    <p>
      Engaged in a community initiative focused on leadership and digital skills. 
      Collaborated with peers in workshops and discussions, strengthening leadership 
      abilities and expanding professional networks.
    </p>
  </div>

  <div className="experience-item">
    <div className="experience-header">
      <h3>Tech Talk by Accenture</h3>
      <span className="date">January 2026</span>
    </div>
    <p>
      Participated in a technology seminar hosted by Accenture, gaining insights into 
      industry trends such as AI and cloud solutions. Actively engaged in Q&A sessions 
      and applied key takeaways to academic projects.
    </p>
  </div>

  <div className="experience-item">
    <div className="experience-header">
      <h3>AI Talk Participant</h3>
      <span className="date">February 2026</span>
    </div>
    <p>
      Attended an AI-focused seminar exploring modern applications of artificial intelligence. 
      Interacted with speakers and studied case examples, improving understanding of AI 
      fundamentals and identifying opportunities for integration in future projects.
    </p>
  </div>

  <div className="experience-item">
    <div className="experience-header">
      <h3>Alliance Student Developer</h3>
      <span className="date">Aug – Dec 11, 2025</span>
    </div>
    <p>
      Collaborated with fellow student developers to design and build applications using 
      low-code platforms. Contributed to shared projects, streamlined workflows, and applied 
      rapid prototyping techniques, resulting in functional apps that demonstrated practical 
      solutions and enhanced teamwork skills.
    </p>
  </div>
</section>

      {/* --- FOOTER --- */}
   <footer className="cv-footer">
  <p>📬 You can interact with me here:</p>
  <div className="footer-links">
    <a href="https://www.facebook.com/profile.php?id=61582551204852" target="_blank" rel="noopener noreferrer">
      Facebook
    </a>
    <a href="https://instagram.com/uj2uw3.xx" target="_blank" rel="noopener noreferrer">
      Instagram
    </a>
    <a href="https://www.linkedin.com/in/seth-andrey-abrasado-868419366/" target="_blank" rel="noopener noreferrer">
      LinkedIn
    </a>
    <a href="mailto:sethandreyabrasad0@gmail.com">Gmail</a>
    <a href="tel:+639277458524">📞 Call Me</a>
  </div>
</footer>


    </div>
  );
};

export default Profile;
