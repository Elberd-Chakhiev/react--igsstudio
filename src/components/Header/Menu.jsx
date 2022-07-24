import React from "react";
import {Link} from 'react-router-dom';
import Connect from "./Topbar/Connect";
import Social from './Topbar/Social'

const Menu = ({divice, stateMainPage}) => {

    const links = [
        {id: 0, title: 'главная', to: '/'},
        {id: 1, title: 'контакты', to: 'contacts'},
        // {id: 2, title: 'о нас', to: 'about'},
        {id: 2, title: 'услуги', to: 'service'},
        {id: 3, title: 'блог', to: 'blog'},
    ];

    const [menuState, setMenuState] = React.useState(0);
    const [menuIsVisible, setMenuIsVisible] = React.useState(false);

    const clickOnMenu = (id) =>{
        setMenuState(id);
        if(divice) setMenuIsVisible(!setMenuIsVisible);
    }

    return(
        <>
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
                    <li key={link.id} onClick={() => clickOnMenu(link.id)} className={"li--menu" +
                    (
                        menuState === link.id  ? 
                        ' before:-translate-y-0 before:bg-main_color text-dark--theme' :  
                        ' before:-translate-y-full before:bg-second_color'
                    )} > 
                        <Link to={link.to} className='p-4 block xl:p-2 xl:text-sm'>
                            {link.title}
                        </Link>
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
        </>
    );
}

export default Menu;