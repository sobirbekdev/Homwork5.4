import { Btn } from "../Button/Button";
import MassegIMg from "../Main/Imgs/Path.svg";

import { Link } from "react-router-dom";

export function Comments1({ userData }) {
    return (
        <>
            {userData.map((user, index) => (
                <ul className="bg-white flex justify-between gap-4 p-4 items-center rounded-[10px]  ">
                    <li className="flex gap-5  items-center" key={index}>
                        <Btn className="text-black text-start px-3 py-1 mx-2 border rounded-[50%] w-1">
                            {user.id}</Btn>
                        <span>
                            <Link className="text-center fw-bold fs-5 " to={`/user/${user.id}`}>
                                {user.first_name}</Link>
                            <p className="text-[#647196;] fs-6 mt-2">
                                {user.last_name}
                            </p>
                            <Link className="text-center fw-bold fs-5 " to={`/page`}>
                                <Btn className="text-[#4661E6;] "> Enhancement</Btn>
                            </Link>

                        </span>
                    </li>
                    <li className="flex items-center gap-3">
                        <img width={25} src={MassegIMg} alt="Massage" />
                        <p className="mt-2 font-bold">5</p>
                    </li>
                </ul>
            ))}


        </>
    )
}