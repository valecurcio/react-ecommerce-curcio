import React, {useState} from 'react'
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

function ItemDetail(props) {
    const [buying, setBuying] = useState(false);
    const [items, setItems] = useState(0);
    const [stock, setStock] = useState(10);

    const onAdd = () => {
        setBuying(true);
        items < stock && setItems(items + 1)
    }
    const onSubstract = () => {
        items !==0 && setItems(items - 1)
    }

    return (
        <div className="item-detail">
            {console.log("Data desde item detail: ", props.data)}
            <div className="img-container">
                <img className="item-img" src={`../assets/items/${props.data.img}`} alt="album-cover"/>
            </div> 
            <div className="info">
                <h1 className="title">{props.data.title}</h1>
                <p className="desc">{props.data.desc}</p>
                <p className="desc">Artista: {props.data.artist}</p>
                <p className="desc">Discográfica: {props.data.record}</p>
                <p className="desc">Año: {props.data.year}</p>
                <p className="price">AR ${props.data.price}</p>
                
                { !buying ? <ItemCount onAdd={onAdd} onSubstract={onSubstract} quantity={items}/> : 
                            <>
                                <Link className="links" to={'/cart'}><Button id="buy" variant="contained">Finalizar compra</Button></Link>
                            </>}
                <Button id="back" variant="contained"><Link className="links" to={"/"}>Volver</Link></Button>
            </div>
        </div>
    )
}

export default ItemDetail;
