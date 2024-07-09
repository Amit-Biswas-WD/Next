import { notFound } from "next/navigation";
import React from "react";

function BlogPage({ params }) {
  const { id } = params;

  if (id === "3") {
    notFound();
  }
  return <div className="my-4">The blog id is: {id}</div>;
}

export default BlogPage;
