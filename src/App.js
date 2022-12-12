import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import ScrollToTop from "../components/other/ScrollToTop";

import Homepage from "./container/homepage/index";
import Shop from "./container/homepage/Shop";
import Blog from "./container/homepage/Blog";
import DetailBlog from "./container/homepage/DetailBlog";
import DetailProduct from "./container/homepage/DetailProduct";
import Tracking from "./container/homepage/Tracking";
import Wishlist from "./container/homepage/Wishlist";

const App = () => {
  return (
    <>
      <Router forceRefresh>
        {/* <ScrollToTop> */}
        <Routes>
          <Route exact path="/" element={<Homepage />} />

          <Route exact path="/shop" element={<Shop />} />

          <Route exact path="/tracking" element={<Tracking />} />

          <Route exact path="/wishlist" element={<Wishlist />} />

          <Route exact path="/blog" element={<Blog />} />

          <Route exact path="/detail/blog" element={<DetailBlog />} />

          <Route exact path="/detail/product" element={<DetailProduct />} />
        </Routes>
        {/* </ScrollToTop> */}
      </Router>
    </>
  );
};

export default App;
