import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../constants.js'

export function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(API_URL+'/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map((product) => (
                    <li id={product.id}>
                        {product.name} - {product.price} PLN "{product.description}"
                    </li>
                ))}
            </ul>
        </div>
    );
}
