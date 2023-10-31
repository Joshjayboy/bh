import React from "react";
import "../blog/blog.css";
import { blog } from "../../dummydata";
import Heading from "../common/heading/Heading";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

// copy code of blog => blogCard

const Hblog = () => {
  return (
    <>
      <section className="blog">
        <div className="container">
          <Heading subtitle="OUR BLOG" title="Recent From Blog" />
          {/* <div className='grid2'> */}
          {/* <Box> */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              {blog.slice(0, 3).map((val, index) => (
                <Grid key={index}>
                  <Box
                    sx={{
                      mb: {
                        xs: 2,
                        md: 0,
                      },
                    }}
                  >
                    <Box className="img">
                      <img src={val.cover} alt="" />
                    </Box>
                    <Box className="text">
                      <div className="admin flexSB">
                        <span>
                          <i className="fa fa-user"></i>
                          <label htmlFor="">{val.type}</label>
                        </span>
                        <span>
                          <i className="fa fa-calendar-alt"></i>
                          <label htmlFor="">{val.date}</label>
                        </span>
                        <span>
                          <i className="fa fa-comments"></i>
                          <label htmlFor="">{val.com}</label>
                        </span>
                      </div>
                      <h1>{val.title}</h1>
                      <p>{val.desc}</p>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </div>
      </section>
    </>
  );
};

export default Hblog;
