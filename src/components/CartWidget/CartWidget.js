import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useValueContext } from '../../context/CartContext';

//Functional Component
function CartWidget() {
    const { quantityItems } = useValueContext();
    let hidden = quantityItems > 0 ? { display: 'block' } : { display: 'none' };
    return(
        <Link className="links" to="/cart" style={hidden}>
        <div className="cart-buttonNav">
            <Button variant="contained">
                <ShoppingCartIcon />
                    <p>{quantityItems}</p>
            </Button>                       
        </div>
        </Link>
    )
}

export default CartWidget