import getPost from "@/app/lib/getPost";
import React from "react";

async function PostPage({ params }) {
  const { id } = params;
  const post = await getPost(id);
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default PostPage;
