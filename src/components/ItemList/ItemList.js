import React, { useState, useEffect } from "react"
import Product from '../Product/Product'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import { mockProducts } from "../../mockProducts"
import { NavLink, useParams } from 'react-router-dom'

function ItemList() {
    const [products, setProduct] = useState([]);
    const [loader, setLoader] = useState(true);
    const {categoryId} = useParams();
    

    useEffect(() => {
        setLoader(true);
        const getProducts = new Promise ((resolve) => {
            setTimeout(() => {
                resolve(mockProducts)
            }, 2000)
        });

        getProducts.then((res) =>{
            //uso el categoryId para filtrar los productos
            categoryId ? setProduct( res.filter( i => i.category === categoryId)) : setProduct(res);
        } ).finally(() => setLoader(false));
       
    }, [categoryId]);

    const categories = [
        { id: '0', address: '/', text: 'Todos los productos'},
        { id: 'Rock', address: '/category/Rock', text: 'Rock'},
        { id: 'Pop', address: '/category/Pop', text: 'Pop'},
        { id: 'Jazz', address: '/category/Jazz', text: 'Jazz'}
    ];

//     const renderProducts = products.map((product, index) => {
//         return(
//         <Product key={`item-${product.id}`} img={product.img} title={product.title} price={product.price} />
//     )
// })

    

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
        {loader ? (<LoadingScreen />) : (products?.map((product) => (
                <Product {...product} key={product.id} />)
                // <Product id={product.id} img={product.img} title={product.title} price={product.price} />
            ))}
        </div>
    )
}

export default ItemList