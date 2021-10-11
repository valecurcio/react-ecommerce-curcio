import React from 'react';
import { Link } from 'react-router-dom';
import { useValueContext } from '../../context/CartContext';
import { Button } from '@mui/material';
import './Cart.css';
import DeleteIcon from '@material-ui/icons/Delete';

function Cart() {
    const { cart, removeItem, clearCart } = useValueContext();
    let total = 0;

    function cartList() {
        return cart.map((item) => {
            function remove() {
                removeItem(item.item.id);
            }
            total += Number(item.item.price)*Number(item.quantity);
            return <>
                <li className="cart">
                    <div className="item-container">
                        <div className="desc-container">
                            <h3 className="text-left">{ item.item.title }</h3>
                            <p className="text-left">Cantidad: { item.quantity }</p>
                            <p className="text-left">Precio unitario: ${ item.item.price }</p>
                            <p className="text-left">Subtotal: ${ Number(item.item.price)*Number(item.quantity) }</p>
                        </div>
                        <div className="img-container-cart">
                            <img className="img-fluid" src={`../assets/items/${item.item.img}`} alt=""/>
                            <Button onClick={remove} id="remove-item"><DeleteIcon />Eliminar</Button>
                        </div>
                    </div>
                </li>
            </>
        });
    }

    return (
        <>
            <div className="container">
                <h2>Mi Carrito</h2>
                { cart.length === 0 ? <>
                        <p>No hay productos en tu pedido. Vuelve al Inicio y agrega al carrito todos los vinilos que quieras comprar.</p> 
                        <Link className="links" to={'/'}><Button variant="contained" id="back">Volver al Inicio</Button></Link>
                    </> :
                    <ul className="list-items">
                        { cartList() }
                        <li className="list-group-item active text-right"><h3>Total: ${ total }</h3></li>
                        <li><Button variant="contained" id="confirm">Confirmar Pedido</Button></li>
                        <li><Button onClick={clearCart} variant="contained" id="remove"><DeleteIcon />Vaciar carrito</Button></li>
                    </ul>
                }
            </div>
        </>
    );
}

export default Cart;