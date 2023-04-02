
// for using markdown command to install -> npm install react-markdown
import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';
import classes from './post-content.module.css';

// const DUMMY_POST = {
//   slug: 'getting-started-with-nextjs',
//   title: 'Getting Started with NextJS',
//   image: 'getting-started-nextjs.png',
//   date: '2022-02-10',
//   content: '# This is a first post',
// };

//in conttent it is markdown and refered as title (anythung written with hash sign)
//this page is pagecontent for a single post(which pdp u can say in dynamics world)
function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
        {/* this is shown as top of pdp below navbar. it contains image and title of post */}
      <PostHeader title={post.title} image={imagePath} />
      {/* // now .content which is rapped in markdown will be served as H1 , bcz in markdown # IS H1. we using it to reduce code */}
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;