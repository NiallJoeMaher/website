import Link from "next/link";
import generateTagColors from "../../util/generateTagColors";
export default function HeroPost({ post }) {
  const tagColor = generateTagColors(post.fields.category);
  return (
    <div className="relative grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 mb-4 lg:mb-12 lg:gap-10">
      <Link href={`/blog/${post.fields.slug}`}>
        <a aria-label={post.fields.title} className="col-span-2">
          <img
            className="h48 sm:h-96 w-full object-cover  rounded-lg transition-shadow shadow hover:shadow-lg duration-500"
            src={`https:${post.fields.coverImage.fields.file.url}`}
            alt=""
          />
        </a>
      </Link>
      <div
        key={post.fields.title}
        className="flex flex-col rounded-lg overflow-hidden col-span-2 lg:col-span-1"
      >
        <div className="flex-1 pt-3 lg:py-2 flex flex-col justify-between">
          <div className="flex-1">
            <button
              className={`inline-flex items-center my-2 px-3 py-0.5 rounded-full text-sm font-medium text-${tagColor}-600 bg-${tagColor}-200`}
            >
              {post.fields.category || "Undefined"}
            </button>
            <button className="relative inline-flex items-center px-3 py-0.5 rounded-full my-2 text-sm font-medium ml-2 text-green-600 bg-green-200 ">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75 top-0 right-0 -mt-0 -mr-0"></span>
              {"New"}
            </button>
            <Link href={`/blog/${post.fields.slug}`}>
              <a aria-label={post.fields.title} className="block mt-2">
                <p className="text-xl sm:text-5xl font-semibold text-gray-900 hover:underline">
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
    </div>
  );
}
