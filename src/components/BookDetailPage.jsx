import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge, Form } from 'react-bootstrap';
import StarRating from './StarRating';
import Arrival1 from '../images/Arrival1.png';

const BookDetailPage = ({ isLoggedIn = false, hasPurchased = false }) => {
  const { slug } = useParams();
  
  // Sample book data
  const book = {
    id: 1,
    slug: "big-dumb-eyes",
    title: "Big Dumb Eyes",
    author: "John Doe",
    genre: "Fiction, Humor",
    price: "$175.00",
    originalPrice: "$200.00",
    description: "A fascinating story about the adventures of a peculiar character with unusually large eyes. This heartwarming tale explores themes of acceptance and self-discovery through humorous and touching moments.",
    inStock: true,
    rating: 4.5,
    reviewCount: 42,
    reviews: [
      { id: 1, user: "Jane Smith", rating: 5, date: "2023-05-15", comment: "Absolutely loved this book! The characters were so well-developed and the plot kept me hooked throughout." },
      { id: 2, user: "Mike Johnson", rating: 4, date: "2023-04-22", comment: "Great read, though the ending felt a bit rushed. Would still recommend to others." }
    ]
  }

  return (
    <Container className="py-5 book-detail-page">
      <Row className="g-4">
        {/* Book Image Column */}
        <Col lg={4} md={5}>
          <Card className="border-0 shadow-sm">
            <Card.Img variant="top" src={Arrival1} className="p-3" alt={book.title} />
          </Card>
        </Col>
        
        {/* Book Details Column */}
        <Col lg={5} md={7}>
          <div className="book-meta">
            <Badge bg="light" text="dark" className="mb-3 genre-badge">
              {book.genre}
            </Badge>
            
            <h1 className="book-title mb-2">{book.title}</h1>
            <p className="text-muted author-name mb-3">by {book.author}</p>
            
            <div className="d-flex align-items-center mb-3">
              <StarRating rating={book.rating} />
              <span className="ms-2 text-muted">({book.reviewCount} reviews)</span>
            </div>
            
            <div className="availability mb-3">
              {book.inStock ? (
                <Badge bg="success" className="me-2">In Stock</Badge>
              ) : (
                <Badge bg="danger">Out of Stock</Badge>
              )}
            </div>
            
            <div className="price-section mb-4">
              {book.originalPrice && (
                <span className="text-muted text-decoration-line-through me-2">
                  {book.originalPrice}
                </span>
              )}
              <span className="book-price fw-bold">{book.price}</span>
            </div>
            
            <p className="book-description mb-4">{book.description}</p>
            
            {isLoggedIn && (
              <div className="action-buttons d-flex gap-3 mb-4">
                <Button variant="dark" className="px-4 py-2">
                  <i className="ri-shopping-cart-line me-2"></i> Add to Cart
                </Button>
                <Button variant="outline-dark" className="px-4 py-2">
                  <i className="ri-heart-line me-2"></i> Add to Wishlist
                </Button>
              </div>
            )}
            
            <div className="additional-details">
              <p className="mb-1"><strong>Publisher:</strong> Example Publishing</p>
              <p className="mb-1"><strong>ISBN:</strong> 978-1234567890</p>
              <p className="mb-1"><strong>Pages:</strong> 320</p>
              <p className="mb-1"><strong>Release Date:</strong> January 15, 2023</p>
            </div>
          </div>
        </Col>
        
        {/* Reviews Column */}
        <Col lg={3} className="mt-lg-0 mt-4">
          <Card className="border-0 shadow-sm h-100 p-3">
            <h4 className="mb-4">Customer Reviews</h4>
            
            {book.reviews.length > 0 ? (
              <div className="reviews-list">
                {book.reviews.map(review => (
                  <div key={review.id} className="review-item mb-4 pb-3 border-bottom">
                    <div className="d-flex justify-content-between mb-2">
                      <strong>{review.user}</strong>
                      <small className="text-muted">{review.date}</small>
                    </div>
                    <StarRating rating={review.rating} small />
                    <p className="mt-2 mb-0">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted">No reviews yet. Be the first to review!</p>
            )}
            
            {isLoggedIn && hasPurchased && (
              <Button variant="outline-dark" className="w-100 mt-3">
                Write a Review
              </Button>
            )}
          </Card>
        </Col>
      </Row>
      
      {/* Review Form Section (Conditional) */}
      {isLoggedIn && hasPurchased && (
        <Row className="mt-5">
          <Col lg={9}>
            <Card className="border-0 shadow-sm p-4">
              <h4 className="mb-4">Write a Review</h4>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Your Rating</Form.Label>
                  <div>
                    <StarRating interactive />
                  </div>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Your Review</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={4} 
                    placeholder="Share your honest thoughts about this book..." 
                  />
                </Form.Group>
                
                <div className="d-flex justify-content-end">
                  <Button variant="dark" type="submit" className="px-4 py-2">
                    Submit Review
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      )}
      
      {/* Login Prompt for non-logged in users */}
      {!isLoggedIn && (
        <Row className="mt-5">
          <Col lg={9}>
            <Card className="border-0 shadow-sm p-4 text-center">
              <h4 className="mb-3">Want to review this book?</h4>
              <p className="text-muted mb-4">
                Please login and purchase this book to share your review with the community.
              </p>
              <Button variant="outline-dark bg-dark text-light" className="px-4">
                Login and Purchase to review this book
              </Button>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default BookDetailPage;