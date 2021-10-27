import React, { useState, useEffect } from "react"
import Item from '../Item/Item'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
//import { mockItems } from "../../mockItems"
import { NavLink, useParams } from 'react-router-dom'
import db from '../../firebase'
import {getFirestore, collection, getDocs } from 'firebase/firestore'

function ItemList() {
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);
    const {categoryId} = useParams();
    
    async function getItems(db) {
        const itemsCol = collection(db, 'items');
        const itemsSnapshot = await getDocs(itemsCol);
        const itemsList = itemsSnapshot.docs.map(doc => {
            console.log(`doc`, doc, doc.id)
            return {
                id: doc.id,
                ...doc.data()
            }
        });
        console.log(`itemsList`, itemsList)
        return setItems(itemsList);
    }
    useEffect(() => {
        getItems(db) 
        setLoader(false);
    }, [categoryId]);

    const categories = [
        { id: '0', address: '/', text: 'Todos los productos'},
        { id: 'Rock', address: '/category/Rock', text: 'Rock'},
        { id: 'Pop', address: '/category/Pop', text: 'Pop'},
        { id: 'Jazz', address: '/category/Jazz', text: 'Jazz'}
    ];
 
    return(
        <div className="container-general">
            {categories.map((cat) => {
        return (
            <div className="links" key={cat.id}>
                <NavLink to={cat.address} exact activeClassName="activeClass">
                </NavLink>
            </div>
        )
        })}
        {loader ? (<LoadingScreen />) : (items?.map((item) => (
                <Item {...item} key={item.id} />)
            ))}
        </div>
    )
}

export default ItemList