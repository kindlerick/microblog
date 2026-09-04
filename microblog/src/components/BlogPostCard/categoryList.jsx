import blogPosts from "../../assets/data/blogPosts.json";
import { Link } from "react-router-dom";

const categoryArray = ["First Category", "Second Category", "Third Category"];


function DisplayCategoryList() {

    return (
         <>
            <h1>Category list</h1>

            {categoryArray.map(category => (
                <section key={category}>
                    <h2>{category}</h2>

                    {blogPosts
                        .filter(blog => blog.category === category)
                        .map(blog => (
                            <article key={blog.id}>
                                <Link to={`/blog/${blog.slug}`}>
                                    <p>{blog.title}</p>
                                </Link>

                                <p>{blog.date}</p>
                            </article>
                        ))}
                </section>
            ))}
        </>
    )
}


export default DisplayCategoryList;