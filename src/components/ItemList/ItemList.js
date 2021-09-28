import React, { useState, useEffect } from "react";
import Product from '../Product/Product';

function ItemList() {
    const [products, setProduct] = useState([])
    //const [stock, setStock] = useState(0);
    //const agregarStock = () => {
    //    setStock(stock + 1)
    //}
    const getProducts = new Promise ((resolve) => {
        setTimeout(() => {

            const mockProducts = [
                {
                    id: '1',
                    title: 'Happier than Ever',
                    img: 'happier-than-ever.jpg',
                    price: '1800',
                    stock: 100
                },
                {
                    id: '2',
                    title: 'Abbey Road',
                    img: 'abbey-road.jpg',
                    price: '1200',
                    stock: 120
                },
                {
                    id: '3',
                    title: 'Queen II',
                    img: 'queen-2.jpg',
                    price: '1500',
                    stock: 130
                }
            ]
            resolve(mockProducts)
        }, 2000)
    })

    useEffect(() => {
        getProducts.then((res) =>{
            console.log("respuesta: ", res)
            setProduct(res)
        } )
       
    }, []);

    const renderProducts = products.map((product, index) => {
        return(
        <Product key={`item-${product.id}`} img={product.img} title={product.title} price={product.price} />
    )
})

    return(
        <div className="container-general">
            {products.length !== 0 ? renderProducts : (
            //Reemplazar por spinner personalizado para el ecommerce
            <div>Cargando...</div>)
            }
        </div>
    )
}

export default ItemList