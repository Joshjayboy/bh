import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          <div
            className="logo"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* <h1>ACADEMIA</h1> */}
            <img
              size="small"
              width="50px"
              height="50px"
              alt="this"
              src="https://res.cloudinary.com/pro-solve/image/upload/v1697888616/Breedom_Hub_Fav_icon_1_aqfigh.png"
            />
            <span>BREEDOM HUB</span>
          </div>

          <div className="social">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
