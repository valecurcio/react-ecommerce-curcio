import React from "react";
import ItemList from '../ItemList/ItemList';

//Functional Component
export default function ItemListContainer() {
    return (
        <div className="item-list-container">
            <ItemList /> 
        </div>
    )
}