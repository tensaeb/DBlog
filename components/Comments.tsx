import moment from 'moment'
import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser'
import { getComments } from '../services'

const Comments = ({ slug }: any) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug).then((result) => setComments(result))
  }, [])

  return (
    <>
      {comments.length > 0 && (
        <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
          <h3 className="pb- mb-8 border-b text-xl font-semibold">
            {comments.length} Comments
          </h3>
          {comments.map((comment: any) => (
            <div
              key={comment.createdAt}
              className="mb-4 border-b border-gray-300 pb-4"
            >
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span>{' '}
                <span className="text-xs text-gray-500">
                  {' '}
                  {moment(comment.createdAt).fromNow()}
                </span>
              </p>
              <p className="w-full whitespace-pre-line text-gray-600">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments
