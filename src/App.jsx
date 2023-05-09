

// const Data = [
//   {
//     id: 1,
//     name: "Alex",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address:"Mexico",
//     phone: "996654402"
//   },
//   {
//     id: 2,
//     name: "Azmat",
//     username: "Azmatvich",
//     email: "Azmat@april.biz",
//     address:"Uzbekiston",
//     phone: "996655455"
//   },
//   {
//     id: 3,
//     name: "Suxrob",
//     username: "Eshquvvatov",
//     email: "Suxrob@april.biz",
//     address:"Uzbekiston",
//     phone: "996654402"
//   },
//   {
//     id: 4,
//     name: "Sanches",
//     username: "Gorj",
//     email: "Sanches@april.biz",
//     address:"Mexico",
//     phone: "996885402"
//   },
//   {
//     id: 5,
//     name: "Sawa",
//     username: "Mikalayvich",
//     email: "Sawa@april.biz",
//     address:"Russia",
//     phone: "+7666444005"
//   },
// ]

import { Route, Routes } from "react-router-dom";
import { Feedbock } from "./Components/Feedback";
import { Asosiy } from "./Components/Asosiy";
import { Page } from "./Components/Pags/Page";
import { EditFeedbec } from "./Components/Edit-feedbect";




function App() {


  return (
    <>

        <Routes>
          <Route path="/" element={<Feedbock />} />
          <Route path="/Feedbock" element={<Feedbock />} />
          <Route path="/Edit-feedbect" element={<EditFeedbec />} />
          <Route path="/asosiy" element={ <Asosiy/>} />
          <Route path="/Page" element={ <Page/>} />
        </Routes>

    </>
  );
}

export default App;
