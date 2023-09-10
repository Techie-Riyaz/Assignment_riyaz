import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "../App.css";
function AddProduct() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://uiexercise.onemindindia.com/api/Product")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const [prdName, setPrdName] = useState("");
  const [availableQty, setAvailableQty] = useState(0);

  const handleSubmit = async () => {
    debugger;
    try {
      debugger;
      console.log(prdName, availableQty);
      const response = await axios.post(
        "https://uiexercise.onemindindia.com/api/Product",
        {
          productName: prdName,
          availableQuantity: Number(availableQty),
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                value={prdName}
                onChange={(e) => setPrdName(e.target.value)}
                placeholder="Product Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Available Quantity</Form.Label>
              <Form.Control
                type="number"
                value={availableQty}
                onChange={(e) => setAvailableQty(e.target.value)}
                placeholder="Available Quantity"
              />
            </Form.Group>

            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>

      <Table striped variant="dark">
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Products Name</th>
            <th>Available Quantity</th>
            <th>
              <Button variant="primary" onClick={handleShow}>
                Add Product
              </Button>{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.productId}>
              <td> {product.productId ? product.productId : "-"}</td>
              <td> {product.productName ? product.productName : "-"}</td>
              <td>
                {" "}
                {product.availableQuantity ? product.availableQuantity : "-"}
              </td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default AddProduct;
