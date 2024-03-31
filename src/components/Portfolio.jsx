import React from "react";
import blog from "../assets/portfolio/blog.jpeg";
import chatapp from "../assets/portfolio/chatapp.jpeg";
import Ecommerce from "../assets/portfolio/Ecommerce.png";
import FileSharing from "../assets/portfolio/filesharing.png";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: Ecommerce,
      href:"https://65faa402f697514481a023b2--admirable-platypus-d57ee8.netlify.app/",
      front:"https://github.com/subham24092001/Mernecomefrontend",
      back:"https://github.com/subham24092001/Mernecomebackend",
    },
    {
      id: 2,
      src: FileSharing,
      href:"https://6609382a079846a068d9c6d1--dreamy-capybara-b5ac55.netlify.app/",
      front:"https://github.com/subham24092001/filesharingfrontend",
      back:"https://github.com/subham24092001/filesharingbackend",
    },
    {
      id: 2,
      src: blog,
      href:"https://blogprj-f12ef.web.app",
      front:"https://github.com/subham24092001/blogwebsite",
      back:null
    },
    {
      id: 3,
      src: chatapp,
      href:"https://chatapp-88e0e.web.app",
      front:"https://github.com/subham24092001/ChatApp",
      back:null
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div 
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Projects
          </p>
          <p className="py-6">Check out some of work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-6 px-12 sm:px-0">
          {portfolio.map(({ id, src,href ,front,back}) => {
            return (
              <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center justify-evenly">
                 
                  <a href={href} target="_subh">
                  <button className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105">
                    Demo
                  </button>
                  </a>
                  <div className="flex flex-col items-center justify-center">
                  <a href={front} target="_subh">
                  <button className="w-1/2 py-2 duration-200 hover:scale-105">
                    Frontend Code
                  </button>
                  </a>
                  <a href={back} target="_subh">
                  <button className="w-1/2 py-2 duration-200 hover:scale-105">
                    backend Code
                  </button>
                  </a>
                  </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
