import { Btn } from "../Button/Button";
import MassegIMg from "../Main/Imgs/Path.svg";
import PathIMg from "../Main/Imgs/Path 2.svg";

export function Comments3(){
    return(
        <>
        <ul className="bg-white flex justify-between p-8 gap-4 items-center rounded-[10px]">
                    <li className="flex gap-5  items-center">
                        <Btn>
                            <img className="m-2" width={15} src={PathIMg} alt="PathIMg" />
                            65
                        </Btn>
                        <span>
                            <h3 className="text-[18px] text-[#3A4374;] ">
                            Q&A within the challenge hubs
                            </h3>
                            <p className="text-[#647196;] ">
                            Challenge-specific Q&A would make for easy reference.
                            </p>
                            <Btn className="text-[#4661E6;] ">Feature</Btn>
                        </span>
                    </li>
                    <li className="flex items-center gap-3">
                        <img width={25} src={MassegIMg} alt="Massage" />
                        <p className="mt-2 font-bold">1</p>
                    </li>
                </ul>
        </>
    )
}