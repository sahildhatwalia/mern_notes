// import React, { useState, useEffect } from 'react';

// const FetchProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://dummyjson.com/products');
//         if (!response.ok) {
//           throw new Error('Failed to fetch products');
//         }
//         const data = await response.json();
//         console.log("Products Array (Fetch):", data.products); 
//         setProducts(data.products);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p className="loading">Loading products with Fetch...</p>;
//   if (error) return <p className="error">Error: {error}</p>;

//   return (
//     <div className="products-grid">
//       {products.map((product) => (
//         <div key={product.id} className="product-card">
//           <img 
//             src={product.thumbnail} 
//             alt={product.title} 
//             className="product-image" 
//           />
//           <h3 className="product-title">{product.title}</h3>
//           <p className="product-price">${product.price}</p>
//           <p className="product-rating">⭐ {product.rating}/5</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FetchProducts;



import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        console.log("Products Array (Fetch):", data.products);
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/fetch-products/${productId}`);
  };

  if (loading) return <p className="loading">Loading products with Fetch...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="products-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img 
            src={product.thumbnail} 
            alt={product.title} 
            className="product-image"
            onClick={() => handleProductClick(product.id)} 
            style={{ cursor: 'pointer' }}
          />
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">${product.price}</p>
          <p className="product-rating">⭐ {product.rating}/5</p>
        </div>
      ))}
    </div>
  );
};

export default FetchProducts;