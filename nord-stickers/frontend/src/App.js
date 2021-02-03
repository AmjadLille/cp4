import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import StickerPage from './pages/StickerPage';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container className="py-3">
          <Route path="/" exact component={HomePage} />
          <Route path="/sticker/:id" component={StickerPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
