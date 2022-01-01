import { Fragment } from "react";

import Hero from "../components/homepage/hero";
import FeaturedPosts from "../components/homepage/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

export default function HomePage(props) {
    return <Fragment>
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