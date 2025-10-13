import { NavLink } from 'react-router-dom';
import {
  FaUser,
  FaCode,
  FaScrewdriverWrench,
  FaHouse,
  FaAddressCard,
} from 'react-icons/fa6';

function Navbar() {
  return (
    <div className="bg-white pt-2">
      <div className="flex flex-wrap justify-evenly items-center bg-gray-600 p-2.5 ">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-blue-500 ' : null
          }
          to="/"
        >
          <div className="flex items-center gap-2 text-white hover:text-gray-300 transition duration-300 ">
            <FaHouse className="text-lg text-blue-300" />
            Home
          </div>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-blue-500 ' : null
          }
        >
          <div className="flex items-center gap-2 text-white hover:text-gray-300 transition duration-300 ">
            <FaUser className="text-lg text-blue-300 " />
            About
          </div>
        </NavLink>
        <NavLink
          to="/project"
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-blue-500 ' : null
          }
        >
          <div className="flex items-center gap-2 text-white hover:text-gray-300 transition duration-300">
            <FaScrewdriverWrench className="text-lg text-blue-300" /> Projects
          </div>
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-blue-500 ' : null
          }
        >
          <div className="flex items-center gap-2 text-white hover:text-gray-300 transition duration-300">
            <FaCode className="text-lg text-blue-300" /> Skills
          </div>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-blue-500 ' : null
          }
        >
          <div className="flex items-center gap-2 text-white hover:text-gray-300 transition duration-300">
            <FaAddressCard className="text-lg text-blue-300" /> Contact
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
