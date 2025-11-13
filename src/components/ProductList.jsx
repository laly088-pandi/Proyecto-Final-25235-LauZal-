import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from "./ProductCard";


const ProductList = ({ category = null }) => {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let url = 'https://fakestoreapi.com/products';

    if (category) {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducto(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [category]);

  const handleAgregarAlCarrito = (product) => {
    alert(`Producto ${product.title}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Row>
      {producto.map((product) => (
        
        <Col md={4} key={product.id} className="mb-4">
          <ProductCard product={product} agregarAlCarrito={handleAgregarAlCarrito} />
        </Col>
        
      ))}
    </Row>
  );
};

export default ProductList;
