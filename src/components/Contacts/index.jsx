import React from "react";
import { gsap } from 'gsap';

import Social from "../Header/Topbar/Social";


const Contacts = ({divice}) => {



    const inputs =[
        {id: 0, placeholder:"ваше имя", type: 'text', ref: React.useRef()},
        {id: 1, placeholder:"телефон",  type: 'tel',  ref: React.useRef()},
        {id: 2, placeholder:"почта",    type: 'text', ref: React.useRef()},
    ]; 

    const messageTextarea = React.useRef();

    React.useEffect(() => {
        let tl = gsap.timeline();
        for (let index = 0; index < inputs.length; index++) {   
            tl.fromTo(
                inputs[index].ref.current, {
                    scale: '0.9',
                    x: '-100%', 
                    rotation: '90',
                    duration: 1, 
                }, 
                {
                    x: 0,
                    rotation: 0,
                    duration: 1,
                }, 0.1 + index / 10).to(inputs[index].ref.current, {
                    scale: '1',
                    
                }, 1 + index / 10);
        }

            tl.fromTo(
                messageTextarea.current, 
                {
                    y: '-110%',  
                    duration: 1, 
                }, 
                {
                    y: 0,
                    duration: 1,
                }, 1.3
            )
        
    })

    return(
        <div className="container  pt-12">
            <h2 className="text-white--theme  mb-10 text-4xl font-semibold"> 
            <span className="text-main_color">Свяжитесь</span>  с нами 
            </h2>
            <div className=" flex justify-center   bg-second_color rounded-lg py-24 lg:py-12">

                <div >
                    <form action="" method="POST" className="flex lg:flex-col">
                    <div className="p-2 overflow-hidden">
                    {
                        inputs.map(input => {
                            return(
                                <div key={input.id} ref={input.ref} 
                                className={ 'contacts--page-input relative ' + 
                                (input.id ===  inputs.length - 1 ? '': 'mb-4')}>
                                    <input 
                                    className="bg-transparent transition-all
                                    hover:placeholder:text-dark--theme outline-none z-10  
                                    relative w-72 xl:w-52 lg:w-full px-4 py-2 rounded-lg text-white--theme
                                    block" 
                                    placeholder={input.placeholder}
                                    type={input.placeholder} /> 
                                </div>
                            );
                        })
                    }
                    </div>

                    <div className="p-2  w-72 xl:w-52 lg:w-full flex flex-col justify-between overflow-hidden">
                        <div className='contacts--page-input relative h-full lg:h-24 rounded-lg' ref={messageTextarea}>
                            <input 
                            className="bg-transparent transition-all
                            hover:placeholder:text-dark--theme outline-none z-10  
                            relative w-72 xl:w-52 lg:w-full h-full px-4 py-2 rounded-lg text-white--theme
                            block" 
                            placeholder='сообщение'
                            type='text' /> 
                        </div>
                        <div className="flex justify-between mt-3">
                            <Social />
                            <div className="flex items-end hover:text-main_color transition-all">
                                <button type="submit"> отправить </button>
                            </div>
                        </div>
                    </div> 

                    </form>
                </div>





            </div>
        </div>
    );
}
export default Contacts;