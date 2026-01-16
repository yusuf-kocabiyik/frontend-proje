const ThemeToggle = () => {
  
 /* className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform
        ${isDark ? "translate-x-6" : "translate-x-0"}`} 
        
        !!!!!!!!!!!    DAHA SONRA DÜZENLEYECEĞİM
        */ 



  return (
    <button
      className="relative w-12 h-6 rounded-full bg-indigo2 dark:bg-gray-600 transition-colors"
    >
      <span
        className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-toggle transition-transform"
      />
    </button>
  );
};
export default ThemeToggle;