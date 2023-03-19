import Link from 'next/Link';
import classes from './post-item.module.css';
import Image from 'next/image';

function PostItem(props){
    //slug => unique identifier of the post
    // date => not formatted
    //image => image name
    const { title, image, excerpt, date, slug } = props.post;
    // formatting data
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const imagePath = `/images/posts/${slug}/${image}`
    return (
        <li className={classes.post}>
            <Link href={`/posts/${slug}`}>
            <div className={classes.image}>
                <Image src={imagePath} alt={title} width={300} height={200} />
            </div>
            <div className={classes.content}>
                <h1>{title}</h1>
                <time>{formattedDate}</time>
                <p>{excerpt}</p>
            </div>
            </Link>
        </li>
    )
}

export default PostItem;