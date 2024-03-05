import Homelayout from "../layopt/homelayout";
import aboutMainImage from "../Images/aboutMainImage.png";
import Carosulslider from "../components/carouselslider";

import apj from "../Images/apj.png";
import billgates from "../Images/billGates.png";
import einstein from "../Images/einstein.png";
import nelsonMandela from "../Images/nelsonMandela.png";
import steveJobs from "../Images/steveJobs.png";
function Aboutus()
{
    const celebrities = [
        {
            title:"Apj Abdul calam",
            description:"dcnw jsncsjnd sadnisjnd sndijsnd nsjdnsj",
            image:apj,
            slideNumber: 1
        },
        {
            title:"Apj Abdul calam",
            description:"dcnw jsncsjnd sadnisjnd sndijsnd nsjdnsj",
            image:billgates,
            slideNumber: 2
        },
        {
            title:"Apj Abdul calam",
            description:"dcnw jsncsjnd sadnisjnd sndijsnd nsjdnsj",
            image:einstein,
            slideNumber: 3
        },
        {
            title:"Apj Abdul calam",
            description:"dcnw jsncsjnd sadnisjnd sndijsnd nsjdnsj",
            image:nelsonMandela,
            slideNumber: 4
        },
        {
            title:"Apj Abdul calam",
            description:"dcnw jsncsjnd sadnisjnd sndijsnd nsjdnsj",
            image:steveJobs,
            slideNumber: 5
        }
    ]
   return(
       <Homelayout>
            <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Affordable and quality education
                        </h1>
                        <p className="text-xl text-gray-200">
                            Our goal is to provide the afoordable and quality education to the world. 
                            We are providing the platform for the aspiring teachers and students to share
                            their skills, creativity and knowledge to each other to empower and contribute
                            in the growth and wellness of mankind.  
                        </p>
                    </section>

                    <div className="w-1/2">
                        <img
                            id="test1"
                            style={{
                                filter: "drop-shadow(0px 10px 10px rgb(0,0,0));"
                            }}
                            alt="about main image"
                            className="drop-shadow-2xl"
                            src={aboutMainImage}
                        />
                    </div>
                </div>

            {/* carasol slider */}

            <div className="carousel w-1/2 m-auto my-16">

            {celebrities && celebrities.map(celebrity => (<Carosulslider {...celebrity} key={celebrity.slideNumber} totalSlides={celebrities.length} />))}

            </div>
            

            </div>
       </Homelayout>
   )
}
export default Aboutus;