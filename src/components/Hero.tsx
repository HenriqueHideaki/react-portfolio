import { HiDownload } from "react-icons/hi"
import { FaLinkedin, FaGithub } from "react-icons/fa";

function LinkedInIcon() {
  return <FaLinkedin />;
}
function GitHubIcon() {
  return <FaGithub />;
}

export default function Hero() {
  return (
    <>
      <section className="rounded-br-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-br-[180px]">
        <div className="container mx-auto flex max-w-4xl flex-col-reverse p-4 py-12 md:flex-row">
          <div className="basis-1/2">
            <h1 className="mb-6 text-center md:text-left">
              <span className="block font-handwriting text-3xl">
                Olá, me chamo
              </span>
              <span className="mr-2 font-headline text-5xl font-semibold">
                Henrique
              </span>
              <span className="font-headline text-5xl font-light text-blue-400">
                Koga
              </span>
            </h1>

            <h2 className="mb-6 flex items-center justify-center gap-2 font-semibold md:justify-start">
              <div className="h-1 w-12 rounded-full bg-blue-800" />
              Desenvolvedor Back End
            </h2>

            <p className="mb-6 text-center text-gray-400 md:text-left">
            Sou um profissional de tecnologia com experiência em banco de dados Oracle, SQL, Pentaho e ETL na Folha de pagamentos do Estado do RN. Tenho me dedicado intensivamente ao estudo de Python, Django e Django Rest Framework, com um forte interesse no desenvolvimento backend.
            </p>

            <div className="flex items-center justify-center gap-2 md:justify-start">
              <GitHubIcon />
              <a
                href="https://github.com/HenriqueHideaki"
                className="underline-thickness-2 font-bold text-white underline decoration-2 underline-offset-4 transition hover:decoration-blue-700"
              >
                Github
              </a>
              <span className="italic text-gray-500"> | </span>
              <LinkedInIcon /> 
              <a
                href="https://www.linkedin.com/in/henrique-hideaki-koga/"
                className="underline-thickness-2 font-bold text-white underline decoration-2 underline-offset-4 transition hover:decoration-blue-700"
              >
                Linkedin
              </a>
              
              <span className="italic text-gray-500"> | </span>
              <a
                href="https://drive.google.com/file/d/1rliobQQGDp15SK-cU4GntKevMsUFvY18/view?usp=sharing"
                target="_blank"
                className="button flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <HiDownload />
                Currículo
              </a>
            </div>
          </div>

          <div className="basis-1/2"></div>
        </div>
      </section>
      <div className="absolute left-0 -mt-2 h-3 w-1/4 rounded-r-full bg-gradient-to-r from-blue-700 to-blue-600 md:w-1/3" />
    </>
  )
}
