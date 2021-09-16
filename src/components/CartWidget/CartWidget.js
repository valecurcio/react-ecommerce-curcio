import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';

//Functional Component
const CartWidget = () => {
    return(
        <div className="cart-buttonNav">
            <Button variant="contained">
                <ShoppingCartIcon />
                    <p>1</p>
            </Button>                       
        </div>
    )
}

export default CartWidget