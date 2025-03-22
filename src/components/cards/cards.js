import React,{useEffect, useState} from 'react'
import "./cards.scss"
import { FaBed, FaShower, FaMapSigns } from 'react-icons/fa';
import { Box, Typography } from '@mui/material';
const Cards = ({ onClick,item }) => {
  const [name, setname] = useState("")
  useEffect(() => {
    let apiString = item?.name;

    // Split the string into words
    let words = apiString.split(' ');
    
    // Check if the third word is "with" or "-"
    if (words.length >= 3 && (words[2] === "with" || words[2] === "-")) {
      // Show only the first two words
      let result = words.slice(0, 2).join(' ');
      let stringWithoutDashes = result.replace(/-/g, '');
      setname(stringWithoutDashes)
    } else {
      // Show all three words
      let result = words.slice(0, 3).join(' ');
      let stringWithoutDashes = result.replace(/-/g, '');
      setname(stringWithoutDashes)
    }
  }, [item])
  
  return (
    <Box className="card" onClick={onClick}>
      <div className="card__image_container" >
      <img src={`${item?.cover_image}`} className="card__image" alt="" />
      </div>
    
      <Box className="card__overlay">
        <Box className="card__header">
          <Box className="card__header-text">
            <Box className='cardTitleStarContainer'>
              <Box>
                <Typography className="card__title">{name}</Typography>
              </Box>
              <Box className='ratingContainer'><span>{item?.location?.city}</span><FaMapSigns color="#000" /></Box></Box>
            <Box className='cardTitleStarContainer'> <span className="card__price">₹
{item?.price}/{item?.price_time_period}</span>
              <Box className='iconsValueContainer'>
                <Box className='ratingContainer'><span>{item?.rooms}</span><FaBed color="#000" /></Box>
                <Box className='ratingContainer'><span>{item?.baths}</span><FaShower color="#000" /></Box>
              </Box></Box>
          </Box>
        </Box>
        <Typography align="justify" className="card__description">{item?.short_description}</Typography>
      </Box>
      <Box className='trending'>Guest Favourite</Box>
    </Box>
  )
}

export default Cards
