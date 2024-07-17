import React from "react";

const Skills = () => {
  const skillset = [
    {
      id: 1,
      skill: "Web Testing",
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      skill: "Mobile Testing",
      style: 'shadow-yellow-500'
    },
    {
      id: 3,
      skill: "API Testing",
      style: 'shadow-cyan-500'
    },
    {
      id: 4,
      skill: "Postman",
      style: 'shadow-teal-500'
    },
    {
      id: 5,
      skill: "Cypress",
      style: 'shadow-pink-500'
    },
    {
      id: 6,
      skill: "Playwright",
      style: 'shadow-yellow-700'
    },
    {
      id: 7,
      skill: "Test Cases",
      style: 'shadow-indigo-500'
    },
    {
      id: 8,
      skill: "Bug Report",
      style: 'shadow-orange-500'
    },
    {
      id: 9,
      skill: "System Testing",
      style: 'shadow-yellow-500'
    },
    {
      id: 10,
      skill: "Regression Testing",
      style: 'shadow-cyan-500'
    },
    {
      id: 11,
      skill: "Test Strategy",
      style: 'shadow-teal-500'
    },
    {
      id: 12,
      skill: "Functional Testing",
      style: 'shadow-pink-500'
    },
    {
      id: 13,
      skill: "Non Functional Testing",
      style: 'shadow-yellow-700'
    },
    {
      id: 14,
      skill: "User Acceptance Testing",
      style: 'shadow-indigo-500'
    },
  ];
  return (
    <div
      name="skills"
      className="w-screen h-screen bg-gradient-to-b from-slate-500 to-slate-700 text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-3">
          <h2 className="text-4xl font-bold inline border-b-4 border-b-black">
            SKILLS
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 md:grid-cols-7 gap-8 px-8 sm:px-0 rounded-lg ">
          {skillset.map(({ id, skill, style }) => (
            <div key={id} className={`bg-gradient-to-b from-black to bg-slate-500 shadow-md bg- rounded-lg items-center p-4 ${style}`}>
              {skill} 
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
