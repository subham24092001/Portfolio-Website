import React from "react";
import blog from "../assets/portfolio/blog.jpeg";
import chatapp from "../assets/portfolio/chatapp.jpeg";
import Ecommerce from "../assets/portfolio/Ecommerce.png";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: blog,
      href:"https://blogprj-f12ef.web.app",
    },
    {
      id: 2,
      src: chatapp,
      href:"https://chatapp-88e0e.web.app",
    },
    {
      id: 3,
      src: Ecommerce,
      href:"https://65ddb8969879f7b835354e04--keen-fudge-5fb88b.netlify.app/",
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
            Portfolio
          </p>
          <p className="py-6">Check out some of work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-6 px-12 sm:px-0">
          {portfolio.map(({ id, src,href }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex flex-col items-center justify-center">
                  <a href={href} target="_subh">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  </a>
                  {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button> */}
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
