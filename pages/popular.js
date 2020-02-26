import React from 'react';
import Layout from '../components/Layouts/Layout';
import ProductDetails from '../components/Layouts/ProductDetails';
import useProducts from '../hooks/useProducts';

const Home = () => {
  const { products } = useProducts('votes');
  return (
    <Layout>
      <div className="product-list">
        <div className="container">
          <ul className="bg-white">
            {products.map( product => (
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
export default Home
