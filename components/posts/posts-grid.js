import PostItem from './post-item';
import classes from './posts-grid.module.css';

function PostsGrid(props){
    //props get from featuredposts and passing to single item
const {posts} = props;
console.log(props, 'props');
console.log(posts, 'posts');
return (
    <ul className={classes.grid}>
        {posts.map(post => <PostItem key={post.slug} post={post} />)}
    </ul>
)
}

export default PostsGrid;