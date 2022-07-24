const Connect = () => {
    return(
        <ul className="flex justify-center text-white--theme flex-wrap">
        <li className="fill-white--theme rounded-lg transition-all relative overflow-hidden 
        before:absolute before:top-0 before:left-0 before:w-full before:h-full 
        before:bg-second_color before:rounded-lg before:translate-x-full
        hover:before:translate-x-0 before:transition-all
        hover:text-dark--theme hover:fill-dark--theme mr-2 xl:text-xs">
            <a href='tel:79043321537' className="p-2 h-full block relative z-10 ">
                <svg  viewBox="0 0 20 20" className=" w-5 inline-block mr-3" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 15.697C19 16.021 18.9279 16.354 18.7747 16.678C18.6214 17.002 18.4231 17.308 18.1617 17.596C17.7201 18.082 17.2334 18.433 16.6835 18.658C16.1427 18.883 15.5568 19 14.9259 19C14.0065 19 13.024 18.784 11.9875 18.343C10.9509 17.902 9.9144 17.308 8.8868 16.561C7.85028 15.805 6.8678 14.968 5.9304 14.041C5.002 13.105 4.16375 12.124 3.41562 11.098C2.67651 10.072 2.08162 9.046 1.64897 8.029C1.21632 7.003 1 6.022 1 5.086C1 4.474 1.10816 3.889 1.32449 3.349C1.54081 2.8 1.88333 2.296 2.36104 1.846C2.93791 1.279 3.56885 1 4.23585 1C4.48823 1 4.74061 1.054 4.96595 1.162C5.2003 1.27 5.40761 1.432 5.56986 1.666L7.66099 4.609C7.82324 4.834 7.94041 5.041 8.0215 5.239C8.1027 5.428 8.1477 5.617 8.1477 5.788C8.1477 6.004 8.0846 6.22 7.95844 6.427C7.84126 6.634 7.67001 6.85 7.45368 7.066L6.76865 7.777C6.6695 7.876 6.62444 7.993 6.62444 8.137C6.62444 8.209 6.63345 8.272 6.65148 8.344C6.67852 8.416 6.70556 8.47 6.72359 8.524C6.88583 8.821 7.16525 9.208 7.56184 9.676C7.96745 10.144 8.4001 10.621 8.8688 11.098C9.3555 11.575 9.8242 12.016 10.302 12.421C10.7707 12.817 11.1582 13.087 11.4647 13.249C11.5098 13.267 11.5638 13.294 11.6269 13.321C11.699 13.348 11.7712 13.357 11.8523 13.357C12.0055 13.357 12.1227 13.303 12.2218 13.204L12.9069 12.529C13.1322 12.304 13.3485 12.133 13.5558 12.025C13.7631 11.899 13.9705 11.836 14.1958 11.836C14.3671 11.836 14.5473 11.872 14.7456 11.953C14.9439 12.034 15.1512 12.151 15.3766 12.304L18.36 14.419C18.5944 14.581 18.7566 14.77 18.8558 14.995C18.9459 15.22 19 15.445 19 15.697Z"  strokeWidth="1.5" strokeMiterlimit="10"/>
                </svg> 
                {'+7 (904) 332-15-37'}
            </a> 
         </li>
        <li className="fill-white--theme rounded-lg transition-all relative overflow-hidden
        before:absolute before:top-0 before:left-0 before:w-full before:h-full 
        before:bg-second_color before:rounded-lg before:-translate-x-full
        hover:before:translate-x-0 before:transition-all
        hover:text-dark--theme hover:fill-dark--theme xl:text-xs">
            <a href='mailto:dev@igsstudio.ru' className="h-full p-2 xl:p-1 block relative z-10">
                <svg viewBox="0 0 24 24" className=" w-5 inline-block mr-3 " xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21H3V12Z"  strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                dev@igsstudio.ru
            </a> 
        </li>
    </ul>
    );
}

export default Connect;