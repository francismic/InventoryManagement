import { useLocation } from 'react-router-dom'
import Button from './Button'
import { Container, Row, Col } from 'react-bootstrap';

const Header = (props) => {
    const location = useLocation()
    return (
            <Container className="mt-4">
            <Row>
                <Col>
                { location.pathname === '/catalogue' && (
                <Button text={props.showAdd ? 'Close' : 'Add Product'} color={props.showAdd ? 'red' : 'green'} onClick={props.onAdd}/>
                )}</Col>
            </Row>
    </Container>
    )
}
export default Header