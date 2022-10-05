import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategories = ( onNewCategory ) => {

        if( categories.includes( onNewCategory )) return;

        // console.log( onNewCategory );
        // setCategories( categories.concat( [' Uno más'] ) );
        // setCategories( cat => [...categories, onNewCategory]);
        setCategories( [onNewCategory, ...categories] );
    }

    return(
        <>
            <h1>GifExpertApp</h1>

            < AddCategory onNewCategory = { onAddCategories } />

            { 
                categories.map( category => (
                    < GifGrid key = { category } category = { category } />
                ))
            }
        </>
    )
}