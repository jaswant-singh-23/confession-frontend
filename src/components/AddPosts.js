import React from "react";

const Posts = () => {
  return (
    <div className="add-posts-container">
      <div className="add-posts-head-box">
        <h3>Add New Post</h3>
      </div>

      <div className="add-posts-form-box">
        <div className="form-box">
          <form>
            <div className="input-box">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" className="form-control" />
            </div>
            <div className="content">
              <label htmlFor="title">Content</label>
              <textarea
                cols={3}
                type="text"
                id="content"
                className="form-control"
              />
            </div>
            <div className="input-box">
              <label htmlFor="title">Image Upload</label>
              <input type="file" id="title" className="form-control" />
            </div>
          </form>
          <div className="submit-btn-box">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
