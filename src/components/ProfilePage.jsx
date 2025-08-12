import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    joinDate: 'January 15, 2023',
    membership: 'Active',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Book enthusiast with a passion for science fiction and historical novels.'
  });

  const [editMode, setEditMode] = useState(false);
  const [tempBio, setTempBio] = useState(user.bio);

  const handleSave = () => {
    setUser({...user, bio: tempBio});
    setEditMode(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>My Profile</h1>
        <div className="profile-actions">
          <button className="edit-btn" onClick={() => setEditMode(!editMode)}>
            {editMode ? 'Cancel' : 'Edit Profile'}
          </button>
          {editMode && (
            <button className="save-btn" onClick={handleSave}>
              Save Changes
            </button>
          )}
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-sidebar">
          <div className="avatar-container">
            <img src={user.avatar} alt="Profile" className="profile-avatar" />
            {editMode && (
              <button className="avatar-upload">
                Change Photo
              </button>
            )}
          </div>
          
          <div className="user-stats">
            <div className="stat-item">
              <span className="stat-number">24</span>
              <span className="stat-label">Books Ordered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">18</span>
              <span className="stat-label">Wishlisted</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Pending Orders</span>
            </div>
          </div>
        </div>

        <div className="profile-details">
          <div className="detail-section">
            <h3>Personal Information</h3>
            <div className="detail-row">
              <span className="detail-label">Full Name</span>
              <span className="detail-value">{user.name}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Email</span>
              <span className="detail-value">{user.email}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Member Since</span>
              <span className="detail-value">{user.joinDate}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Membership</span>
              <span className="detail-value membership-badge">{user.membership}</span>
            </div>
          </div>

          <div className="detail-section">
            <h3>About Me</h3>
            {editMode ? (
              <textarea
                className="bio-edit"
                value={tempBio}
                onChange={(e) => setTempBio(e.target.value)}
                rows="4"
              />
            ) : (
              <p className="bio-text">{user.bio}</p>
            )}
          </div>

          <div className="detail-section">
            <h3>Account Settings</h3>
            <div className="settings-options">
              <Link to="/change-password" className="settings-link">
                Change Password
              </Link>
              <Link to="/notification-settings" className="settings-link">
                Notification Preferences
              </Link>
              <Link to="/address-book" className="settings-link">
                Manage Addresses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;