import { Link } from "react-router-dom";
import { Button, Container } from "reactstrap";
import Edit_Feedbeck_img from "./Img/Group 4 (1).svg";
import { FormFuc } from "../Form/Form";
import { InputFuc2 } from "../Intut";
import { Select } from "../Selekt";
import { EditFeedbockBtn } from "../Button/Button";

export function EditFeedbec() {
    return (
        <>
            <Container className=" bg-[#F2F2F2] flex justify-center flex-col items-center" >
                <div className="w-[540px] ">
                    <Link to="/Feedbock">
                        <Button outline color="primary" className=" my-4 text-black">
                            Go Back
                        </Button>
                    </Link>
                    <div className="bg-white mb-28 py-2 mt-3">
                        <nav className="position-relative">
                            <img className="position-absolute left-5 top-[-33px]" src={Edit_Feedbeck_img} alt="img" />
                        </nav>
                        <h3 className=" m-[42px] text-[#3A4374]   fs-[24px] ">Create New Feedback</h3>
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
                            <nav className=" mt-5  mb-4">
                                < EditFeedbockBtn />
                            </nav>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}