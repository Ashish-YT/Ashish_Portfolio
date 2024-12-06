import React, { useState, useEffect } from "react";
import img from "../Components/hii_image.png";
import resume from "../Components/Ashish Yadav resume.pdf";

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleDownload = () => {
    window.open(resume, "_blank");
    const link = document.createElement("a");
    link.href = resume;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
    <div
      className={`flex flex-col md:flex-row items-center justify-center h-[105vh] p-4 transition-colors duration-300 ${
        isScrolled
          ? "bg-white text-black"
          : "bg-gradient-to-b from-blue-500 to-blue-300 text-white"
      }`}
    >
      <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src={img}
          alt="Profile"
          className="rounded-full bg-white border-4 border-white w-48 h-48 md:w-64 md:h-64 object-cover"
        />
      </div>
      <div className="text-center md:text-left md:pl-8">
        <h1 className="text-5xl font-bold mb-2">Ashish Yadav</h1>
        <h2 className="text-2xl font-semibold mb-4">Web Developer</h2>
        <p className="text-lg mb-8">
          I am a passionate and dedicated web developer with a strong foundation
          in front-end technologies such as HTML, CSS, JavaScript, and React.
        </p>
        <button
          onClick={handleDownload}
          className="mt-4 px-6 py-2 bg-white text-blue-500 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default Home;
