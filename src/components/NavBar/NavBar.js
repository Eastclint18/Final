import { Link, NavLink } from 'react-router-dom'
function NavBar() {
          return (
                    <nav className="navbar ">
                              <Link to={'/'}>
                              <h3>Ecommerce</h3>
                              </Link>
                              <div className="Categories">
                              <NavLink to={"/productos/teclados"} className="button is-danger is-light">Teclados</NavLink>
                              <NavLink to={"/productos/mouses"} className="button is-danger is-light">Mouses</NavLink>
                             
                            
                                     
                              </div>
                              
                    </nav>
          )
}
export default NavBar  