import React, {useState} from 'react';
import './ItemDetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useValueContext } from '../../context/CartContext';

function ItemDetail({ item={} }) {
    const [buying, setBuying] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const { addItem } = useValueContext();
    function add(data) {
        setBuying(true);
        setQuantity(data);
        addItem(item, data);
    }

    return (
        <div className="item-detail">
            {console.log("Data desde item detail: ", item)}
            <div className="img-container">
                <img className="item-img" src={`../assets/items/${item.img}`} alt="album-cover"/>
            </div> 
            <div className="info">
                <h1 className="title">{item.title}</h1>
                <p className="desc">{item.desc}</p>
                <p className="desc">Artista: {item.artist}</p>
                <p className="desc">Discográfica: {item.record}</p>
                <p className="desc">Año: {item.year}</p>
                <p className="desc">Stock: {item.stock}</p>
                <p className="price">AR ${item.price}</p>
                { !buying ? <ItemCount stock={ item.stock } initial="0" onAdd={add} /> : 
                            <>
                                <Link className="links" to={'/cart'}><Button variant="contained" id="success">Finalizar compra</Button></Link>
                            </>}
                            <Link className="links" to={"/home"}><Button id="back" variant="contained">Volver</Button></Link>
            </div>
        </div>
    )
}

export default ItemDetail;
