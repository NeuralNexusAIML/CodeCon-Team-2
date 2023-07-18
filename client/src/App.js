import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AddJobDetails from "./pages/AddJobDetails";
import ViewAllJobsUser from "./pages/ViewAllJobsUser";
import ViewSingleJobUser from "./pages/ViewSingleJobUser";
import Footer from "./components/Footer";
import Applypage from "./pages/Applypage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/signup' element={<Signup/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/Addjobdetails' element={<AddJobDetails/>}></Route>
              <Route path='/viewjobs' element={<ViewAllJobsUser/>}></Route>
              <Route path='/SingleJob/:id' element={<ViewSingleJobUser/>}></Route>
              <Route path='/apply' element={<Applypage/>}></Route>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
