import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';

const StickerPage = ({ match }) => {
  const [sticker, setSticker] = useState({});

  useEffect(() => {
    const fetchSticker = async () => {
      const { data } = await axios.get(`/api/stickers/${match.params.id}`);

      setSticker(data);
    };
    fetchSticker();
  }, [match]);

  const { name, image, rating, price, numReviews, countInStock } = sticker;
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={image} alt={name} />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{name} </h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating valeu={rating} text={`${numReviews} reniews`} />
            </ListGroup.Item>
            <ListGroup.Item>Price: &euro; {price}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price: </Col>
                  <Col>
                    <strong>&euro; {price} </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status: </Col>
                  <Col>{countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className="btn-block" type="button" disabled={countInStock === 0}>
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default StickerPage;
