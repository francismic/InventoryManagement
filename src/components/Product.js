import { FaTimes} from 'react-icons/fa'
import { Card } from 'react-bootstrap';

const Product = ({product, onDelete}) => {
    return(
        <Card className="m-4" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{product.text}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{product.categorie}</Card.Subtitle>
          <Card.Text>
          {product.description}
          </Card.Text>
          <Card.Subtitle className="mb-2 text-muted">{product.price}</Card.Subtitle>
          <Card.Link style={{ color: 'blue', cursor: 'pointer'}}>Manage</Card.Link>
          <Card.Link style={{ color: 'red', cursor: 'pointer'}} onClick={() => onDelete(product.id)}>Delete</Card.Link>
        </Card.Body>
      </Card>   
    )
}

export default Product