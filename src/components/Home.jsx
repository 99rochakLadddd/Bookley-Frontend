import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import StarRating  from './StarRating';


import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import travelSlider1 from '../images/travel-slider-1.jpg';
import travelSlider2 from '../images/slider1.jpeg';
import BookOffer1 from '../images/offer-img-2.0.webp';

import ArrivalMain from '../images/book-stack.png';
import ArrivalBanner from '../images/ArrivalBanner.png';

import Arrival1 from '../images/Arrival1.png';
import Arrival2 from '../images/Arrival2.png';
import Arrival3 from '../images/Arrival3.png';
import Arrival4 from '../images/Arrival4.png';


import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// Import your images
import Book1 from '../images/book.png';
import Book2 from '../images/book1.png';
import Book3 from '../images/book2.png';
import Book4 from '../images/book3.png';
import Book5 from '../images/book4.png';


const HeroCarousel = () => {
  return (
    <section className="slider-container p-0 mt-0">
      <Carousel fade indicators className="sliderrr">
        <Carousel.Item className="c-item">
          <img
            className="d-block c-image w-100"
            src={travelSlider1}
            alt="First slide"
          />
          <Carousel.Caption className="norway-container">
            <Card className="text-center bg-transparent border-0">
              <Card.Body className="card-ko-body">
              <h2 className="black-friday">Super Summer</h2>
                <h1 className="friday-off">50% off</h1>
                <p className="tour-amazing-p">
                Dive into two of the season's must-read books. From thrilling adventures to heartwarming stories—make this a Super Summer of reading!                </p>
                <Button className="call_to_action_button tour-amazing-button px-4 py-2">
                  Shop Now
                </Button>
              </Card.Body>
            </Card>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="c-item">
          <img
            className="d-block c-image w-100"
            src={travelSlider2}
            alt="Second slide"
          />
          <Carousel.Caption className="norway-container">
            <Card className="text-center bg-transparent border-0">
              <Card.Body className="card-ko-body">
                <h2 className="black-friday">Black Friday</h2>
                <h1 className="friday-off">50% off</h1>
                <p className="friday-off-p">
                Discover incredible book deals this season. Save big on bestsellers, classics, and new releases—only for a limited time!                </p>
                <Button className="call_to_action_button tour-amazing-button px-4 py-2">
                  Shop Now
                </Button>
              </Card.Body>
            </Card>
          </Carousel.Caption>
        </Carousel.Item>

        {/* Add other carousel items similarly */}
      </Carousel>
    </section>
  );
};

const OffersSection = () => {
    return (
      <section className="section-2-offers bg-light mt-5">
        <Container fluid className="p-lg-5 p-3">
          <Row className="gx-2 row-cols-1 row-cols-lg-3 row-cols-md-1 row-cols-sm-1 g-1 text-center">
            {/* First Offer Column */}
            <Col xs={12} lg={3} md={4} sm={6} className="h-100 mb-3">
              <div className="position-relative h-100">
                <div className="card text-bg-dark border-0">
                  <img 
                    src={BookOffer1}
                    className="card-img offer-col-hover" 
                    alt="Trekking bags" 
                  />
                  <div className="card-img-overlay car-mathi-content">
                    <h5 className="card-title trekking-ct mb-0">Trekking</h5>
                    <h5 className="card-title trekking-ct mb-1">Bags</h5>
                    <a href="#" className="btn btn-bags-shop">SHOP NOW</a>
                  </div>
                </div>
              </div>
            </Col>
  
            {/* Second Offer Column - Shoes */}
            <Col xs={12} lg={3} md={4} sm={6} className="h-100 mb-3">
              <div className="position-relative h-100">
                <img 
                  src={BookOffer1}
                  className="img-fluid border-0 offer-col-hover" 
                  alt="Shoes offer" 
                />
                <div className="position-absolute parallelogram p-3 text-light">
                  <h4 className="card-title all-products-h4">Shoes</h4>
                  <p className="card-title fs-6 yellow-25off">25% OFF</p>
                  <a href="#" className="btn btn-dark-blue">SHOP NOW</a>
                </div>
              </div>
            </Col>
  
            {/* Third Offer Column - Trekking Bags */}
            <Col xs={12} lg={3} md={4} sm={6} className="h-100 mb-3">
              <div className="position-relative h-100">
                <div className="card text-bg-dark border-0">
                  <img 
                    src={BookOffer1}
                    className="card-img offer-col-hover" 
                    alt="Trekking bags" 
                  />
                  <div className="card-img-overlay car-mathi-content">
                    <h5 className="card-title trekking-ct mb-0">Trekking</h5>
                    <h5 className="card-title trekking-ct mb-1">Bags</h5>
                    <a href="#" className="btn btn-bags-shop">SHOP NOW</a>
                  </div>
                </div>
              </div>
            </Col>

            {/* Third Offer Column - Trekking Bags */}
            <Col xs={12} lg={3} md={4} sm={6} className="h-100 mb-3">
            <div className="position-relative h-100">
                <div className="card text-bg-dark border-0">
                <img 
                    src={BookOffer1}
                    className="card-img offer-col-hover" 
                    alt="Trekking bags" 
                />
                <div className="card-img-overlay car-mathi-content">
                    <h5 className="card-title trekking-ct mb-0">Trekking</h5>
                    <h5 className="card-title trekking-ct mb-1">Bags</h5>
                    <a href="#" className="btn btn-bags-shop">SHOP NOW</a>
                </div>
                </div>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  };

  const BookCarouselSection = () => {
    const books = [
      { id: 1, image: Book1, title: "The Let Them Theory", isNew: true },
      { id: 2, image: Book2, title: "Sunrise Reaping" },
      { id: 3, image: Book3, title: "The Housemaid" },
      { id: 4, image: Book4, title: "Home Apotheracy" },
      { id: 5, image: Book5, title: "Onyx Storm" },
    ];
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } }
      ]
    };
  
    return (
      <section className="book-carousel-section py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="section-title position-relative d-inline-block">
              <span className="text-top-custom">Top</span> Selling Books
            </h2>
            <p className="section-subtitle text-muted mt-3">
              Discover this week's most popular reads
            </p>
          </div>
  
          <Slider {...settings}>
            {books.map(book => (
              <div key={book.id} className="px-2">
                <div className="col-ko-border">
                  <Card className="border-0 h-100 shadow-sm hover-effect top-selling-card">
                    {book.isNew && (
                      <div className="new-badge position-absolute bg-danger text-white px-2 py-1 rounded">
                        New Release
                      </div>
                    )}
                    <Card.Img 
                      variant="top" 
                      src={book.image} 
                      className="card-img-top"
                      alt={book.title}
                    />
                    <Card.Body className="bg-dark-custom text-center">
                      <Card.Title className="text-light mb-3 fw-bold">{book.title}</Card.Title>
                      <Button 
                        variant="primary" 
                        className="btn-see-more px-4 py-2 rounded-pill"
                      >
                        Add to cart                      
                        </Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            ))}
          </Slider>
        </Container>
      </section>
    );
  };

  

const SpecialOfferBanner = () => {
    return (
      <Container fluid className="special-offer-banner">
        <div className="book-banner-content text-white p-5">
          <div className="banner-text-content">
            <h5 className="banner-subtitle mb-2">LIMITED TIME OFFER</h5>
            <h2 className="banner-title mb-3">Summer Reading <span className="highlight">Spectacular</span></h2>
            <p className="banner-description mb-4">
              Get 40% off all bestsellers + free shipping on orders over $25.
              Dive into your next adventure with our handpicked collection!
            </p>
            <div className="banner-timer mb-4">
              <span className="timer-item">05</span>h 
              <span className="timer-item">23</span>m 
              <span className="timer-item">47</span>s
            </div>
            <Button 
              variant="light" 
              className="banner-cta-btn px-4 py-2 rounded-pill"
            >
              Shop the Sale
            </Button>
          </div>
          <div className="banner-book-stack">
            <div className="book-1"></div>
            <div className="book-2"></div>
            <div className="book-3"></div>
          </div>
        </div>
      </Container>
    );
  };

const NewArrivalsSection = () => {
  const newArrivals = [
    { 
      id: 1, 
      image: Arrival1, 
      title: "Big dumb eyes", 
      price: "$175.00",
      slug: "big-dumb-eyes" // Add slug for routing
    },
    {
      id: 2, 
      image: Arrival2, 
      title: "The tenant", 
      price: "$125.00",
      slug: "The tenant" // Add slug for routing
    }
    // ... other products with slugs
  ];

  return (
    <section className="section-6 w-100">
    
      <Container className="owl-wala-slider d-flex align-items-center justify-content-center mb-0">
      <div className="text-center mb-5">
      <h2 className="section-title position-relative d-inline-block">
        <span className="text-top-custom">New</span>  Arrivals
      </h2>
      <p className="section-subtitle text-muted mt-3">
        Discover this week's most popular reads
      </p>
    </div>
        <Card className="text-center mb-3 border-0" style={{ width: '14rem' }}>
          <Card.Body>
            <img src={ArrivalMain} className="card-img p-0" alt="collection" />
          </Card.Body>
        </Card>
      </Container>

      <Container>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-2 row-cols-md-2 d-flex align-items-top g-md-4">
          <Col xs={12} lg={6} md={12} sm={12} className="p-0">
            <img src={ArrivalBanner} alt="new arrival" className="img-fluid w-100 arrival-banner" />
          </Col>
          
          <Col md={12} sm={12} xs={6} lg={6} className="gy-4">
            <Row className="row-cols-2 row-cols-md-4 row-cols-lg-2 g-3 text-center">
              {newArrivals.map(product => (
                <Col key={product.id} className="h-100">
                  <Card className="h-100 border-0 new-arrivals-animated-wala-hover">
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body className="text-center h-100 new-arrival-card-body">
                    <Link to={`/books/${product.slug}`} className="card-title-ho text-decoration-none">
                    <Card.Title>{product.title}</Card.Title>
                  </Link>
                                        <Card.Text className="mb-0 fw-bolder book-price-text">{product.price}</Card.Text>
                      <StarRating />
                      <div className="position-absolute products-card-hover">
                        <i className="ri-links-fill" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to compare"></i>
                        <i className="ri-heart-line" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to wishlist"></i>
                        <Link to={`/books/${product.slug}`} className="ri-search-line" title="View Details">
                          <i className="ri-search-line"></i>
                        </Link>

                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};



const HomePage = () => {
  return (
    <section className="bg-light mt-3">
      {/* Hero Carousel */}
      <HeroCarousel />
      
      {/* Offers Section */}
      <OffersSection />
      
      {/* Owl Carousel Section */}
      <BookCarouselSection />

      <SpecialOfferBanner />
      
      {/* New Arrivals Section */}
      <NewArrivalsSection />

    </section>
  );
};





export default HomePage;