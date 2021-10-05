import React from 'react'
//import { useParams } from 'react-router'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'

export default function ProductDetail() {
    // const {id} = useParams()
    // console.log(id)
    return (
        <>
        {/* <p>Id de producto: {id} </p> */}
           <ItemDetailContainer /> 
        </>
    )
}
