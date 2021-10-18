import React, { useState, useEffect } from "react"
import Item from '../Item/Item'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
//import { mockItems } from "../../mockItems"
import { NavLink, useParams } from 'react-router-dom'
import { getFirestore } from '../../firebase';

function ItemList({ title }) {
    const [items, setItems] = useState([]);
    const [loader, setLoader] = useState(true);
    const [noResult, setNoResult] = useState(false);
    const { category } = useParams();
    

    useEffect(() => {
        const db = getFirestore();
        let itemCollection = db.collection("items");
        if (category !== undefined) {
        itemCollection = db.collection("items").where("category", "==", category);
        }
        itemCollection.get().then((querySnapshot) => {
        if(querySnapshot.size === 0) {
            console.log('No hay resultados');
            setNoResult(true);
        } else {
            setNoResult(false);
        }
        setItems(
            querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        )
        setLoader(false);
        });
    });

    if (noResult) {
        return ( 
        <div className="container">
          <div className="page-header">
            <h1>
              No se encontraron productos en esta categoria
            </h1>
          </div>
        </div>);
      }

 
    return(
        <div className="container-general">
            {/* {categories.map((cat) => {
        return (
            <div className="links" key={cat.id}>
                <NavLink to={cat.address} exact activeClassName="activeClass">
                </NavLink>
            </div>
        )
        })} */}
        {loader ? (<LoadingScreen />) : (items?.map((item) => (
                <Item {...item} key={item.id} />)
            ))}
        </div>
    )
}

export default ItemList