import React from 'react';
import Navbar from './Navbar';
function Projects() {
  const projectList = [
    {
      id: 1,
      title: 'Todo App',
      description: 'A simple todo list using React and localStorage.',
      link: 'https://github.com/winzjamil/Todo-app-in-js',
    },
    {
      id: 2,
      title: 'E-Commerce App',
      description: 'Retrieves data from an API ',
      link: 'https://github.com/winzjamil/E-commerce',
    },
  ];
  return (
    <div className=" flex flex-col  gap-2 bg-gradient-to-br from-blue-50 to-blue-500 pb-4 rounded-md ">
      <Navbar />
      <section className="bg-white p-4 flex rounded-md  mx-auto flex-col gap-4 items-center w-1/2">
        <h2 className="text-3xl font-bold ">Projects</h2>
        <div className="p-4 bg-gray-200">
          {projectList.map((proj) => (
            <div key={proj.id} className=" p-4 rounded  bg-white m-1 shadow-md">
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="mt-2">{proj.description}</p>
              <a
                href={proj.link}
                className="text-blue-500 mt-2 inline-block"
                target="_blank"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
