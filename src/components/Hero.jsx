import githubIcon from "../assets/images/github.png";
import linkedinIcon from "../assets/images/linkedin.png";
import heroImg from "../assets/images/hero_img.png";
const Hero = ()=>{


    return(
               
        <div className=" w-220 lg:w-340 flex mx-auto justify-between items-center flex-col lg:flex-row gap-8 ">
            <div className="flex  flex-col gap-7 w-142 justify-center">
                
                <div className="flex items-center gap-3 ">
                    <div className="w-20 h-[2px]  bg-indigo2"></div>
                    <span className="text-2xl lg:text-sm font- text-indigo1">Almila Su</span>
                </div>
              
                
                <h1 className="text-9xl lg:text-7xl font-bold">Creative thinker Minimalism lover</h1>
                <p className="text-3xl lg:text-lg text-gray1">Hi, I’m Almila. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.</p>
                <div className="text-3xl lg:text-lg flex gap-3">
                    <a href="" className="text-white bg-indigo2 py-3 px-8 rounded-md">Hire me</a>
                    <a href="" className="flex gap-2 items-center  border-[1px] rounded-md border-indigo2  px-5 text-indigo2 "><img src={githubIcon} alt="github-logo" />GitHub</a>
                    <a href="" className="flex gap-2  items-center border-[1px] rounded-md border-indigo2  px-5 text-indigo2" ><img src={linkedinIcon} alt="linkedin-logo" />Linkedin</a>
                </div>

            </div>
            

            
             <div className="flex flex-2 justify-end">
                <img src={heroImg} className="flex w-170 h-140 lg:mr-[-3rem] " />
            </div>


        </div>
        

    )
}
export default Hero;