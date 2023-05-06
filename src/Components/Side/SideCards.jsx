import { Btn } from "../Button/Button";

export function SideCards() {
    return (
        <>
            <ul className="list__side mt-3 bg-white rounded-[10px] p-6 sm:hidden md:block  md:h-[250px]  ">
                <li className="flex gap-2 p-2">
                    <Btn>All</Btn>
                    <Btn>Ul</Btn>
                    <Btn>UX</Btn>
                </li>
                <li className="flex gap-2  p-2">
                    <Btn>Enhancement</Btn>
                    <Btn>Bug</Btn>
                </li>
                <li className="flex p-2">
                    <Btn>Feature</Btn>
                </li>
            </ul>
        </>
    )

}