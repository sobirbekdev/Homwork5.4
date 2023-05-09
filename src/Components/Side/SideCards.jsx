import { Btn } from "../Button/Button";
import { useTranslation } from "react-i18next";

export function SideCards() {
    let {t} = useTranslation();
    return (
        <>
            <ul className="list__side mt-3 bg-white rounded-[10px] p-6 sm:hidden md:block  md:h-[250px]  ">
                <li className="flex gap-2 p-2">
                    <Btn>{t("modal_Btn1")}</Btn>
                    <Btn>{t("modal_Btn2")}</Btn>
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
        </>
    )

}