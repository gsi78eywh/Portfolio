import React, { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaPhp,
  FaJava,
  FaDocker,
  FaNpm,
  FaNodeJs,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaStar,
} from "react-icons/fa";
import {
  SiMysql,
  SiVim,
  SiGithubcopilot,
  SiLaravel,
  SiTailwindcss,
} from "react-icons/si";
import {
  MdVerified,
  MdLocationOn,
  MdCalendarToday,
  MdEmail,
  MdFileDownload,
} from "react-icons/md";
import "./App.css"; // <-- keep the rest of your styles here

/* --------------------------------------------------------------
   1️⃣ CONSTANTS & STATIC DATA
   -------------------------------------------------------------- */
const QUOTE_API_URL = "https://api.quotable.io/random";

const techStack = {
  frontend: [
    { name: "HTML", icon: <FaHtml5 />, color: "#e34c26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#264de4" },
    { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
    { name: "React", icon: <FaReact />, color: "#61dbfb" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#38b2ac" },
  ],
  backend: [
    { name: "PHP", icon: <FaPhp />, color: "#777bb4" },
    { name: "Laravel", icon: <SiLaravel />, color: "#ff2d20" },
    { name: "Java", icon: <FaJava />, color: "#007396" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#68a063" },
  ],
  database: [{ name: "MySQL", icon: <SiMysql />, color: "#00758f" }],
};

const tools = [
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "NPM", icon: <FaNpm /> },
  { name: "VIM", icon: <SiVim /> },
  { name: "Copilot", icon: <SiGithubcopilot /> },
];

const additionalProjects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio site built with React & Tailwind CSS showcasing my work.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourusername.github.io/portfolio",
    status: "Completed",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Full‑stack task manager with auth, real‑time updates and a clean UI.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/yourusername/taskapp",
    liveUrl: "#",
    status: "In Progress",
  },
];

/* --------------------------------------------------------------
   3️⃣ Main component
   -------------------------------------------------------------- */
const Profile = () => {
  /* ---- 3.1 Quote handling ------------------------------------------------- */
  const [quote, setQuote] = useState({ content: "", author: "" });
  const [quoteLoading, setQuoteLoading] = useState(true);

  const fetchQuote = async () => {
    try {
      setQuoteLoading(true);
      const res = await fetch(QUOTE_API_URL);
      const data = await res.json();
      setQuote({ content: data.content, author: data.author });
    } catch (e) {
      console.error("Quote fetch error:", e);
      // fallback static quote
      setQuote({
        content:
          "Always focus on your own lane. No one finds happiness by pursuing someone else's life path.",
        author: "Sylvia Salow",
      });
    } finally {
      setQuoteLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
    const interval = setInterval(fetchQuote, 24 * 60 * 60 * 1000); // 24 h
    return () => clearInterval(interval);
  }, []);

  /* ---- 3.2 Animated Name --------------------------------------------------- */
  const nameRef = useRef(null);
  useEffect(() => {
    const node = nameRef.current;
    if (!node) return;
    node.classList.add("name-animate");
    // clean‑up – let next mount re‑run animation
    return () => node.classList.remove("name-animate");
  }, []);

  /* ---- 3.3 Render ----------------------------------------------------------- */
  return (
    <div className="cv-container">
      {/* --------------------- HEADER --------------------- */}
      <header className="cv-header">
        <div className="profile-photo-wrapper">
          <img
            src="https://image2url.com/r2/default/images/1772013296101-7731ccd5-a3f8-4627-952a-5d4bda8992e7.jpg"
            alt="Seth Andrey Jabagat"
            className="profile-photo"
          />
        </div>

        <div className="header-info">
          {/* ----- Animated name + verification badge ----- */}
          <div className="name-row">
            <h1 ref={nameRef}>Seth Andrey Jabagat</h1>
            <MdVerified className="verified-icon" />
          </div>

          {/* ----- Location ----- */}
          <p className="location-row">
            <MdLocationOn className="icon" /> Dalaguete, Cebu, Philippines
          </p>

          {/* ----- Roles ----- */}
          <div className="role-row">
            <span className="role-text">Junior Frontend Developer</span>
            <span className="role-separator">|</span>
            <span className="role-text">UI/UX Enthusiast</span>
          </div>

          {/* ----- Action buttons ----- */}
          <div className="button-group">
            <a
              href="https://teams.microsoft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-action btn-dark"
            >
              <MdCalendarToday /> Schedule a Call
            </a>
            <a
              href="mailto:sethandreyabrasad0@gmail.com"
              className="btn-action btn-outline"
            >
              <MdEmail /> Email Me
            </a>
            <button className="btn-action btn-brand-pink">
              <MdFileDownload /> Resume
            </button>
          </div>
        </div>
      </header>

      {/* --------------------- DAILY QUOTE --------------------- */}
      <section className="quote-section">
        <h2>Daily Inspiration</h2>
        {quoteLoading ? (
          <p className="text-sm italic">Loading quote …</p>
        ) : (
          <blockquote className="quote-box">
            <p className="quote-text">“{quote.content}”</p>
            <footer className="quote-author">— {quote.author}</footer>
          </blockquote>
        )}
      </section>

      {/* --------------------- ABOUT --------------------- */}
      <section>
        <h2>About Me</h2>
        <p>
          Hi, I'm Seth Andrey Jabagat — a Computer Technology student from
          Dalaguete, Cebu specializing in software development, UI/UX design,
          and responsive web solutions. I focus on building user‑centered
          applications, creating intuitive interfaces, and delivering impactful
          digital experiences.
        </p>
        <p>
          Adaptable, detail‑oriented, and collaborative, I enjoy solving
          problems with creativity and technical clarity. My academic projects
          have strengthened my ability to design responsive systems, improve
          accessibility, and apply modern development practices in real‑world
          scenarios.
        </p>
        <p>
          I am open to internships, freelance, and full‑time opportunities where
          I can contribute to innovative projects, expand my expertise, and
          support organizations in achieving their digital goals. Let's connect —
          I'd love to collaborate on your next initiative.
        </p>
      </section>

      {/* --------------------- EDUCATION --------------------- */}
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
          <p className="school">
            Mantalongon National High School, Dalaguete, Cebu
          </p>
        </div>
      </section>

      {/* --------------------- TECH STACK --------------------- */}
      <section className="cv-section">
        <h2 className="section-title">Tech Stack</h2>
        <div className="space-y-10">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category} className="stack-group">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">
                {category} Development
              </h3>
              <div className="skills-tags flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill.name}
                    className="tag group flex items-center gap-3 px-5 py-3 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-[#D83B7D] transition-all"
                  >
                    <span
                      className="text-2xl group-hover:scale-110 transition-transform"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </span>
                    <span className="font-bold text-xs text-slate-700">
                      {skill.name}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------- TOOLS --------------------- */}
      <section>
        <h2>Tools & Technologies</h2>
        <div className="tools-tags flex flex-wrap gap-3">
          {tools.map((tool) => (
            <span key={tool.name} className="tag bg-gray-50 px-3 py-1 rounded">
              {tool.icon} {tool.name}
            </span>
          ))}
        </div>
      </section>

      {/* --------------------- CERTIFICATIONS --------------------- */}
      <section>
        <h2>Certifications</h2>
        <div className="skills-tags certs flex flex-wrap gap-3">
          <span className="tag">Skills to Succeed Academy</span>
          <span className="tag">Google Data Analytics</span>
          <span className="tag">Google Coursera Python Automation</span>
          <span className="tag">Google UI/UX Training Module</span>
          <span className="tag">Rapid Application Development</span>
          <span className="tag">Web Development Fundamentals</span>
          <span className="tag">Database Management Systems</span>
        </div>
      </section>

      {/* --------------------- PROJECTS (School) --------------------- */}
      <section>
        <h2>Projects</h2>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Library Management System (School Project)</h3>
            <span className="date">Aug 2025 – Nov 2025</span>
          </div>
          <p>
            Developed a responsive, user‑friendly online library system that
            improved accessibility for students. 70% of users reported easier
            access to resources.
          </p>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Mini E‑commerce Frontend (School Project)</h3>
            <span className="date">Sep 2025 – Nov 2025</span>
          </div>
          <p>
            Designed a simple online shopping interface with responsive design,
            product browsing, cart addition, and checkout functionality.
          </p>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Kombat Console Games (School Project)</h3>
            <span className="date">Jul 2025 – Sep 2025</span>
          </div>
          <p>
            Developed a console‑based combat game with character selection,
            turn‑based battles, and health tracking, showcasing programming
            fundamentals.
          </p>
        </div>
      </section>

      {/* --------------------- ADDITIONAL PERSONAL PROJECTS --------------------- */}
      <section>
        <h2>Personal Projects</h2>
        {additionalProjects.map((proj) => (
          <div key={proj.id} className="experience-item">
            <div className="experience-header">
              <h3>{proj.title}</h3>
              <span className="date">{proj.status}</span>
            </div>
            <p>{proj.description}</p>
            <p className="text-sm">
              <strong>Tech:</strong> {proj.technologies.join(", ")}
            </p>
            {proj.githubUrl && (
              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link mr-3"
              >
                GitHub
              </a>
            )}
            {proj.liveUrl && (
              <a
                href={proj.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Live Demo
              </a>
            )}
          </div>
        ))}
      </section>

      {/* --------------------- SEMINARS --------------------- */}
      <section>
        <h2>Seminars & Workshops</h2>
        {seminars.map((s) => (
          <div key={s.id} className="experience-item">
            <div className="experience-header">
              <h3>{s.title}</h3>
              <span className="date">{s.date}</span>
            </div>
            <p>{s.description}</p>
            {s.certificateUrl && (
              <a
                href={s.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </section>

      {/* --------------------- RECOMMENDATIONS --------------------- */}
      <section>
        <h2>Recommendations</h2>
        {recommendations.map((rec) => (
          <div key={rec.id} className="recommendation-item p-4 bg-gray-50 rounded-md mb-4">
            <p className="italic mb-2">"{rec.text}"</p>
            <div className="flex items-center gap-2">
              <StarRating rating={rec.rating} />
              <strong>{rec.name}</strong> — {rec.position}
            </div>
            <p className="text-xs text-gray-600 mt-1">
              {rec.relationship} • {rec.date}
            </p>
          </div>
        ))}
      </section>

      {/* --------------------- EXPERIENCE (Community) --------------------- */}
      <section>
        <h2>Experience</h2>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Youth Empowerment Participant</h3>
            <span className="date">Jan 2025 – Present</span>
          </div>
          <p>
            Engaged in a community initiative focused on leadership and digital
            skills. Collaborated with peers in workshops and discussions,
            strengthening leadership abilities and expanding professional networks.
          </p>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Tech Talk by Accenture</h3>
            <span className="date">Jan 2026</span>
          </div>
          <p>
            Participated in a technology seminar hosted by Accenture, gaining
            insights into industry trends such as AI and cloud solutions. Actively
            engaged in Q&A sessions and applied key takeaways to academic
            projects.
          </p>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>AI Talk Participant</h3>
            <span className="date">Feb 2026</span>
          </div>
          <p>
            Attended an AI‑focused seminar exploring modern applications of
            artificial intelligence. Interacted with speakers and studied case
            examples, improving understanding of AI fundamentals and identifying
            opportunities for integration in future projects.
          </p>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <h3>Alliance Student Developer</h3>
            <span className="date">Aug – Dec 2025</span>
          </div>
          <p>
            Collaborated with fellow student developers to design and build
            applications using low‑code platforms. Contributed to shared projects,
            streamlined workflows, and applied rapid prototyping techniques,
            resulting in functional apps that demonstrated practical solutions and
            enhanced teamwork skills.
          </p>
        </div>
      </section>

      {/* --------------------- FOOTER --------------------- */}
      <footer className="cv-footer">
        <div className="footer-container">
          {/* Community */}
          <div className="footer-section">
            <h3>Community</h3>
            <p>
              Join developer forums, contribute to open‑source, and collaborate
              with peers to grow together.
            </p>
          </div>

          {/* Reach Out */}
          <div className="footer-section">
            <h3>Reach Out</h3>
            <div className="footer-links flex flex-col gap-1">
              <a
                href="https://www.facebook.com/profile.php?id=61582551204852"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <FaFacebook /> Facebook
              </a>
              <a
                href="https://instagram.com/uj2uw3.xx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <FaInstagram /> Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/seth-andrey-abrasado-868419366/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a href="mailto:sethandreyabrasad0@gmail.com" className="flex items-center gap-1">
                <FaEnvelope /> Gmail
              </a>
              <a href="tel:+639277458524" className="flex items-center gap-1">
                <FaPhone /> Call Me
              </a>
            </div>
          </div>

          {/* Motivation – now dynamic via API */}
          <div className="footer-section">
            <h3>Motivation</h3>
            {quoteLoading ? (
              <p className="text-sm italic">Loading quote …</p>
            ) : (
              <p className="text-sm">“{quote.content}” — {quote.author}</p>
            )}
          </div>
        </div>

        <p className="footer-bottom text-center mt-6 text-xs text-gray-500">
          © 2026 Seth Andrey Jabagat • Built with React
        </p>
      </footer>
    </div>
  );
};

export default Profile;
