import React,{useState, useEffect} from 'react'
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function ItemDetail(props) {
    // useEffect(() => {
        
    // }, [])

    return (
        <div className="item-detail">
            {console.log("Data desde item detail: ", props.data)}
            <div className="img-container">
                <img className="product-img" src={`./assets/products/${props.data.img}`} alt="album-cover"/>
            </div> 
            <div className="info">
                <h1 className="title">{props.data.title}</h1>
                <p className="desc">{props.data.desc}</p>
                <p className="desc">Artista: {props.data.artist}</p>
                <p className="desc">Discográfica: {props.data.record}</p>
                <p className="desc">Año: {props.data.year}</p>
                <p className="price">AR ${props.data.price}</p>
                <ItemCount />
                <Button id="back" variant="contained"><Link class="links" to={"/"}>Volver</Link></Button>
            </div>
        </div>
    )
}

export default ItemDetail;
