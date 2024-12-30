// import logo from './logo.svg';
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


 import { useState,useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";


function App() {
  // const [Loading, setLoading] = useState(true);
  // useEffect(() => {
  //    setTimeout(()=>{
  //     setLoading(false);
  //    },5000)

  // },)

  return (
    <BrowserRouter>
      <Footer />
  
      {/* <Loading/> */}
      

      <div>
      
        
         

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
