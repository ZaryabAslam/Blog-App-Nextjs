import classes from './hero.module.css'
//advantage of using image comp as it will reduce image sizes and adjusting itself against different screens sizes, also lazy loading
import Image from 'next/image';

function Hero (){
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                {/* src goes to public dont write it. just write relative path */}
                {/* width and height should be close to image u want to render. u can also change that with css styles but try to write accurate image */}
                <Image src='/images/site/dp.png' alt='this is dp' width={300} height={300} />
            </div>
            <h1>
                my name is zaryab
            </h1>
            <p>
                this is dummy paragraph about me
            </p>
        </section>
    )
}

export default Hero;