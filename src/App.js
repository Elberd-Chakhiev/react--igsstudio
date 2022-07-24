import React from "react";
import 
{
  Routes,
  Route,
} from "react-router-dom";

import Home from "./components/Home";
import Contacts from "./components/Contacts";
import Header from './components/Header';
import NotFound from "./components/NotFound";
import Blog from "./components/Blog";


const  App = () => { 

  const [divice, setdivice] = React.useState(window.innerWidth < 767);
  window.addEventListener('resize', () => setdivice( window.innerWidth < 767));
  // /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

  return (
    <div className="w-full mt-5">
      <div>
        <Header divice={divice} />
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='contacts' element={<Contacts divice={divice} />} />
          <Route path='blog' element={<Blog divice={divice} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
