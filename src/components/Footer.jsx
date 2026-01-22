
const Footer = ()=>{

    return(
        <div className="w-full  flex flex-col  gap-5 mx-auto lg:px-15 bg-[#F9F9F9] dark:bg-[#141414]">
             <br /><br />

            <h1 className="text-center lg:text-left text-[36px] lg:text-[42px] w-full lg:w-120 font-semibold px-6 lg:px-2 dark:text-darkTitle1">Let’s work together on your next product.</h1>
            <div className="font-medium text-lg flex flex-col gap-3 lg:gap-0 lg:flex-row justify-between px-2">
                <a href="" className="text-center mx-auto lg:mx-0 text-[#AF0C48] border-b-2 border-[#AF0C48] dark:text-[#BAB2E7] dark:border-[#BAB2E7]">👉almilasucode@gmail.com</a>
                <div className="flex mx-auto lg:mx-0 justify-around lg:justify-between w-70">
                    <a href="" className="dark:text-[#E1E1FF]">Personal Blog</a>
                    <a href="" className="text-[#00AB6B]">Github</a>
                    <a href="" className="text-[#0077B5]">Linkedin</a>
                </div>
            </div>
            <br /><br />

        </div>


    )
}
export default Footer;