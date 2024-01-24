<script lang="ts">
  import { title } from "$lib/config.js";

  export let data;

  function formatDate(dateString: string): string {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  const isDev = process.env.NODE_ENV === "development";
  console.log(data.posts.slug);
</script>

<svelte:head>
  <title>Blog</title>
  <meta title="Jeo | Android Developer" />
  <meta name="description" content="Jeo | Android Developer" />

  <meta property="og:url" content="https://jeoooo.github.io/portfolio" />
  <meta property="og:type" content="portfolio" />
  <meta property="og:title" content="Hi! I'm Jeo 💻📱👩‍💻" />
  <meta
    property="og:description"
    content="Software Developer | Graphic Designer"
  />
  <meta property="og:image" content="https://i.imgur.com/zpipPLf.png" />
</svelte:head>

<div
  class=" h-screen w-fill mx-[24px] md:md-[100px] lg:mx-[300px] bg-zinc-800 justify-center items-center my-20"
>
  <div class="flex flex-col items-start">
    <p class="px-[20px] p-6 text-6xl font-bold font-syne text-white">Blog</p>
  </div>

  {#each data.posts as post}
    <a href="blog{`/${post.slug}`}">
      <div
        class="w-fill h-fit px-[14px] my-4 mx-8 flex flex-col border-t-[1px] border-b-[1px]"
      >
        <p
          class="text-white text-xl lg:text-4xl font-bold lg:px-5 pb-0 pt-3 text-justify font-syne"
        >
          {post.title}
        </p>
        <p class="text-white text-lg px-5 text-justify my-5 font-ibm-plex-sans">
          {formatDate(post.date)}
        </p>

        <div class="flex flex-col lg:flex-row ml-4 gap-y-2 lg:gap-x-2">
          {#each post.categories as category}
            <div class="rounded-md bg-white w-fit px-4 py-1">
              <p class="text-black font-ibm-plex-mono text-lg text-justify">
                {category}
              </p>
            </div>
          {/each}
        </div>

        <p
          class="text-white text-lg px-5 pb-5 pt-5 text-justify font-ibm-plex-sans"
        >
          {post.description}
        </p>
      </div>
    </a>
  {/each}
</div>
