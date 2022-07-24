import React from "react";
import {gsap} from 'gsap';
const NotFound = () =>{
    
    const ntfnd = React.useRef();
    
    React.useEffect(() => {
        gsap.from(ntfnd.current, {
            x: '-=360', 
            duration: 1
        })
        gsap.to(ntfnd.current, {
            x: '0', 
            duration: 1
        })
    }, [])

    return(
        <div className="container rounded-lg text-dark--theme bg-second_color 
        py-24 my-16 h-auto flex items-center overflow-hidden">
            <div className="-rotate-90 text-[20vh] mr-9 font-bold" ref={ntfnd}> 
            404

            </div>
            <div><h1 className=" text-4xl max-w-[500px]"> Упс! <br /> Кажется, страница не нашлась... </h1></div>
        </div>
    );
}
export default NotFound;