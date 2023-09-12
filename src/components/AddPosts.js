import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const AddPosts = () => {
  const [previewImages, setPreviewImages] = useState([]);
  const [formFields, setFormFields] = useState({
    title: "",
    content: "",
    image: "",
  });
  const inputHandler = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };
  const imageUploadHandler = (e) => {
    let files = e.target.files;
    let images = [];
    for (let a = 0; a < files?.length; a++) {
      images.push(URL.createObjectURL(e.target.files[a]));
    }
    setPreviewImages(images);
  };

  const removeImageHandler = (index) => {
    debugger
    previewImages.splice(index, 1);
  };

  return (
    <div className="add-posts-container">
      <div className="add-posts-head-box">
        <div className="add-posts-title">
          <h3>Add New Post</h3>
        </div>
      </div>

      <div className="add-posts-form-box">
        <div className="form-box">
          <form>
            <div className="input-box ">
              <label htmlFor="title ">Title</label>
              <input
                type="text"
                id="title"
                name="content"
                value={formFields.title}
                className="form-control"
                onChange={inputHandler}
              />
            </div>
            <div className="content input-box ">
              <label htmlFor="title">Content</label>
              <textarea
                cols={3}
                type="text"
                id="content"
                className="form-control"
                name="content"
                value={formFields.content}
                onChange={inputHandler}
              />
            </div>
            <div className="input-box">
              <label htmlFor="title">Image Upload</label>
              <input
                type="file"
                id="title"
                className="form-control"
                accept="image/*"
                multiple={true}
                onChange={imageUploadHandler}
              />
            </div>
            <div className="input-box">
              <label htmlFor="title">Preview Images</label>

              <div className="preview-upload-posts">
                {previewImages?.map((previewImage, index) => (
                  <div className="preview-img-box" key={index}>
                    <img src={previewImage} />
                    <CloseIcon
                      className="remove-img-icon"
                      onClick={() => {
                        removeImageHandler(index);
                      }}
                    />
                  </div>
                ))}
              </div>
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

export default AddPosts;
