import React,{useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../firebase/firebase';

function ItemDetailContainer() {
    const [infoItem, setInfoItem] = useState(null);
    const [loader, setLoader] = useState(true);
    const { idItem } = useParams();
    
    useEffect(() => {
        setLoader(true);
      const db = getFirestore();
      const itemCollection = db.collection("items").doc(idItem);
      // const itemFilter = itemCollection.where('id', '==', idItem);
      itemCollection.get().then((querySnapshot) => {
        if(!querySnapshot.exists) {
          console.log('No results');
        } else {
            setInfoItem(querySnapshot.data());
        }
        setLoader(false);
      });
    }, [idItem]);

    return (
        <div className="detail-container">
         {loader ? (<LoadingScreen />) : infoItem && <ItemDetail item={infoItem} />}
         {/* {console.log("infoItem: ", infoItem)} */}
        </div>
    );
}

export default ItemDetailContainer;