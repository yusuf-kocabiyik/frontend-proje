import ThemeToggle from "./ThemeToggle";

 const Preferences = ()=>{

    return(
        <div className=" w-220 lg:w-340 mx-auto px-10 py-10 flex justify-end mt-2 text-2xl lg:text-xs gap-2 items-center font-bold ">
            <ThemeToggle/>
            <p class="text-[#777777]">DARK MODE</p>
            <p>|</p>
            <p class="text-[#777777]"><span className="text-indigo2  ">TÜRKÇE</span>'YE GEÇ</p>
        </div>
    )
}

 export default Preferences;