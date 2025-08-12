import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPaperPlane,
  faMapMarkerAlt,
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';
import logoBookley from '../images/logo_bookly.png';

const Footer = () => {
  return (
    <footer className="footer py-5 text-white">
      <Container>
        <Row>
          {/* About Column */}
          <Col md={4} className="mb-4 mb-md-0">
            <Row>
              <Col xs={12}>
                <img 
                  src={logoBookley} 
                  alt="Bookley Logo" 
                  width="260" 
                  height="90"
                  className="img-fluid"
                />
              </Col>
            </Row>
            <Col xs={12}>
              <p className="mt-3">
                Your one-stop shop for all kinds of books. We provide the best collection 
                of books at affordable prices with fast delivery.
              </p>
              <div className="social-icons mt-4">
                <a href="#" className="text-white me-3">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="text-white me-3">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="text-white me-3">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="text-white">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </Col>
          </Col>

          {/* Quick Links Column */}
          <Col md={2} className="mb-4 mb-md-0">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white">Home</a></li>
              <li className="mb-2"><a href="#" className="text-white">Books</a></li>
              <li className="mb-2"><a href="#" className="text-white">New Arrivals</a></li>
              <li className="mb-2"><a href="#" className="text-white">Best Sellers</a></li>
              <li><a href="#" className="text-white">Deals</a></li>
            </ul>
          </Col>

          {/* Customer Service Column */}
          <Col md={2} className="mb-4 mb-md-0">
            <h5 className="mb-3">Customer Service</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white">My Account</a></li>
              <li className="mb-2"><a href="#" className="text-white">Order Tracking</a></li>
              <li className="mb-2"><a href="#" className="text-white">Wishlist</a></li>
              <li className="mb-2"><a href="#" className="text-white">Shipping Policy</a></li>
              <li><a href="#" className="text-white">Returns & Refunds</a></li>
            </ul>
          </Col>

          {/* Newsletter Column */}
          <Col md={4}>
            <h5 className="mb-3">Newsletter</h5>
            <p>Subscribe to our newsletter for the latest updates and offers.</p>
            <Form className="newsletter-form mt-3 d-flex">
              <Form.Control 
                type="email" 
                placeholder="Your email" 
                required 
                className="rounded-0"
              />
              <Button 
                variant="primary" 
                type="submit" 
                className="rounded-0"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
              </Button>
            </Form>
            <div className="mt-4">
              <h5 className="mb-3">Contact Us</h5>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                123 Book Street, Library City
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                +1 234 567 890
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                Bookley@store.com
              </p>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="footer-bottom mt-5 pt-3 border-top border-secondary">
          <Col md={6} className="text-md-start mb-3 mb-md-0">
            &copy; {new Date().getFullYear()} Bookley. All rights reserved.
          </Col>
          <Col md={6} className="text-md-end">
            <a href="#" className="text-white me-3">Privacy Policy</a>
            <a href="#" className="text-white me-3">Terms of Service</a>
            <a href="#" className="text-white">FAQ</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;