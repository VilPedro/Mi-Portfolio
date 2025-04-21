import Linkedin from "./icons/Linkedin"
import Githubicon from "./icons/Github"
import Email from "./icons/Email"

function Hero() {
  return (
    <section id="Inicio" className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 z-10 max-w-[800px]">
        <div className="flex flex-col items-start">  
          <div className="mb-6">
            <img
              className="rounded-full size-20 border-2 border-blue-500/30 p-1"
              src="/imagenes/Avatar.png"
              alt="Pedro avatar"
            />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hola, soy <span className="text-blue-500">Pedro</span>
          </h1>

          <h2 className="text-xl text-gray-300 max-w-2xl mb-10">
            Soy programador web con conocimientos en frontend y backend. Me gusta crear soluciones funcionales y bien
            diseñadas. Estoy constantemente aprendiendo para mejorar y adaptarme a nuevas tecnologías.
          </h2>
    
          <div className="flex flex-wrap gap-4 mb-8 ">
            <a
              className="rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 hover:scale-105 hover:bg-white/10 transition-all"
              href="https://www.linkedin.com/in/pedro-pastore-950251284/"
              target="_blank" rel="noopener noreferrer"
            >
              <Linkedin /> Linkedin
            </a>
            <a
              className="rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 hover:scale-105 hover:bg-white/10 transition-all"
              href="https://github.com/VilPedro"
              target="_blank" rel="noopener noreferrer"
            >
              <Githubicon /> Github
            </a>
            <a
              className="rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 hover:scale-105 hover:bg-white/10 transition-all"
              href="mailto:pedro.len@hotmail.com"
              target="_blank" rel="noopener noreferrer"
            >
              <Email /> Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
