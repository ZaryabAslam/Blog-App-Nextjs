import PostContent from '../../components/posts/post-detail/post-content';
import { getPostsFiles, getPostData } from '../../lib/post-util';
import Head from 'next/head';
import { Fragment } from 'react';


// this is particular post page
function PostDetailPage(props) {
    //this post content is content for a single post on pdp page
    return (
      <Fragment>
        <Head>
          <title>{props.post.title}</title>
          <meta name='description' content={props.post.excerpt} />
        </Head>
        <PostContent post={props.post} />
      </Fragment>
    );
  }

  export function getStaticProps(context) {
    // params is cont we get from context
    const { params } = context;
    // slug is filename here we get from context. whatever dynamic filename it is. jo url main hoga wo milega
    const { slug } = params;
  
    // post data milega
    const postData = getPostData(slug);
  
    return {
      props: {
        post: postData,
      },
      // after deployment agar file main change aega to khud update hoga
      revalidate: 600,
    };
  }
  
  //static path use hoga static props k sath. usko btany k lye k paths konsy use hony bhai. baqi staticprops wesy he use hoga for props
  export function getStaticPaths() {
    //ye sb filenames lega
    const postFilenames = getPostsFiles();
    // ye filenames main sy extension hata dega q k path main filenames dety hain extension nae

    const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));
  
    return {
      //paths ko dena parta hy aesa he object jismy params ho aur us params k andar slug ko file name hy aur sndar wala slug uski value
      paths: slugs.map((slug) => ({ params: { slug: slug } })),
      //fallback false mtlb baqi sary paths py 404 aega jo in paths k siwa ho humny uper btae hue hain jo file sy araae hain
      //fllback truem -> jb visit karengy tb data bnaega aur koe fllaback msg b bnao ka abhi tk data load na hua to user ko kya dikhana like loading etc. ismy paths empty rakho 
      //fallback vlocing -> wait untill page has completed ;oading then show user data -> blocking tb use kr jb 1000 blogs hain koe koe to bht kam khulty hain islye sary prerender nae karny chahye
      //fallback false mtlb koe aur page 404 dyga. ye waha sahe hy jaha page kam ho aur prerendering karny main itny zyada nae to time kam lagege slow nae hoga. imsy paths deny parengy sary
      fallback: false,
    };
  }

export default PostDetailPage;