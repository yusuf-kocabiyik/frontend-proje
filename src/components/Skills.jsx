const Skills = ()=>{


    return(

      <section className="w-220 lg:w-340 mx-auto flex flex-col  gap-4">
        <h1 className=" text-5xl font-semibold ">Skills</h1>
        <div className="flex flex-col lg:flex-row gap-6 justify-between">

            <div className="flex flex-col gap-4 w-75">
            <h2 className="text-3xl text-indigo1 font-medium" >Java Script</h2>
            <p  className="text-xs font-normal  text-gray1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className="flex flex-col gap-4 w-75">
                <h2 className="text-3xl text-indigo1 font-medium">React.js</h2>
                <p className="text-xs font-normal text-gray1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <div className="flex flex-col gap-4 w-75">
                <h2 className="text-3xl text-indigo1 font-medium">Node.js</h2>
                <p className="text-xs font-normal text-gray1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

        </div>
      </section>
    )
}
export default Skills;