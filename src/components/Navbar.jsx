import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-r from-indigo-300 via-blue-500 to-green-400 bg-black fixed">
      <div>
        <h1 className="text-4xl font-signature ml-2 py-1 bg-gradient-to-r from-red-400 via-pink-600 to-amber-300 text-transparent bg-clip-text animate-bounce">Subham</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium bg-gradient-to-r from-gray-700 via-indigo-800 to-black text-transparent bg-clip-text hover:scale-105 duration-200" 
            >
            <Link to={link} smooth duration={500}>{link}</Link> 
            </li>
          );
        })}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer px-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500
       text-gray-500"
        >
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
