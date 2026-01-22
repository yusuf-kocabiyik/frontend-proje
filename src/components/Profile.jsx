const Profile = ()=>{


    return(

<section className="w-full lg:w-320 mx-auto flex flex-col justify-center items-center  lg:justify-start lg:items-start gap-4 py-8 border-t-2 mt-6 border-[#BAB2E7]">

<h1 className="text-5xl font-semibold dark:text-darkTitle1">Profile</h1>
<div className="flex flex-col items-center lg:flex-row gap-12">

    <div className="w-full max-w-md flex flex-col gap-4">
        <h2 className="text-3xl text-center lg:text-left text-indigo1 font-medium dark:text-darkTitle2 ">Profile</h2>

        <div className="grid  text-center lg:text-left grid-cols-2 gap-y-4  dark:text-[#FFFFFF]">
            <span className="font-medium font-semibold">Doğum Tarihi</span>
            <span>24.03.1996</span>

            <span className="font-medium font-semibold">İkamet Şehri</span>
            <span>Ankara</span>

            <span className="font-medium font-semibold">Eğitim Durumu</span>
            <span>Hacettepe Ünv. Biyoloji Lisans, 2016</span>

            <span className="font-medium font-semibold ">Tercih Ettiği Rol</span>
            <span>Frontend, UI</span>
        </div>
    </div>

    <div className="w-full lg:w-144 flex flex-col gap-4" >
        <h2 className="text-3xl text-center lg:text-left text-indigo1 font-medium dark:text-darkTitle2">About Me</h2>
        <p className="text-gray1 mx-6 lg:mx-0 text-center lg:text-left dark:text-[#FFFFFF]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia. <br/><br />Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! </p>
    </div>


    
</div>




       




            

        </section>
    )
}

export default Profile;