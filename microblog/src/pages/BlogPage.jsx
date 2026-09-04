import Header from "../components/header";
import Footer from "../components/footer";
import DisplayCategoryList from "../components/BlogPostCard/categoryList";


import "../styles/blog.css";

function DisplayBlogPage() {

    return (
    <>
    <Header />
        <h1>BLOG PAGE</h1>
        <DisplayCategoryList />
    <Footer />
    </>
    );
}


export default DisplayBlogPage;