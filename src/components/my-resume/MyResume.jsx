import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
function MyResume() {
  return (
    <div className=" p-2 rounded-md h-screen">
      <NavLink
        to="/"
        className="absolute text-white left-[20%] translate-y-4.5"
      >
        <FaArrowLeft />
      </NavLink>
      <iframe
        src="/resume/Dev Resume_winzar.pdf"
        className="h-full w-full"
      ></iframe>
    </div>
  );
}

export default MyResume;
