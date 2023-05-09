import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Comments1 } from "./Comments1";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Profil } from "../Profil";

export function Main() {

    let [userData, setData] = useState([]);

    useEffect(() => {
        axios.get("https://reqres.in/api/users").then(json => setData(json.data.data));
    }, []);
    return (
        <>
                    <Comments1 userData={userData} />
                    
        </>
    )
}