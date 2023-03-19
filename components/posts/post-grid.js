import PostItem from './post-item';
import classes from './post-grid.module.css';

function PostGrid(props){
    //props get from featuredposts and passing to single item
const {posts} = props;
return (
    <ul className={classes.grid}>
        {posts.map(post => <PostItem key={post.slug} post={post} />)}
    </ul>
)
}

export default PostGrid;