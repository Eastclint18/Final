import {db} from './config/firebase';
import {getDocs , collection, addDoc, doc, } from 'firebase/firestore';
import {useState, useEffect} from 'react';
import Auth from './components/Auth';
import navBar from './components/navBar';




function App () { 
          const  [itemList, setItemList] = useState([]);
          const [ newItemNombre, setNewItemNombre] = useState('');
          const [ newItemPrecio, setNewItemPrecio] = useState(0);
          const [ newItemStock, setNewItemStock] = useState(0);
          const [ updatedNombre , setUpdatedNombre] = useState('');

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


          const onSubmitItem = async () => { 
                    await addDoc (itemsCollectionRef,{nombre:newItemNombre , stock :newItemStock, valor:newItemPrecio})
                    getItemList();


          }

          console.log(itemList)
          return (

                    <div><navBar/>
                              <div>     
                                        <h2> Nuevo Item</h2>
                                        <input placeholder='Nombre' onChange= {(e) => setNewItemNombre(e.target.value)}/>
                                        <input placeholder='Precio' type='number' onChange= {(e) => setNewItemPrecio(Number(e.target.value))}/>
                                        <input placeholder='Stock' type = 'number' onChange= {(e) => setNewItemStock(Number(e.target.value))} />
                                        <button onClick={onSubmitItem}>Enviar</button>
                                        

                              </div>
                              <div>
                              {itemList.map ((item)=> (
                                        <div key = {item.id}>
                                                  <h2 style={{color:item.stock > 0 ? 'green': 'red'}}>{item.nombre}</h2>
                                                  <p>{item.valor}</p>
                                                  <p>{item.stock}</p>
                                                  <img  src={item.image}/>
                                                
                                                  
                                                  </div>
                              ) )}
                    </div>
                    </div>
          )
}

export default App;



