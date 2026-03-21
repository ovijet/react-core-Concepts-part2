import { use } from "react";
import Post from "./post";

export default function Posts({ fetchPost }) {
  let post = use(fetchPost);
  console.log(post);
  return (
    <>
      <div>
        <h1>post:{post.length} </h1>
        {post.map((post) => (
          <Post post={post}></Post>
        ))}
      </div>
    </>
  );
}
