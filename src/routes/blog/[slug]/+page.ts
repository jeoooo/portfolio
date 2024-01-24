import { error } from "@sveltejs/kit";

// @ts-ignore
export async function load({ params }) {
  //src/posts
  // D:\CODING\portfolio\src\posts
  const post = await import(`../../../posts/${params.slug}.md`);

  return {
    content: post.default,
    meta: post.metadata,
  };
}
