import { useContent } from "../hooks/useContent";

const Layout =({children})=>{

    const { content, loading } = useContent() ;
    //content i bekleme koşulu
    if (loading || !content) return <>LOADING</>;

    return(<>
    <section className="w-full min-h-screen gap-2  mx-auto flex justify-center  dark:bg-[#252128]">
        <main className=" w-full lg:w-360   mx-auto my-auto dark:bg-[#252128] ">

            {children}

        </main>
    </section>
    
    </>)
}
export default Layout;