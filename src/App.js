import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Nav from './components/Nav'
import Home from './components/Home'
import ManyProducts from './components/ManyProducts'
import AddProduct from './components/AddProduct'
import Footer from './components/Footer'


function App() {
//Global

const [products, setProducts] = useState ([])

useEffect(()=> {
  const getProducts = async () => {
    const productsFromServer = await fetchProducts()
    setProducts(productsFromServer)
  }
  getProducts()

  // fetchTasks()
},[])

const fetchProducts = async () => {
  const res = await fetch('http://localhost:5000/products')
  const data = await res.json()
  // console.log(data)
  return data
}

const fetchProduct = async (id) => {
  const res = await fetch(`http://localhost:5000/products/${id}`)
  const data = await res.json()
  return data
}

//Delete
const deleteProduct = async (id) => {
  await fetch(`http://localhost:5000/products/${id}`, {
    method: 'DELETE',
  })
  //console.log(id)
  setProducts(products.filter((products) => products.id !== id))
}

//Add
const addProduct = async (product) => {
  const res = await fetch(`http://localhost:5000/products`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(product)
  })
  //console.log(task)
  //const id = Math.floor(Math.random() * 1000)
  const newProduct = await res.json()
  //console.log(newTask)
  setProducts([...products, newProduct])
}

//toggle Form

const [showAddProduct, setShowAddProduct] = useState(false)

  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
            <Route path="/" element={<Home />} />
      </Routes>
      <Header onAdd={() => setShowAddProduct(!showAddProduct)} showAdd={showAddProduct}/>
                    { showAddProduct && <AddProduct onAdd={addProduct}/> }
      <div className='container'>
      <div class="row">
      <Routes>
            <Route path="/catalogue" element={<ManyProducts products={products} onDeleteMany={deleteProduct}/>}/>
      </Routes>
      </div>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;