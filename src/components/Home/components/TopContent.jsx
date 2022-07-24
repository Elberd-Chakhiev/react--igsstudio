import React from 'react';
// import { gsap } from 'gsap';

import styles from './mn-hd.module.css';

const TopContent = () => {

    const mainText = 'разработка сайтов, лендингов и магазинов';
    const mainTextFormat = mainText.split(' ');

    // const refs = React.useRef();

    // for (let index = 0; index < refs.length; index++) {
    //     refs.push(React.useRef())
    // }



    return(
        <div className='container relative z-10'> 
            <div className=' w-full pt-52 pb-16'>
            <h1  className={'text-white--theme text-7xl font-bold ' + styles.format_text}>
                 {
                    mainTextFormat.map((letter, i) => {
                        return (
                        <span   key={i} className='mr-6' > 
                        {/* { letter === ' ' ? '\u2002' : letter} */}
                        {letter}
                        </span>    
                        )
                    })
                 }
            </h1>
            </div>
        </div>
    );

}
export default TopContent;