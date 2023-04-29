import { Btn } from "../Button/Button";
import MassegIMg from "../Main/Imgs/Path.svg";
import PathIMg from "../Main/Imgs/Path 2.svg";

export function Comments1(){
    return(
        <>
        <ul className="bg-white flex justify-between gap-4 p-8 items-center rounded-[10px]">
                    <li className="flex gap-5  items-center">
                        <Btn>
                            <img className="m-2" width={15} src={PathIMg} alt="PathIMg" />
                            112
                        </Btn>
                        <span>
                            <h3 className="text-[18px] text-[#3A4374;] ">
                                Add tags for solutions
                            </h3>
                            <p className="text-[#647196;] ">
                                Easier to search for solutions based on a specific stack.
                            </p>
                            <Btn className="text-[#4661E6;] ">Enhancement</Btn>
                        </span>
                    </li>
                    <li className="flex items-center gap-3">
                        <img width={25} src={MassegIMg} alt="Massage" />
                        <p className="mt-2 font-bold">5</p>
                    </li>
                </ul>
        </>
    )
}