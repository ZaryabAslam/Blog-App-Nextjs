import PostHeader from './post-header';
import classes from './post-content.module.css';

const DUMMY_POST = {
  slug: 'getting-started-with-nextjs',
  title: 'Getting Started with NextJS',
  image: 'getting-started-nextjs.png',
  date: '2022-02-10',
  content: '# This is a first post',
};
//in conttent it is markdown and refered as title (anythung written with hash sign)
//this page is pagecontent for a single post(which pdp u can say in dynamics world)
function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
        {/* this is shown as top of pdp below navbar. it contains image and title of post */}
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
}

export default PostContent;