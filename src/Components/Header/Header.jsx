import { Btn } from "../Button/Button";
import LogoImg from "../Header/Imgs/Vector.svg";
import "./stile.css";

export function Header() {
    return (
        <>
            <div className="header bg-[#373F68;] w-full mt-3 flex justify-between  items-center px-4 py-8 ">
                <ul className="flex  gap-5 justify-between items-center mt-3  ">
                    <li className="flex gap-3 sm:hidden md:flex">
                        <img src={LogoImg} alt="Logo" />
                        <h3 className="text-white text-[22px] mt-[9px]">6 Suggestions</h3>
                    </li>
                    <li>
                        <select className="p-1  " name="pets" id="pet-select">
                            <option className="py-4  text-[24px] " value="Sort-by">Sort by : Most
                                Upvotes</option>
                            <hr />
                            <option className="py-4 text-[20px]" value="Most">Most Upvotes</option>
                            <hr />
                            <option className="py-4 text-[20px]" value="Least">Least Upvotes</option>
                            <hr />
                            <option className="py-4 text-[20px]" value="Comments">Most Comments</option>
                            <hr />
                            <option className="py-4 text-[20px]" value="Least-Comments">Least Comments</option>
                        </select>
                    </li>
                </ul>
                <Btn>+ Add Feedback</Btn>
            </div>
            
            
        </>
    )
}