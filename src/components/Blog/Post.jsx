import React from "react";



const Post = ({ title, str, divice }) => {
    const text = str.split('');
    const lengthPost = !divice ? 120 : 80;

    return(
        <article className="p-6 bg-dark--theme relative overflow-hidden
        group mb-4 last:mb-0 rounded-lg text-white--theme ">
            <h2 className="text-3xl mb-4 lg:mr-8"> {title} </h2>
            <div className="flex  justify-between items-end text-sm ">
                <p className="opacity-60
                mr-24 group-hover:opacity-100 transition-all">
                {
                    text.length > lengthPost ?
                    text.map((letter, i) => {
                        if(i < lengthPost) {
                            if(text[lengthPost - 2] === ' ') text[lengthPost - 2] = '';
                            if(lengthPost - 2 === i) text[lengthPost - 1] = '...';
                            return letter
                        }else{
                            return null
                        }
                    }) : 
                    text.map(letter => {
                        return letter 
                    })
                }
                </p>
            </div>
            <div className="whitespace-nowrap transition-all flex justify-center items-center
            absolute
            bottom-0 right-0 z-20 bg-main_color text-dark--theme font-bold
             group-hover:translate-x-2 h-full w-12 text-xs rounded-lg translate-x-8">
                  <button className="h-full w-full ">
                  <span className="-rotate-90 block translate-y-full">читать далее</span> 
                  </button>
            </div>
        </article>
    );

}

export default Post;