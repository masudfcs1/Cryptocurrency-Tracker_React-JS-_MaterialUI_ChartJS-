import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Container } from "@material-ui/core";
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
});

const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContant}></Container>
    </div>
  );
};

export default Banner;
