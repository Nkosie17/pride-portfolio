
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-32 animate-fade-in bg-[#F8F9FF]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text">
            Hello, I'm John Doe
          </h1>
          
          <p className="text-xl md:text-2xl text-center text-gray-600 mb-16">
            A passionate developer building amazing web experiences
          </p>

          <h2 className="text-4xl font-bold text-center text-indigo-600 mb-8">
            About Me
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-center text-gray-600 max-w-3xl mx-auto mb-12">
            I'm a full-stack developer with a passion for building beautiful, functional, and user-friendly applications. 
            With a strong foundation in modern web technologies, I strive to create impactful digital experiences.
          </p>

          <div className="flex items-center justify-center space-x-6">
            <a
              href="mailto:john@example.com"
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              john@example.com
            </a>
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
