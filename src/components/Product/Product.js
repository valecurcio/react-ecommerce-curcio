import React from 'react';
import './Product.css';
import ItemCount from "../ItemCount/ItemCount";
import Button from '@mui/material/Button';
//Functional Component
const Product = (props) => {
    return(
        <>
            <div className="container-product">
                <div>
                    <img src={`./assets/products/${props.img}`} alt="cover-vinyl"/>
                </div>
                <h3>{props.title}</h3>
                <p>${props.price}</p>
                <ItemCount />
                <Button onClick={console.log('ver detalle')}>Ver</Button>
            </div>
        </>
    )
}

export default Product