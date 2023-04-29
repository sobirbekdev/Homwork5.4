import { Mentor } from "./Mentor";
import { Roadmap } from "./Roadmap";
import { SideCards } from "./SideCards";


export function SideFanc() {
    return (
        <div className="w-[300px] mt-3 mx-auto sm:w-full  md:flex md:items-center md:justify-between md:w-full md:gap-5 lg:block  xl:w-[350px] 2xl:w-[380px] ">
        <Mentor />
        <SideCards/>
        <Roadmap />
        
        </div>
    )

}
