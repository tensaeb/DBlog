import moment from 'moment'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getRecentPosts, getSimilarPosts } from '../services'

const PostWidget = ({ slug, categories }: any) => {
  const [relatedPosts, setRelatedPosts] = useState([])
  useEffect(() => {
    if (slug) {
      getSimilarPosts(slug, categories).then((result) =>
        setRelatedPosts(result)
      )
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result))
    }
  }, [slug])

  return (
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post: any) => (
        <div key={post.title} className="mb-4 flex w-full items-center">
          <div className="w-16 flex-none ">
            <img
              src={post.image.url}
              alt={post.title}
              width="80px"
              height="80px"
              className="rounded-full align-bottom"
            />
          </div>
          <div className="ml-4 flex-grow">
            <p className="text-xs text-gray-400">
              {moment(post.createdAt).fromNow()}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title} className="">
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget
