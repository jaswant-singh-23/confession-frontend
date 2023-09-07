import React from "react";

const Blog = () => {
  return (
    <div className="blogs-container">
      <div className="blog-box ">
        <div className="row blog-box-row">
          <div className="col-md-5">
            <div className="blog-img-box">
              <img
                src="https://picsum.photos/536/354"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="blog-content-box">
              <div className="blog-title">
                <h3>Service Package</h3>
              </div>
              <div className="blog-paragraph">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
              <div className="blog-btn-box">
                <button>View</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row blog-box-row">
          <div className="col-md-7">
            <div className="blog-content-box">
              <div className="blog-title">
                <h3>Service Package</h3>
              </div>
              <div className="blog-paragraph">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
              <div className="blog-btn-box">
                <button>View</button>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="blog-img-box">
              <img
                src="https://picsum.photos/536/354"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>
        <div className="row blog-box-row">
          <div className="col-md-5">
            <div className="blog-img-box">
              <img
                src="https://picsum.photos/400/400"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="blog-content-box">
              <div className="blog-title">
                <h3>Service Package</h3>
              </div>
              <div className="blog-paragraph">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
              <div className="blog-btn-box">
                <button>View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
