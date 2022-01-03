import { Fragment } from "react";

import Hero from "../components/homepage/hero";
import FeaturedPosts from "../components/homepage/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";

export default function HomePage(props) {
    return <Fragment>
        <Head>
            <title>Nils Blog</title>
            <meta name="description" content="I post stuff" />
        </Head>
        <Hero />
        <FeaturedPosts posts={props.posts} />
    </Fragment>
}

export async function getStaticProps() {

    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        },
        revalidate: 1800
    };
}