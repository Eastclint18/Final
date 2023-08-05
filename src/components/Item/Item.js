import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({id , nombre, image, valor, stock }) => {

          return (
                    
                    <article className='CardItem2' >
                              <header className='Header'>
                                        <h2 className='ItemHeader'>
                                                  {nombre}
                                        </h2>
                              </header>
                              <picture>
                                        <img src={image} alt={nombre} className='ItemImg' />

                              </picture>
                              <section >
                                        <p className="info">
                                                  Precio : ${valor}
                                        </p>
                                        <p className='info'>
                                                  Stock disponible : ${stock}
                                        </p>
                              </section>
                              <footer className="ItemFooter">
                              <Link to={`/detalle/${id}`} className='Option'>Ver detalle</Link>
                              </footer>


                    </article>
                   
          )
}

export default Item