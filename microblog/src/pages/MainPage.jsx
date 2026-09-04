import Footer from "../components/footer";
import Header from "../components/header";
import BlogPostCard from "../components/BlogPostCard/blogPostCard";

function DisplayMainPage() {
    return (
        <>
            <Header />

            <div className="introduction">
                <p>
                    Anything that comes to mind that's worthy
                    to post
                </p>
            </div>

            <BlogPostCard />

            <Footer />
        </>
    );
}

export default DisplayMainPage;