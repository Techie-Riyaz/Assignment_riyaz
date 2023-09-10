import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from "react";
import "../App.css";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [data,setData] = useState(`null`);
  useEffect(() => {
    axios
      .get("https://uiexercise.onemindindia.com/api/Product")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://uiexercise.onemindindia.com/api/OrderProducts",
        {
          "orderId": data.productId,
          "customerId": data.productId,
          "productId": data.productId,
          "quantity": 1
        }
        
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
            <h2 style={{ textAlign: "center" }}>Product List</h2>

      <div className="flex-cont">
      {products.map((product) => (
      <Card style={{ width: '18rem' }} key={product.productId}>
      <Card.Img variant="top" src="https://cdn3d.iconscout.com/3d/premium/thumb/product-5806313-4863042.png" width={'200px'} height={'200px'} />
      <Card.Body>
        <Card.Text>{product.productName ? product.productName : "-"}</Card.Text>
                <Card.Text>
        Quantity:{" "}
            {product.availableQuantity ? product.availableQuantity : <span style={{color:'red',}}>OUT OF STOCK</span>}
        </Card.Text>
        <Button variant="primary" onClick={handleSubmit}>Order</Button>
       
      </Card.Body>
    </Card>
      ))}
      </div>
      </div>
      );
}
