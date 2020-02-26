import React, { useState, useEffect } from 'react';
import Layout from '../components/Layouts/Layout';
import { useRouter } from 'next/router';
import ProductDetails from '../components/Layouts/ProductDetails';
import useProducts from '../hooks/useProducts';

const Search = () => {
  const router = useRouter();
  const { query: { q } } = router;

  // Todos los productos
  const { products } = useProducts('created');
  const [ result, setResult ] = useState([])

  useEffect(() => {
    const searchTerm = q.toLowerCase();
    const filter = products.filter(product => {
      return (
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
      )
    })
    setResult(filter)
  }, [q, products])

  return (
    <Layout>
      <div className="product-list">
        <div className="container">
          <ul className="bg-white">
            {result.map( product => (
              <ProductDetails 
                product={product}
                key={product.id}
              />
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Search
