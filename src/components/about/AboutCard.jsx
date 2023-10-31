import React from "react";
import Heading from "../common/heading/Heading";
import "./about.css";
import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";
import Box from "@mui/material/Box";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src="./images/about.webp" alt="" />
          </div>
          <Box>
            <div>
              <Heading
                subtitle="LEARN ANYTHING"
                title="Benefits About our Online Learning Expertise"
              />
              <div className="items">
                {homeAbout.map((val) => {
                  return (
                    <div className="item flexSB">
                      <div className="img">
                        <img src={val.cover} alt="" />
                      </div>
                      <div className="text">
                        <h2>{val.title}</h2>
                        <p>{val.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Box>
        </div>
      </section>
      {/* <Awrapper /> */}
    </>
  );
};

export default AboutCard;
