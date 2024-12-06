import React, { useState, useEffect } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 shadow-md transition-colors duration-300 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold">Ashish</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#Home"
                className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
              >
                HOME
              </a>
              <a
                href="#About"
                className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
              >
                ABOUT
              </a>
              <a
                href="#Skills"
                className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
              >
                SKILLS
              </a>
              <a
                href="#Projects"
                className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
              >
                PROJECTS
              </a>
              <a
                href="#Contact"
                className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
              >
                CONTACT
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#Home"
              className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#About"
              className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#Skills"
              className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Skills
            </a>
            <a
              href="#Projects"
              className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#Contact"
              className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
