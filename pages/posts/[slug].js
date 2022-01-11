import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Layout from '../../components/Layout';


function Slug({ post }) {
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
        setLoading(false)
        },100);
    },[])

    const loader = () => {
   
    return(
        <Layout>
            <div className='post_content'>
                <h1><Skeleton count={1} /></h1>
                <div className='content'>
                    <Skeleton count={20} />
                </div>
            </div>
            
        </Layout>
    )
    }
    if(loading) {
        return( loader())
    } else {

        return(
            <Layout>
                <div className='post_content'>
                    <h1>{post.title}</h1>
                    <div className='content' dangerouslySetInnerHTML={{ __html: post.content }}>
                        
                    </div>
                </div>
                
            </Layout>
        )
    }
}
  
// This function gets called at build time
export async function getStaticPaths() {
// Call an external API endpoint to get posts
const res = await fetch('https://zweb.vn/api-json/?type=blog')
const posts = await res.json()

// Get the paths we want to pre-render based on posts
const paths = posts.map((post) => ({
    params: { slug: post.slug },
}))

// We'll pre-render only these paths at build time.
// { fallback: false } means other routes should 404.
return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
// params contains the post `id`.
// If the route is like /posts/1, then params.id is 1
const res = await fetch(`https://zweb.vn/api-json/?type=blog&slug=${params.slug}`)
const post = await res.json()

// Pass post data to the page via props
return { props: { post } }
}

export default Slug