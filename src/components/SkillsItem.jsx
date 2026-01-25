

export const SkillsItem =({skill})=>{

    return(
        <>
            <div className="flex flex-col  gap-4 w-93">
            <h2 className="text-3xl text-center lg:text-left lg:text-3xl text-indigo1 font-medium  dark:text-darkTitle2 " >{skill.skillName}</h2>
            <p  className="text-base lg:text-sm lg:text-left font-normal  text-gray1 dark:text-[#FFFFFF]">{skill.description}</p>
            </div>

        </>
    )
}