import React from "react";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-box-container">
        <div className="profile-head-box">
          <div className="profile-title">
            <h3>Profile</h3>
          </div>
          <div className="profile-img-box">
            <img src="https://picsum.photos/400/400" />
          </div>
        </div>
        <div className="profile-btn-box">
          <button>Edit Profile</button>
        </div>
      </div>
      <div className="profile-posts-container">
        <div className="profile-title">
          <h5>Posts</h5>
        </div>
        <div className="row profile-posts-box">
          <div className="col-4 col-md-3 post-box">
            <img src="https://picsum.photos/400/400" />
          </div>
          <div className="col-4 col-md-3 post-box">
            <img src="https://picsum.photos/400/400" />
          </div>
          <div className="col-4 col-md-3 post-box">
            <img src="https://picsum.photos/400/400" />
          </div>
          <div className="col-4 col-md-3 post-box">
            <img src="https://picsum.photos/400/400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
