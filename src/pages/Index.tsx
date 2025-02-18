
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-24 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          <h1 className="text-4xl font-bold text-center mb-4">John Doe</h1>
          <div className="flex flex-col items-center space-y-2 mb-8">
            <p className="text-lg text-muted-foreground">
              Software Developer
            </p>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="w-4 h-4 mr-1" />
              <span>San Francisco, CA</span>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-center">
              I am a passionate software developer with a keen interest in building
              beautiful and functional web applications. With experience in modern
              web technologies, I strive to create elegant solutions to complex
              problems.
            </p>

            <div className="flex items-center justify-center space-x-6">
              <a
                href="mailto:john@example.com"
                className="flex items-center text-muted-foreground hover:text-indigo-600 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                john@example.com
              </a>
              <a
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-indigo-600 transition-colors"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
              <a
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-indigo-600 transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
