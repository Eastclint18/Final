import Item from '../Item/Item';


const ItemList = ({Items}) => {
          return (
                    <div className = 'ListGroup'>
                              {Items.map(prod => <Item key={Items.id} {...Items}/>)}
                    </div>
          )
}

export default ItemList