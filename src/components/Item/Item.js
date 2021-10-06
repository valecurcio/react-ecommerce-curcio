import React, {useState} from 'react';
import './Item.css';
import ItemCount from "../ItemCount/ItemCount";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
//Functional Component
const Item = (props) => {
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
    
    return(
        <>
            <div className="container-item">
                <div>
                    <img src={`../assets/items/${props.img}`} alt="cover-vinyl"/>
                </div>
                <h3>{props.title}</h3>
                <p>${props.price}</p>
                { !buying ? <ItemCount onAdd={onAdd} onSubstract={onSubstract} quantity={items}/> : 
                            <>
                                <Link className="links" to={'/cart'}><Button id="buy" variant="contained">Finalizar compra</Button></Link>
                            </>}
                <Button id="show" variant="contained"><Link className="links" to={`/item/${props.id}`}>Ver</Link></Button>
            </div>
        </>
    )
}

export default Item