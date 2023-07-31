import {db} from '../../config/firebase/firebase';
import {getDocs , collection, addDoc, doc, } from 'firebase/firestore';
import {useState, useEffect} from 'react';
import Auth from '../Auth';
import CarWidget from '../CardWidget/CarWidget';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css'





function ItemListContainer () { 
          const  [itemList, setItemList] = useState([]);
     
        
 

          const itemsCollectionRef = collection (db, 'Items');


          
          const getItemList =  async() => {
                    const data = await getDocs(itemsCollectionRef)

                    const filteredData = data.docs.map ( (doc) =>({...doc.data(),id:doc.id}));
                    console.log(filteredData)
                    
                    setItemList (filteredData);
          }

          useEffect(() => {
               

                    getItemList();


          },[])


      

          
          return (
               /* 
                    <BrowserRouter>
                     <Routes>
                              <Route path='/' element={<h2>Home</h2>}/>
                              <Route path='/' element={<h2>Galeria</h2>}/>
                              <Route path='/' element={<h2>Teclados</h2>}/>
                              <Route path='/' element={<h2>Mouse</h2>}/>
                                                   </Routes> */
                                                
                    <div>
                            
                              
                              <div>     
                                       
                                        

                              </div>
                              <div>
                              {itemList.map ((item)=> (
                                        <div key = {item.id}>
                                                  <h2 style={{color:item.stock > 0 ? 'green': 'red'}}>{item.nombre}</h2>
                                                  <p>{item.valor}</p>
                                                  <p>{item.stock}</p>
                                                  <img className='productimg' src={item.image}/>
                                               
                                                  <ItemCount initial={1} stock= {10} onAdd= {(quantity)=> console.log('cantidad agregada',quantity)}></ItemCount>
                                                
                                                  
                                                  </div>
                              ) )}
                    </div>
                    </div>
                
          )
}

export default ItemListContainer;
