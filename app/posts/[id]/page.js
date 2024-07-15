import getPost from "@/app/lib/getPost";
import getPostComments from "@/app/lib/getPostComment";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostPage({ params }) {
  const { id } = params;
  const postPromise = getPost(id);
  const commentPromise = getPostComments(id);

  const [post, comment] = await Promise.all([postPromise, commentPromise]);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <hr />
    </div>
  );
}
