
import { useState } from "react";
import { Github, X } from "lucide-react";

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

  const projects: Project[] = [
    {
      id: 1,
      title: "SkyDrift",
      description: "A flight booking and seat reservation system",
      fullDescription: "A comprehensive flight booking system that allows users to search for flights, book tickets, and select seats. Built with modern web technologies for optimal performance and user experience.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      technologies: [
        "Java",
        "JavaFX",
        "MySQL",
        "CSS",
      ],
      github: "https://github.com/Nkosie17/SkyDrift",
    },
    {
      id: 2,
      title: "Foodie Palace",
      description: "A restaurant management system for food ordering",
      fullDescription: "A restaurant management system that enables customers to place orders, track their orders, and make payments. The system also includes an admin dashboard for restaurant management.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: [
        "Java",
        "JavaFX",
        "MySQL",
        "CSS",
      ],
      github: "https://github.com/Nkosie17/FoodiePalace",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "My personal portfolio website built with modern technologies",
      fullDescription: "A modern, responsive portfolio website showcasing my projects and skills. Built with React and Tailwind CSS for a clean and professional look.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Shadcn/UI"
      ],
      github: "https://github.com/Nkosie17/portfolio",
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
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card max-w-2xl w-full rounded-lg shadow-lg relative animate-fade-in">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary"
              >
                <X className="w-5 h-5" />
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
