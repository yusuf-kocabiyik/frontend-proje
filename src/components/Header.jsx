const Header = ()=>{


    return(

        <div className=" w-220 lg:w-340 px-10 mx-auto flex justify-between ">
            <p className="bg-[#EEEBFF] text-[#7B61FF] w-16 h-16 rounded-full flex items-center justify-center rotate-40 font-semibold lg:text-[22px] text-3xl ">A</p>
            <div className="flex justify-between gap-10 content-center text-indigo1 font-medium text-3xl lg:text-[18px]">
                <a href="" className="flex justify-center items-center text-gray1" >Skills</a>
                <a href="" className="flex justify-center items-center text-gray1">Projects</a>
                <a href="" className="border-indigo2 border-2 flex justify-center items-center py-3 px-8 rounded-lg">Hire me</a>
            </div>

        </div>
    )
}
export default Header;