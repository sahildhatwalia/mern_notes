import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './ProductList.css'; // Assuming you have a CSS file for styling

const products = [
  { 
    id: 1, 
    name: 'MacBook Pro 16"', 
    category: 'electronics', 
    price: 2399, 
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format'
  },
  { 
    id: 2, 
    name: 'iPhone 15 Pro', 
    category: 'electronics', 
    price: 999, 
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1695048137560-7b21c9df0e2e?w=500&auto=format'
  },
  { 
    id: 3, 
    name: 'Ergonomic Office Desk', 
    category: 'furniture', 
    price: 349, 
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format'
  },
  { 
    id: 4, 
    name: 'Gaming Chair', 
    category: 'furniture', 
    price: 299, 
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&auto=format'
  },
  { 
    id: 5, 
    name: 'Noise Cancelling Headphones', 
    category: 'electronics', 
    price: 349, 
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format'
  },
  { 
    id: 6, 
    name: 'Leather Sofa', 
    category: 'furniture', 
    price: 1299, 
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format'
  },
  { 
    id: 7, 
    name: 'Smart Watch Pro', 
    category: 'electronics', 
    price: 249, 
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format'
  },
  { 
    id: 8, 
    name: 'Coffee Table Set', 
    category: 'furniture', 
    price: 199, 
    rating: 4.1,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format'
  },
  { 
    id: 9, 
    name: '4K Monitor 27"', 
    category: 'electronics', 
    price: 399, 
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1546538915-a9e2c8d1a8de?w=500&auto=format'
  },
  { 
    id: 10, 
    name: 'Bookshelf Oak', 
    category: 'furniture', 
    price: 179, 
    rating: 4.0,
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&auto=format'
  },
  // Continuing with more products...
  { 
    id: 11, 
    name: 'Wireless Keyboard', 
    category: 'electronics', 
    price: 89, 
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format'
  },
  { 
    id: 12, 
    name: 'Dining Table Set', 
    category: 'furniture', 
    price: 599, 
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=500&auto=format'
  },
  { 
    id: 13, 
    name: 'Bluetooth Speaker', 
    category: 'electronics', 
    price: 129, 
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&auto=format'
  },
  { 
    id: 14, 
    name: 'Modern Wardrobe', 
    category: 'furniture', 
    price: 799, 
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&auto=format'
  },
  { 
    id: 15, 
    name: 'iPad Pro', 
    category: 'electronics', 
    price: 899, 
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&auto=format'
  },
  { 
    id: 16, 
    name: 'King Size Bed Frame', 
    category: 'furniture', 
    price: 699, 
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&auto=format'
  },
  { 
    id: 17, 
    name: 'DSLR Camera', 
    category: 'electronics', 
    price: 1299, 
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format'
  },
  { 
    id: 18, 
    name: 'Office Chair', 
    category: 'furniture', 
    price: 249, 
    rating: 4.1,
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=500&auto=format'
  },
  { 
    id: 19, 
    name: 'External SSD 1TB', 
    category: 'electronics', 
    price: 149, 
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&auto=format'
  },
  { 
    id: 20, 
    name: 'TV Stand', 
    category: 'furniture', 
    price: 199, 
    rating: 4.0,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&auto=format'
  },
  // Adding more categories and products...
  { 
    id: 21, 
    name: 'Air Fryer', 
    category: 'kitchen', 
    price: 129, 
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1611791484670-ce19b801d192?w=500&auto=format'
  },
  { 
    id: 22, 
    name: 'Blender Pro', 
    category: 'kitchen', 
    price: 89, 
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?w=500&auto=format'
  },
  { 
    id: 23, 
    name: 'Yoga Mat', 
    category: 'fitness', 
    price: 39, 
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&auto=format'
  },
  { 
    id: 24, 
    name: 'Dumbbell Set', 
    category: 'fitness', 
    price: 129, 
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500&auto=format'
  },
  { 
    id: 25, 
    name: 'Running Shoes', 
    category: 'sports', 
    price: 99, 
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&auto=format'
  },
    { 
    id: 26, 
    name: 'Basketball', 
    category: 'sports', 
    price: 49, 
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c6dc309?w=500&auto=format'
  },
  { 
    id: 27, 
    name: 'Tennis Racket', 
    category: 'sports', 
    price: 79, 
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c6dc309?w=500&auto=format'
  },
  { 
    id: 28, 
    name: 'Soccer Ball',
    category: 'sports',
    price: 29,
    rating: 4.1,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c6dc309?w=500&auto=format'
    },
    { 
    id: 29, 
    name: 'Baseball Glove', 
    category: 'sports', 
    price: 59,  
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c6dc309?w=500&auto=format'
    },
    { 
    id: 30,
    name: 'Golf Clubs Set',
    category: 'sports',
    price: 499,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c6dc309?w=500&auto=format'
  }
];


function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category');
  const minPrice = searchParams.get('minPrice');
  const maxPrice = searchParams.get('maxPrice');
  const sort = searchParams.get('sort');

  const [priceRange, setPriceRange] = useState({
    min: minPrice || '',
    max: maxPrice || ''
  });

  const filteredProducts = products.filter(product => {
    return (
      (!category || product.category === category) &&
      (!minPrice || product.price >= Number(minPrice)) &&
      (!maxPrice || product.price <= Number(maxPrice))
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === 'price') return a.price - b.price;
    if (sort === 'rating') return b.rating - a.rating;
    return 0;
  });

  const handleFilterChange = (e) => {
    e.preventDefault();
    setSearchParams({
      category,
      sort,
      minPrice: priceRange.min,
      maxPrice: priceRange.max
    });
  };

  return (
    <div className="product-list-container">
      <h2 className="product-list-title">Products</h2>
      
      <div className="filters-container">
        <div className="category-filters">
          <button 
            className={`filter-btn ${category === 'electronics' ? 'active' : ''}`}
            onClick={() => setSearchParams({ category: 'electronics' })}
          >
            Electronics
          </button>
          <button 
            className={`filter-btn ${category === 'furniture' ? 'active' : ''}`}
            onClick={() => setSearchParams({ category: 'furniture' })}
          >
            Furniture
          </button>
          <button 
            className="filter-btn clear-btn"
            onClick={() => setSearchParams({})}
          >
            Clear Filters
          </button>
        </div>
        
        <form className="price-filter-form" onSubmit={handleFilterChange}>
          <div className="price-inputs">
            <label className="price-label">
              Min Price:
              <input 
                type="number" 
                className="price-input"
                value={priceRange.min}
                onChange={(e) => setPriceRange({...priceRange, min: e.target.value})}
              />
            </label>
            <label className="price-label">
              Max Price:
              <input 
                type="number" 
                className="price-input"
                value={priceRange.max}
                onChange={(e) => setPriceRange({...priceRange, max: e.target.value})}
              />
            </label>
          </div>
          <button type="submit" className="apply-price-btn">
            Apply Price Filter
          </button>
        </form>
        
        <div className="sort-options">
          <span className="sort-label">Sort by: </span>
          <button 
            className={`sort-btn ${sort === 'price' ? 'active' : ''}`}
            onClick={() => setSearchParams({ ...Object.fromEntries(searchParams), sort: 'price' })}
          >
            Price
          </button>
          <button 
            className={`sort-btn ${sort === 'rating' ? 'active' : ''}`}
            onClick={() => setSearchParams({ ...Object.fromEntries(searchParams), sort: 'rating' })}
          >
            Rating
          </button>
        </div>
      </div>
      
      <div className="product-grid">
        {sortedProducts.map(product => (
          <div key={product.id} className="product-card">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-category">Category: {product.category}</p>
            <p className="product-price">Price: ${product.price}</p>
            <p className="product-rating">Rating: {product.rating} ★</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;