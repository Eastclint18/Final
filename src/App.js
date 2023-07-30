import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App () {
          return (
                    <div className = "App">
                           <BrowserRouter>
                           <NavBar />
                           <Routes>
                              <Route path = '/' element = {<ItemListContainer/>} />
                              <Route path = '/category/:categoryId' element = {<ItemListContainer/>} />
                              <Route path = '/item/:itemId' element = {<ItemListContainer/>} />
                              <Route path = '*' element = {<h1>404 Not Found</h1>} />

                           </Routes>
                           </BrowserRouter>
                    </div>
          )
}

export default App 