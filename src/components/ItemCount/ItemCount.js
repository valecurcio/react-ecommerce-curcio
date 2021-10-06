import React, { useState } from "react";
import Button from '@mui/material/Button';
import './ItemCount.css';
import { Link } from 'react-router-dom';

export default function ItemCount(props) {
    // const [size, setSize] = useState('');
    const [disableButton, setDisableButton] = useState(false);

    const addToCart = () => {
        console.log('agregar al carrito')
    }
    return(
        <>
            <div className="counter">
                <Button onClick={props.onSubstract}>-</Button>
                <h3>{props.quantity}</h3>
                <Button onClick={props.onAdd}>+</Button>
            </div>
            <Button disabled={disableButton} onClick={addToCart} id="addToCart" variant="contained"><Link className="links" to={"/cart"}>Comprar</Link></Button>
        </>
    )
}