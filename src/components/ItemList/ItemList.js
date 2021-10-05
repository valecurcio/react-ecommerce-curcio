import React, { useState, useEffect } from "react"
import Item from '../Item/Item'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import { mockItems } from "../../mockItems"
import { NavLink, useParams } from 'react-router-dom'

function ItemList() {
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);
    const {categoryId} = useParams();
    

    useEffect(() => {
        setLoader(true);
        const getItems = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(mockItems)
            }, 2000)
        });

        getItems.then((res) =>{
            //uso el categoryId para filtrar los productos
            categoryId ? setItems( res.filter( i => i.category === categoryId)) : setItems(res);
        } ).finally(() => setLoader(false));
       
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