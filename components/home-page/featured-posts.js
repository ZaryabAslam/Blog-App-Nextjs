import PostsGrid from "../posts/posts-grid";
import classes from './featured-posts.module.css';

function FeaturedPosts(props){
    return <section className={classes.latest}>
        <h2>
            featured post
        </h2>
        {/* passing props get from home page to postgrid */}
        <PostsGrid posts={props.posts} />
    </section>
}

export default FeaturedPosts;