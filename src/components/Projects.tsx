import { HiArrowTopRightOnSquare } from "react-icons/hi2"

export default function Projects() {
  const projects = [
    {
      title: "Esocial",
      description: "Atuei no envio de informações do evento s2240 do Esocial , um projeto de ETL, a utilização de ETL foi fundamental para extrair, transformar, validar e consolidar os dados relacionados às condições ambientais de trabalho. A linguagem SQL foi empregada na extração dos dados necessários para o evento. O software Pentaho e a linguagem JavaScript foram utilizados para transformar esses dados de acordo com os requisitos específicos do evento. Além disso, foi necessário integrar com um software de terceiros para o envio das informações processadas, garantindo o cumprimento das obrigações legais relacionadas à segurança e saúde no trabalho conforme exigido pelo esocial.",
      image: "/public/images/esocial.png",
      link: "#",
      colSpan: "col-span-1",
    },
    
  ]

  return (
    <>
      <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]">
        <div className="container mx-auto max-w-4xl p-4 py-12">
          <div className="relative p-4 text-center">
            <h2 className="relative z-50 mb-2 text-white">
              <span className="mr-2 font-headline text-3xl font-semibold">
                Projetos &
              </span>
              <span className="font-handwriting text-4xl">Portfólio</span>
            </h2>
            <p className="relative text-sm text-gray-400">
              Alguns dos projetos que já realizei:
            </p>
            <p className="text-sm text-gray-200">
              
            </p>
            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
                style={{ backgroundImage: `url('${project.image}')`}}
              >
                <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-600 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h4 className="font-headline text-lg font-semibold">
                    {project.title}
                  </h4>
                  <p className="mb-8 text-sm uppercase text-#FF0000">{project.description}</p>
                  <a href={project.link} target="_blank">
                    <HiArrowTopRightOnSquare className="h-6 w-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="absolute right-0 -mt-[6px] h-3 w-48 rounded-l-full bg-gradient-to-r from-gray-700 to-gray-600 md:w-96" />
    </>
  )
}
