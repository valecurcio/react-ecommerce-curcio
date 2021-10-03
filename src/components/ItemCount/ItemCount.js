import React, { useState } from "react";
import Button from '@mui/material/Button';
import './ItemCount.css';

export default function ItemCount() {
    const [item, setItem] = useState(0);
    const [stock, setStock] = useState(10);
    // const [size, setSize] = useState('');
    const [disableButton, setDisableButton] = useState(false);
    const addItem = () => {
        if(item < stock){
            setItem(item + 1)
        }else{
            setDisableButton(true);
        }
    }
    const removeItem = () => {
        if(item > 0){
            setItem(item - 1)
        }else{
            setItem(0)
        }
    }
    const addToCart = () => {
        console.log('agregar al carrito')
        console.log(item)
    }
    return(
        <>
            <div className="counter">
                <Button onClick={removeItem}>-</Button>
                <h3>{item}</h3>
                <Button onClick={addItem}>+</Button>
            </div>
            <Button disabled={disableButton} onClick={addToCart} id="addToCart" variant="contained">Comprar</Button>
        </>
    )
}