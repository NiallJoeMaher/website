import React from "react";
import Link from "next/link";

export default function Highlights({ posts, newPosts }) {
  return (
    <div className="relative">
      <div className="h-60 w-60 rounded-full bg-gradient-fun absolute top-36 left-20" />
      <div className="h-32 w-32 rounded-full bg-gradient-fun absolute right-36 bottom-20" />
      <div className="h-20 w-20 rounded-full bg-gradient-fun absolute right-1/3 top-1/3" />
      <section className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 sm:mx-6 lg:mx-auto">
        {React.Children.toArray(
          newPosts.map((item) => (
            <Link href={`/posts/${item.fields.slug}`}>
              <a aria-label={item.fields.title}>
                <div className="z-10 bg-gray-600 bg-opacity-25 hover:bg-opacity-10 blur-background p-4 border-gray-100 border rounded-xl transition-all h-full">
                  <h3 className="font-semibold text-3xl mb-2 text-white">
                    {item.fields.title}
                  </h3>
                  <p className="text-lg text-white">{item.fields.excerpt}</p>
                </div>
              </a>
            </Link>
          ))
        )}
      </section>
    </div>
  );
}
