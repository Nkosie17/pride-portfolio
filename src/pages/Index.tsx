
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen animate-fade-in bg-[#F8F9FF]">
      <div className="container mx-auto px-4 pb-8">
        <div className="max-w-4xl mx-auto pt-32">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <img
              src="/lovable-uploads/18b33572-a399-40d2-be55-7e8ed62d6c1e.png"
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Pride Sibanda
          </h1>
          
          <p className="text-xl text-center text-gray-600 mb-3">
            Full Stack Developer
          </p>

          <div className="flex items-center justify-center text-gray-600 mb-16">
            <MapPin className="w-5 h-5 mr-2" />
            Victoria Falls, Zimbabwe
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              About Me
            </h2>

            <p className="text-lg leading-relaxed text-gray-600">
              Computer Science student aspiring to be a Software Engineer with a focus in Cybersecurity and Artificial Intelligence. Passionate about building secure, scalable, and intelligent systems that enhance efficiency and user experience. Skilled in developing software solutions while integrating AI-driven insights and cybersecurity best practices. Continuously learning and adapting to emerging technologies to create innovative and resilient applications.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-8 mb-12">
            <a
              href="https://github.com/Nkosie17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/pridesibanda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:pnsibanda@africau.edu"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
