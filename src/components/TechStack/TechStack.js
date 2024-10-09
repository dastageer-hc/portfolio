import React from "react";

const technologies = [
  { name: "React", image: "path/to/react-logo.png" },
  { name: "Angular", image: "path/to/angular-logo.png" },
  { name: "JavaScript", image: "path/to/javascript-logo.png" },
  { name: "TypeScript", image: "path/to/typescript-logo.png" },
  { name: "Tailwind CSS", image: "path/to/tailwind-logo.png" },
];

const TechStack = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Tech Stack</h2>
        <div className="flex flex-wrap justify-center items-center">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="m-4 transform hover:scale-110 transition-transform animate-float"
            >
              <img
                src={tech.image}
                alt={tech.name}
                className="w-24 h-24 object-contain"
              />
              <p className="text-center mt-2 font-semibold">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
