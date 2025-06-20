import Logos from "./icons/Logos";

function Skills(){
    return (
        <section id="Habilidades" className="w-full mx-auto  py-5 max-w-[740px] p-6 text-left"> 
        <h2 className='text-4xl font-bold mb-12 text-center'>Habilidades</h2>
             <div className="flex justify-center items-center p-10 bg-black">
               
                <div className="size-90  border-2 border-white rounded-xl flex flex-wrap justify-center items-center gap-3 p-4">
                    <Logos />
                </div>
                
             </div>
        </section>
    )
}

export default Skills;