import React, { useState, useEffect } from 'react';
import Sticker from '../components/Sticker';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

const HomePage = () => {
  const [stickers, setStickers] = useState([]);

  useEffect(() => {
    const fetchStickers = async () => {
      const { data } = await axios.get('/api/stickers');

      setStickers(data);
    };
    fetchStickers();
  }, []);

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
