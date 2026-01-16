import React from 'react';
import jamilImg from '../assets/profile/jamil.jpg';
import { NavLink } from 'react-router-dom';
function About() {
  return (
    <div className=" flex flex-col min-h-screen gap-20  gap-4 w-full   ">
      <h2 className="text-lg pl-2 text-white font-semibold w-full">About Me</h2>

      <div className="flex flex-wrap justify-evenly w-full items-center">
        <div className="p-1 rounded bg-black/50">
          <img src={jamilImg} alt="Winz" className=" w-70 h-90 object-fit  " />
        </div>
        <div className=" flex flex-col font-light text-md  text-white  leading-relaxed  max-w-md p-2.5 bg-black border border-white shadow-md rounded">
          <p className="mb-4">
            Hi! I’m
            <span className="font-semibold text-blue-600 ml-1">
              Alwinsar Jamil
            </span>
            , a passionate Frontend Developer who loves turning ideas into real,
            responsive web applications. I'm focused on creating clean and
            user-friendly interfaces using
            <span className="font-medium text-stone-300 pl-2">
              React, JavaScript, and Tailwind CSS
            </span>
            .
          </p>
          <p className="mb-4">
            My goal is to become a valuable asset to your team by building
            fast,responsive, and user-friendly websites and applications that
            directly contribute to your business goals. I'm eager to grow as a
            developer, learn from experienced team members, and continuously
            improve my skills in modern web technologies. I’m especially
            passionate about writing clean, maintainable code and delivering
            solutions that enhance user experience and drive results.
          </p>
        </div>
      </div>
      <div className="flex w-full items-center justify-center  ">
        <NavLink
          to="/resume"
          className="py-0.5 px-2 text-sm font-extralight border-b-2 border-b-stone-300 cursor-pointer bg-white shadow-md rounded"
        >
          View Resume
        </NavLink>
      </div>
    </div>
  );
}

export default About;
