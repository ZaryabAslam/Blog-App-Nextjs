import classes from './all-posts.module.css';
import PostsGrid from './posts-grid';


//components to show all posts on page all posts
function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      {/* using the same components postsgrid showing on home page and all posts page */}
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default AllPosts;