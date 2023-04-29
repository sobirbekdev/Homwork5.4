import React from 'react';

// import { Container, } from 'reactstrap';

import { SideFanc } from './Components/Side/Side';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';
import ModalFanc from './Components/Side/Modal';





function App() {


  return (
    < >

      <div className='bg-slate-100 flex gap-4  px-24 lg:px-16 md:px-14'>
        <div className='sm:hidden md:hidden lg:block '>
          <SideFanc />
        </div>
        <div className='w-full'>
          <div className='sm:flex lg:hidden '>
            <SideFanc />
          </div>
          <Header />
          <Main />
          <ModalFanc />


        </div>

      </div>
    </>
  );
}

export default App;
