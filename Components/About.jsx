import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-white text-gray-800 p-4">
      <div className="max-w-3xl text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg mb-4">
          I am a passionate and dedicated web developer with a strong foundation
          in front-end technologies such as HTML, CSS, and JavaScript. Having
          recently completed my degree in BSC-IT from Vidyalankar School of
          Information Technology, I have hands-on experience through various
          projects that demonstrate my skills in creating responsive and
          user-friendly web applications.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Education:</h2>
        <div className="mb-4">
          <h3 className="text-xl font-bold">
            Bachelor of Science in Information Technology
          </h3>
          <p className="text-gray-600">
            Vidyalankar School Of Information Technology, 2021 - 2024
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">12th</h3>
          <p className="text-gray-600">
            South Indian Welfare Society, 2019 - 2021
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">10th</h3>
          <p className="text-gray-600">Dayanand Balak Vidyalaya, 2018 - 2019</p>
        </div>

        <a
          href="#Contact"
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default About;
