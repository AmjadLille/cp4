import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listStickers } from '../redux/actions/stickerActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Sticker from '../components/Sticker';
import { Row, Col } from 'react-bootstrap';

const HomePage = () => {
  const dispatch = useDispatch();
  const stickerList = useSelector((state) => state.stickerList);
  const { stickers, loading, error } = stickerList;

  useEffect(() => {
    dispatch(listStickers());
  }, [dispatch]);

  return (
    <>
      <h2>Latest Collection</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {stickers.map((sticker) => (
            <Col key={sticker._id} sm={12} md={6} lg={4} xl={3}>
              <Sticker {...sticker} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomePage;
