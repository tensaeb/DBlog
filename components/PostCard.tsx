import moment from 'moment'
import Link from 'next/link'
import React from 'react'

const PostCard = ({ post }: any) => {
  return (
    <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8">
      <div className="relative overflow-hidden pb-80 shadow-md">
        <img
          src={post.image.url}
          alt={post.title}
          className="absolute h-80 w-full rounded-t-lg object-cover object-top shadow-lg lg:rounded-lg"
        />
      </div>
      <h1 className="mt-6 mb-8 cursor-pointer text-center text-3xl font-semibold transition duration-700 hover:text-blue-600">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="mb-8 block w-full items-center justify-center text-center lg:flex">
        <div className="mb-4 mr-8 flex w-full items-center justify-center lg:mb-0 lg:w-auto">
          <img
            src={post.author.photo.url}
            alt={post.author.name}
            height="50px"
            width="50px"
            className="rounded-full align-middle"
          />
          <p className="ml-2 inline align-middle text-lg text-gray-700">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <svg
            className="mx-2 inline h-6 w-6 align-middle"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          <span>{moment(post.createdAt).startOf('hour').fromNow()}</span>
        </div>
      </div>
      <p className="mb-8 px-4 text-center text-lg font-normal text-gray-700 lg:px-20">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="inline-block transform cursor-pointer rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white transition duration-500 hover:-translate-y-1">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard
