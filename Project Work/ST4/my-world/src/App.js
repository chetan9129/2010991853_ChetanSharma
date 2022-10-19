import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Header from "./Component/Header.js";
import Contact from "./Component/Contact";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./Component/Form";
import AddUser from "./User/AddUser";
import EditUser from "./User/EditUser";
import View from "./User/View";

function App() {
  return (
    <BrowserRouter>
      {/* {Header} */}
      <div className="App">
        <Header />
        <Routes>
          {/* {Home} */}
          {/* <div className="auth-wrapper">
            <div className="auth-inner"> */}
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/form" element={<Form />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/users/:id" element={<View />} />

          {/* </div>
          </div> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
