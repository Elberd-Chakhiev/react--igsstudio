import React from "react";
// import {gsap} from 'gsap';

// import TopContent from './TopContent'
// import MainHeading from "./MainHeading";
import Background from "../Background";
import TopContent from './components/TopContent';


const Home = () => {

    return(
    <div className=" overflow-hidden relative">
            <TopContent />
            <Background />
            {/* <MainHeading /> */}
        <div className="mt-16">
        </div>
    </div>
    );

}
export default Home;