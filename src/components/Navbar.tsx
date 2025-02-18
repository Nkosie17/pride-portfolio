
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/education", label: "Education" },
    { to: "/certificates", label: "Certificates" },
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
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link ${
                  location.pathname === link.to ? "active" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden absolute top-16 left-0 right-0 bg-background border-b transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="px-4 py-2 space-y-2">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-2 px-4 rounded-lg ${
                  location.pathname === link.to
                    ? "bg-secondary text-foreground"
                    : "text-foreground/70 hover:bg-secondary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
