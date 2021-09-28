import React,{useState, useEffect} from 'react'

function ItemDetail(props) {
    // useEffect(() => {
        
    // }, [])

    return (
        <div className="item-detail">
            {console.log("Data desde item detail: ", props.data)}
            <div>
                <img src={`./assets/products/${props.data.img}`} />
            </div> 
            <div>
                <p>{props.data.title}</p>
                <p>{props.data.price}</p>
            </div>
        </div>
    )
}

export default ItemDetail;
