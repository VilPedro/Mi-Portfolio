import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = ["Inicio", "Proyectos", "Habilidades", "Sobre mi"];

  return (
    <header
      className={`fixed top-0 w-full mx-auto flex justify-center items-center px-4 transition-all duration-300 z-50 ${
        isScrolled ? "py-3 backdrop-blur-md" : "py-5"
      }`}
    >
      <nav className="hidden md:flex">
        <ul className="flex space-x-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.replace(" ", "")}`}
                className="font-bold px-5 py-4 text-gray-50 rounded-lg hover:scale-110 hover:bg-white/10 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-md md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.replace(" ", "")}`}
                  className="font-bold text-white px-4 py-2 hover:bg-white/10 rounded-lg transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}