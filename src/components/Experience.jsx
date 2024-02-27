import React from "react";
import html from "../assets/html.png";
import c_plus from "../assets/c_plus.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import typescript from "../assets/typescript.png";
import tailwind from "../assets/tailwind.png";
import css3 from "../assets/css3.png";
import python from "../assets/python.png";
import sql from "../assets/sql-server.png"
import database from "../assets/database.png"
import node from "../assets/node-js.png"


const Experience = () => {
  const lang = [
    {
      id: 1,
      src: html,
      title: "Html",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css3,
      title: "Css",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: typescript,
      title: "Typescript",
      style: "shadow-blue-400",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: c_plus,
      title: "C++",
      style: "shadow-white",
    },
    {
      id: 8,
      src: python,
      title: "Python",
      style: "shadow-blue-300",
    },
    {
      id: 9,
      src: sql,
      title: "SQL",
      style: "shadow-blue-300",
    },
    {
      id: 10,
      src: database,
      title: "Mongodb",
      style: "shadow-blue-300",
    },
    {
      id: 11,
      src: node,
      title: "Node",
      style: "shadow-blue-300",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-6 px-12 sm:px-0">
          {lang.map(({ id, src, title, style }) => {
            return(
            <div key={id} className={"shadow-md hover:scale-105 duration-500 py-2 rounded-lg" + " " + style}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
            )})}
        </div>
      </div>
    </div>
  );
};

export default Experience;
