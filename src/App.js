import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getWork } from "./actions/work";
import Forms from "./components/Forms/Forms";
import Home from "./components/Home/Home";
import FindUpdateForm from "./components/UpdateForm/FindUpdateForm";
function App() {
  const dispatch = useDispatch();
  dispatch(getWork());

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Forms" exact element={<Forms />} />
          <Route path="/UpdateForm" exact element={<FindUpdateForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
