import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Badge, Pagination, Modal, ListGroup } from 'react-bootstrap';
import { FiSearch, FiFilter, FiHeart, FiShoppingCart, FiX } from 'react-icons/fi';
import { BsSortDown, BsStars } from 'react-icons/bs';

import Book1 from '../images/book.png';
import Book2 from '../images/book1.png';
import Book3 from '../images/book2.png';
import Book4 from '../images/book3.png';
import Book5 from '../images/book4.png';
import Book6 from '../images/Book5.png';
import Book7 from '../images/Book6.png';
import Book8 from '../images/Book7.png';
import Book9 from '../images/Book8.png';
import Book10 from '../images/Book9.png';
import Book11 from '../images/Book10.png';
import Book12 from '../images/Book11.png';
import Book13 from '../images/Book12.png';

// Sample data
const genres = ['Fiction', 'Non-Fiction', 'Fantasy', 'Mystery', 'Romance', 'Sci-Fi'];
const authors = ['J.K. Rowling', 'Stephen King', 'George R.R. Martin', 'Agatha Christie'];
const booksData = [
    { id: 1, title: 'Book Title 1', author: authors[Math.floor(Math.random() * authors.length)], genre: genres[Math.floor(Math.random() * genres.length)], price: `$${(Math.random() * 50 + 10).toFixed(2)}`, inStock: Math.random() > 0.3, image: Book1 },
    { id: 2, title: 'Book Title 2', author: authors[Math.floor(Math.random() * authors.length)], genre: genres[Math.floor(Math.random() * genres.length)], price: `$${(Math.random() * 50 + 10).toFixed(2)}`, inStock: Math.random() > 0.3, image: Book2 },
    { id: 3, title: 'Book Title 3', author: authors[Math.floor(Math.random() * authors.length)], genre: genres[Math.floor(Math.random() * genres.length)], price: `$${(Math.random() * 50 + 10).toFixed(2)}`, inStock: Math.random() > 0.3, image: Book3 },
    { id: 4, title: 'Book Title 4', author: authors[Math.floor(Math.random() * authors.length)], genre: genres[Math.floor(Math.random() * genres.length)], price: `$${(Math.random() * 50 + 10).toFixed(2)}`, inStock: Math.random() > 0.3, image: Book4 },
    { id: 5, title: 'Book Title 5', author: authors[Math.floor(Math.random() * authors.length)], genre: genres[Math.floor(Math.random() * genres.length)], price: `$${(Math.random() * 50 + 10).toFixed(2)}`, inStock: Math.random() > 0.3, image: Book5 },
    { id: 6, title: 'Book Title 6', author: authors[Math.floor(Math.random() * authors.length)], genre: genres[Math.floor(Math.random() * genres.length)], price: `$${(Math.random() * 50 + 10).toFixed(2)}`, inStock: Math.random() > 0.3, image: Book6 },
    { id: 7, title: 'Book Title 7', author: authors[Math.floor(Math.random() * authors.length)], genre: genres[Math.floor(Math.random() * genres.length)], price: `$${(Math.random() * 50 + 10).toFixed(2)}`, inStock: Math.random() > 0.3, image: Book7 },
    { id: 8, title: 'Book Title 8', author: authors[Math.floor(Math.random() * authors.length)], genre: genres[Math.floor(Math.random() * genres.length)], price: `$${(Math.random() * 50 + 10).toFixed(2)}`, inStock: Math.random() > 0.3, image: Book8 },
    { id: 9, title: 'Book Title 9', author: authors[Math.floor(Math.random() * authors.length)], genre: genres[Math.floor(Math.random() * genres.length)], price: `$${(Math.random() * 50 + 10).toFixed(2)}`, inStock: Math.random() > 0.3, image: Book9 },
    { id: 10, title: 'Book Title 10', author: authors[Math.floor(Math.random() * authors.length)], genre: genres[Math.floor(Math.random() * genres.length)], price: `$${(Math.random() * 50 + 10).toFixed(2)}`, inStock: Math.random() > 0.3, image: Book10 },
    { id: 11, title: 'Book Title 11', author: authors[Math.floor(Math.random() * authors.length)], genre: genres[Math.floor(Math.random() * genres.length)], price: `$${(Math.random() * 50 + 10).toFixed(2)}`, inStock: Math.random() > 0.3, image: Book11 },
    { id: 12, title: 'Book Title 12', author: authors[Math.floor(Math.random() * authors.length)], genre: genres[Math.floor(Math.random() * genres.length)], price: `$${(Math.random() * 50 + 10).toFixed(2)}`, inStock: Math.random() > 0.3, image: Book12 },
];




const Books = () => {
    // State declarations
    const [wishlist, setWishlist] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
      genres: [],
      authors: [],
      availability: 'all'
    });
    const [sortBy, setSortBy] = useState('title');
    const [currentPage, setCurrentPage] = useState(1);
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const booksPerPage = 8;
  
    // Wishlist functions - moved INSIDE the component
    const addToWishlist = (book) => {
      setWishlist(prev => {
        if (prev.some(item => item.id === book.id)) return prev;
        return [...prev, book];
      });
    };
  
    const removeFromWishlist = (bookId) => {
      setWishlist(prev => prev.filter(item => item.id !== bookId));
    };
  
    // Cart functions
    const addToCart = (book) => {
      setCart(prevCart => {
        const existingItem = prevCart.find(item => item.id === book.id);
        if (existingItem) {
          return prevCart.map(item =>
            item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        return [...prevCart, { ...book, quantity: 1 }];
      });
    };
  

  // Remove from cart function
  const removeFromCart = (bookId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== bookId));
  };

  // Update quantity function
  const updateQuantity = (bookId, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === bookId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return sum + (price * item.quantity);
  }, 0);

  // Filter and sort books
  const filteredBooks = booksData
    .filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = filters.genres.length === 0 || filters.genres.includes(book.genre);
      const matchesAuthor = filters.authors.length === 0 || filters.authors.includes(book.author);
      const matchesAvailability = filters.availability === 'all' || 
                                (filters.availability === 'inStock' && book.inStock) || 
                                (filters.availability === 'outOfStock' && !book.inStock);
      return matchesSearch && matchesGenre && matchesAuthor && matchesAvailability;
    })
    .sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'author') return a.author.localeCompare(b.author);
      if (sortBy === 'price') return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
      if (sortBy === 'newest') return b.id - a.id;
      return 0;
    });

  // Pagination logic
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  const handleFilterChange = (type, value) => {
    setFilters(prev => {
      if (type === 'genres' || type === 'authors') {
        return {
          ...prev,
          [type]: prev[type].includes(value) 
            ? prev[type].filter(item => item !== value) 
            : [...prev[type], value]
        };
      }
      return { ...prev, [type]: value };
    });
    setCurrentPage(1);
  };

  return (
    <Container className="py-5 books-page">
      {/* Cart Button with Badge */}
      <div className="position-fixed end-0 bottom-0 m-4" style={{ zIndex: 1000 }}>
        <Button 
          variant="warning" 
          onClick={() => setShowCart(true)}
          className="rounded-circle p-3 d-flex align-items-center justify-content-center"
          style={{ width: '60px', height: '60px', backgroundColor: '#f99f3f', borderColor: '#f99f3f' }}
        >
          <FiShoppingCart size={24} style={{ color: '#012E4A' }} />
          {cart.length > 0 && (
            <Badge 
              pill 
              bg="danger" 
              className="position-absolute top-0 start-100 translate-middle"
            >
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </Badge>
          )}
        </Button>
      </div>

      {/* Cart Modal */}
      <Modal show={showCart} onHide={() => setShowCart(false)} centered>
        <Modal.Header closeButton style={{ backgroundColor: '#012E4A', color: 'white' }}>
          <Modal.Title>Your Books Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length === 0 ? (
            <div className="text-center py-4">
              <FiShoppingCart size={48} style={{ color: '#f99f3f' }} className="mb-3" />
              <h5 style={{ color: 'white' }}>Your cart is empty</h5>
              <p className="text-danger">Add some books to get started!</p>
            </div>
          ) : (
            <ListGroup variant="flush">
              {cart.map(item => (
                <ListGroup.Item key={item.id} className="d-flex align-items-center py-3">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ width: '60px', height: '80px', objectFit: 'cover', marginRight: '15px' }}
                  />
                  <div className="flex-grow-1">
                    <h6 style={{ color: '#012E4A' }}>{item.title}</h6>
                    <small className="text-muted">{item.author}</small>
                    <div className="d-flex align-items-center mt-2">
                      <Button 
                        variant="outline-secondary" 
                        size="sm" 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        style={{ width: '30px' }}
                      >
                        -
                      </Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button 
                        variant="outline-secondary" 
                        size="sm" 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        style={{ width: '30px' }}
                      >
                        +
                      </Button>
                      <span className="ms-auto fw-bold" style={{ color: '#f99f3f' }}>
                        ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <Button 
                    variant="link" 
                    onClick={() => removeFromCart(item.id)}
                    className="text-danger"
                  >
                    <FiX size={20} />
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <h5 className="text-light m-0">Total: <span style={{ color: 'orange' }}>${totalPrice.toFixed(2)}</span></h5>
          <Button 
            variant="warning" 
            disabled={cart.length === 0}
            style={{ backgroundColor: '#012E4A ', color: 'white' }}
          >
            Proceed to Checkout
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Search and Filter Header */}
      <div className="books-header mb-5 p-4 rounded-3" style={{ backgroundColor: '#012E4A' }}>
        <Row className="align-items-center g-4">
          <Col md={6}>
            <div className="search-bar position-relative">
              <FiSearch className="position-absolute top-50 start-0 translate-middle-y ms-3" style={{ color: '#f99f3f' }} />
              <Form.Control
                type="text"
                placeholder="Search by title or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="ps-5 custom-search-inp"
                
              />
            </div>
          </Col>
          
          <Col md={6}>
            <div className="d-flex justify-content-md-end gap-3">
              <div className="sort-dropdown">
                <BsSortDown className="me-2" style={{ color: 'white' }} />
                <Form.Select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{ 
                    backgroundColor: '#012E4A',
                    color: 'white',
                    borderColor: '#f99f3f'
                  }}
                >
                  <option value="title" style={{ backgroundColor: '#012E4A' }}>Sort by Title</option>
                  <option value="author" style={{ backgroundColor: '#012E4A' }}>Sort by Author</option>
                  <option value="price" style={{ backgroundColor: '#012E4A' }}>Sort by Price</option>
                  <option value="newest" style={{ backgroundColor: '#012E4A' }}>Newest First</option>
                </Form.Select>
              </div>
              
              <Button 
                variant="outline-warning" 
                className="d-flex align-items-center"
                style={{ borderColor: '#f99f3f', color: '#f99f3f' }}
              >
                <FiFilter className="me-2" />
                Filters
              </Button>
            </div>
          </Col>
        </Row>
        
        {/* Expanded Filters */}
        <Row className="mt-4 g-3">
          <Col md={4}>
            <div className="filter-section p-3 rounded" style={{ backgroundColor: '#012E4A', color: 'white' }}>
              <h6 className="mb-3" style={{ color: '#f99f3f' }}>Genres</h6>
              {genres.map(genre => (
                <Form.Check
                  key={genre}
                  type="checkbox"
                  id={`genre-${genre}`}
                  label={genre}
                  checked={filters.genres.includes(genre)}
                  onChange={() => handleFilterChange('genres', genre)}
                  className="mb-2 text-white"
                />
              ))}
            </div>
          </Col>
          
          <Col md={4}>
            <div className="filter-section p-3 rounded" style={{ backgroundColor: '#012E4A', color: 'white' }}>
              <h6 className="mb-3" style={{ color: '#f99f3f' }}>Authors</h6>
              {authors.map(author => (
                <Form.Check
                  key={author}
                  type="checkbox"
                  id={`author-${author}`}
                  label={author}
                  checked={filters.authors.includes(author)}
                  onChange={() => handleFilterChange('authors', author)}
                  className="mb-2 text-white"
                />
              ))}
            </div>
          </Col>
          
          <Col md={4}>
            <div className="filter-section p-3 rounded" style={{ backgroundColor: '#012E4A', color: 'white' }}>
              <h6 className="mb-3" style={{ color: '#f99f3f' }}>Availability</h6>
              <Form.Check
                type="radio"
                id="availability-all"
                label="All Books"
                name="availability"
                checked={filters.availability === 'all'}
                onChange={() => handleFilterChange('availability', 'all')}
                className="mb-2 text-white"
              />
              <Form.Check
                type="radio"
                id="availability-inStock"
                label="In Stock"
                name="availability"
                checked={filters.availability === 'inStock'}
                onChange={() => handleFilterChange('availability', 'inStock')}
                className="mb-2 text-white"
              />
              <Form.Check
                type="radio"
                id="availability-outOfStock"
                label="Out of Stock"
                name="availability"
                checked={filters.availability === 'outOfStock'}
                onChange={() => handleFilterChange('availability', 'outOfStock')}
                className="text-white"
              />
            </div>
          </Col>
        </Row>
      </div>

      {/* Book Grid */}
      <Row xs={1} sm={2} md={3} lg={4} className="g-4 mb-5">
        {currentBooks.map(book => (
          <Col key={book.id}>
            <Card className="h-100 shadow-sm book-card" style={{ borderColor: '#012E4A' }}>
              <div className="book-image-container">
                <Card.Img 
                  variant="top" 
                  src={book.image} 
                  alt={book.title}
                  className="book-image"
                />
                {book.inStock ? (
                  <Badge bg="success" className="availability-badge">In Stock</Badge>
                ) : (
                  <Badge bg="secondary" className="availability-badge">Out of Stock</Badge>
                )}
              </div>
              <Card.Body className="d-flex flex-column">
                <div className="mb-2">
                  <Badge 
                    className="genre-badge" 
                    style={{ 
                      backgroundColor: '#f99f3f', 
                      color: '#012E4A',
                      fontWeight: 'bold'
                    }}
                  >
                    {book.genre}
                  </Badge>
                </div>
                <Card.Title className="book-title" style={{ color: '#012E4A' }}>{book.title}</Card.Title>
                <Card.Subtitle className="mb-2 book-author" style={{ color: '#6c757d' }}>{book.author}</Card.Subtitle>
                <Card.Text className="book-price mt-auto" style={{ color: '#f99f3f', fontWeight: 'bold' }}>
                  {book.price}
                </Card.Text>
                <div className="d-flex gap-2 mt-3">
                <Button 
                variant="outline-warning" 
                size="sm" 
                className="flex-grow-1"
                style={{ borderColor: '#f99f3f', color: '#f99f3f' }}
                onClick={() => wishlist.some(item => item.id === book.id) 
                  ? removeFromWishlist(book.id) 
                  : addToWishlist(book)}
              >
                <FiHeart className="me-1" /> 
                {wishlist.some(item => item.id === book.id) ? 'In Wishlist' : 'Wishlist'}
              </Button>
                  <Button 
                    variant="warning" 
                    size="sm" 
                    className="flex-grow-1"
                    disabled={!book.inStock}
                    onClick={() => addToCart(book)}
                    style={{ backgroundColor: '#f99f3f', borderColor: '#f99f3f', color: '#012E4A' }}
                  >
                    <FiShoppingCart className="me-1" /> Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      {filteredBooks.length > booksPerPage && (
        <div className="d-flex justify-content-center">
          <Pagination>
            <Pagination.Prev 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
              disabled={currentPage === 1}
              style={{ backgroundColor: '#012E4A', color: 'white', borderColor: '#f99f3f' }}
            />
            {Array.from({ length: totalPages }, (_, i) => (
              <Pagination.Item
                key={i + 1}
                active={i + 1 === currentPage}
                onClick={() => setCurrentPage(i + 1)}
                style={{ 
                  backgroundColor: i + 1 === currentPage ? '#f99f3f' : '#012E4A',
                  color: i + 1 === currentPage ? '#012E4A' : 'white',
                  borderColor: '#f99f3f'
                }}
              >
                {i + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
              disabled={currentPage === totalPages}
              style={{ backgroundColor: '#012E4A', color: 'white', borderColor: '#f99f3f' }}
            />
          </Pagination>
        </div>
      )}

      {/* No Results Message */}
      {filteredBooks.length === 0 && (
        <div className="text-center py-5">
          <BsStars size={48} style={{ color: '#f99f3f' }} className="mb-3" />
          <h4 style={{ color: '#012E4A' }}>No books found</h4>
          <p className="text-muted">Try adjusting your search or filters</p>
          <Button 
            variant="outline-warning"
            onClick={() => {
              setSearchTerm('');
              setFilters({ genres: [], authors: [], availability: 'all' });
            }}
            style={{ borderColor: '#f99f3f', color: '#f99f3f' }}
          >
            Reset Filters
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Books;