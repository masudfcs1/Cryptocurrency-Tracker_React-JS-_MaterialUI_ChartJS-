import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  banner: {
    backgroundImage: "url(./banner.jpg)",
  },
  bannerContant: {
    height: 500,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
  },
});

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContant}>
        <div className={classes.tagline}>
          <Typography
            variant="h3"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
            }}
          >
            Find Crypto Currency
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgray",
              textTransform: "capitalize",

              marginBottom: 15,
            }}
          >
            Find Out Everything About Your Favorite Cryptocurrency{" "}
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
