/* eslint-disable jsx-a11y/alt-text */
import { Button, Container } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Btn } from "../Button/Button";
import MassegIMg from "../Main/Imgs/Path.svg";


export function Profil() {
    let { userId } = useParams();

    let [ProfilUser, setProfilUser] = useState([]);
    let [Loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`https://reqres.in/api/users/${userId}`)
            .then((json) => setProfilUser(json.data.data));
        setLoading();
    }, [userId])

    console.log(ProfilUser);

    return (
        <Container className=" pt-5  bg-[#F2F2F2]">
            <div  className=" py-4">
                {
                    ProfilUser && <>
                        {Loading && <h2>Loading...</h2>}
                        <Button outline color="info" className="mb-4">
                            <Link className="text-[#647196] fs-[14px] ff-[Jost] fw-bold " to={"/asosiy"}>Go Back</Link>
                        </Button>
                        <ul className="bg-white flex justify-between p-8 gap-4 items-center rounded-[10px] py-2 ">
                            <li className="flex gap-5  items-center justify-center ">
                                <img className="rounded-[50%]" width="50" src={ProfilUser.avatar} />
                                <span className=" flex flex-col gap-1 justify-start items-start">
                                    <h3 className="text-[18px] text-[#3A4374;] ">
                                        Name:{ProfilUser.first_name}
                                    </h3>
                                    <p className="text-[#647196;] ">
                                        Las Name:{ProfilUser.last_name}
                                    </p>
                                    <a href={`mailto:${ProfilUser.email}`} className="text-center ml-2 mb-3">
                                        {ProfilUser.email}</a>
                                    <Btn >Feature</Btn>
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <img width={25} src={MassegIMg} alt="Massage" />
                                <p className="mt-2 font-bold">1</p>
                            </li>
                        </ul>
                    </>
                }
            </div>
        </Container>
    )
}