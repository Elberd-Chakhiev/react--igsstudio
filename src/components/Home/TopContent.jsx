import React from "react";
import { gsap } from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";

import style from './text.module.css';
import Background from "../Background";


gsap.registerPlugin(TextPlugin);

const TopContent = () => {

    const spans = [
        {id: 0, ref: React.useRef(), mainspan:true,  
            txt: "igs studio ."
        },
        {id: 1, ref: React.useRef(), mainspan:false, 
            txt: 'объединяет инновационные технологии и ',
            txt2: 'мы - эксперты в реализации'
        },
        {id: 2, ref: React.useRef(), mainspan:false, 
            txt: 'передовые навыки специалистов',
            txt2: 'веб-проектов',
        },
    ]; 
    
    React.useEffect(() => {
        let tl = gsap.timeline();
        for (let index = 0; index < spans.length; index++) {
            if(index === 0){
                tl.fromTo(spans[index].ref.current, {
                    y: '-120%',
                    delay: .3,
                    ease: "power4.out",
                    scale: .9,
                }, {
                    y: 0,
                    delay: .3,
                    ease: "power4.out",
                }, .3).to(spans[index].ref.current, {
                    scale: 1
                }, 1);
            }else{
                tl.fromTo(spans[index].ref.current, 1, {
                    text: spans[index].txt, 
                    ease: "none", 
                    delay: .3
                }, {
                    text: spans[index].txt2, 
                    ease: "none", 
                    delay: .3

                }, 3.4);
            }

        }

    });

    return(
        <div>
            <div className="mt-12 relative py-52 flex justify-center items-center">

                <Background />
                {/* <Lines /> */}


                <div className="w-full  pb-12 flex justify-center pointer-events-none">
                    <div className="-skew-y-6 text-white--theme  
                    font-bold text-center relative z-10 pb-4
                    before:absolute before:top-0 before:left-0
                    before:rounded-lg before:z-0
                    before:content-[''] before:w-full before:h-full
                    before:bg-dark--theme before:opacity-80">
                    {
                        spans.map(span => {
                            return(
                            span.mainspan ? 
                            <div key={span.id}
                                className="overflow-hidden">
                                <span className={style.igs__heading + 
                                " block m-4 text-8xl "}

                                ref={span.ref}> 
                                    {span.txt}
                                </span>
                            </div> :
                            
                            <div key={span.id} 
                            className="overflow-hidden relative z-10">
                                <span
                                ref={span.ref}> 
                                    {span.txt}
                                </span> 
                            </div>
                            );
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopContent;