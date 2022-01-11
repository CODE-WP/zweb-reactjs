import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout'
import Link from 'next/link'
import Image from 'next/image'

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";






function Blog({ posts }) {
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    },100);
  },[])

  const loader = () => {
   
    return(
      <Layout>
       
      {posts.map(post => (
        
        <div key={post.id} className="item_box">
        
          <div className="item_thumb"><Skeleton height={150} count={1}/></div>
          <div className="item_description"><h2><Skeleton width={500} height={30} count={1}/></h2>
          <p><Skeleton count={4}/></p>
          <p><Skeleton width={100} count={1}/></p>
          </div>
        </div>
      ))}
      </Layout>
    )
  }
  if(loading) {
    return( loader())
  } else {

    return(
      <Layout>
      
      {posts.map(post => (
        
        <div key={post.id} className="item_box">
        
          <div className="item_thumb">
            <Image
              src={post.images}
              alt={post.title}
              width={200}
              height={150}
            />
          </div>
          <div className="item_description"><h2>{post.title || <Skeleton count={1} />}</h2>
          <p>{post.excerpt}</p>
          <p><Link href={`/posts/${post.slug}`} passhref><a className='btn btn-primary'>Xem Thêm</a></Link></p>
          </div>
        </div>
      ))}
      </Layout>
    )
  } 
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://zweb.vn/api-json/?type=blog')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Blog