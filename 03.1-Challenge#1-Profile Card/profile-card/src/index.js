import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  //Avatar for the image
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="theo.jpg" alt="Theodor Badele" />;
}
function Intro() {
  return (
    <div>
      <h1>Theodor Badele</h1>
      <p>
        Tech Analyst at Accenture, so I currently wortk as a consultant. When
        not Working, I like to learn aboutcoding and I like to travel. I would
        like to live a bit in every place in the world!
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {/* <Skill devSkill="HTML+CSS" proficiency={3} color="orange" />
      <Skill devSkill="Javascript" proficiency={2} color="yellow" />
      <Skill devSkill="Git and GitHub" proficiency={3} color="lime" />
      <Skill devSkill="Java" proficiency={3} color="purple" />
      <Skill devSkill="Python" proficiency={2} color="turquoise" />
      <Skill devSkill="React" proficiency={1} color="red" /> */}
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
          key={skill.skill}
        />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  const style = { backgroundColor: color };

  return (
    <div className="skill" style={style}>
      <h4>{skill}</h4>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
