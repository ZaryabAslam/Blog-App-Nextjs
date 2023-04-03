
// for using markdown command to install -> npm install react-markdown
import ReactMarkdown from 'react-markdown';
import PostHeader from './post-header';
import classes from './post-content.module.css';
import Image from 'next/image';
//npm install react-syntax-highligher. for higlighting code better. na b karo to koe farq nae just for good visuals
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

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

  const customRenderers = {
    //in markdown simple image tag is rendered and we want to render next Image comp for lazy loading etc.
    // uksy lye tariqa hy k renderers pass karo aur usmy objecy pass karo then usmy jo change karna usky gaiant specific tag unki pani github sy dekhlo
    //like for change image use image(){} like this. ismy input khud milega markdown sy aur wo object hoga. ab jo ye return karega to markdown main jitni images hongi wo is image sy replace hojaege
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    // hum uper wali image ko islye use nae karr ahy hain q k jb usko inpsect kar rahy hain to makdownmain pehly he paragraphs hain aur ye next image apny sath divs wagera b lati hy to error araha hy k p k andar div nae rakho
    // to hum sb paragrpah check karengy markdown main ab aur jiska first child image hue usko apni image sy change kardengy baqi p wesy he rahengy
    // yaha p likha hy paragraph q nae likha ye sb markdown k apny githib sy aya hy. kal ko wo kuch update karrty hain to shy ye dubara para hojae ya kuch aur to wo check karlen
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName  === 'img') {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },
    //code is also same as we use p above. it is a rule mentioed by markdown in their github
      code(code) {
        //ismy humy classname aur children milega. children main code hoiga aur classname sy hum language nikal dengy
        const { className, children } = code;
        const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
        return (
          <SyntaxHighlighter
            style={atomDark}
            language={language}
            children={children}
          />
        );
      }
  };


  return (
    <article className={classes.content}>
        {/* this is shown as top of pdp below navbar. it contains image and title of post */}
      <PostHeader title={post.title} image={imagePath} />
      {/* // now .content which is rapped in markdown will be served as H1 , bcz in markdown # IS H1. we using it to reduce code */}
      {/* jb makdown k components ko apny comp sy replace karna ho to renderers pass karo(renders purany version main tha ab components hy) aur usky andar apny elements do wo replace hojaengy, aur ye object hona chahye */}
      <ReactMarkdown  components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;