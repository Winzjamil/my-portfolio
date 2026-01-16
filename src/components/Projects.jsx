import React from 'react';
import Carousel from './Carousel';

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
      description: `A full stack React and Node.js platform where user can browse
      and purchase product, seller can manage listing,update, and delete their own product
       and admin can manage users and track users activities.`,

      link: 'https://github.com/winzjamil/E-commerce',
      live: 'https://aj-shop-lilac.vercel.app',
    },
  ];
  return (
    <div className=" flex  flex-col gap-30 w-full min-h-screen ">
      <h1 className=" font-bold pl-2 text-lg ">Projects</h1>

      <div className="flex flex-wrap justify-evenly items-center w-full">
        <div className="bg-gray-400 pb-1  px-1">
          {projectList.map((item) => (
            <div
              key={item.id}
              className=" p-4 rounded flex w-full  bg-white mt-1 flex-col  shadow-md"
            >
              <h3>{item.title}</h3>
              <p className=" w-full max-w-sm break-words whitespace-break font-light text-sm ">
                {item.description}
              </p>
              <a
                href={item.link}
                className="text-blue-500 mt-2 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub →
              </a>
              {item.title === 'E-Commerce App' ? (
                <a
                  href={item.live}
                  className="text-blue-500 mt-2 inline-block"
                  target="_blank"
                >
                  View Live →
                </a>
              ) : null}
            </div>
          ))}
        </div>
        <div>
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default Projects;
