import Image from 'next/image';

import classes from "./hero.module.css"

export default function Hero () {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/ich.jpg" alt="Showing me" width={300} height={300} />
            </div>
            <h1>
                hi im Nils
            </h1>
            <p>Lorem ipsum dolar </p>

        </section>

    )
}