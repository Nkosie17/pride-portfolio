
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
            className="md:hidden inline-flex items-center justify-center p-2.5 rounded-lg text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="transition-transform duration-200 rotate-90" />
            ) : (
              <Menu size={24} className="transition-transform duration-200" />
            )}
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

        {/* Mobile menu with improved animation */}
        <div
          className={`md:hidden fixed inset-x-0 top-16 bg-white border-b shadow-lg transform transition-all duration-300 ease-in-out ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0 pointer-events-none"
          }`}
        >
          <div className="p-4 space-y-3">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center gap-3 py-2.5 px-4 rounded-lg transition-all duration-200 ${
                    location.pathname === link.to
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon 
                    size={20} 
                    className={
                      location.pathname === link.to
                        ? "text-indigo-600"
                        : "text-gray-400"
                    }
                  />
                  <span className="font-medium">{link.label}</span>
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
