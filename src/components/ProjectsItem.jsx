export const ProjectsItem = ({project})=>{


                                
    return(
        <>
            <div className="w-full  lg:w-80 flex flex-col gap-4">
                            <img src={project.img} alt="" className="mx-6 md:mx-40 lg:mx-0" />
                            <h2 className="text-3xl text-center lg:text-left text-indigo1 font-medium  dark:text-[#CFCBFF]">{project.projectName}</h2>
                            <p className="text-center lg:text-left text-base lg:text-sm mx-6 lg:mx-0 text-gray1 dark:text-[#FFFFFF] ">{project.description}</p>
                           
                            <div className="w-full  text-indigo2 border-indigo2 text-sm flex flex-wrap justify-center gap-2  lg:gap-0 lg:justify-between font-medium lg:w-60 dark:text-[#8F88FF]">
                                {
                                    project.tools.map((tool)=> <span key={tool.id} className="border-2 border-indigo2 rounded-md py-1.4 px-4.5 dark:border-[#8F88FF] ">{tool.tool}</span>)
                                }
                            </div>

                            <div className="flex justify-between text-base font-medium text-indigo2 dark:text-[#8F88FF]">
                                {project.links.map((link)=> <a key={link.id} href="" className="border-b-2 border-indigo2 mx-6 lg:mx-0 dark:border-[#8F88FF]">{link.link}</a>)}
                            </div>
            
                        </div>
            
        </>
    )
}