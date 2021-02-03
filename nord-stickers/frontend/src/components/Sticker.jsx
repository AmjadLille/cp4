import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Sticker = ({ name, image, _id, rating, numReviews, price }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/sticker/${_id}`}>
        <Card.Img src={image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/sticker/${_id}`}>
          <Card.Title as="div">
            <strong>{name} </strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating valeu={rating} text={`${numReviews} reviews`} />
        </Card.Text>
        <Card.Text as="h3">{price} &euro;</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Sticker;
