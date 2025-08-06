import React from 'react';
import jamilImg from '../assets/profile/jamil.jpg';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
function Introduction() {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col  gap-2   bg-gradient-to-br from-blue-50 to-blue-400 pb-4">
      <Navbar />
      <section className="flex flex-col w-1/2  mx-auto gap-5 justify-center items-center bg-white shadow-md  p-6">
        <div
          className=" p-3 rounded-full shadow-md bg-sky-200 "
          onClick={() => navigate('/about')}
        >
          <img
            src={jamilImg}
            alt="Profile"
            className=" transition-transform duration-300 hover:scale-110 shadow-md p-3 lg:w-50   md:w-40 rounded-full border border-sky-300 "
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-800">Hi, I'm Winz</h1>
        <p className="text-lg mt-2 text-gray-600">
          Frontend Developer | React | Tailwind | JavaScript | Express.js
        </p>
        <NavLink
          to="/contact"
          className=" mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Contact Me
        </NavLink>
      </section>
    </div>
  );
}

export default Introduction;
