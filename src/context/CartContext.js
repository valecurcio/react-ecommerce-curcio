import React, { useContext, useState } from 'react';

export const CartContext = React.createContext([]);
export const useValueContext = () => useContext(CartContext);


export default function CartProvider({ children = [], defaultCart = [] }) {
    const [cart, setCart] = useState(defaultCart);
    const [quantityItems, setQuantityItems] = useState(0);

    function addItem(item, quantity) {
        // Reviso si existe el producto (similar al isInCart)
        let obj = cart.find(o => o.item.id === item.id);
        if (obj === undefined) {
            setQuantityItems(Number(quantityItems) + Number(quantity));
            setCart([...cart, { item, quantity }]);
        }
    }

    function removeItem(itemId) {
        // Remuevo un item por id y actualizo el estado
        var filteredArray = cart.filter(e => e.item.id !== itemId);
        setCart(filteredArray);
        recalculate(filteredArray);
    }

    function recalculate(filteredArray) {
        let quantity = 0;
        filteredArray.map((item) => quantity += Number(item.quantity) );
        setQuantityItems(Number(quantity));
    }

    function clearCart() {
        setCart([]);
        setQuantityItems(0);
    }

    return <CartContext.Provider value={{ cart, quantityItems, addItem, removeItem, clearCart }}>
        {children}
    </CartContext.Provider>
}