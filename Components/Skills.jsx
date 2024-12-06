import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "JavaScript", level: 60 },
  { name: "React", level: 45 },
  { name: "CSS", level: 50 },
  { name: "Tailwind CSS", level: 60 },
  { name: "SQL", level: 60 },
  { name: "HTML", level: 90 },
  { name: "Git", level: 70 },
  { name: "Bootstrap", level: 65 },
  { name: "MongoDB", level: 60 },
];

function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div className="py-20 bg-gray-100 text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
      <div
        ref={ref}
        className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 gap-8"
      >
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-24 h-24 mb-4">
              <CircularProgressbar
                value={inView ? skill.level : 0}
                text={inView ? `${skill.level}%` : ""}
                styles={buildStyles({
                  textSize: "16px",
                  pathColor: `rgba(30, 64, 175, ${skill.level / 100})`,
                  textColor: "#1e40af",
                  trailColor: "#d1d5db",
                })}
              />
            </div>
            <h3 className="text-lg font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
