import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
import "../App.css";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "10rem", xs: "70px" },
        ml: "5rem",
        // margin: "0 auto",
        alignContent: "center",
        alignItems: "center",
      }}
      position="relative"
      p="20px"
      textAlign={{ xs: "center", md: "start" }}
    >
      <Typography
        color="red"
        fontWeight="6
      00"
        fontSize="26px"
      >
        Fitness Club
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineheight="35px" mb={3}>
        Check out the most effective exercises
      </Typography>
      <Button
        sx={{ backgroundColor: "#ff2625", padding: "10px" }}
        href="#exercises"
        variant="contained"
        color="error"
        mb="4px"
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize={{ md: "250px" }}
      >
        Exercise
      </Typography>
      <img
        src={HeroBannerImage}
        style={{
          position: "absolute",
          right: "40px",
          top: "-20px",
          width: "700px",
          height: "900px",
          marginTop: "-230px",
        }}
        alt="banner"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
