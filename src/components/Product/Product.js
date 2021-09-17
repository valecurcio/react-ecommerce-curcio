import React from 'react'
import './Product.css';
import ItemCount from "../ItemCount/ItemCount";

//Functional Component
const Product = (props) => {
    return(
        <>
            <div className="container-product">
                <div>
                    <img src={props.image} alt=""/>
                </div>
                <h3>{props.title}</h3>
                <p>${props.price}</p>
                <ItemCount />
            </div>
        </>
    )
}

export default Product