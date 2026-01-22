const Skills = ()=>{
    
    /* DÜZELTME 
    
    skillItem :
    <div className="flex flex-col text-center lg:text-center lg:flex-row gap-6 justify-between">

            <div className="flex flex-col  gap-4 w-75">
            <h2 className="text-3xl text-center lg:text-left lg:text-3xl text-indigo1 font-medium" >Java Script</h2>
            <p  className="text-base lg:text-xs font-normal  text-gray1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
 */

    return(

      <section className="w-full lg:w-320 mx-auto flex flex-col justify-center items-center  lg:justify-start lg:items-start gap-4">
        <h1 className=" text-[42px] lg:text-5xl font-semibold dark:text-darkTitle1 ">Skills</h1>
        <div className="flex flex-col text-center lg:text-center lg:flex-row gap-6 justify-between">

            <div className="flex flex-col  gap-4 w-75">
            <h2 className="text-3xl text-center lg:text-left lg:text-3xl text-indigo1 font-medium  dark:text-darkTitle2 " >Java Script</h2>
            <p  className="text-base lg:text-xs font-normal  text-gray1 dark:text-[#FFFFFF]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className="flex flex-col gap-4 w-75">
                <h2 className="text-3xl text-indigo1 font-medium dark:text-darkTitle2">React.js</h2>
                <p className="text-base lg:text-xs font-normal text-gray1 dark:text-[#FFFFFF]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className="flex flex-col gap-4 w-75">
                <h2 className="text-3xl text-indigo1 font-medium dark:text-darkTitle2">Node.js</h2>
                <p className="text-base lg:text-xs font-normal text-gray1  dark:text-[#FFFFFF]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

        </div>
      </section>
    )
}
export default Skills;