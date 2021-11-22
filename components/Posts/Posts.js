import { Children } from "react";
import Link from "next/link";
import Image from "next/image";
import generateTagColors from "../../util/generateTagColor";
export default function Posts({ posts }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
      {Children.toArray(
        posts.map((post) => {
          const tagColor = generateTagColors(post.fields.category);
          return (
            <div
              key={post.fields.title}
              className="flex flex-1 flex-col overflow-hidden"
            >
              <Link href={`/blog/${post.fields.slug}`}>
                <a aria-label={post.fields.title}>
                  <div className="relative flex-shrink-0 h-48 w-full object-cover transition-shadow shadow hover:shadow-lg">
                    <Image
                      className="rounded-lg"
                      layout="fill"
                      src={`https:${post.fields.coverImage.fields.file.url}`}
                      alt={post.fields.title}
                      placeholder="blur"
                      blurDataURL={`https:${post.fields.coverImage.fields.file.url}?w=5`}
                    />
                  </div>
                </a>
              </Link>
              <div className="flex-1 py-3 flex flex-col justify-between">
                <div className="flex-1">
                  <button
                    className={`inline-flex items-center px-3 my-2 py-0.5 rounded-full text-sm font-medium text-${tagColor}-600 bg-${tagColor}-200`}
                  >
                    {post.fields.category || "Undefined"}
                  </button>

                  <Link href={`/blog/${post.fields.slug}`}>
                    <a aria-label={post.fields.title} className="block mt-2">
                      <p className="text-xl hover:underline font-semibold text-gray-900">
                        {post.fields.title}
                      </p>
                    </a>
                  </Link>
                  <p className="mt-3 text-base text-gray-500">
                    {post.fields.excerpt}
                  </p>
                </div>
                {/* <div className="mt-6 flex items-center">
                <div className="flex space-x-1 text-sm text-gray-500">
                  <span>10 min read</span>
                </div>
              </div> */}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
