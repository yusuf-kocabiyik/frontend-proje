

import { LanguageButton } from "./LanguageButton";
import { Theme } from "./Theme";
 const Preferences = ()=>{
    /*
    BURADA EKLENCEK OLAN ŞEY DARK MODE DA STATE E BAKARAK LİGHT MODE VE DARK MODE YAZISI GÖSTERİLECEK
    */

    return(
        <div className=" w-full  mx-auto px-5 py-5 flex justify-center   mt-2 text-base lg:w-320 lg:flex-row lg:justify-end lg:text-xs lg:py-10 gap-2 items-center font-bold ">
            <Theme/>
            <p>|</p>
            <LanguageButton/> 
        </div>
    )
}

 export default Preferences;