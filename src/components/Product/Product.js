import React from 'react';
import './Product.css';
import ItemCount from "../ItemCount/ItemCount";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
//Functional Component
const Product = (props) => {
    return(
        <>
            <div className="container-product">
                <div>
                    <img src={`../assets/products/${props.img}`} alt="cover-vinyl"/>
                </div>
                <h3>{props.title}</h3>
                <p>${props.price}</p>
                <ItemCount />
                <Button id="show" variant="contained"><Link className="links" to={`/producto/${props.id}`}>Ver</Link></Button>
            </div>
        </>
    )
}

export default Product