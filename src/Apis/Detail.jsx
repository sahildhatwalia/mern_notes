import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Detail = () => {
const navigate=useNavigate()
    const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {id}=useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        // console.log("Products Array (Axios):", response.data.products);
        setProducts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  },[id]);

  if (loading) return <p className="loading">Loading products with Axios...</p>;
  if (error) return <p className="error">Error: {error}</p>;
  return (
    <div>
      
<img src={products.thumbnail} alt="" />
<p>{products.title}</p>
<button
  onClick={() => navigate(`/details/${Number(id) - 1}`)}
  disabled={Number(id) <= 1}
>
  Previous
</button>

<button
  onClick={() => navigate(`/details/${Number(id) + 1}`)}
  disabled={Number(id) >= 194} // DummyJSON has 194 products
>next </button>

    </div>
  )
}

export default Detail
