import { Link } from "react-router-dom";
import "./Stile.css";


export function Btn({ children }) {
    return (
        <button className='button px-3' >{children}</button>
    );
}

export function FeedbockBtn() {
    return (
        <>
            <Link to={"/asosiy"}>
                <button className=" fs-[14px] bg-[#3A4374] rounded-[10px] p-2 border text-white 
                    ">Cancel</button>
            </Link>
            <Link to={"/Edit-feedbect"}>
                <button className="fs-[14px]  bg-[#AD1FEA] rounded-[10px] p-2 border text-white ">Add
                    Feedback</button>
            </Link>
        </>

    )
}

export function EditFeedbockBtn() {
    return (
        <ul className="flex  justify-between pl-0 ">
            <li className="">
                <Link className="flex items-start " to={"/Edit-feedbect"}>
                    <button className="fs-[14px]  bg-[#ea331f] rounded-[10px] px-3 py-2 border text-white ">
                        Delet</button>
                </Link>
            </li>
            <li className="flex gap-4">
                <Link  to={"/Feedbock"}>
                    <button className=" fs-[14px] bg-[#3A4374] rounded-[10px] p-2 border text-white 
                    ">Cancel</button>
                </Link>
                <Link to={"/Edit-feedbect"}>
                    <button className="fs-[14px]  bg-[#AD1FEA] rounded-[10px] p-2 border text-white ">Add
                        Feedback</button>
                </Link>
            </li>


        </ul>

    )
}
