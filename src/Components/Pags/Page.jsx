import { useEffect, useState } from "react";
import axios from "axios";
import { Profil } from "../Profil";

export function Page() {
    let [userData, setData] = useState([]);

    useEffect(() => {
        axios.get("https://reqres.in/api/users").then(json => setData(json.data.data));
    }, []);
    return <Profil userData={userData}/>


}