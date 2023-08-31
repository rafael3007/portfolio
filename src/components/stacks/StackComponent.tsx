import Image from "next/image";
import StackTools from "./StackTools";

interface StackProps {
    path: string;
}

export default function StackComponent({ path }: StackProps) {
    const toolList = ['next']
    return (
        <div className="bg-slate-100 text-center shadow-xl p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image
                src={path}
                width={100}
                height={100}
                alt="alguma coisa"
              />
              <h3 className="text-black dark:text-white text-lg font-medium pt-8 pb-2  ">
                Frontend
              </h3>
              <p className="text-py-2 text-black dark:text-white">
                Desenvolvimento de interfaces bonitas, funcionais e intuitivas prezando pela beleza do código
              </p>
            <h4 className="py-4 text-teal-600 font-extrabold">Ferramentas:</h4>
            <>
                {/**
                 * {toolList.map((item) => {
                    <StackTools tool={item} />
                })}
                 */}
            </>
                
        </div>
    )
};
