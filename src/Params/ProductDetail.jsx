import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css'; // Assuming you have a CSS file for styling

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="loading">Loading product details...</p>;
  if (error) return <p className="error">Error: {error}</p>;
  if (!product) return <p className="not-found">Product not found</p>;

  return (
    <div className="product-detail">
      <button onClick={() => navigate(-1)} className="back-button">
        &larr; Back to Products
      </button>
      
      <div className="detail-container">
        <div className="product-images">
          <img 
            src={product.thumbnail} 
            alt={product.title} 
            className="main-image"
          />
          <div className="image-gallery">
            {product.images.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`${product.title} ${index + 1}`} 
                className="thumbnail"
              />
            ))}
          </div>
        </div>
        
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="brand">Brand: {product.brand}</p>
          <p className="price">
            ${product.price} 
            <span className="discount">
              {product.discountPercentage}% off
            </span>
          </p>
          <p className="rating">Rating: ⭐ {product.rating}/5</p>
          <p className="stock">Availability: {product.stock} in stock</p>
          
          <div className="description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
          
          <div className="specs">
            <h3>Specifications</h3>
            <ul>
              <li>Category: {product.category}</li>
              {product.weight && <li>Weight: {product.weight}g</li>}
              {product.dimensions && (
                <li>
                  Dimensions: {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm
                </li>
              )}
            </ul>
          </div>
          
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;