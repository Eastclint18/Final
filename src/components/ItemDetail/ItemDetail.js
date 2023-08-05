import './ItemDetail.css'

const ItemDetail = ({ nombre, image, valor, stock }) => {

          return (

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
                                                  Stock disponible : {stock}
                                        </p>
                              </section>
                              <footer className="ItemFooter">
                                        <button type="button" className="boton">Ver detalle</button>
                              </footer>


                    </article>


          )
}

export default ItemDetail