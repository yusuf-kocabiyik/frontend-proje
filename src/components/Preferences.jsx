
import ThemeToggle from "./ThemeToggle";


 const Preferences = ()=>{

    /*
    BURADA EKLENCEK OLAN ŞEY DARK MODE DA STATE E BAKARAK LİGHT MODE VE DARK MODE YAZISI GÖSTERİLECEK
    */

   

    return(
        <div className=" w-full  mx-auto px-5 py-5 flex justify-center   mt-2 text-base lg:w-320 lg:flex-row lg:justify-end lg:text-xs lg:py-10 gap-2 items-center font-bold ">
            <ThemeToggle/>
            <p className="text-[#777777] dark:text-[#D9D9D9]">DARK MODE</p>
            <p>|</p>

            <p className="text-[#777777]"><span className="text-indigo2 dark:text-[#BAB2E7] ">TÜRKÇE</span>'YE GEÇ</p>
        </div>
    )
}

 export default Preferences;