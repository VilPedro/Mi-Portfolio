import { useEffect, useState } from "react";

function Header(){
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed  top-0 w-full  mx-auto flex justify-center transition-all duration-300 z-50 ${
        isScrolled ? "py-3 backdrop-blur-md" : "py-5"
      }`}
    >
      <nav className="flex justify-center items-center w-full">
        <ul className="flex space-x-4">
          {["Inicio", "Proyectos", "Habilidades", "Sobre mi"].map((item, index) => (
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
    </header>
  );
}

export default Header;