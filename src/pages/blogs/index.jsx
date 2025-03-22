import React, { useState } from "react";
import Layout from "../../layout";
import { Box, Paper, Typography, Grid, Button } from "@mui/material";
import "./index.scss";
import { blogList } from "../../utils/blogList";
import { useNavigate } from "react-router-dom";
import TypewriterText from "../../components/common/typeWriter";
import Newsletter from "../../components/newsletter/newsletter";
import { Helmet } from "react-helmet";

const BlogsSection = () => {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState({
    activeIndex: null,
    isActiveCard: false,
  });

  const onMouseHandle = (i, isKey) => {
    setActiveCard({
      activeIndex: i,
      isActiveCard: isKey,
    });
  };
  return (
    <Box className="blogs_container">
      <Helmet>
        <title>
          Hostizzy Blog: Expert Tips & News on Airbnb Management in India
        </title>
        <meta
          name="description"
          content="Stay ahead in the Airbnb market with Hostizzy's blog. Get expert tips, industry news, and management insights tailored for vacation home owners in India."
        />
      </Helmet>
      <Box className="blog___slider_form_section">
        <Grid className="blog___image__container">
          <Box className="blog___image__text_container">
            <h1 className={"blog__image_text_head"}>
              Insights and Tips from the Forefront of Vacation Home Management
            </h1>
          </Box>
        </Grid>
      </Box>
      <Box className="blog_container_single">
        {blogList?.map((i, index) => (
          <Paper
            sx={{
              width: { xs: "100%", sm: "48%", md: "30%", lg: "30%" },
              height: { lg: "300px" },
            }}
            key={index}
            elevation={3}
            className={`blog_details_section ${
              activeCard?.isActiveCard && activeCard?.activeIndex === index
                ? "active__card"
                : ""
            }`}
            onClick={() => navigate(`/blogs/${i?.index}`)}
            onMouseEnter={() => onMouseHandle(index, true)}
            onMouseLeave={() => onMouseHandle(null, false)}
          >
            <Box className="blog__details">
              <Box className="blog_image_container">
                <Box
                  component={"img"}
                  alt="blog"
                  width={"100%"}
                  height={190}
                  src={require("../../assets/images/homestay3.jpeg")}
                />
              </Box>
              <Box className="blog_details_text">
                <Typography variant="p" className="blog_details_heading">
                  {i?.title}
                </Typography>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
      <Newsletter />
    </Box>
  );
};

export default Layout(BlogsSection);
