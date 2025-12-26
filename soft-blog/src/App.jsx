import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Post from "./pages/Post";

const layout = {
  minHeight: "100vh",
  background: "#F6F7F3",
  fontFamily: "system-ui",
  color: "#2F3E46"
};

export default function App() {
  return (
    <div style={layout}>
      <nav style={{ padding: 20, display: "flex", gap: 16 }}>
        <Link to="/">首頁</Link>
        <Link to="/category">分類</Link>
      </nav>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </div>
    </div>
  );
}
