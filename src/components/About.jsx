import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" w-screen h-screen bg-gradient-to-b from-slate-700 to-slate-500 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-950 ">
            About
          </p>
        </div>
        <p className="text-xl">
        I have 1.5 years of experience of working as a QA Engineer. As a
            seasoned Quality Assurance and Automation Engineer, I bring a wealth
            of expertise in ensuring the highest standards of software quality.
            With a passion for delivering flawless user experiences and a strong
            background in both manual and automation testing, I am dedicated to
            enhancing product reliability and performance.
        </p>
      </div>
    </div>
  );
};

export default About;
