import React from "react";
import heroImage from "../assets/heroImage.jpeg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen bg-gradient-to-b from-black via-black to-gray-300 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-green-300 to-indigo-300 text-transparent bg-clip-text
          s"
          >
            I'm a Full Stack Developer and a Competitive Programmer
          </h2>
          <p className="text-pink-900 py-4 font-semibold bg-gradient-to-r from-white via-yellow-100 to-indigo-400 text-transparent bg-clip-text">
            I have some months of experience building and designing projects. I
            Love to work on web application using technologies like
            React,Next Js,Redux, TailWind, Next Js, Node Js,Express, MongoDB, Mongoose etc. Apart From this , I am Specialist at
            Codeforces and 3 * at Codechef. And I have solved more than 1000+ DSA
            problems on various coding plateforms.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500
            cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-violet-300 via-indigo-400 to-green-300">
          <img
            src={heroImage}
            alt="My Profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
