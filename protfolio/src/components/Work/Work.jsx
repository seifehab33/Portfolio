import React from "react";
import Img1 from "../../assets/entryeagleg.png";
import Img2 from "../../assets/ebookstore.png";
import Img3 from "../../assets/moviehub.png";
import Img4 from "../../assets/e-learning-platf.png";
import Img5 from "../../assets/main-prompt.png";
import Img6 from "../../assets/parking-reservation-card.png";
import "./Work.css";

const projects = [
  {
    title: "Entry Eagle",
    image: Img1,
    description:
      "Real-time facial recognition system for campus safety that captures faces on the frontend and processes them on the backend for tracking and identification.",
    stack: [
      "React.js",
      "Tailwind CSS",
      "Hero Icons",
      "Django",
      "Python",
      "SQLite",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/seifehab33/entryeagle",
      },
    ],
  },
  {
    title: "E-Book Store",
    image: Img2,
    description:
      "Interactive and fully responsive store that helps users discover and buy eBooks across a wide range of genres.",
    stack: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "React Icons",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/seifehab33/e-book-store",
      },
      {
        label: "Live Demo",
        href: "https://e-book-store22.netlify.app/",
      },
    ],
  },
  {
    title: "Movie Hub",
    image: Img3,
    description:
      "Large full-stack website for movie enthusiasts to browse content and interact with each other in one platform.",
    stack: [
      "React.js",
      "Bootstrap",
      "React Icons",
      "Django",
      "Python",
      "PostgreSQL",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/seifehab33/Movie-hub",
      },
    ],
  },
  {
    title: "E-Learning Platform",
    image: Img4,
    description:
      "Modern learning application designed for skill development with responsive UI and dynamic content fetching.",
    stack: [
      "React.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Query",
      "Json-Server",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://e-learning-platform-nine-chi.vercel.app/",
      },
    ],
  },
  {
    title: "PromptSmith",
    image: Img5,
    description:
      "Full-stack AI prompt engineering platform for creating, testing, and sharing prompts across models with auth, real-time responses, and community features.",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "React Query",
      "Shadcn/UI",
      "Nest.js",
      "TypeORM",
      "MySQL",
      "JWT",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/seifehab33/promptAi",
      },
    ],
  },
  {
    title: "Parking Reservation",
    image: Img6,
    description:
      "Centralized parking management dashboard for monitoring zones, tracking occupancy, handling check-in and check-out, managing subscribers, adjusting pricing, and reviewing reports.",
    stack: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Zustand",
      "Tailwind CSS",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/seifehab33/parking-reservations-system",
      },
    ],
  },
];

function Work() {
  return (
    <section className="work section container" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Projects That Show How I Build</span>
      <div className="My_works">
        {projects.map((project) => (
          <article className="work_recent" key={project.title}>
            <div className="work_image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="work_content">
              <h3 className="work_title">{project.title}</h3>
              <p className="work_description">{project.description}</p>

              <div className="work_stack">
                {project.stack.map((item) => (
                  <span className="work_tag" key={`${project.title}-${item}`}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="work_links">
                {project.links.map((link) => (
                  <a
                    className="work_link"
                    href={link.href}
                    key={`${project.title}-${link.label}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Work;
