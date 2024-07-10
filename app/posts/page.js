import React from "react";
import getAllPost from "../lib/getAllPost";
import Link from "next/link";

async function page() {
  const posts = await getAllPost();
  return (
    <div className="my-4">
      <hi>All page</hi>
      <ul className="my-4">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default page;
