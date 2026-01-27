import Marquee from "react-fast-marquee";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const HeaderMarquee = () => {

    return (
        <div className="max-w-full flex flex-col sm:flex-row items-center justify-between ">
            <div className="w-full sm:w-3/4 bg-[#002C2D] py-1 px-2 mt-1 mb-1 rounded-l-md-md h-9 md:h-12">
                <Marquee pauseOnHover style={{ gap: "var(--marquee-gap)" }} className="text-[#F2A531] text-2xl font-semibold [--marquee-gap:2rem]  md:[--marquee-gap:0rem]">
                    আল বারাকাহ জুয়েলার্স - আপনার সৌন্দর্য ও সম্পদের জন্য
                </Marquee>
            </div>
            <div className="w-full sm:w-1/4 relative rounded-md px-[2px] py-[3px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient">
                <div className="w-full flex flex-row md:flex-col xl:flex-row items-center justify-evenly rounded-md bg-white h-9 md:h-11">
                    <div className="flex items-center gap-1 ">
                        <div>
                            <FaPhoneSquareAlt />
                        </div>
                        <div>
                            <h2>01711888045</h2>
                        </div>
                    </div>

                    <div className="flex items-center gap-1">
                        <div>
                            <IoLogoWhatsapp />
                        </div>
                        <div>
                            <h2>01711888045</h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeaderMarquee