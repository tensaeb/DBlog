import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getCategories } from '../services'

const Categories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories().then((data) => setCategories(data))
  }, [])

  return (
    <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">Categories</h3>
      {categories.map((category: any) => (
        <Link key={category.slug} href={`/categories/${category.slug}`}>
          <span className="mb-3 block cursor-pointer pb-3">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
