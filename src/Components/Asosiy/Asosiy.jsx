
import { SideFanc } from './../Side/Side';
import { Header } from './../Header/Header';
import { Main } from './../Main/Main';


export function Asosiy() {


    return (
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

    );
}