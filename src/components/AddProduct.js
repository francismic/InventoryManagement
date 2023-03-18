import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap';

const AddProduct = ({onAdd}) => {
    const [text, setProduct] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [categorie, setCategorie] = useState('Catégorie 1')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text){
            alert('Please enter a product')
            return
        }
        onAdd({text, description, price, categorie})
            setProduct('')
            setDescription('')
            setPrice('')
            setCategorie('')
    }


    return(
        <div className='container'>
        <Form className="add-form" onSubmit={onSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Produit</Form.Label>
                <Form.Control type='text' placeholder='Add a Product' value={text} onChange= {(e) => setProduct(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Descrption</Form.Label>
                <Form.Control type='text' placeholder='Add Description' value={description} onChange= {(e) => setDescription(e.target.value)} />
            </Form.Group> 
            <Form.Group className="mb-3">
                <Form.Label>Prix du produit</Form.Label>
                <Form.Control type='text' placeholder='Add a price' value={price} onChange= {(e) => setPrice(e.target.value)} />
            </Form.Group> 
            <Form.Group className="mb-3">
                <Form.Label>Catégorie</Form.Label>
                <Form.Select name="categorie" value={categorie} onChange= {(e) => setCategorie(e.target.value)}>
                    <option>Catégorie 1</option>
                    <option>Catégorie 2</option>
                    <option>Catégorie 3</option>
                </Form.Select>
            </Form.Group>
            <Button className="mb-4 float-end" variant="primary" type="submit" value='Save product'>
                Ajouter le produit
            </Button>
        </Form>
        </div>
    )
}

export default AddProduct