import dataTopBar from './dataTopBar.json';

const Social = () =>{
return(

    <ul className="flex ">
    {dataTopBar.map(soc => {
        return(
            <li key={soc.id} className="w-10 pr-2 hover:-translate-y-1 transition-all
            xl:w-8"> 
               <a href={soc.link}> <img src={soc.src} alt={soc.title} target="_blank" /> </a>  
            </li>
        );
    })}
</ul>

);

}
export default Social;