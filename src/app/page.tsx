"use client"
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";

// Images
import imageProfile from "../../public/perfilWpp.png";
import deved from "../../public/dev-ed-wave.png";
import code from "../../public/code.png";
import design from "../../public/design.png";
import consulting from "../../public/consulting.png";

// Components
import StackComponent from "@/components/stacks/StackComponent";
import Projects from "@/components/projects/Projects";


export default function Home() {

  

  const [imageAlternate, setImageAlternate] = useState(false);
  var projectList = [
    {
      "Title": "EcoBot",
      "description": "O bot tem como finalidade responder o usuário de acordo com a mensagem enviada, nesse caso a partir de um comando '#' ele é acionado onde pesquisa as informações passadas após o # e devolve a resposta ao usuário. Além disso foi desenvolvido diversas automações e integrações como notificações de relatórios e também mensageria para envio em massa de mensagens para uma quantidade N de números. Para o funcionamento foi utilizada o NodeJs com venom-bot que tem o selenium funcionando 'por trás dos panos' e também em alguns casos os dados são obtidos de planilhas online ou de outros serviços google, para isso então foi utilizada a API do google.",
      "tecnologias": ["Javascript", "NodeJs","API","WhatsApp integration","Chatbot"]
    },
    {
      "Title": "ECO ERP",
      "description":"A ideia inicial do software é ser capaz de gerir as diversas areas de uma empresa desde a parte financeira até a area de RH, priorizando a interface e a simplicidade, além das eficiencia do sistema. O sistema tem um foco especial para EPS's da area eletrica, podendo se adaptar para outras areas. Para isso foi utilizado o NextJs com o TailwindCss. Para a parte de desenvolvimento foi utilizado e configurado o Eslint + Prettier visando a padronização do projeto",
      "tecnologias": [ "Nextjs", "API","Eslint","Prettier","Typescript","Git"],
    },
    {
      "Title": "Move-it",
      "description": "Esse projeto se assemelha a um pomodoro onde a cada X minutos/segundos é notificado uma nova tafera/task e o usuário deve sinalizar se ela foi concluida ou não, caso seja concluida uma XP será adicinado ao usuario podendo assim subir de nivel. O foco do projeto nessa situação foi visando atividade fisica como um 'jogo', entretando é possivel de adapta-lo para diversas situações. Nesse projeto foi utilizado o ReacJs com Styled Components para a estilização além ser publicado na vercel devido a sua praticidade e também sua integração com o github pensando no CI/CD do projeto. ",
      "tecnologias": ["Javascript", "Git", "CI/CD", "ReactJs","GitHuv","Vercel"]
    },
    {
      "Title": "EcoApp",
      "description":"Projeto criado com a finalidade de ser um aplicativo para exibição de dados, sejam informações brutas ou graficos em qualquer smartphone, para isso foi escolhido o React Native. A aplicação consome os dados via API do Google onde também é feita a autenticação do usuario. ",
        "tecnologias": ["Javascript", "Git", "React Native", "API", "GitHuv", "Google API", "Auths","Expo"]
    }
  ];

  return (
    <div>
      <main className=" light:bg-white px-10 dark:bg-gray-900 min-h-[500px]">
        <section className="min-h-screen">         
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Rafael Brito
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer
            </h3>
            <p className="light:text-white text-md py-5 leading-8 dark:text-gray-200 max-w-xl mx-auto text-justify md:text-xl">
              Desenvolvedor Fullstack com foco em Frontend usando NextJs. Conheça um pouco mais sobre mim, sobre os meus trabalhos, projetos e habilidades
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/rafael3007" target="_blank" ><AiFillGithub className="text-gray-600 dark:text-black" /></a> 
              <a href="https://www.linkedin.com/in/rafael-brito-sampaio-88ab05196/" target="_blank"><AiFillLinkedin className="text-gray-600 dark:text-black" /></a>
              <a href="https://www.instagram.com/rafaa_brt7/" target="_blank"><AiFillInstagram className="text-gray-600 dark:text-black"  /></a>
            </div>
            <div onClick={()=>setImageAlternate(!imageAlternate)} className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              
              <div className="flex justify-center items-center sm:m-0 p-0">
                {imageAlternate ? (
                  <Image
                    src={imageProfile}
            
                    layout="fill"
                    alt="Imagem real"
                  />
                ) : (
                  <Image
                    src={deved}  
                    layout="fill"    
                    alt="avatar cartoon"
                  />
                )}
              </div>
              
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">O inicio</h3>
            <p className=" light:text-white text-md py-2 leading-8 text-justify dark:text-gray-200">
              Comecei no mercado de Tecnologia em 2021 como <span className="text-teal-500"> estagiário</span>, quando conheci o mundo 
              <span className="text-teal-500"> Dev </span>. Me identifiquei e comecei a estudar programação mobile e desenvolver meus primeiros Apps (ou tentar rs)
              Pouco tempo depois passei a aprender um pouco sobre a web e desvendar os mistérios do,<span className="text-red-500"> HTML</span>, <span className="text-blue-700">Css</span>, <span className="text-yellow-400">Javascript</span>, rotas, requisições...
              2 anos se passaram e continuo como antes <span className="text-teal-500">aprendendo</span>, mas agora empolgado pelo Next 13, cauteloso com a segurança da aplicação( autenticações )
              e principalmente entendendo um pouco mais sobre design patterns.

            </p>
           
          </div>
          <div className="lg:flex gap-10">
            {/**Stack Component*/}
            <StackComponent
              area="FrontEnd"
              description="breve descrição"
              tools={["NextJs","Typescript","ReactJs"]}
            >
                <Image
                src={design}
                width={100}
                height={100}
                alt="alguma coisa"
              />
            </StackComponent>
            <StackComponent
              area="Backend"
              description="Rotas, autenticação e CRUD"
              tools={["Express","Javascript","API","Auth","Response/Requests"]}
            >
              <Image
                src={code}
                width={100}
                height={100}
                alt="alguma coisa"
              />
            </StackComponent>
            <StackComponent
              area="Mobile"
              description="Responsividade, acessibilidade e simplicidade"
              tools={["React Native","Javascript","Consumo de API","Auth","Styled Components","Expo"]}
            >
              <Image
                src={consulting}
                width={100}
                height={100}
                alt="alguma coisa"
              />
            </StackComponent>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-teal-600 font-extrabold p-2 m-2 text-5xl dark:text-white">Portfolio</h3>
            <p className="text-white text-md py-2 leading-8 text-center dark:text-gray-200">
              Desde 2021 desenvolvo alguns projetos seja para web ou mobile além de colaborar com softwares e projetos empresariais
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {/**component projects */}
            {
              projectList.map((project,index) => {
                return (
                  <Projects
                    key={index}
                    title={project.Title}
                    description={project.description}
                    stacks={project.tecnologias}
                    
                  />
                )
              })
            }
          </div>
        </section>
      </main>
    </div>
  );
}
