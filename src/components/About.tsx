import { Code, Lightbulb, Rocket } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="Sobremi" className="w-full max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold mb-16 text-center">
        Sobre <span className="text-blue-400">mí</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
   
        <div className="border-2 border-white/80 bg-black p-8 flex flex-col h-[450px] hover:border-blue-400 transition-colors duration-300">
          <div className="flex items-center mb-6">
            <Rocket className="text-blue-400 mr-3 h-6 w-6" />
            <h3 className="text-xl font-bold text-blue-400">Tecnologías que disfruto</h3>
          </div>

          <div className="space-y-6 mt-2">
            <div>
              <p className="font-semibold text-white mb-1">Frontend:</p>
              <p className="text-gray-300">React para construir interfaces limpias y dinámicas con componentes reutilizables.</p>
            </div>

            <div>
              <p className="font-semibold text-white mb-1">Backend:</p>
              <p className="text-gray-300">Disfruto crear soluciones backend con C#, ASP.NET API y SQL Server, y también uso Node.js según la necesidad. </p>
            </div>

            
          </div>
        </div>

        <div className="border-2 border-white/80 bg-black p-8 flex flex-col h-[450px] hover:border-blue-400 transition-colors duration-300">
          <div className="flex items-center mb-6">
            <Code className="text-blue-400 mr-3 h-6 w-6" />
            <h3 className="text-xl font-bold text-blue-400">Mi meta</h3>
          </div>

          <p className="mb-6 text-gray-200">Unirme a un equipo donde pueda:</p>

          <ul className="space-y-4 list-disc pl-5 text-gray-300">
            <li>Aportar con mis conocimientos</li>
            <li>Mejorar buenas prácticas y arquitectura</li>
            <li>Aprender de colegas con más experiencia</li>
            <li>Crecer como dev versátil</li>
          </ul>
        </div>

     
        <div className="border-2 border-white/80 bg-black p-8 flex flex-col h-[450px] hover:border-blue-400 transition-colors duration-300">
          <div className="flex items-center mb-6">
            <Lightbulb className="text-blue-400 mr-3 h-6 w-6" />
            <h3 className="text-xl font-bold text-blue-400">Mi enfoque</h3>
          </div>

          <p className="mb-6 text-gray-200">Trabajar con buenas prácticas desde el inicio para integrarme y aportar:</p>
           
          <ul className="space-y-4 list-disc pl-5 text-gray-300">
          
            <li>Escribir código modular y entendible</li>
            
            <li>Documentar y pedir feedback constante</li>
            
            <li>Aprender haciendo proyectos reales</li>
            
            <li>Adaptarme rápido al equipo</li>
          </ul>
        </div>
      </div>
    </section>
  )
}