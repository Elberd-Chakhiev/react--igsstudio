import React from "react";

import Post from "./Post";
import Categories from "./Categories";






const Blog = ({divice}) => {
    const [blog, setBlog] = React.useState([]);
    const [activeCat, setActiveCat] = React.useState(0);
    React.useEffect(() => {
        fetch( 
            Boolean(!activeCat) 
            ? 'https://62b483bcda3017eabb0c3fd6.mockapi.io/items' 
            : 'https://62b483bcda3017eabb0c3fd6.mockapi.io/items?category=' + activeCat
        )
        .then(res => {return res.json()})
        .then(res => {return setBlog(res)})
    }, [activeCat]);

    return(
        <div>
            <div className="container py-10 ">

                <div className="grid gap-x-4 grid-cols-3 grid-rows-1 lg:grid-cols-1 lg:gap-x-0 lg:gap-y-4">
                    <div className="bg-second_color col-span-2 rounded-lg py-8 px-4 lg:order-1">
                    {
                        blog.map((postItem) => {
                           return <Post 
                           key={postItem.id} 
                           title={postItem.title} 
                           str={postItem.text} 
                           divice={divice} /> 
                        })
                    }
                    </div>

                    <div className=" rounded-lg  lg:order-0">
                        <Categories active={activeCat} setActive={(id) => setActiveCat(id)} />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Blog;