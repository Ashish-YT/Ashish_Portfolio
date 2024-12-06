import React from "react";
import { FaBriefcase, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Ashish Yadav. All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center space-x-4">
          <a
            href="https://www.naukri.com/mnjuser/profile?id=&altresid"
            target="_blank"
            className="flex items-center hover:text-blue-300 transition duration-300 text-sm mb-2 md:mb-0"
          >
            <FaBriefcase className="mr-1" />
            Naukri
          </a>
          <a
            href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-homepage"
            target="_blank"
            className="flex items-center hover:text-blue-300 transition duration-300 text-sm mb-2 md:mb-0"
          >
            <FaBriefcase className="mr-1" />
            Indeed
          </a>
          <a
            href="https://www.linkedin.com/in/ashish-yadav-494195324/"
            target="_blank"
            className="flex items-center hover:text-blue-300 transition duration-300 text-sm mb-2 md:mb-0"
          >
            <FaLinkedin className="mr-1" />
            LinkedIn
          </a>
          <a
            href="https://github.com/settings/profile"
            target="_blank"
            className="flex items-center hover:text-blue-300 transition duration-300 text-sm mb-2 md:mb-0"
          >
            <FaGithub className="mr-1" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
