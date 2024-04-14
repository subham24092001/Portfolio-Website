import React from "react";
import blog from "../assets/portfolio/blog.jpeg";
import chatapp from "../assets/portfolio/chatapp.jpeg";
import Ecommerce from "../assets/portfolio/Ecommerce.png";
import FileSharing from "../assets/portfolio/filesharing.png";
import task from "../assets/portfolio/task.png"

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: Ecommerce,
      href:"https://65faa402f697514481a023b2--admirable-platypus-d57ee8.netlify.app/",
      front:"https://github.com/subham24092001/EcommerceMERN",
      
    },
    {
      id: 2,
      src: FileSharing,
      href:"https://6609382a079846a068d9c6d1--dreamy-capybara-b5ac55.netlify.app/",
      front:"https://github.com/subham24092001/FileSharingMERN"
    },
    {
      id: 3,
      src: blog,
      href:"https://blogprj-f12ef.web.app",
      front:"https://github.com/subham24092001/blogwebsite",
      
    },
    {
      id: 4,
      src: chatapp,
      href:"https://chatapp-88e0e.web.app",
      front:"https://github.com/subham24092001/ChatApp",
    },
    {
      id:5,
      src:task,
      href:"https://661bb1eb528b3d51517dac6a--friendly-cheesecake-7771f2.netlify.app/",
      front:"https://github.com/subham24092001/TaskMasterMERN"
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pb-10"
    >
      <div 
        className="max-w-screen-lg p-1 mx-auto flex flex-col justify-center w-full h-full"
      >
        <div className="pb-1">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Projects
          </p>
          <p className="py-3 animate-pulse">Check out some of work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-6 px-12 sm:px-0">
          {portfolio.map(({ id, src,href ,front}) => {
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
                  <button className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105 animate-pulse">
                    Demo
                  </button>
                  </a>
                  <div className="flex flex-col items-center justify-center">
                  <a href={front} target="_subh">
                  <button className="w-1/2 py-2 duration-200 hover:scale-105 animate-pulse">
                    Code
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
