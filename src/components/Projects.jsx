import foto1 from "../assets/images/Rectangle1.png";
import foto2 from "../assets/images/Rectangle2.png";
import foto3 from "../assets/images/Rectangle3.png";
const Projects =()=>{

    return(
        <section className="w-220 lg:w-340 mx-auto border-t-2 border-[#BAB2E7]">
        <h1 className="text-5xl font-semibold py-8">Projects</h1>

        <main className="flex flex-col lg:flex-row justify-between">
            <div className="w-80 flex flex-col gap-4">
                <img src={foto1} alt="" />
                <h2 className="text-3xl text-indigo1 font-medium ">Workintech</h2>
                <p className="text-sm text-gray1">A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                <div className="text-indigo2 text-sm flex justify-between font-medium w-60">
                    <span className="border-2 border-indigo2 rounded-md py-1.4 px-4.5">react</span>
                    <span className="border-2 border-indigo2 rounded-md py-1.4 px-4.5">redux</span>
                    <span className="border-2 border-indigo2 rounded-md py-1.4 px-4.5">axios</span>
                </div>
                <div className="flex justify-between text-base font-medium text-indigo2">
                    <a href="" className="border-b-2 border-indigo2">Github</a>
                    <a href="" className="border-b-2 border-indigo2">View Site</a>
                </div>

            </div>

            <div className="w-80 flex flex-col gap-4">
                <img src={foto2} alt="" />
                <h2 className="text-3xl text-indigo1 font-medium ">Random Jokes</h2>
                <p className="text-sm text-gray1">A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                <div className="text-indigo2 text-sm flex justify-between font-medium w-60">
                    <span className="border-2 border-indigo2 rounded-md py-1.4 px-4.5">react</span>
                    <span className="border-2 border-indigo2 rounded-md py-1.4 px-4.5">redux</span>
                    <span className="border-2 border-indigo2 rounded-md py-1.4 px-4.5">axios</span>
                </div>
                <div className="flex justify-between text-base font-medium text-indigo2">
                    <a href="" className="border-b-2 border-indigo2">Github</a>
                    <a href="" className="border-b-2 border-indigo2">View Site</a>
                </div>

            </div>

            <div className="w-80 flex flex-col gap-4">
                <img src={foto3} alt="" />
                <h2 className="text-3xl text-indigo1 font-medium ">Journey</h2>
                <p className="text-sm text-gray1">A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.</p>
                <div className="text-indigo2 text-sm flex justify-between font-medium w-60">
                    <span className="border-2 border-indigo2 rounded-md py-1.4 px-4.5">react</span>
                    <span className="border-2 border-indigo2 rounded-md py-1.4 px-4.5">redux</span>
                    <span className="border-2 border-indigo2 rounded-md py-1.4 px-4.5">axios</span>
                </div>
                <div className="flex justify-between text-base font-medium text-indigo2">
                    <a href="" className="border-b-2 border-indigo2">Github</a>
                    <a href="" className="border-b-2 border-indigo2" >View Site</a>
                </div>

                <br />

            </div>

        </main>
        </section>
    )
}

export default Projects;