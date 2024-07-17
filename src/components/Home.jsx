import React from "react";
import {Link} from "react-scroll";


export const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-screen bg-gradient-to-b from-black to-slate-700"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-5xl animate- text-white font-bold">
            I'm a QA Engineer
          </h2>
          <p className="text-white py-4 ">
            Hello, my name is <b>AMNA ZAHOOR</b> 
           <p> I'm working as a QA and Automation Engineer.  </p>
          </p>
          <p className="text-white py-4 ">Want to make your project bug free? Let's talk!</p>
          <div>
            
            <Link to="contact" smooth duration={500} className="text-white w-fit px-28 py-3 my-2 flex items-center rounded-md cursor-pointer bg-gradient-to-r to-cyan-800 from-cyan-600 font-bold animate-bounce ">
              HIRE ME
            </Link>
           

           
          </div>
        </div>
      </div>
    </div>
  );
};
