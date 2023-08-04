import {db} from '../../config/firebase/firebase';
import {getDocs , collection, addDoc, doc, } from 'firebase/firestore';
import {useState, useEffect} from 'react';
import Auth from '../Auth';
import CarWidget from '../CardWidget/CarWidget';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css'
import { Link } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Item from '../Item/Item';





function ItemListContainer () { 
          const  [itemList, setItemList] = useState([]);
     
        const {categoryId} = useParams();
 

          const itemsCollectionRef = collection (db, 'Items');


          
          const getItemList =  async() => {
                    const data = await getDocs(itemsCollectionRef)

                    const filteredData = data.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }))
                    .filter((item) => !categoryId || (item.type && item.type.toLowerCase() === categoryId.toLowerCase()));
                    
                    setItemList (filteredData);
          }

          useEffect(() => {
               
                 getItemList();


          },[categoryId])


      

          
          return (
              
                                                
                    <div>
                            
                              
                              <div>     
                                       
                                        

                              </div>
                              <div>
                              {itemList.map ((item)=> (
                                    <article className='CardItem' key={item.id}>
                                      <Item
                                   //IGOR
                                   // ACA TE CREE OTRO COMPONENTE ITEM PARA QUE NO TENGA CONFLICTO CON ITEMDETAIL
                                        id={item.id}
                                        nombre={item.nombre}
                                        image={item.image}
                                        valor={item.valor}
                                        stock={item.stock}
                                      />
                                    </article>
                                        
                                      ) )}
                             
                    </div>
                    </div>
                
          )
}

export default ItemListContainer;
