import React from "react";

interface Project {
  title: string;
  description: string;
}

interface ProjectsProps {
  id: string;
  darkMode: boolean;
}

const projects: Project[] = [
  { title: "Project 1", description: "A brief description of Project 1" },
  { title: "Project 2", description: "A brief description of Project 2" },
  { title: "Project 3", description: "A brief description of Project 3" },
];

const Projects: React.FC<ProjectsProps> = ({ id, darkMode }) => {
  return (
    <section id={id} className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow animate-fade-in`}
            >
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                <button className={`mt-4 px-4 py-2 ${darkMode ? 'bg-blue-500' : 'bg-blue-600'} text-white rounded hover:bg-blue-700 transition-colors`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;