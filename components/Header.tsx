import Link from 'next/link'
import React from 'react'

const categories = [
  {
    name: 'React',
    slug: 'react',
  },
  {
    name: 'Next.js',
    slug: 'nextjs',
  },
]

const Header = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-blue-400 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="text-4x1 cursor-pointer font-bold text-white">
              DBlog
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link href={`/categories/${category.slug}`} key={category.name}>
              <span className="mt-2 ml-4 cursor-pointer align-middle font-semibold text-white md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
