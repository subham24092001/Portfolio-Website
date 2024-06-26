import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiCodeforces ,SiCodechef} from "react-icons/si";

const Social = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} className="text-blue-400"/>
        </>
      ),
      href: "https://www.linkedin.com/in/singhsubham",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} className="text-black"/>
        </>
      ),
      href: "https://github.com/subham24092001",
    },
    {
      id: 3,
      child: (
        <>
          Email <HiOutlineMail size={30} className="bg-gradient-to-r from-blue-500 via-red-500 to-green-600"/>
        </>
      ),
      href: "mailto:singhsubham62810@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} className="text-green-500" />
        </>
      ),
      href: "https://drive.google.com/file/d/1nvI2IRReAt4l3A8BYEsgnMDS2ZQdbxMW/view?usp=drivesdk",
      style: "rounded-br-md",
      download: true,
    },
    {
      id: 5,
      child: (
        <>
          Codeforces <SiCodeforces size={30} />
        </>
      ),
      href: "https://codeforces.com/profile/Light_",
      style: "rounded-tr-md",
    },
    {
      id: 6,
      child: (
        <>
          CodeChef <SiCodechef size={30} />
        </>
      ),
      href: "https://www.codechef.com/users/subham_2401",
      style: "rounded-tr-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => {
          return (
            <li
              key={id}
              className={
                "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px]  duration-300 bg-gray-500" +
                " " +
                style
              }
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                download={download}
                target="_subh"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Social;
