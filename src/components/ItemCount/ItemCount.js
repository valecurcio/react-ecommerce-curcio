import React, { useState } from "react";
import Button from '@mui/material/Button';
import './ItemCount.css';

function ItemCount({ stock, initial, onAdd }) {
    const [current, setCurrent] = useState(initial);

    function substract() {
        if (Number(current) > 0) {
            setCurrent(Number(current) - 1);
        }
    }
    
    function add() {
        if (Number(current) < stock) {
            setCurrent(Number(current) + 1);
        }
    }

    function buy() {
        onAdd(current);
    }
    return(
        <>
            <div className="counter">
                <Button onClick={substract}>-</Button>
                <h3>{current}</h3>
                <Button onClick={add}>+</Button>
            </div>
            <Button onClick={buy} id="addToCart" variant="contained">Comprar</Button>
        </>
    )
}

export default ItemCount;