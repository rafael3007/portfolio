
interface propsTypes {
    title: string,
    description: string,
    stacks: Array<String>,
}

export default function Projects({ title, description, stacks }: propsTypes) {
    var stackList = stacks
    return (
        <div className="basis-1/3 flex-1 bg-slate-100 shadow-lg rounded-lg dark:bg-black ">
            <div className="basis-1/3 flex-1">
                <h1 className="text-teal-600 font-extrabold p-2 m-2 text-xl">{title}</h1>
                <div className="flex  flex-col">
                    <div className="flex p-2  rounded m-2 justify-start flex-wrap ">
                    {
                        stackList.map((item, index) => {
                            return (
                                <div className="text-white m-1 p-2 bg-teal-600 rounded-lg" key={index}>{item}</div>
                            )
                        })
                    }
                    </div>
                    
                </div>
                <div>
                    <h2 className="p-2 text-teal-600 font-extrabold ">Decrição</h2>
                    <p className="p-2 text-teal-600">{ description }</p>
                </div>
            </div> 
        </div>
    )
};
