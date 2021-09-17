import React, { useState } from "react";
import Button from '@mui/material/Button';
import './ItemCount.css';

export default function ItemCount() {
    const [item, setItem] = useState(0);
    const addItem = () => {
        setItem(item + 1)
    }
    const removeItem = () => {
        if(item > 0){
            setItem(item - 1)
        }else{
            setItem(0)
        }
    }
    return(
        <>
            <div className="counter">
                <Button onClick={removeItem}>-</Button>
                <h3>{item}</h3>
                <Button onClick={addItem}>+</Button>
            </div>
            <Button id="addToCart" variant="contained">Agregar al carrito</Button>
        </>
    )
}