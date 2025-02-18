
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
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js",
      fullDescription:
        "A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with scalability and performance in mind.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Stripe",
        "AWS S3",
      ],
      github: "https://github.com/johndoe/ecommerce",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application",
      fullDescription:
        "A real-time task management application that allows teams to collaborate effectively. Features include task assignment, progress tracking, and team chat.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      technologies: [
        "React",
        "Firebase",
        "TypeScript",
        "Material-UI",
        "Redux",
      ],
      github: "https://github.com/johndoe/taskmanager",
    },
    // Add more projects as needed
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
