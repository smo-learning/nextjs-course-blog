import { Fragment } from "react";

import Hero from "../components/homepage/hero";
import FeaturedPosts from "../components/homepage/featured-posts";

const DUMMY_DATA = [
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting Started with NextJs',
        image: 'getting-started-nextjs.png',
        date: '2022-02-10',
        excerpt: 'NextJs is a React Framework'
    },
    {
        slug: 'getting-started-with-nextjs2',
        title: 'Getting Started with NextJs',
        image: 'getting-started-nextjs.png',
        date: '2022-02-10',
        excerpt: 'NextJs is a React Framework'
    },
];

export default function HomePage() {
    return <Fragment>
        <Hero />
        <FeaturedPosts posts={DUMMY_DATA} />
    </Fragment>
}