import { SideFanc } from './Components/Side/Side';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';
import { Coment } from './Components/Cpment';



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




function App() {

  return (
    < >
      <div className=' bg-slate-100 flex gap-4  px-24 lg:px-16 md:px-14'>
        <div className='modal__box sm:hidden md:hidden lg:block '>
          <SideFanc />
        </div>
        <div className='w-full'>
          <div className='sm:flex lg:hidden '>
            <SideFanc />
          </div>
          <Header />
          <Main />
        
        </div>
      </div>
    </>
  );
}

export default App;
