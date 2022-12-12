import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import ScrollToTop from "../components/other/ScrollToTop";

import Homepage from "./homepage/index";
import Shop from "./homepage/Shop";
import Blog from "./homepage/Blog";
import DetailBlog from "./homepage/DetailBlog";
import DetailProduct from "./homepage/DetailProduct";
import Tracking from "./homepage/Tracking";
import Wishlist from "./homepage/Wishlist";

const Index = () => {
  return (
    <>
      <Router forceRefresh>
        {/* <ScrollToTop> */}
        <Routes>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="/tracking">
            <Tracking />
          </Route>
          <Route exact path="/wishlist">
            <Wishlist />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/detail/blog">
            <DetailBlog />
          </Route>
          <Route exact path="/detail/product">
            <DetailProduct />
          </Route>
        </Routes>
        {/* </ScrollToTop> */}
      </Router>
    </>
  );
};

export default Index;
