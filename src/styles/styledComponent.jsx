import { Box, Typography } from "@mui/material";

export const TitleText = ({ text, className, height, width }) => {
  return (
    <Box>
      <Typography className={className}>{text}</Typography>
      {/* <Box
        alt="image"
        component={"img"}
        src={
          "https://www.hostizzy.com/wp-content/uploads/2023/04/Group-3@2x.png"
        }
        width={width}
        height={height}
      /> */}
    </Box>
  );
};
