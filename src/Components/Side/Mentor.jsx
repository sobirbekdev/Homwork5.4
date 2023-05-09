import "./Side.Modul.css";
import SideModalImg from "./Imgs/Group 3.svg"
import ModalFanc from "./Modal";
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

export function Mentor() {
    let {t} = useTranslation();
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <ul className=" mentr__box  flex justify-between py-16 rounded-[10px] sm:w-full sm:py-8  sm:h-[100px] 
            md:w-full md:py-16 px-8 md:h-[250px] max-[320px]:bg-[red] bg-[red]">
                <li>
                    <h3 className="text-xl text-white">
                        {t("Card_sde")}
                    </h3>
                    <p className="text-sm text-white opacity-75">
                        {t("Card_title")}
                    </p>
                </li>

                <li className=" sm:block md:hidden">
                    <button onClick={() => setOpenModal(true)}>
                        <img src={SideModalImg} alt="SideModalImg" />
                    </button>
                </li>

            </ul>
            <span>
                <ModalFanc open={openModal} onClose={() => setOpenModal(false)} />
            </span>


        </>
    )

}