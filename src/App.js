// import { makeStyles } from "@material-ui/core";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
// import CoinPage from "./Pages/CoinPage";
import Homepages from "./pages/Homepages";
import Header from "./components/Header";
import CoinPage from "./pages/CoinPage";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  App: {
    backgroundColor: "#2c3c4c",
    color: "white",
    minHeight: "100vh",
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepages} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
      </div>{" "}
    </BrowserRouter>
  );
};

export default App;
