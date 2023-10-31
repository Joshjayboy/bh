import React from "react";
import { testimonal } from "../../../dummydata";
import Heading from "../../common/heading/Heading";
import "./style.css";
import Box from "@mui/material/Box";
const Testimonal = () => {
  return (
    <>
      <section className="testimonal padding">
        <div className="container">
          <Heading subtitle="TESTIMONIAL" title="Our Successful Students" />

          <Box>
            {/* <div className='content grid2'> */}
            {testimonal.map((val) => (
              <Box
                className="items shadow"
                sx={{
                  mb: 2,
                }}
              >
                <div className="box flex">
                  <div className="img">
                    <img src={val.cover} alt="" />
                    <i className="fa fa-quote-left icon"></i>
                  </div>
                  <div className="name">
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </Box>
            ))}
          </Box>
        </div>
      </section>
    </>
  );
};

export default Testimonal;
