import Comments from "@/app/components/comments";
import getAllPost from "@/app/lib/getAllPost";
import getPost from "@/app/lib/getPost";
import getPostComments from "@/app/lib/getPostComment";
import React, { Suspense } from "react";

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

  // const [post, comment] = await Promise.all([postPromise, commentPromise]);

  const post = await postPromise;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <hr className="my-2" />
      <Suspense fallback="<h2>Loading Comments....</h2>">
        <Comments promise={commentPromise} />
      </Suspense>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPost();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
