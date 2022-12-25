import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Gallery from "./pages/Gallery";
import GalleryInside from "./pages/GalleryInside";
// import Clients from "./pages/Clients";
import News from "./pages/News";
import NewsSinglePage from "./pages/NewsSinglePage";
// import Reviews from "./pages/Reviews";
// import SearchResults from "./pages/SearchResults";
// import Services from "./pages/Services";
import ServiceInside from "./pages/ServiceInside";
import page404 from "./pages/404";
// import WhyUs from "./pages/WhyUs";
import UserInterface from "./pages/UserInterface";
import { API_URL } from "./helpers/constants";
import axios from "axios";
import TranslationProvider from "./context/TranslationContext";
import Loading from "./blocks/loading/Loading";
import Header from "./blocks/header/Header";
import Footer from "./blocks/footer/Footer";
import GlobalContentProvider from "./context/GlobalContentContext";

axios.defaults.baseURL = API_URL;

function App() {
  return (
    <TranslationProvider>
      <GlobalContentProvider>
        <Loading />
        <Router>
          <Header />
          <Switch>
            <Route exact path={"/"} component={Home} />
            {/* <Route exact path={"/about-us"} component={About} /> */}
            <Route exact path={"/contacts"} component={Contacts} />
            <Route exact path={"/gallery"} component={Gallery} />
            <Route exact path={"/gallery-inside"} component={GalleryInside} />
            {/* <Route exact path={"/clients"} component={Clients} /> */}
            <Route exact path={"/news"} component={News} />
            <Route
              exact
              path={"/news-single-page"}
              component={NewsSinglePage}
            />
            <Route exact path={"/service-inside"} component={ServiceInside} />
            <Route exact path={"/ui"} component={UserInterface} />
            <Route exact component={page404} />
          </Switch>
          <Footer />
        </Router>
      </GlobalContentProvider>
    </TranslationProvider>
  );
}

export default App;
