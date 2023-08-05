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
            console.log(itemId);
                   
                  const querydb = getFirestore();
                    const docRef = doc(db , 'Items', itemId)

                    getDoc (docRef)
                    .then(response => {
                              const data = response.data ()
                              const productAdapted = {id : response.id, ...data}
                              setProduct(productAdapted)
                              console.log(productAdapted);


                    })
                  
}, [itemId])
   console.log(itemId)
return (
  
     
        <ItemDetail {...product}
      
        />

 
  
  );
 
}

  
  export default ItemDetailContainer;

