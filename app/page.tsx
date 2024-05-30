import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id} className="border-t py-4 first:border-t-0 first:mt-10 md:py-6">
          <Link href={post.slug}>
            <h2 className="mb-1 mt-0 text-lg md:text-2xl md:mb-2">{post.title}</h2>
          </Link>
          {post.description && <p className="mt-0 text-sm md:text-base">{post.description}</p>}
        </article>
      ))}
    </div>
  )
}
