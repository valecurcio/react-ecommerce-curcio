import React, { useState } from "react";
import Product from '../Product/Product'
import productImg1 from '../../assets/products/happier-than-ever.jpg'
import productImg2 from '../../assets/products/abbey-road.jpg'
import productImg3 from '../../assets/products/queen-2.jpg'

//Functional Component
export default function ItemListContainer() {
    const [stock, setStock] = useState(0);
    const agregarStock = () => {
        setStock(stock + 1)
    }
    return(
        <div>
            <Product image={productImg1} title="Happier Than Ever" price="3200" />
            <Product image={productImg2} title="Abbey Road" price="4000" />
            <Product image={productImg3} title="Queen II" price="3600" />
            <Product image={productImg1} title="Happier Than Ever" price="3200" />
            <Product image={productImg2} title="Abbey Road" price="4000" />
            <Product image={productImg3} title="Queen II" price="3600" />
        </div>
    )
}