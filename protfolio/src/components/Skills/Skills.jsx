import React from "react";
import "./Skills.css";

const skillsData = [
  {
    title: "Frontend",
    label: "Core Stack",
    summary:
      "Frontend tools I use to build responsive interfaces and product-focused user experiences.",
    items: [
      "React.js",
      "Next.js",
      "Vue.js",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    label: "Application Logic",
    summary:
      "Backend technologies I have used in internships, training, and full-stack project work.",
    items: [
      "Nest.js",
      "RESTful APIs",
      "MySQL",
      "SQLite",
      "TypeORM",
      "JWT",
      "Passport.js",
    ],
  },
  {
    title: "Workflow",
    label: "Testing & Delivery",
    summary:
      "Supporting tools and practices I use for quality, state management, and developer workflow.",
    items: [
      "Redux Toolkit",
      "React Query",
      "Pinia",
      "Jest",
      "React Testing Library",
      "React Hook Form",
      "Zod",
      "Git",
      "GitHub",
      "Docker",
    ],
  },
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Technologies from my CV</span>

        <div className="skills_container grid">
          {skillsData.map((group) => (
            <article className="skills_content" key={group.title}>
              <div className="skills_card-head">
                <span className="skills_label">{group.label}</span>
                <h3 className="skills_title">{group.title}</h3>
                <p className="skills_summary">{group.summary}</p>
              </div>

              <div className="skills_box">
                {group.items.map((item) => (
                  <div className="skills_chip" key={item}>
                    <span className="skills_chip-dot"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
