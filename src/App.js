import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route , Routes } from 'react-router-dom';

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App () {
          return (
                    <div className = "App">
                           <BrowserRouter>
                           <NavBar/>
                           <Routes>
                              <Route path = '/' element = {<ItemListContainer/>} />
                              <Route path = '/productos/:categoryId' element = {<ItemListContainer/>} />
                              <Route path = '/productos/:itemId' element = {<ItemDetailContainer />} />
                              <Route path = '*' element = {<h1>404 Not Found</h1>} />
                              

                           </Routes>
                           </BrowserRouter>
                    </div>
          )
}

export default App 