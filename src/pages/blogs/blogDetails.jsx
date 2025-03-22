import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { blogList } from "../../utils/blogList";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../layout";
import { IoMdTime } from "react-icons/io";
import { FiMessageCircle } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const BlogDetails = () => {
  const { id } = useParams();
  const [detail, setDetails] = useState(null);

  const navigate = useNavigate();

  const [remainingBlogList, setRemainingBlogList] = useState([]);

  useEffect(() => {
    const blogDetail = blogList.find((i) => i.index == id);
    setDetails(blogDetail);
  }, [id]);

  useEffect(() => {
    const index = blogList.findIndex((i) => i.index == id);
    if (index === -1) {
      console.log("Invalid id");
      return;
    }
    const nextObjects = [];
    for (let i = 1; i <= 4; i++) {
      const nextIndex = (index + i) % blogList.length;
      nextObjects.push(blogList[nextIndex]);
    }
    console.log(nextObjects);
    setRemainingBlogList(nextObjects);
  }, [id]);

  return (
    <Box className="blog__details__container">
      {/* <Typography className="blog__details__title">{detail?.title}</Typography>
      <Box
        className="blog__image"
        component={"img"}
        src={require("../../assets/images/homestay3.jpeg")}
      />
      <Box
        className="blog__desciption"
        dangerouslySetInnerHTML={{ __html: detail?.description }}
      /> */}

      <div className="main_div">
        <div className="left_div">
          <div className="btn_div">
            <button className="btn">MOST WATCHED</button>
          </div>
          <h1 className="blog_heading">{detail?.title}</h1>
          <div className="blog_small_desc">
            <div className="small_div">
              <img
                src={require("../../assets/images/hostizzyMainLogo.png")}
                className="desc_img"
              />
              By Hostizzy
            </div>
            |
            <div className="small_div">
              <IoMdTime />
              12 August 2024
            </div>
            |
            <div className="small_div">
              <FiMessageCircle />6 Comments
            </div>
            |
            <div className="small_div">
              <FaRegEye />2 Minutes Read
            </div>
          </div>
          <div className="blog_img_div">
            <img
              className="blog_img"
              src={require("../../assets/images/homestay3.jpeg")}
            />
          </div>
          <Box
            className="blog__desciption"
            dangerouslySetInnerHTML={{ __html: detail?.description }}
          />
        </div>
        <div className="right_div">
          <div className="some_more_blogs_div">
            <h1 className="social_network_head">Social Networks</h1>
            <div className="flex_network_div">
              <div className="social_div">
                <IoLogoInstagram color="#C13584" className="social_icon" />
                Instagram
              </div>
              <div className="social_div">
                <FaTwitter color="#1DA1F2" className="social_icon" />
                Twitter
              </div>
            </div>
            <div className="flex_network_div">
              <div className="social_div">
                <FaFacebook color="#316FF6" className="social_icon" />
                Facebook
              </div>
              <div className="social_div">
                <FaYoutube color="#FF0000" className="social_icon" />
                Youtube
              </div>
            </div>
            <div className="flex_network_div">
              <div className="social_div">
                <FaPinterestSquare color="#E60023" className="social_icon" />
                Pinterest
              </div>
              <div className="social_div">
                <FaLinkedin color="#0077b5 " className="social_icon" />
                Linkedin
              </div>
            </div>
          </div>

          <div className={`some_more_blogs_div margin_top position_sticky`}>
            {remainingBlogList?.map((item, idx) => (
              <div className={`remain_blog_div ${idx > 0 ? `margin_top` : ``}`}>
                <div className="remain_blog_img_div">
                  <img
                    src={require("../../assets/images/homestay3.jpeg")}
                    className="remain_blog_img"
                  />
                </div>
                <div className="remain_blog_desc_div">
                  <h1
                    onClick={() => navigate(`/blogs/${item?.index}`)}
                    className="remain_blog_head"
                  >
                    {item?.title}
                  </h1>
                  <p className="remain_blog_para">
                    <IoMdTime />
                    08 August 2020
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Layout(BlogDetails);
