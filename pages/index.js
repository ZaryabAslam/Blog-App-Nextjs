import { Fragment } from "react";
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from "../lib/post-util";

// home page where heros section and featured posts will be shown
//dummy data for posts to be passed to featured posts
// const DUMMY_POSTS = [
//     {
//         slug: 'getting-started-with-nextjs',
//         title: 'Getting Started with NextJS',
//         image: 'getting-started-nextjs.png',
//         excerpt:
//           'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
//         date: '2022-02-10',
//       },
//       {
//         slug: 'getting-started-with-nextjs2',
//         title: 'Getting Started with NextJS',
//         image: 'getting-started-nextjs.png',
//         excerpt:
//           'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
//         date: '2022-02-10',
//       },
//       {
//         slug: 'getting-started-with-nextjs3',
//         title: 'Getting Started with NextJS',
//         image: 'getting-started-nextjs.png',
//         excerpt:
//           'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
//         date: '2022-02-10',
//       },
//       {
//         slug: 'getting-started-with-nextjs4',
//         title: 'Getting Started with NextJS',
//         image: 'getting-started-nextjs.png',
//         excerpt:
//           'NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.',
//         date: '2022-02-10',
//       },
//     ];

//now we are not using dummyposts but we are using data stored in markdown file
function HomePage(props){
    return (
        <Fragment>
            <Hero />
            {/* we used dummyposts earlier now we will use props get from static props */}
            {/* <FeaturedPosts posts={DUMMY_POSTS} /> */}
            <FeaturedPosts posts={props.posts} />
        </Fragment>
    )
}

//using getstaticprps, bcz we need this data at buildtime.
// also the data dont change much so it is good to use staticprops
export  function getStaticProps() {

  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
      
    }, // will be passed to the page component as props
    // ye can use revalidate which takes value in secondoncds to send request againt. example revalidate after 10 mints. so data will be refreshed after 10 mints after deployement also
    // revalidate chalta hy after some time jb data change ho aur ap uspage py wapasa ao after some time data updated milega khud
    //revalidate: 10,
  }
}

export default HomePage;