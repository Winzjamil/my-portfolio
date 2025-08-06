import React from 'react';
import jamilImg from '../assets/profile/jamil.jpg';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
function About() {
  return (
    <div className=" pb-5 flex flex-col gap-2 bg-gradient-to-br from-blue-50 to-blue-500  ">
      <Navbar />

      <div className="max-w-4xl mx-auto flex flex-col items-center shadow-lg bg-white rounded-sm p-5  ">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          About Me
        </h2>
        <div className=" shadow-xl p-4  mt-5 bg-sky-100 rounded-sm md:flex flex-wrap gap-2">
          <div className="flex flex-wrap items-center gap-2 ">
            <div>
              <img
                src={jamilImg}
                alt="Winz"
                className=" p-3 w-50 rounded-full border transition-transform duration-300 hover:scale-110 border-sky-300  "
              />
            </div>
            <div className=" flex flex-col  text-md leading-relaxed min-w-36 max-w-md p-2.5 bg-black/20 ">
              <p className="mb-4">
                Hi! I’m
                <span className="font-semibold text-blue-600 ml-1">
                  Alwinsar Jamil
                </span>
                , a passionate Frontend Developer who loves turning ideas into
                real, responsive web applications. I'm focused on creating clean
                and user-friendly interfaces using
                <span className="font-medium text-gray-800 pl-2">
                  React, JavaScript, and Tailwind CSS
                </span>
                .
              </p>
              <p className="mb-4">
                My goal is to become a valuable asset to your team by building
                fast, responsive, and user-friendly websites and applications
                that directly contribute to your business goals. I'm eager to
                grow as a developer, learn from experienced team members, and
                continuously improve my skills in modern web technologies. I’m
                especially passionate about writing clean, maintainable code and
                delivering solutions that enhance user experience and drive
                results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
