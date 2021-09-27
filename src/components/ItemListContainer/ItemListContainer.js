import React, { useState, useEffect } from "react";
import Product from '../Product/Product'

//Functional Component
export default function ItemListContainer() {
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
       
    }, [])

    return(
        <div className="container-general">
            {products.map((product, index) => {
                return(
                <Product key={`item-${products.id}`} img={product.img} title={product.title} price={product.price} />
            )
        })}
        </div>
    )
}