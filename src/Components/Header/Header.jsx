import { Link } from "react-router-dom";
import i18n from "../../i18n";
import { Btn } from "../Button/Button";
import LogoImg from "../Header/Imgs/Vector.svg";
import "./stile.css";
import { useTranslation } from "react-i18next";

export function Header() {
    let { t } = useTranslation();
    let language = i18n.language
    const headleChenge = (evt) => {
        evt.preventDefault();
        let lang = evt.target.value.trim();
        i18n.changeLanguage(lang);
    }
    return (
        <>
            <div className="header bg-[#373F68;] w-full mt-3 flex justify-between  items-center px-4 py-8 ">
                <ul className="flex  gap-5 justify-between items-center mt-3  ">
                    <li className="flex gap-3 sm:hidden md:flex">
                        <img src={LogoImg} alt="Logo" />
                        <h3 className="text-white text-[22px] mt-[9px]">{t("Header_titlt")}</h3>
                    </li>
                    <li>
                        <select className="p-1  " name="pets" id="pet-select">
                            <option className="py-4  text-[24px] " value="Sort-by">{t("option_titli1")}</option>
                            <hr />
                            <option className="py-4 text-[20px]" value="Most">{t("option_titli2")} </option>
                            <hr />
                            <option className="py-4 text-[20px]" value="Least">{t("option_titli3")} </option>
                            <hr />
                            <option className="py-4 text-[20px]" value="Comments">{t("option_titli4")} </option>
                            <hr />
                            <option className="py-4 text-[20px]" value="Least-Comments">{t("option_titli5")}</option>
                        </select>
                    </li>

                </ul>
                <select className="p-[5px]" onChange={headleChenge} defaultValue={language} >
                    <option className="py-8" value={"uz"} >UZ</option><hr />
                    <option className="py-8" value={"ru"} >RU</option><hr />
                    <option className="py-8" value={"en"} >EN</option><hr />
                </select>
                <Link to={"/"}> <Btn>{t("Header_Btn")}</Btn></Link>

            </div>


        </>
    )
}