export type Categories = "sveltekit" | "svelte" | "mdsvex";

export type Post = {
  title: string;
  slug: string;
  description: string;
  date: string;
  categories: Categories[];
  published: boolean;
};
