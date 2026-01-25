

import { useContent } from "../hooks/useContent";


const Hero = ()=>{
    /*
    
    YİNE BURADA DARK MODE A GÖRE GİTHUB VE LİNKEDİN İMG LERİNİN İMG LERİ DEĞİŞECEK, İMG Yİ İNDİRDİM ASSET ALTINDA */ 
  
     const { content, loading } = useContent() ;

    if (loading || !content) return null; 
    


return(

<div className=" w-full flex flex-col lg:w-320  mx-auto justify-between items-center  lg:flex-row lg:gap-8 ">
<div className=" w-full flex  flex-col mt-5 gap-2 lg:gap-7 lg:mt-0 lg:w-142 justify-center">

<div className="flex justify-center items-center lg:justify-start gap-3 ">
    <div className="w-20 h-[2px]  bg-indigo2 dark:bg-[#B7AAFF] "></div>
    <span className="text-lg lg:text-sm font- text-indigo1 dark:text-[#B7AAFF]">{content.hero.name}</span>
</div>


<h1 className="  text-[42px] w-full mx-auto text-center lg:text-7xl lg:text-left font-bold dark:text-darkTitle1">{content.hero.title}</h1>
<p className="text-xl m-4 text-center lg:text-lg text-gray1 lg:m-0 lg:text-left dark:text-[#FFFFFF]">{content.hero.description}</p>
<div className="flex justify-center lg:justify-start text-lg lg:text-lg  gap-3">
    <a href="" className="text-white bg-indigo2 dark:bg-[#E1E1FF] py-1 px-3 lg:py-3 lg:px-8 rounded-md dark:text-[#000000]">{content.hero.hireMe}</a>
    <a href="" className="flex gap-2 items-center  border-[1px] rounded-md border-indigo2 px-1 lg:px-5 text-indigo2 dark:text-[#E1E1FF]"><img src={content.hero.githubIcon} alt="github-logo" className=""/>{content.hero.github}</a>
    <a href="" className="flex gap-2  items-center border-[1px] rounded-md border-indigo2 px-1 lg:px-5 text-indigo2 dark:text-[#E1E1FF]" ><img src={content.hero.linkedinIcon} alt="linkedin-logo" />{content.hero.linkedin}</a>
</div>

</div>



<div className="flex flex-2 justify-end">
<img src={content.hero.img} className="flex w-full h-full lg:w-170 lg:h-140 lg:mr-[-5rem] " />
</div>


</div>


)
}
export default Hero;