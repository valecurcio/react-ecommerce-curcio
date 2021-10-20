import React,{useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import { useParams } from 'react-router-dom'
import db from '../../firebase'
import {getFirestore, collection, getDocs, getDoc, doc } from 'firebase/firestore'

function ItemDetailContainer() {
  const [item, setItem] = useState();
    const [loader, setLoader] = useState(true);
    const { idItem } = useParams();

  //   async function getItems(db) {
  //     const itemsCol = collection(db, 'items');
  //     const itemsSnapshot = await getDocs(itemsCol);
  //     const itemsList = itemsSnapshot.docs.map(doc => doc.data());
      
  //     return setItems(itemsList);
  // }

    async function getItem(db) {
      const docRef = doc(db, "items", idItem)
      const docSnap = await getDoc(docRef);

      if(docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log("No item with selected id")
      }
    }
    
    useEffect(() => {
      //setLoader(true);
      //Old lines:
      //const itemCollection = db.collection("items").doc(idItem);
      // const itemFilter = itemCollection.where('id', '==', idItem);
    //   const itemsCol = collection(db, 'items');
    //   itemsCol.get().then((querySnapshot) => {
    //     if(!querySnapshot.exists) {
    //       console.log('No results');
    //       setItem(null);
    //     } else {
    //       setItem({id: querySnapshot.id, ...querySnapshot.data()});
    //     }
    //     setLoader(false);
    //   });
    // }, [idItem]);
      getItem(db)
    },[idItem])

    return (
        <div className="detail-container">
         {loader ? (<LoadingScreen />) : item && <ItemDetail item={item} />}
         {/* {console.log("infoItem: ", infoItem)} */}
        </div>
    );
}

export default ItemDetailContainer;