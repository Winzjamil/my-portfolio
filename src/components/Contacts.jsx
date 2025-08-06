import Navbar from './Navbar';
import {
  FaLocationPin,
  FaGithub,
  FaPhone,
  FaEnvelopeCircleCheck,
} from 'react-icons/fa6';
function Contacts() {
  return (
    <div className=" pb-2 bg-gradient-to-br flex flex-col  h-screen  from-blue-50 to-blue-500">
      <Navbar />
      <div className="flex flex-col items-center mt-2 ">
        <div className="bg-gray-200 border rounded-md p-6 w-1/2">
          <div className="flex flex-wrap  items-center justify-center shadow-md p-5 bg-green-200">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4 w-full">
              Contact Me
            </h2>
            <p className=" text-gray-600 text-center w-full mb-4">
              I'd love to hear from you — whether it’s a project, job
              opportunity, or just a hello!
            </p>

            <div className="w-1/2 gap-4 flex flex-col">
              <div className="flex flex-wrap items-center  gap-4 ">
                <FaLocationPin className="text-lg text-red-600" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p>Taguig City Metro Manila</p>
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

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <FaPhone className="text-lg text-blue-500" />
                <div className="flex flex-wrap flex-col">
                  <h4 className="font-semibold">Phone</h4>
                  <p>+63 752403525</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelopeCircleCheck className="text-lg text-blue-500" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a
                    href="mailto:winzjamil56@gmail.com"
                    className="text-blue-600 hover:underline "
                  >
                    winzjamil56@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
