import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="h-screen w-screen bg-gradient-to-b from-slate-700 to to-black p-4 text-white "
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto p-4 h-full w-full">
        <div name="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-b-black pt-4">
            CONTACT ME
          </p>
          
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/bolgojla" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter ur name"
              className="p-2 bg-transparent border-2 rounded-md text-white my-2  "
            />
            <input
              type="text"
              name="email"
              placeholder="Enter ur email"
              className="p-2 my-3 bg-transparent border-2 rounded-md text-white  "
            />
            <textarea
              name="message"
              placeholder="Enter Your Message"
              rows="7"
              className="p-2 bg-transparent border-2 rounded-md text-white"
            ></textarea>
            <button className="text-white  w-fit px-28 py-3 my-3 flex items-center rounded-md bg-gradient-to-r to-cyan-800 from-cyan-600 font-bold animate-bounce" > LET'S TALK</button>
            <p className="text-white">OR</p>
          <p> Email me at: "amnazahoor772@gmail.com"</p>

          </form>
         

        </div>
      </div>
    </div>
  );
};

export default Contact;
