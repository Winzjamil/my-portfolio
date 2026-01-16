import {
  FaLocationPin,
  FaGithub,
  FaPhone,
  FaEnvelopeCircleCheck,
} from 'react-icons/fa6';
function Contacts() {
  return (
    <div className="  w-full min-h-screen p-6 flex items-center justify-center ">
      <div className="flex flex-col justify-center  w-full max-w-[60%] items-center shadow-md bg-gray-300">
        <h2 className="text-lg text-semibold text-center text-gray-800 mb-4 w-full ">
          Contact Me
        </h2>
        <p className=" text-gray-600 text-center font-extralight text-sm w-full mb-4">
          I'd love to hear from you — whether it’s a project, job opportunity,
          or just a hello!
        </p>

        <div className="pl-30  w-full gap-4 flex items-center justify-center p-5 rounded ">
          <div className="flex flex-wrap gap-10">
            <div className="flex flex-wrap items-center w-full gap-4 ">
              <FaLocationPin className="text-lg text-red-600" />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="flex flex-wrap">Taguig City Metro Manila</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaGithub className="text-lg" />
              <div>
                <h4 className="font-semibold">Socials</h4>
                <a
                  href="https://github.com/winzjamil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600  hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-10">
            <div className="flex items-center  gap-4">
              <FaPhone className="text-lg text-blue-500" />
              <div className="flex flex-wrap flex-col">
                <h4 className="font-semibold">Phone</h4>
                <p>+63 9759732406</p>
              </div>
            </div>

            <div className="flex items-center w-full gap-4">
              <FaEnvelopeCircleCheck className="text-lg text-blue-500" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <a
                  href="mailto:winzjamil56@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600  p-0.5 bg-black "
                >
                  <span className="text-red-400 font-semibold">E</span>
                  <span className="text-yellow-300">m</span>
                  <span className="text-blue-400">a</span>
                  <span className="text-green-500">i</span>
                  <span className="text-red-400 pr-2">l</span>
                  me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
