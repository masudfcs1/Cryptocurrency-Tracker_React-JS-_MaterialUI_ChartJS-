import React from "react";
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  ThemeProvider,
} from "@material-ui/core";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#0d1d4a",
    },
    type: "dark",
  },
});

const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  const { currency, setcurrency } = CryptoState();
  console.log(currency);
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="primary" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push(`/`)}
              className={classes.title}
              variant="h6"
            >
              Crypto
            </Typography>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginLeft: 15,
              }}
              value={currency}
              onChange={(e) => setcurrency(e.target.value)}
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="TK">TK</MenuItem>
              <MenuItem value="INR">INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
