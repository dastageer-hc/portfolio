import React from "react";
import { ExperienceData } from "../../config/experience";

interface ExperienceProps {
  id: string;
  data: ExperienceData[];
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ id, data, darkMode }) => {
  return (
    <section id={id} className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-12">
          {data.map((job, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-start border-l-4 ${darkMode ? 'border-blue-400' : 'border-blue-500'} pl-4 animate-fade-in`}
            >
              <div className="md:w-1/4 mb-4 md:mb-0">
                <h3 className="text-xl font-semibold">{job.company}</h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{job.period}</p>
              </div>
              <div className="md:w-3/4">
                <h4 className="text-lg font-semibold mb-2">{job.title}</h4>
                <ul className="list-disc list-inside space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;