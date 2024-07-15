import React from "react";

export default async function Comments({ promise }) {
  const comments = await promise;
  return (
    <div className="my-8">
      Comment
      <ul>
        {comments.map((comment) => (
          <li className="my-4" key={comment.id}>
            {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
