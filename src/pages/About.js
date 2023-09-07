import React from "react";

const About = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-box">
        <div className="row about-us-row">
          <div className="col-md-5 about-img-parent-box">
            <div className="about-img-box">
              <img src="https://picsum.photos/400/400" />
            </div>
          </div>
          <div className="col-md-7 about-content-parent-box">
            <div className="about-content-box">
              <div className="about-title">
                <h3>Service Package</h3>
              </div>
              <div className="about-paragraph">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
              </div>
              <div className="about-btn-box">
                <button>Let's Chat</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
