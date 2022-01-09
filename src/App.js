import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forms from "./components/Forms/Forms";
import Home from "./components/Home/Home";
import UpdateForm from "./components/UpdateForm/UpdateForm";
function App() {
  return (
  <Router>
    <div>
      <Routes>
        <Route path = "/" exact element = {<Home/>}/>
        <Route path = "/Forms" exact element = {<Forms/>}/>
        <Route path = "/UpdateForm" exact element = {<UpdateForm/>}/>
      </Routes>
    </div>

  </Router>
  );
}

export default App;
