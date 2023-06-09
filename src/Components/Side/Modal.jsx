import React from "react";
import { useTranslation } from "react-i18next";

import { Btn } from "../Button/Button";
import Img1 from "../Side/Imgs/Oval.svg"
import Img2 from "../Side/Imgs/Oval (1).svg"
import Img3 from "../Side/Imgs/Oval (2).svg"


const ModalFanc = ({ open, onClose }) => {
    let {t} = useTranslation();
    if (!open) return null
    return (
        <>
            <div className="relative  ">
                <div className=" absolute end-0 w-[350px]   bg-slate-700 px-3 pb-3  sm:block md:hidden ">
                    <span className="flex justify-end">
                        <h3 onClick={onClose} className="text-white font-bold py-2 ">X</h3>
                    </span>
                    <ul className="mt-3 bg-white rounded-[10px] justify-end ">

                        <li className="flex gap-2 p-2">
                            <Btn>{t("modal_Btn1")}</Btn>
                            <Btn> {t("modal_Btn2")}</Btn>
                            <Btn>{t("modal_Btn3")}</Btn>
                        </li>
                        <li className="flex gap-2  p-2">
                            <Btn>{t("modal_Btn4")}</Btn>
                            <Btn>{t("modal_Btn5")}</Btn>
                        </li>
                        <li className="flex p-2">
                            <Btn>{t("modal_Btn6")}</Btn>
                        </li>
                    </ul>
                    <ul className="w-full rounded-[10px] bg-white p-8 mt-4  ">
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
                </div>
            </div>

        </>
    )
}
export default ModalFanc















// export function Modal() {

//     return (
//         <>
//             <div className="w-[350px] hidden ">
//                 <ul className="mt-3 bg-white rounded-[10px] p-6  ">
//                     <li className="flex gap-2 p-2">
//                         <Btn>All</Btn>
//                         <Btn>Ul</Btn>
//                         <Btn>UX</Btn>
//                     </li>
//                     <li className="flex gap-2  p-2">
//                         <Btn>Enhancement</Btn>
//                         <Btn>Bug</Btn>
//                     </li>
//                     <li className="flex p-2">
//                         <Btn>Feature</Btn>
//                     </li>
//                 </ul>
//                 <ul className="w-full rounded-[10px] bg-white p-8 mt-4   ">
//                     <li className="flex justify-between ">
//                         <h5 className="text-[18px] font-bold text-[#3A4374]">Roadmap</h5>
//                         <Btn className='btnSide'>View</Btn>
//                     </li>
//                     <li className="flex justify-between ">
//                         <span className="flex justify-center items-center gap-2">
//                             <img width={10} src={Img1} alt="" />
//                             <h5 className="text-base text-[#647196;] mt-1">Planned</h5>
//                         </span>
//                         <p className="text-base text-[#647196;]">2</p>
//                     </li>
//                     <li className="flex justify-between ">
//                         <span className="flex justify-center items-center gap-2">
//                             <img width={10} src={Img2} alt="" />
//                             <h5 className="text-base text-[#647196;] mt-1">In-Progress</h5>
//                         </span>
//                         <p className="text-base text-[#647196;]">3</p>
//                     </li>
//                     <li className="flex  justify-between">
//                         <span className="flex justify-center items-center gap-2">
//                             <img width={10} src={Img3} alt="" />
//                             <h5 className="text-base text-[#647196;] mt-1">Live</h5>
//                         </span>
//                         <p className="text-base text-[#647196;]">1</p>
//                     </li>
//                 </ul>
//             </div>

//         </>
//     )
// }
