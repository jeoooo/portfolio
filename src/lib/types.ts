export type Categories = "sveltekit" | "svelte" | "mdsvex" | "pocketbase";

export type Post = {
  title: string;
  slug: string;
  description: string;
  date: string;
  categories: Categories[];
  published: boolean;
};
