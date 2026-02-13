
import { useContent } from "../hooks/useContent";
import { ProjectsItem } from "./ProjectsItem";
const Projects =()=>{

     const { content, loading } = useContent() ;
    if (loading || !content) return null; 

  

    return(
        <section className="w-full lg:w-320 mx-auto border-t-2 my-8 border-[#BAB2E7]">
        <h1 className="text-5xl text-center lg:text-left font-semibold py-8 dark:text-darkTitle1">{content.subheading.projects}</h1>

        <main className="flex w-full flex-col lg:flex-row flex-wrap justify-between gap-4 lg:gap-0">
            
          {content.projects.map((project)=>
            (<ProjectsItem key={project.id} project={project} />)
          )
          }
             

            <br />
            <br />
        </main>
        </section>
    )
}

export default Projects;