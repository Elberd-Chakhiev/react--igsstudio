import React from "react";
import Connect from "./Connect";
import Social from "./Social";



const Topbar = ({divise}) =>{
    
    return(
        <div className="container my-2 xl:my-0 px-5">
            <div className="flex justify-between items-center">

                <div>
                    {!divise && <Social />} 
                </div>


                <div>
                {!divise && <Connect />}
                    
                </div>
            
            </div>
        </div>
    );
}

export default Topbar;