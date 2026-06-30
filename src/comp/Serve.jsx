import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addtocart } from '../slice/slice';

const Serve = () => {

  const dispatch=useDispatch()
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        console.log("Products Array (Axios):", response.data.products);
        setProducts(response.data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="loading">Loading products with Axios...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="products-grid grid grid-cols-4">
      {products.map((product) => (
        <div key={product.id} className="product-card">
     <Link to={`/details/${product.id}`}>   <img 
            src={product.thumbnail} 
            alt={product.title} 
            className="product-image" 
          /> </Link>  
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">${product.price}</p>
          <p className="product-rating">⭐ {product.rating}/5</p>
          <button onClick={()=>dispatch(addtocart(product))} >Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Serve;