

const ProductList=({products})=>{
    return(
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h2></h2>
                </div>
            ))}
        </div>
    )
}

export default ProductList