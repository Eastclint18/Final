import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
function NavBar() {
          return (
                    <nav className="navbar ">
                              <Link to={'/'}>
                              <h3>Ecommerce</h3>
                              </Link>
                              <div className="Categories">
                              <NavLink to={"/productos/teclados"} className='Teclados'>Teclados   </NavLink>
                              <NavLink to={"/productos/mouses"} className="Mouses">Mouses</NavLink>
                             
                            
                                     
                              </div>
                              
                    </nav>
          )
}
export default NavBar  