import { useContent } from "../hooks/useContent";
import { SkillsItem } from "./SkillsItem";

const Skills = ()=>{

    const { content, loading } = useContent() ;
    if (loading || !content) return null; 
    

    return(

      <section className="w-full lg:w-320 mx-auto flex flex-col justify-center items-center  lg:justify-start lg:items-start gap-4">
        <h1 className=" text-[42px] lg:text-5xl font-semibold dark:text-darkTitle1 ">{content.subheading.skills}</h1>
        
          <div className="w-full text-center  flex flex-col items-center lg:flex-row lg:flex-wrap gap-6 lg:justify-between">

              {content.skills.map((skill)=>
            <SkillsItem key={skill.id} skill={skill}/> 
            )}

        </div>
      </section>
    )
}
export default Skills;