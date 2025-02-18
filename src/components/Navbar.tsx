
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, Code, FolderGit2, GraduationCap, Award } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "About", icon: User },
    { to: "/skills", label: "Skills", icon: Code },
    { to: "/projects", label: "Projects", icon: FolderGit2 },
    { to: "/education", label: "Education", icon: GraduationCap },
    { to: "/certificates", label: "Certificates", icon: Award },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex items-center justify-center space-x-4 w-full">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`nav-link group flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    location.pathname === link.to
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50"
                  }`}
                >
                  <Icon 
                    size={18} 
                    className={`transition-colors duration-200 ${
                      location.pathname === link.to
                        ? "text-indigo-600"
                        : "text-gray-400 group-hover:text-indigo-600"
                    }`}
                  />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden absolute top-16 left-0 right-0 bg-background border-b transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="px-4 py-2 space-y-2">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center gap-2 py-2 px-4 rounded-lg transition-all duration-200 ${
                    location.pathname === link.to
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon 
                    size={18} 
                    className={
                      location.pathname === link.to
                        ? "text-indigo-600"
                        : "text-gray-400"
                    }
                  />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
