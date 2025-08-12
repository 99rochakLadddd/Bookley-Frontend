import React from 'react';
import { Container, Row, Col, Card, Button, Badge, ListGroup } from 'react-bootstrap';
import { FiShoppingCart, FiX, FiHeart } from 'react-icons/fi';
import Book1 from '../images/book.png';

const Wishlist = ({ wishlist = [], setWishlist = () => {}, addToCart = () => {} }) => {
  // Static wishlist data for demonstration
  const staticWishlist = [
    {
      id: 1,
      title: 'Book Title 1',
      author: 'George R.R. Martin',
      genre: 'Mystery',
      price: '$32.21',
      image: Book1
    }
  ];

  // Use static data if real wishlist is empty
  const displayWishlist = wishlist.length > 0 ? wishlist : staticWishlist;

  const moveToCart = (book) => {
    addToCart(book);
    removeFromWishlist(book.id);
  };

  const removeFromWishlist = (bookId) => {
    if (wishlist.length > 0) {
      setWishlist(prev => prev.filter(item => item.id !== bookId));
    }
    // For static data, this will just log to console
    console.log(`Removed book ${bookId} from wishlist`);
  };

  return (
    <Container className="py-5 wishlist-page">
      <h2 className="mb-4" style={{ color: '#012E4A' }}>
        <FiHeart className="me-2" style={{ color: '#f99f3f' }} />
        My Wishlist
      </h2>

      {displayWishlist.length === 0 ? (
        <div className="text-center py-5">
          <FiHeart size={48} style={{ color: '#f99f3f' }} className="mb-3" />
          <h4 style={{ color: '#012E4A' }}>Your wishlist is empty</h4>
          <p className="text-muted">Add some books to your wishlist to see them here</p>
        </div>
      ) : (
        <Row>
          <Col lg={8}>
            <ListGroup variant="flush">
              {displayWishlist.map(book => (
                <ListGroup.Item key={book.id} className="mb-3 p-3 shadow-sm rounded">
                  <div className="d-flex">
                    <img 
                      src={book.image} 
                      alt={book.title} 
                      style={{ 
                        width: '100px', 
                        height: '140px', 
                        objectFit: 'cover',
                        borderRadius: '5px',
                        marginRight: '20px'
                      }}
                    />
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <h5 style={{ color: '#012E4A' }}>{book.title}</h5>
                          <p className="text-muted mb-2">{book.author}</p>
                          <Badge 
                            className="mb-2" 
                            style={{ 
                              backgroundColor: '#f99f3f', 
                              color: '#012E4A',
                              fontWeight: 'bold'
                            }}
                          >
                            {book.genre}
                          </Badge>
                        </div>
                        <div>
                          <h5 style={{ color: '#f99f3f', fontWeight: 'bold' }}>
                            {book.price}
                          </h5>
                        </div>
                      </div>
                      <div className="d-flex gap-2 mt-3">
                        <Button 
                          variant="outline-warning" 
                          className="flex-grow-1"
                          style={{ borderColor: '#f99f3f', color: '#f99f3f' }}
                          onClick={() => removeFromWishlist(book.id)}
                        >
                          <FiX className="me-1" /> Remove
                        </Button>
                        <Button 
                          variant="warning" 
                          className="flex-grow-1"
                          style={{ backgroundColor: '#f99f3f', borderColor: '#f99f3f', color: '#012E4A' }}
                          onClick={() => moveToCart(book)}
                        >
                          <FiShoppingCart className="me-1" /> Move to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col lg={4}>
            <Card className="shadow-sm p-4" style={{ borderColor: '#012E4A' }}>
              <div className="text-center mb-4">
                <FiHeart size={48} style={{ color: '#f99f3f' }} />
                <h4 className="mt-2" style={{ color: '#012E4A' }}>Wishlist Summary</h4>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Items:</span>
                <span style={{ color: '#012E4A', fontWeight: 'bold' }}>{displayWishlist.length}</span>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <span className="text-muted">Total Value:</span>
                <span style={{ color: '#f99f3f', fontWeight: 'bold' }}>
                  ${displayWishlist.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0).toFixed(2)}
                </span>
              </div>
              <Button 
                variant="warning" 
                className="w-100"
                style={{ backgroundColor: '#f99f3f', borderColor: '#f99f3f', color: '#012E4A' }}
                disabled={displayWishlist.length === 0}
                onClick={() => {
                  if (wishlist.length > 0) {
                    displayWishlist.forEach(book => addToCart(book));
                    setWishlist([]);
                  } else {
                    console.log('Added all static books to cart');
                  }
                }}
              >
                <FiShoppingCart className="me-1" /> Move All to Cart
              </Button>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Wishlist;