import Link from "next/link";
import React from "react";

export default function Blogs() {
  const blogs = [
    { id: 1, title: "Blogs 1", description: "Blog 1 Description" },
    {
      id: 2,
      title: "Blogs 2",
      description: "Blog 2 Description",
    },
  ];

  return (
    <main className="p-4">
      <div>Blogs</div>
      <ul>
        {blogs.map((blog) => (
          <li className="my-4" key={blog.id}>
            <Link href={`/blogs/${blog.id}`}> {blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
