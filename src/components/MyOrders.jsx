import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyOrders = () => {
  // Sample orders data
  const [orders, setOrders] = useState([
    {
      id: 'ORD-1001',
      date: '2023-06-15',
      totalBooks: 3,
      totalAmount: 45.97,
      status: 'Processing',
      cancelable: true,
      books: [
        { title: 'The Great Gatsby', quantity: 1, price: 12.99 },
        { title: 'To Kill a Mockingbird', quantity: 2, price: 9.99 }
      ],
      discount: 2.00,
      claimCode: 'CLAIM-5A2B9C',
      email: 'user@example.com'
    },
    {
      id: 'ORD-1002',
      date: '2023-06-10',
      totalBooks: 2,
      totalAmount: 29.98,
      status: 'Fulfilled',
      cancelable: false,
      books: [
        { title: '1984', quantity: 1, price: 10.99 },
        { title: 'Animal Farm', quantity: 1, price: 8.99 }
      ],
      discount: 0,
      claimCode: 'CLAIM-8D4E7F',
      email: 'user@example.com'
    }
  ]);

  const [expandedOrder, setExpandedOrder] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [orderToCancel, setOrderToCancel] = useState(null);
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('latest');

  const toggleOrderDetails = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  const handleCancelClick = (order) => {
    setOrderToCancel(order);
    setShowCancelModal(true);
  };

  const confirmCancel = () => {
    setOrders(orders.map(order => 
      order.id === orderToCancel.id ? { ...order, status: 'Cancelled', cancelable: false } : order
    ));
    setShowCancelModal(false);
    setOrderToCancel(null);
  };

  const filteredOrders = orders.filter(order => {
    if (filter === 'all') return true;
    return order.status.toLowerCase() === filter.toLowerCase();
  });

  const sortedOrders = [...filteredOrders].sort((a, b) => {
    if (sort === 'latest') {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });

  return (
    <div className="my-orders-page">
      <h1 className="page-title">My Orders</h1>

      {/* Filters and Sort */}
      <div className="order-controls">
        <div className="filter-section">
          <label>Filter by status:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Orders</option>
            <option value="processing">Processing</option>
            <option value="fulfilled">Fulfilled</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <div className="sort-section">
          <label>Sort by:</label>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="latest">Latest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      {/* Orders List */}
      <div className="orders-list">
        {sortedOrders.length > 0 ? (
          sortedOrders.map(order => (
            <div key={order.id} className="order-card">
              <div className="order-summary">
                <div className="order-info">
                  <span className="order-id">Order #{order.id}</span>
                  <span className="order-date">{new Date(order.date).toLocaleDateString()}</span>
                  <span className="order-books">{order.totalBooks} {order.totalBooks === 1 ? 'book' : 'books'}</span>
                  <span className="order-amount">${order.totalAmount.toFixed(2)}</span>
                  <span className={`order-status ${order.status.toLowerCase()}`}>{order.status}</span>
                </div>

                <div className="order-actions">
                  <button 
                    className="details-btn"
                    onClick={() => toggleOrderDetails(order.id)}
                  >
                    {expandedOrder === order.id ? 'Hide Details' : 'View Details'}
                  </button>

                  {order.cancelable && (
                    <button 
                      className="cancel-btn"
                      onClick={() => handleCancelClick(order)}
                    >
                      Cancel Order
                    </button>
                  )}
                </div>
              </div>

              {expandedOrder === order.id && (
                <div className="order-details">
                  <table>
                    <thead>
                      <tr>
                        <th>Book Title</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.books.map((book, index) => (
                        <tr key={index}>
                          <td>{book.title}</td>
                          <td>{book.quantity}</td>
                          <td>${book.price.toFixed(2)}</td>
                          <td>${(book.quantity * book.price).toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {order.discount > 0 && (
                    <div className="discount-info">
                      <p>Discount Applied: -${order.discount.toFixed(2)}</p>
                    </div>
                  )}

                  <div className="claim-info">
                    <p>
                      {order.claimCode 
                        ? `Claim code: ${order.claimCode} (Sent to your registered email: ${order.email})`
                        : `Bill and claim information sent to your registered email: ${order.email}`}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="no-orders">No orders found matching your criteria.</p>
        )}
      </div>

      {/* Cancel Order Modal */}
      {showCancelModal && (
        <div className="modal-overlay">
          <div className="cancel-modal">
            <h3>Confirm Order Cancellation</h3>
            <p>Are you sure you want to cancel order #{orderToCancel.id}?</p>
            <div className="modal-buttons">
              <button className="confirm-btn" onClick={confirmCancel}>
                Yes, Cancel Order
              </button>
              <button className="cancel-btn" onClick={() => setShowCancelModal(false)}>
                No, Keep Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrders;