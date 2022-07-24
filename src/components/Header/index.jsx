import React from "react";
import { NavLink, Link } from 'react-router-dom';


import Connect from "./Topbar/Connect";
import Social from './Topbar/Social'
import Topbar from './Topbar';


const Header = ({divice}) => {


    const links = [
        {id: 0, title: 'главная', to: '/'},
        {id: 1, title: 'контакты', to: 'contacts'},
        // {id: 2, title: 'о нас', to: 'about'},
        {id: 3, title: 'услуги', to: 'service'},
        {id: 4, title: 'блог', to: 'blog'},
    ];

    const [menuState, setMenuState] = React.useState(0);



    const [menuIsVisible, setMenuIsVisible] = React.useState(false);

    const clickOnMenu = (id) =>{
        setMenuState(id);
        if(divice) setMenuIsVisible(!setMenuIsVisible);
    }
        
    return(
    <>
    {!divice && <Topbar divice={divice} />} 
    <div className="flex justify-between items-center container -z-30 mt-5 px-5">

        <div>
            <Link to="/" className="h-full block">
                <div onClick={() => clickOnMenu(links[0].id)} id="logo" >
                    <span className="font-bold  py-2 px-3  
                    xl:pl-2 relative z-10 rounded-full 
                    uppercase text-dark--theme">igs</span>
                    <span className=" transition-all pl-1 pr-3 relative z-10">studio.</span>
                </div>
            </Link>
        </div>

        <div className="flex justify-between items-center h-full">
        {divice &&
        <div onClick={() => setMenuIsVisible(!menuIsVisible)}  className="text-white--theme"> menu </div>}
            <ul className={"ul-menu transition-all duration-700 "+ (
                divice && (menuIsVisible  ?  '-translate-y-0' : '-translate-y-full')
                )}>
                {divice && <div className="max-w-[300px] mx-auto text-center fixed top-8 left-1/2 
                -translate-x-1/2"><Social /></div> } 
                {      
                links.map(link => {
                    return(
                        <li key={link.id} onClick={() => clickOnMenu(link.id)} > 
                            <NavLink to={link.to} 
                            className={"li--menu " +(
                                menuState === link.id ? 
                                '' :  'before:translate-y-[81%] lg:before:-translate-y-full before:bg-second_color'
                            )} >
                                {link.title}
                            </NavLink>
                        </li>
                    )
                })
                }
                {divice && 
                <li onClick={() => setMenuIsVisible(!menuIsVisible)}
                className="text-4xl fixed top-3 right-3 text-dark--theme"> &times; </li>}
                { divice &&  <div className="max-w-[300px] mx-auto text-center fixed bottom-8 left-1/2 
                -translate-x-1/2"><Connect /></div>  }
            </ul>
        </div>
    </div>
    </>
    );

}

export default Header;