import React from 'react';
import stickers from '../stickers';
import { Row, Col } from 'react-bootstrap';
import Sticker from '../components/Sticker';

const HomePage = () => {
  return (
    <>
      <h1>Latest Stickers</h1>
      <Row>
        {stickers.map((sticker) => (
          <Col key={sticker._id} sm={12} md={6} lg={4} xl={3}>
            <Sticker {...sticker} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
