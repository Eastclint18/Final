import { Link } from 'react-router-dom';

const ItemDetail = ({id , nombre, image, valor, stock }) => {

          return (
                    <Link to={`/productos/${id}`} className='ItemLink'>
                    <article className='CardItem' >
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
                              <Link to={`/productos/${id}`} className='Option'>Ver detalle</Link>
                              </footer>


                    </article>
                    </Link>
          )
}

export default ItemDetail