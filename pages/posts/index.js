import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

export default function AllPostsPage(props) {
    return (
        <>
        <Head>
            <title>All Posts Page!</title>
            <meta name="description" content="A list of all posts" />
        </Head>
            <AllPosts posts={props.posts} />
        </>
    )
}

export async function getStaticProps() {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts
        }
    }
}