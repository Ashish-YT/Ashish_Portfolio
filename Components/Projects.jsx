import React from "react";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "",
    description: "",
    image:
      "https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg",
    previewLink: "#",
  },
  {
    title: "",
    description: "",
    image:
      "https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg",
    previewLink: "#",
  },
  {
    title: "",
    description: "",
    image:
      "https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg",
    previewLink: "#",
  },
  {
    title: "",
    description: "",
    image:
      "https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg",
    previewLink: "#",
  },
  {
    title: "",
    description: "",
    image:
      "https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg",
    previewLink: "#",
  },
  {
    title: "",
    description: "",
    image:
      "https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg",
    previewLink: "#",
  },
];

function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-20 bg-gradient-to-b from-blue-50 to-blue-100 text-gray-800">
      <h2 className="text-5xl font-extrabold text-center text-black-800 mb-16">
        Projects
      </h2>
      <div
        ref={ref}
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 ease-out ${
              inView ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
              >
                Preview Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
