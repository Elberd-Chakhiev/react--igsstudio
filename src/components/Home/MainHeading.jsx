import React from "react";
import {gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import style from './text.module.css';
import InfoText from "./InfoText";

gsap.registerPlugin(ScrollTrigger);

const MainHeading = () => {


    const refTrigger = React.useRef(null);

    const refs = [
        {name: 'span1', ref: React.useRef(), child: true},
        {name: 'span2', ref: React.useRef(), child: true},
        {name: 'span3', ref: React.useRef(), child: true},
        {name: 'heading', ref: React.useRef(), time: 1.3, child: false},
    ];
    
    React.useEffect(() => {
        let tl = gsap.timeline();
        for (let index = 0; index < refs.length; index++) {

            if(refs[index].child) {

                tl.fromTo(refs[index].ref.current, {
                    y: -180, 
                    duration: 1, 
                }, {
                    scrollTrigger: {
                        trigger: refTrigger.current.querySelector('.scrollTrigger--mainSpan'),
                        scrub: 1,
                    },
                    duration: 1,
                    y: 0,
                }, .3 + index / 10);
                
            }else {
                
                tl.fromTo(refs[index].ref.current, {
                    scale: 0.9, 
                    duration: 1, 
                    ease: "power4.out",                     
                }, {
                    duration: 0.5,
                    scale: 1, 
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: refTrigger.current.querySelector('.scrollTrigger--mainSpan'),
                        scrub: 1,
                    }
                }, .3 + refs[index].time);

            }
 
        }
    });

return(
    <section className="relative my-24 h-[75vh] flex flex-col justify-around">

    <div className={style.igs__heading+"   container  justify-center relative z-10"}>
   <div ref={refTrigger} className="scrollTrigger--mainSpan"></div>
        <h1 className="flex items-end  flex-wrap text-[4vw] leading-[4vw]
        lg:text-[12vw] lg:leading-[12vw] 
        xl:text-[8.2vw] xl:leading-[8.2vw]  

        text-white--theme uppercase font-semibold " ref={refs[3].ref}> 
            разработка
            <div className="text-main_color inline-block overflow-hidden">  
                <span className={style.igs__heading_second_color +  " inline-block "}  
                ref={refs[0].ref}>сайтов</span> 
            </div>, 
            <div className="text-main_color inline-block overflow-hidden">  
                <span className={style.igs__heading_second_color + " inline-block "} 
                ref={refs[1].ref}>лендингов </span> 
                <span className="inline-block text-white--theme">и  </span> 
                <span className={style.igs__heading_second_color +  " inline-block "} 
                ref={refs[2].ref}>магазинов</span> 
            </div>
        </h1>
            


    </div>


           <div className="container flex justify-end">
                <InfoText />
           </div> 

    </section>
)

}
export default MainHeading;