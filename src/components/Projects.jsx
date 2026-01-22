import foto1 from "../assets/images/Rectangle1.png";
import foto2 from "../assets/images/Rectangle2.png";
import foto3 from "../assets/images/Rectangle3.png";
const Projects =()=>{

    return(
        <section className="w-full lg:w-320 mx-auto border-t-2 border-[#BAB2E7]">
        <h1 className="text-5xl text-center lg:text-left font-semibold py-8 dark:text-darkTitle1">Projects</h1>

        <main className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0">
            <div className="w-full  lg:w-80 flex flex-col gap-4">
                <img src={foto1} alt="" className="mx-6 md:mx-40 lg:mx-0" />
                <h2 className="text-3xl text-center lg:text-left text-indigo1 font-medium  dark:text-[#CFCBFF]">Workintech</h2>
                <p className="text-center lg:text-left text-base lg:text-sm mx-6 lg:mx-0 text-gray1 dark:text-[#FFFFFF] ">A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                <div className="w-full  text-indigo2 border-indigo2 text-sm flex flex-wrap justify-center gap-2  lg:gap-0 lg:justify-between font-medium lg:w-60 dark:text-[#8F88FF]">
                    <span className="border-2 border-indigo2 rounded-md py-1.4 px-4.5 dark:border-[#8F88FF]">react</span>
                    <span className="border-2 border-indigo2 rounded-md py-1.4 px-4.5 dark:border-[#8F88FF]">redux</span>
                    <span className="border-2 border-indigo2 rounded-md py-1.4 px-4.5 dark:border-[#8F88FF]">axios</span>
                </div>
                <div className="flex justify-between text-base font-medium text-indigo2 dark:text-[#8F88FF]">
                    <a href="" className="border-b-2 border-indigo2 mx-6 lg:mx-0 dark:border-[#8F88FF]">Github</a>
                    <a href="" className="border-b-2 border-indigo2 mx-6 lg:mx-0 dark:border-[#8F88FF]">View Site</a>
                </div>

            </div>

            <div className="w-full lg:w-80 flex flex-col gap-4">
                <img src={foto2} alt="" className="mx-6 md:mx-40 lg:mx-0"/>
                <h2 className="text-3xl text-center lg:text-left text-indigo1 font-medium dark:text-[#CFCBFF]">Random Jokes</h2>
                <p className="text-center lg:text-left text-base lg:text-sm mx-6 lg:mx-0 text-gray1 dark:text-[#FFFFFF]">A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                <div className="w-full  text-indigo2 text-sm flex flex-wrap justify-center gap-2  lg:gap-0 lg:justify-between font-medium lg:w-60 dark:text-[#8F88FF]">
                    <span className="border-2 border-indigo2 rounded-md py-1.4 px-4.5 dark:border-[#8F88FF]">react</span>
                    <span className="border-2 border-indigo2 rounded-md py-1.4 px-4.5 dark:border-[#8F88FF]">redux</span>
                    <span className="border-2 border-indigo2 rounded-md py-1.4 px-4.5 dark:border-[#8F88FF]">axios</span>
                </div>
                <div className="flex justify-between text-base font-medium text-indigo2 dark:text-[#8F88FF]">
                    <a href="" className="border-b-2 border-indigo2 mx-6 lg:mx-0 dark:border-[#8F88FF]">Github</a>
                    <a href="" className="border-b-2 border-indigo2 mx-6 lg:mx-0 dark:border-[#8F88FF]">View Site</a>
                </div>

            </div>

            <div className="w-full lg:w-80 flex flex-col gap-4">
                <img src={foto3} alt="" className="mx-6 md:mx-40 lg:mx-0"/>
                <h2 className="text-3xl text-center lg:text-left text-indigo1 font-medium dark:text-[#CFCBFF]">Journey</h2>
                <p className="text-center lg:text-left text-base lg:text-sm mx-6 lg:mx-0 text-gray1 dark:text-[#FFFFFF] ">A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                <div className="w-full  text-indigo2 text-sm flex flex-wrap justify-center gap-2  lg:gap-0 lg:justify-between font-medium lg:w-60 dark:text-[#8F88FF]">
                    <span className="border-2 border-indigo2 rounded-md py-1.4 px-4.5 dark:border-[#8F88FF]">react</span>
                    <span className="border-2 border-indigo2 rounded-md py-1.4 px-4.5 dark:border-[#8F88FF]">redux</span>
                    <span className="border-2 border-indigo2 rounded-md py-1.4 px-4.5 dark:border-[#8F88FF]">axios</span>
                </div>
                <div className="flex justify-between text-base font-medium text-indigo2 dark:text-[#8F88FF]">
                    <a href="" className="border-b-2 border-indigo2 mx-6 lg:mx-0 dark:border-[#8F88FF]">Github</a>
                    <a href="" className="border-b-2 border-indigo2 mx-6 lg:mx-0 dark:border-[#8F88FF]" >View Site</a>
                </div>

                <br />

            </div>

        </main>
        </section>
    )
}

export default Projects;