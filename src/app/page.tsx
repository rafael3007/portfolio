"use client"
import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";

// Images
import imageProfile from "../../public/perfilWpp.png";
import deved from "../../public/dev-ed-wave.png";
import code from "../../public/code.png";
import design from "../../public/design.png";
import consulting from "../../public/consulting.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web5 from "../../public/web5.png";
import web4 from "../../public/web4.png";
import web6 from "../../public/web6.png";
import Navbar from "@/components/Navbar";
import StackComponent from "@/components/stacks/StackComponent";

export default function Home() {
  const [imageAlternate, setImageAlternate] = useState(false);

  return (
    <div>
      <main className=" light:bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Rafael Brito
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer
            </h3>
            <p className="light:text-white text-md py-5 leading-8 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Desenvolvedor Fullstack com foco em Frontend usando NextJs. Conheça um pouco mais sobre mim, sobre os meus trabalhos e habilidades
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/rafael3007" target="_blank" ><AiFillGithub className="text-white dark:text-black" /></a> 
              <a href="https://www.linkedin.com/in/rafael-brito-sampaio-88ab05196/" target="_blank"><AiFillLinkedin className="text-white dark:text-black" /></a>
              <a href="https://www.instagram.com/rafaa_brt7/" target="_blank"><AiFillInstagram className="text-white dark:text-black"  /></a>
            </div>
            <div onClick={()=>setImageAlternate(!imageAlternate)} className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              
              {imageAlternate ? (
                <Image
                src={imageProfile}
                layout="fill"
                objectFit="cover"
                alt="Imagem real"
                />
              ) : (
                <Image
                src={deved}
                layout="fill"
                objectFit="cover"
                alt="avatar cartoon"
                />
              )}
              
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">O inicio</h3>
            <p className=" light:text-white text-md py-2 leading-8  dark:text-gray-200">
              Comecei no mercado de Tecnologia em 2021 como <span className="text-teal-500"> estagiário</span>, quando conheci o mundo 
              <span className="text-teal-500"> Dev </span>. Me identifiquei e comecei a estudar programação mobile e desenvolver meus primeiros Apps (ou tentar rs)
              Pouco tempo depois passei a aprender um pouco sobre a web e desvendar os mistérios do,<span className="text-red-500"> HTML</span>, <span className="text-blue-700">Css</span>, <span className="text-yellow-400">Javascript</span>, rotas, requisições...
              2 anos se passaram e continuo como antes <span className="text-teal-500">aprendendo</span>, mas agora empolgado pelo Next 13, cauteloso com a segurança da aplicação( autenticações )
              e principalmente entendendo um pouco mais sobre design patterns.

            </p>
           
          </div>
          <div className="lg:flex gap-10">
            
            {/**<StackComponent path={design } /> */}
            <div className="bg-slate-100 text-center shadow-xl p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                src={code}
                width={100}
                height={100}
                alt="alguma coisa"
              />
              <h3 className="text-black dark:text-white text-lg font-medium pt-8 pb-2 ">
                Backend
              </h3>
              <p className="py-2 text-black dark:text-white">
                Construção de rotas e ambientes seguros, bem como a entrega dos dados da forma correta com a melhor arquitetura possivel
              </p>
              <h4 className="py-4 text-teal-600 font-extrabold">Ferramentas</h4>
              <p className="text-teal-600 py-1">Express</p>
              <p className="text-teal-600 py-1">Javascript</p>
              <p className="text-teal-600 py-1">Construção de API</p>
              <p className="text-teal-600 py-1">Autenticações</p>
              <p className="text-teal-600 py-1">Requisições semânticas</p>
            </div>
            <div className="bg-slate-100 text-center shadow-xl p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                src={consulting}
                width={100}
                height={100}
                alt="alguma coisa"
              />
              <h3 className="text-black dark:text-white text-lg font-medium pt-8 pb-2 ">Mobile</h3>
              <p className="py-2 text-black dark:text-white">
                Desenvolvimento responsivo pensando nos diferentes tamanhos de dispositivos assim como na melhor experiência para o usuário
              </p>
              <h4 className="py-4 text-teal-600 font-extrabold">Ferramentas:</h4>
              <p className="text-teal-600 py-1">React Native</p>
              <p className="text-teal-600 py-1">Consumo de API</p>
              <p className="text-teal-600 py-1">Expo</p>
              <p className="text-teal-600 py-1">Styled Components</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-white text-md py-2 leading-8 dark:text-gray-200">
              Desde 2021 desenvolvo alguns projetos seja para web ou mobile além de colaborar com softwares e projetos empresariais
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {/**component projects */}
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"
                src={web1}
                alt="alguma coisa"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"
                src={web2}
                alt="alguma coisa"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"
                src={web3}
                alt="alguma coisa"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"
                src={web4}
                alt="alguma coisa"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"
                src={web5}
                alt="alguma coisa"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"
                src={web6}
                alt="alguma coisa"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
