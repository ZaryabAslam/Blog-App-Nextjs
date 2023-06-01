import { Fragment } from "react";
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from "../../lib/post-util";
import Head from 'next/head';

// const DUMMY_POSTS = [
//   {
//       slug: 'getting-started-with-nextjs',
//       title: 'Getting Started with NextJS',
//       image: 'getting-started-nextjs.png',
//       excerpt:
//         'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
//       date: '2022-02-10',
//     },
//     {
//       slug: 'getting-started-with-nextjs2',
//       title: 'Getting Started with NextJS',
//       image: 'getting-started-nextjs.png',
//       excerpt:
//         'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
//       date: '2022-02-10',
//     },
//     {
//       slug: 'getting-started-with-nextjs3',
//       title: 'Getting Started with NextJS',
//       image: 'getting-started-nextjs.png',
//       excerpt:
//         'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
//       date: '2022-02-10',
//     },
//     {
//       slug: 'getting-started-with-nextjs4',
//       title: 'Getting Started with NextJS',
//       image: 'getting-started-nextjs.png',
//       excerpt:
//         'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
//       date: '2022-02-10',
//     },
//   ];

// this is allposts page
function AllPostsPage(props) {
  // this can be get in allposts as props.posts bcz posts is passed here
  //dummy posts now will not be used as we use staticprops now
  // return <AllPosts posts={DUMMY_POSTS} />
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name='description'
          content='A list of all programming-related tutorials and posts!'
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}


export  function getStaticProps() {

  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts
      
    }, // will be passed to the page component as props
    // ye can use revalidate which takes value in secondoncds to send request againt. example revalidate after 10 mints. so data will be refreshed after 10 mints after deployement also
    //revalidate: 10,
  }
}
export default AllPostsPage;