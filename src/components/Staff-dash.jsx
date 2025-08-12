import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoBookley from '../images/staff-logo1.png';

const StaffDashboard = () => {
  const [claimCode, setClaimCode] = useState('');
  const [orderDetails, setOrderDetails] = useState(null);
  const navigate = useNavigate();

  // Updated mock order data with quantity and price
  const mockOrder = {
    memberName: 'John Doe',
    email: 'john@example.com',
    orderDate: '2023-05-20',
    books: [
      { id: 1, title: 'Sample Book 1', author: 'Author One', quantity: 2, price: 12.99 },
      { id: 2, title: 'Sample Book 2', author: 'Author Two', quantity: 1, price: 9.99 },
    ],
    totalOrderPrice: 74.45 // Calculated total
  };

  const handleVerify = () => {
    if (claimCode.trim()) {
      setOrderDetails(mockOrder);
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="staff-dashboard">
      <nav className="staff-nav">
        <div className="staff-nav-left">
          <h2>Staff Dashboard</h2>
        </div>

        <div className="staff-nav-left"> 
            <a className="navbar-brand me-5" href="#"> 
            <img src={logoBookley} alt="logo"
             width="90" 
             href="/" 
             height="70" 
             className="d-inline-block align-text-top" 
            /> 
            </a> 
        </div>

        <div className="staff-nav-right">
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </nav>

      <div className="dashboard-content">
        <div className="claim-section">
          <h3>Process Claim Code</h3>
          <div className="input-group">
            <input
              type="text"
              value={claimCode}
              onChange={(e) => setClaimCode(e.target.value)}
              placeholder="Enter claim code"
            />
            <button onClick={handleVerify}>Verify</button>
          </div>
        </div>

        {orderDetails && (
          <div className="order-details">
            <h4>Order Details</h4>
            <div className="member-info">
              <p><strong>Member:</strong> {orderDetails.memberName}</p>
              <p><strong>Email:</strong> {orderDetails.email}</p>
              <p><strong>Order Date:</strong> {orderDetails.orderDate}</p>
              <p><strong>Total Order Price:</strong> ${orderDetails.totalOrderPrice.toFixed(2)}</p>
            </div>

            <h5>Book List</h5>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {orderDetails.books.map(book => (
                    <tr key={book.id}>
                      <td>{book.id}</td>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>{book.quantity}</td>
                      <td>${book.price.toFixed(2)}</td>
                      <td>${(book.quantity * book.price).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="action-buttons">
              <button className="fulfill-btn">
                Fulfill Order
              </button>
              <button className="cancel-btn">
                Cancel Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StaffDashboard;