import  { useState } from "react";

const Logos = () => {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);
  
  const skillsData = [
    { src: "/aboutIcons/csharp-logo.png", alt: "C#", level: 60, label: "Intermedio" },
    { src: "/aboutIcons/net-logo.png", alt: "Asp.net", level: 60, label: "Intermedio" },
    { src: "/aboutIcons/nodejs-logo.svg", alt: "Node.js", level: 65, label: "Intermedio" },
    { src: "/aboutIcons/html-logo.png", alt: "HTML", level: 80, label: "Avanzado" },
    { src: "/aboutIcons/sqlserver-logo.png", alt: "SQL-Server", level: 70, label: "Intermedio-Alto" },
    { src: "/aboutIcons/css-logo.png", alt: "CSS", level: 80, label: "Avanzado" },
    { src: "/aboutIcons/js-logo.png", alt: "JavaScript", level: 75, label: "Intermedio-Alto" },
    { src: "/aboutIcons/react-logo.png", alt: "React", level: 65, label: "Intermedio" },
    { src: "/aboutIcons/ts-logo.png", alt: "TypeScript", level: 50, label: "Basico" },
    { src: "/aboutIcons/github-logo.png", alt: "GitHub", level: 65, label: "Intermedio" },
    { src: "/aboutIcons/git-logo.png", alt: "Git", level: 60, label: "Básico-Intermedio" },
    { src: "/aboutIcons/tailwind-logo.svg", alt: "Tailwind", level: 70, label: "Intermedio-Alto" },   
  ];

  return (
    <div className="grid grid-cols-4 gap-4 relative">
      {skillsData.map((skill, index) => (
        <div 
          key={index}
          className="relative"
          onMouseEnter={() => setActiveTooltip(index)}
          onMouseLeave={() => setActiveTooltip(null)}
        >
          <img 
            src={skill.src} 
            alt={skill.alt} 
            className={`size-20 object-contain transition-transform duration-200 ${activeTooltip === index ? 'scale-110' : ''}`} 
          />
          
          {activeTooltip === index && (
            <div className="absolute z-10 top-full left-1/2 transform -translate-x-1/2 mt-2 w-32 bg-gray-800 text-white p-2 rounded-md text-center">
              <p className="font-bold text-sm">{skill.alt}</p>
              <div className="w-full bg-gray-600 rounded-full h-2 mt-1">
                <div 
                  className="bg-blue-500 h-2 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-xs mt-1">{skill.label}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Logos;