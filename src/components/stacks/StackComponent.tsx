import React from "react";

interface StackComponentsProps {
  children: React.ReactNode,
  area: string,
  description: string,
  tools: Array<string>
}

export default function StackComponent({
  children,area,description,tools
}: StackComponentsProps) {
  var toolList = tools

  return (
    <div className="bg-slate-100 text-center shadow-xl p-10 rounded-xl my-10  dark:bg-white flex-1">
        <div className="flex justify-center items-center">{children}</div>
        <h3 className="text-teal-600 text-lg font-extrabold pt-8 pb-2  ">{area}</h3>
        <p className="text-py-2 text-black">{description}</p>
        <h4 className="py-4 text-teal-600 font-extrabold">Ferramentas:</h4>
        {
          toolList.map((item, index) => {
            return (<p className="text-teal-600 py-1" key={index} >{item}</p>)
          })
        }         
    </div>
  )
};