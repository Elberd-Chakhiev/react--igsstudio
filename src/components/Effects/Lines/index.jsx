import React from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";

import style from './lines.module.css';
gsap.registerPlugin(TextPlugin);

const Lines = () => {

    const lines = [
        {ref: React.useRef(), x: 16, y: 42 },
        {ref: React.useRef(), x: 10, y: 2 },
        {ref: React.useRef(), x: 12, y: 74 },
    ];

    React.useEffect(() => {
        let tl = gsap.timeline();
        for (let index = 0; index < lines.length; index++) {
            tl.fromTo(lines[index].ref.current, {
                x: -1600 + lines[index].x,
                y: -100 + lines[index].y,
                bottom: 0,
                duration: 1.6,
                ease: 'power4.out'
            },{
                x: 1600 + lines[index].x,
                y: -100 + lines[index].y,
                bottom: 240,
                duration: 1.6,
                ease: 'power4.out'
            },  1.4+(lines[index].x / 200));
        }
    });



    return(
        lines.map((line, i) => {
            return(
                line !== lines[i / 2] ?
                <div key={i} className={style.lines +
                ' bg-second_color'} ref={line.ref}></div> :
                <div key={i} className={style.lines +
                ' bg-main_color'} ref={line.ref}></div>
            );
        })
    );
}


export default Lines;