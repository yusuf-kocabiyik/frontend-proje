
import { useContent } from "../hooks/useContent";

const Header = ()=>{

    const { content  } = useContent() ;
     
    
  
    return(

        <div className=" w-full flex justify-center px-4 items-center  lg:w-320 lg:px-4 lg:flex-row mx-auto  lg:justify-between ">
            <p className="bg-[#EEEBFF] text-[#7B61FF] my-auto text-lg  w-12 h-12 rounded-full flex items-center justify-center rotate-40 font-semibold lg:text-[22px] lg:w-16 lg:h-16 dark:text-[#8F88FF] dark:bg-[#4731D3] ">{content.header.logo}</p>
            <div className="flex w-full justify-around lg:w-auto lg:justify-between text-lg  lg:gap-10 content-center text-indigo1 font-medium lg:text-3xl lg:text-[18px]">
                <a href="" className="flex justify-center items-center text-gray1 dark:text-[#6B7280]" >{content.header.skills}</a>
                <a href="" className="flex justify-center items-center text-gray1 dark:text-[#6B7280]">{content.header.projects}</a>
                <a href="" className="border-indigo2 py-1 px-4 border-2 flex justify-center items-center lg:py-3 lg:px-8 rounded-lg dark:bg-[#FFFFFF] dark:text-[#3730A3]">{content.header.hireMe}</a>
            </div>

        </div>
    )
}
export default Header;