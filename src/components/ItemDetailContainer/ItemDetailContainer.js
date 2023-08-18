import { useState, useEffect } from "react"
import {getFirestore ,getDoc , doc} from 'firebase/firestore'
import { db } from '../../config/firebase/firebase';
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
          const [product, setProduct] = useState ({})
          

          const {itemId} = useParams()
          
       

          useEffect(() => {
          
                   
                  const querydb = getFirestore();
                    const docRef = doc(db , 'Items', itemId)

                    getDoc (docRef)
                    .then(response => {
                              const data = response.data ()
                              const productAdapted = {id : response.id, ...data}
                              setProduct(productAdapted)
                          


                    })
                  
}, [itemId])
   
return (
  
     
        <ItemDetail {...product}
      
        />

 
  
  );
 
}

  
  export default ItemDetailContainer;

