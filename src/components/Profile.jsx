import { useContent } from "../hooks/useContent";

const Profile = ()=>{


    const { content, loading } = useContent() ;
    if (loading || !content) return null; 

    return(

<section className="w-full lg:w-320 mx-auto flex flex-col justify-center items-center  lg:justify-start lg:items-start gap-4 py-8 border-t-2 mt-6 border-[#BAB2E7]">

<h1 className="text-5xl font-semibold dark:text-darkTitle1">{content.subheading.profile}</h1>
<div className="flex flex-col items-center lg:flex-row gap-12">

    <div className="w-full max-w-md flex flex-col gap-4">
        <h2 className="text-3xl text-center lg:text-left text-indigo1 font-medium dark:text-darkTitle2 ">{content.subheading.profile}</h2>

        <div className="grid  text-center lg:text-left grid-cols-2 gap-y-4 mr-7 dark:text-[#FFFFFF]">
            <span className="font-medium font-semibold">{content.profile.birth.birthdate}</span>
            <span>{content.profile.birth.date}</span>

            <span className="font-medium font-semibold">{content.profile.city.residenceCity}</span>
            <span>{content.profile.city.city}</span>

            <span className="font-medium font-semibold">{content.profile.education.educationalStatus}</span>
            <span>{content.profile.education.uni}</span>

            <span className="font-medium font-semibold ">{content.profile.role.roleChoice}</span>
            <span>{content.profile.role.role}</span>
        </div>
    </div>

    <div className="w-full lg:w-144 flex flex-col gap-4" >
        <h2 className="text-3xl text-center lg:text-left text-indigo1 font-medium dark:text-darkTitle2">{content.profile.aboutMe.title}</h2>
        <p className="text-gray1 mx-6 lg:mx-0 text-center lg:text-left dark:text-[#FFFFFF]">{content.profile.aboutMe.aboutMe}</p>
    </div>


    
</div>




       




            

        </section>
    )
}

export default Profile;