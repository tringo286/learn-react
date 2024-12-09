import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';

const App = () => {
  return (
    <>     
      <Header />
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/post" element={<NewPost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/about" element={<About />} /> 
        <Route path="*" element={<Missing />} />
      </Routes>    
      <Footer />
    </>
  )
}

export default App;
