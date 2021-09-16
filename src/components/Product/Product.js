import React from 'react'
import productImg from '../../assets/products/happier-than-ever.jpg'
import productImg2 from '../../assets/products/abbey-road.jpg'
import './Product.css';
import Button from '@material-ui/core/Button';

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
                <Button variant="contained">Comprar</Button>
            </div>
        </>
    )
}

export default Product