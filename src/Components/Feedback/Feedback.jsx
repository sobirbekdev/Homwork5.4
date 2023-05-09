import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";
import { FormFuc } from "../Form/Form";
import Feedbeck_img from "./Img/Group 4.svg"
import { Select } from "../Selekt";
import { FeedbockBtn} from "../Button/Button";
import { InputFuc2 } from "../Intut";

export function Feedbock() {
    return (
        <>
            <Container className=" bg-[#F2F2F2] flex justify-center flex-col items-center" >
                <div className="w-[540px] ">
                    <Link to="/asosiy">
                        <Button outline color="primary" className=" my-4 text-black">
                            Go Back
                        </Button>
                    </Link>
                    <div className="bg-white mb-28 py-2 mt-3">
                        <nav className="position-relative">
                            <img className="position-absolute left-5 top-[-33px]" src={Feedbeck_img} alt="img" />
                        </nav>
                        <h3 className=" m-[42px] text-[#3A4374] fs-[24px] ">Create New Feedback</h3>
                        <div className="mx-5 ">
                            <h5 className="fs-[20px ] text-[#3A4374] ">Feedback Title</h5>
                            <p className=" text-[#647196] fs-[14px]">Add a short, descriptive headline</p>
                            <InputFuc2 />
                            <h5 className="fs-[20px ] text-[#3A4374] ">Category </h5>
                            <p className=" text-[#647196] fs-[14px]">Choose a category for your feedback</p>
                            <Select />
                            <h5 className="mt-2 fs-[20px ] text-[#3A4374]">Category </h5>
                            <p className=" text-[#647196] fs-[14px]">Choose a category for your feedback</p>
                            <FormFuc />
                            <nav className=" mt-5 justify-end flex gap-3 mb-4">
                                < FeedbockBtn />
                            </nav>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}