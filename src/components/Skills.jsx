import React from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
function Skills() {
  const skills = [
    'HTML5',
    'CSS3',
    'React.js',
    'Tailwind CSS',
    'Git & GitHub',
    'REST APIs',
  ];
  return (
    <div className="  flex flex-col gap-2 h-screen  bg-gradient-to-br from-blue-50 to-blue-500 ">
      <Navbar />
      <section className="flex flex-col w-1/2 mx-auto gap-5 justify-center bg-white items-center rounded-md shadow-md p-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Skills
        </h2>

        <div className=" flex flex-wrap justify-evenly gap-4 ">
          {skills.map((skill, index) => (
            <div className="p-4 bg-green-300 rounded-sm">
              <div
                key={index}
                className="bg-blue-100 text-blue-800 flex items-center flex-col p-2 rounded-full lg:text-3xl font-medium text-sm shadow-sm hover:bg-blue-200 transition"
              >
                {skill}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <div className="grid grid-cols-2">
        <div className="bg-red-300">Column 1</div>
        <div className="bg-blue-300">Column 2</div>
      </div> */}
    </div>
  );
}

export default Skills;
