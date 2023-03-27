import Image from 'next/image';

import classes from './post-header.module.css';

//this isshown ast top of pdp below navbar. it contains image and title of post
function PostHeader(props) {
  const { title, image } = props;

  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
}

export default PostHeader;