import { Btn } from "../Button/Button";
import Img1 from "../Side/Imgs/Oval.svg"
import Img2 from "../Side/Imgs/Oval (1).svg"
import Img3 from "../Side/Imgs/Oval (2).svg"

export function Roadmap() {
    return (
        <>
            <ul className="roadmab__box w-full rounded-[10px] bg-white p-8 mt-4  sm:hidden md:block md:w-full md:h-[250px] ">
                <li className="flex justify-between ">
                    <h5 className="text-[18px] font-bold text-[#3A4374]">Roadmap</h5>
                    <Btn className='btnSide'>View</Btn>
                </li>
                <li className="flex justify-between ">
                    <span className="flex justify-center items-center gap-2">
                        <img width={10} src={Img1} alt="" />
                        <h5 className="text-base text-[#647196;] mt-1">Planned</h5>
                    </span>
                    <p className="text-base text-[#647196;]">2</p>
                </li>
                <li className="flex justify-between ">
                    <span className="flex justify-center items-center gap-2">
                        <img width={10} src={Img2} alt="" />
                        <h5 className="text-base text-[#647196;] mt-1">In-Progress</h5>
                    </span>
                    <p className="text-base text-[#647196;]">3</p>
                </li>
                <li className="flex  justify-between">
                    <span className="flex justify-center items-center gap-2">
                        <img width={10} src={Img3} alt="" />
                        <h5 className="text-base text-[#647196;] mt-1">Live</h5>
                    </span>
                    <p className="text-base text-[#647196;]">1</p>
                </li>
            </ul>
        </>
    )

}