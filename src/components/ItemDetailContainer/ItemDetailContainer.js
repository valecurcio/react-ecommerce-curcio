import React,{useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import { mockProducts } from "../../mockProducts"

function ItemDetailContainer() {
    const [infoProduct, setInfoProduct] = useState(null);
    const [loader, setLoader] = useState(true);
    
    const getProduct = new Promise ((resolve) => {
        setTimeout(() => {
            const mockProduct = {
                    id: '1',
                    title: 'Happier than Ever',
                    img: 'happier-than-ever.jpg',
                    price: '1800',
                    desc: 'Deluxe Vinyl Edition del último lanzamiento del nuevo ícono de la música pop alternativa adolescente.',
                    artist: 'Billie Eilish',
                    record: 'Interscope Records',
                    year: '2021',
                    stock: 100
                }

            resolve(mockProduct)
        }, 2000)
    })

    
    useEffect(() => {
        setLoader(true);
        getProduct.then((response) => {
            setInfoProduct(response)
        }).finally(() => setLoader(false))
    }, []);

    return (
        <div className="detail-container">
         {loader ? (<LoadingScreen />) : infoProduct && <ItemDetail data={infoProduct} />}
         {console.log("infoProduct: ", infoProduct)}
        </div>
    );
}

export default ItemDetailContainer;
