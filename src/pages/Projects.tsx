
import { useState, useEffect } from "react";
import { Github, X } from "lucide-react";
import { useToast } from "../hooks/use-toast";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  github: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { toast } = useToast();

  // Handle cleanup when user returns from external links
  useEffect(() => {
    const handleFocus = () => {
      // Clear the selected project when window regains focus
      setSelectedProject(null);
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  const handleGithubClick = (e: React.MouseEvent<HTMLAnchorElement>, project: Project) => {
    e.stopPropagation();
    toast({
      description: "Opening GitHub repository in a new tab",
      duration: 2000,
    });
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Sales and Inventory Management",
      description: "A system that tracks sales, manages stock levels, and optimizes inventory control",
      fullDescription: "A comprehensive system that tracks sales, manages stock levels, and optimizes inventory control to improve efficiency and reduce losses. The system provides real-time insights into stock levels, sales trends, and helps businesses make data-driven decisions.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "TypeScript"
      ],
      github: "https://github.com/Nkosie17/sales-and-inventory-management.git",
    },
    {
      id: 2,
      title: "Multiple Tool AI Agent",
      description: "An intelligent system that understands queries and performs real-world tasks using external tools",
      fullDescription: "An advanced AI system that can understand queries, retrieve relevant data, and perform real-world tasks using external tools. The agent is designed to interact intelligently with users and execute actions based on their requests, making it a versatile tool for various applications.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      technologies: [
        "Python",
        "TensorFlow",
        "Natural Language Processing",
        "REST APIs",
        "Docker"
      ],
      github: "https://github.com/Nkosie17/AI-Agent.git",
    },
    {
      id: 3,
      title: "AI Meal Planner",
      description: "A smart system for creating personalized meal plans based on user preferences and needs",
      fullDescription: "An AI-powered meal planning system that helps users create personalized meal plans based on their dietary preferences, health goals, allergies, and lifestyle. It leverages artificial intelligence to generate nutritious meal recommendations, optimize grocery lists, and suggest recipes tailored to the user's needs.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      technologies: [
        "Python",
        "Machine Learning",
        "React",
        "Node.js",
        "PostgreSQL"
      ],
      github: "https://github.com/Nkosie17/AI-Meal-Planner.git",
    }
  ];

  return (
    <div className="min-h-screen pt-20 animate-fade-in">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 touch-none"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedProject(null);
              }
            }}
          >
            <div className="bg-card w-full max-w-2xl rounded-lg shadow-lg relative animate-fade-in max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary z-10"
                aria-label="Close preview"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  {selectedProject.title}
                </h3>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full rounded-lg mb-4 project-image"
                />
                <p className="text-lg mb-4">{selectedProject.fullDescription}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors"
                  onClick={(e) => handleGithubClick(e, selectedProject)}
                >
                  <Github className="w-5 h-5 mr-2" />
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
