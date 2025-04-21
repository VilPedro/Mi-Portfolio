
function Project() {
  const projects = [
    {
      title: 'MusicLyrics',
      URL: 'https://music-lyrics-delta.vercel.app/',
      imageUrl: './imagenes/MusicLyricsImg.png',
      description: '🎶 MusicLyrics es una aplicación web para explorar y descubrir canciones. Permite buscar temas musicales, ver sus letras, escuchar una versión en YouTube y marcar tus canciones favoritas.',
      tecnologia: ['React', 'Tailwind', 'HTML', 'API']
    },
    {
      title: 'Lista de Tareas',
      imageUrl: '/imagenes/ListaTareas.png',
      URL: 'https://lista-de-tareas-snowy.vercel.app/',
      description: 'To-Do List Aplicación de lista de tareas. Permite a los usuarios agregar, marcar como completadas y eliminar tareas de manera intuitiva con una interfaz minimalista y responsiva.',
      tecnologia: ['React', 'Tailwind', 'HTML']
    }
  ];

  return (
    <section id='Proyectos' className='container mx-auto px-6 py-20'>
      <h2 className='text-4xl font-bold mb-12 text-center'>Mis Proyectos</h2>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center '>
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.URL}
            target="_blank"
            rel="noopener noreferrer"
            className='group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 w-full max-w-md'
          >
            <div className='relative'>
              <img src={project.imageUrl} alt={project.title} className='w-full h-64 object-cover rounded-lg' />
              <div className='absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='text-center p-6'>
                  <h3 className='text-2xl font-bold mb-2'>{project.title}</h3>
                  <p className='text-gray-300'>{project.description}</p>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {project.tecnologia?.map((tech, i) => (
                      <span
                        key={i}
                        className={`text-white text-sm font-medium px-3 py-1 rounded-full
                          ${tech === 'React' ? 'bg-blue-600' : ''}
                          ${tech === 'Tailwind' ? 'bg-cyan-500' : ''}
                          ${tech === 'JavaScript' || tech === 'JS' ? 'bg-yellow-400 text-black' : ''}
                          ${tech === 'HTML' ? 'bg-orange-500' : ''}
                          ${tech === 'CSS' ? 'bg-blue-400' : ''}
                          ${tech === 'Node.js' ? 'bg-green-600' : ''}
                          ${tech === 'API' ? 'bg-purple-500' : ''}
                        `}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Project;
