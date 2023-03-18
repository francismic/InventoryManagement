import Product from './Product'

const ManyProducts = ({products, onDeleteMany}) => {
    return(
        <>
            {products.map((product)=>(
                <Product key={product.id} product={product} onDelete={onDeleteMany}/>
            ))}
        </>
    )
}

export default ManyProducts