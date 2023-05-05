import React, { useState, useEffect } from 'react';

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        }
        fetchData();
    }, []);

    return (
        <div className="d-flex flex-row flex-wrap">
            {products.map((product) => (
                <div key={product.id} style={{ width: '9%', margin: '0 1%' }}>
                    <img src={product.image} alt={product.title} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                    <h5>{product.title}</h5>
                    <p id='price'>${product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
