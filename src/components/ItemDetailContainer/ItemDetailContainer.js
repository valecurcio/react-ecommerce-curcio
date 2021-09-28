import React,{useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

function ItemDetailContainer() {
    const [infoProduct, setInfoProduct] = useState();
    
    const getProduct = new Promise ((resolve) => {
        setTimeout(() => {
            const mockProduct = {
                    id: '1',
                    title: 'Happier than Ever',
                    img: 'happier-than-ever.jpg',
                    price: '1800',
                    stock: 100
                }

            resolve(mockProduct)
        }, 2000)
    })

    useEffect(() => {
        getProduct.then((response) => {
            setInfoProduct(response)
        })
    }, [])

    return (
        <div className="detail-container">
         Acá irá el Item Detail COntainer 
         {console.log("infoProduct: ", infoProduct)} 
         <ItemDetail data={infoProduct} /> 
        </div>
    );
}

export default ItemDetailContainer;
