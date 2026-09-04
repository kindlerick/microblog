import { Routes, Route } from "react-router-dom";

import DisplayMainPage from "./pages/MainPage";
import DisplayBlogPage from "./pages/BlogPage";
import DisplayAboutPage from "./pages/AboutPage";
import DisplayBlogPost from "./components/post";

function App() {
    return (
        <Routes>
            <Route path="/" element={<DisplayMainPage />} />
            <Route path="/blog" element={<DisplayBlogPage />} />
            <Route path="/about" element={<DisplayAboutPage />} />
            <Route path="/blog/:slug" element={<DisplayBlogPost />} />
        </Routes>
    );
}

export default App;