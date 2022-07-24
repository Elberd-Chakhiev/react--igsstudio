import React from "react";


import style from './menu.module.css';

const Categories = ({active, setActive}) => {

    // const [activeCat, setActiveCat] = React.useState(0);

    const categories = [
        { id: 0,  title: 'Все посты',},
        { id: 1,  title: 'разработка',},
        { id: 2,  title: 'igs',},
    ];

    return(
        <div>
            <ul className=' lg:flex lg:flex-wrap lg:items-center bg-second_color p-4 rounded-lg'>
            {
                categories.map(category => {
                    return (
                        <li key={category.id}
                        onClick={() => setActive(category.id)}
                        className={style.menu_categories__item + ' ' +
                        (active === category.id ? style.active_menu__li : style.menu__li)}>
                        <span className="pointer-events-none">
                            {category.title}
                        </span>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    );
}

export default Categories;