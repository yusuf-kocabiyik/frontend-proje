import { usePreference } from "../hooks/usePreference";


const ThemeToggle = () => {

  //BURADA CUSTOM HOOK KULLANDIK VE GEREKSİZ İMPORTLARI SİLDİK
  const {isDark,setIsDark} =usePreference();
  //BUTON STATE İ DEĞİŞTİRİYOR VE LOCAL STORAGE A KAYDEDİLİYOR. 
  const themeHandler = ()=>{
    setIsDark(!isDark)
  }


       
  return ( 
    <button onClick={themeHandler}
      className="relative w-14 h-6 rounded-full bg-indigo2 dark:bg-[#3A3A3A] transition-colors cursor-pointer"
    >
      <span
  className="
    absolute top-0.5 right-0.5
    w-5 h-5 rounded-full
   bg-[#FFE86E]
    transition-transform
    dark:-translate-x-7
  "
>
  <span
    className="
      absolute inset-1
      w-3.5 h-3.4
      
      rounded-full
      bg-[#FFE86E]
      dark:bg-[#3A3A3A]
      dark:translate-x-1
    "
  />
</span>
    </button>
  );
};
export default ThemeToggle;