import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/css/style.css"
import Profile from "./pages/Profile";
import AddPosts from "./components/AddPosts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post-add" element={<AddPosts />} />
      </Routes>
    </div>
  );
}

export default App;
