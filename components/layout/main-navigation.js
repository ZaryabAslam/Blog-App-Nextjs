import Link from 'next/Link';
import classes from './main-navigation.module.css';
import Logo from './logo';

function MainNavigation(){
    return (
      <header className={classes.header}>
        {/* after clicking logo we will go to home page */}
        <Link href="/">
            <Logo />
        </Link>
        <nav>
          <ul>
            <li>
              {/* //for links we dont use a bcz brand new request will be sent, use link, that works in single page application and prerednering etc */}
              {/* we waant to go to posts/index.js */}
              <Link href="/posts">POSTS</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default MainNavigation;