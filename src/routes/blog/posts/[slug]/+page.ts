import { error } from "@sveltejs/kit";

// @ts-ignore
export async function load({ params }) {
  try {
    //src/posts
    // D:\CODING\portfolio\src\posts
    const post = await import(`../../posts/${params.slug}.md`);

    return {
      content: post.default,
      meta: post.metadata,
    };
  } catch (e) {
    throw error(404, `Could not find ${params.slug}`);
  }
}
