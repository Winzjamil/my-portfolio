import jamilImg from '../assets/profile/jamil.jpg';
import { scrollTo } from '.';
function Introduction() {
  return (
    <div className="flex flex-col min-h-screen  gap-5 justify-center items-center bg-white shadow-md  ">
      <div className=" p-2 rounded-full shadow-md bg-sky-200 ">
        <img
          src={jamilImg}
          alt="Profile"
          className=" transition-transform duration-600 hover:scale-110 shadow-md p-3 w-40 h-40 bg-white  rounded-full  "
        />
      </div>
      <h1 className=" text-4xl font-semibold ">Hi, I'm Winz</h1>
      <p className="text-md font-semibold mt-2 text-gray-600 flex gap-2 items-center">
        <span className="text-lg">Tech Stack</span> | React.js |
        CSS,Tailwind.Css | JavaScript | Node.js | Express.js | Jwt
      </p>
      <button
        onClick={() => scrollTo('about')}
        className="bg-blue-500 py-0.5 text-sm border-b-2 border-b-stone-600 px-2 rounded-full shadow-md text-white cursor-pointer"
      >
        Know More
      </button>
    </div>
  );
}

export default Introduction;
