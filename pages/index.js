import React from 'react';
import Layout from '../components/Layouts/Layout';
import ProductDetails from '../components/Layouts/ProductDetails';
import useProducts from '../hooks/useProducts';
import LoadingProduct from '../components/LoadingScreens/LoadingProduct';

const Home = () => {
  const { products } = useProducts('created');
  return (
    <Layout>
      { false ? <LoadingProduct /> : (
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
      )}
    </Layout>
  )
}
export default Home
