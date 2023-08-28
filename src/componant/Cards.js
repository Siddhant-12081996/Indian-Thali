import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardData from "./CardsData";
import "./Style.css";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Cards() {
  const [data, setData] = useState(CardData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
  };

  const getdata = useSelector((state) => state.cartreducer.carts);

  const handleCheckout = () => {
    if (getdata.length < 2) {
      alert("At least two items should be present in Thali.");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <Container className="mt-3">
      <h2 className="text-center">Apna Restaurant</h2>
      <Row className="justify-content-center">
        {data.map((ele, id) => (
          <Col xs={12} md={6} lg={4} key={id} className="mb-4">
            <Card className="card_style">
              <Card.Img variant="top" src={ele.imgdata} className="mt-3" style={{ height: "16rem" }} />
              <Card.Body>
                <Card.Title>{ele.rname}</Card.Title>
                <Card.Text>Price: ₹ {ele.price}</Card.Text>
                <div className="button_div">
                  <Button variant="primary" onClick={() => send(ele)} className="col-lg-12">
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <button onClick={handleCheckout} className="btn btn-success">
        Checkout
      </button>
    </Container>
  );
}

export default Cards;
