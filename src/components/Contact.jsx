import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-slate-700 to-gray-800 px-4 lg:h-full text-white md:h-screen lg:py-4"
    >
      <div className="max-w-screen-lg py-8 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 p-2 border-gray-500 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Contact
          </p>
          <p className="py-6 p-2 animate-pulse">Submit the below form</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/b2426220-0f85-418d-94dd-377fc5f7ae9f" method="POST" className="flex flex-col w-full md:w-1/2">
            <input 
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center 
            rounded-md hover:scale-110 duration-300 lg:mb-20"
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
