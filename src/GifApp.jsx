import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {

    const [categories, setCategories] = useState(['minecraft']);

    const onAddCategory = (newCategory) => {

if (categories.includes(newCategory)) return;

        setCategories([newCategory,...categories])
        //setCategories(cat => [...cat,'Valorant'])
    }
    return (
        <>
            <h1>Gif App!</h1>

            <AddCategory 
                onNewCategory={ onAddCategory }
            />
            
            {
                categories.map( category => (
                    <GifGrid
                    key={category} 
                    category={category}
                    />
                )
            )}
        </>
    )
        
}
