import React from 'react';
import './Item.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
//Functional Component
const Item = (props) => {
    
    return(
        <>
            <div key={props.idItem} className="container-item">
                <div>
                    <img src={`../assets/items/${props.img}`} alt="cover-vinyl"/>
                </div>
                <h3>{props.title}</h3>
                <p>${props.price}</p>
                <Link className="links" to={`/item/${props.idItem}`}><Button id="show" variant="contained">Ver</Button></Link>
            </div>
        </>
    )
}

export default Item