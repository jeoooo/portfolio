<script lang="ts">
  export let data;

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
</script>

<svelte:head>
  <!-- <title>{data.meta.title}</title> -->
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />

  <meta property="og:url" content="https://jeoooo.github.io/portfolio" />
  <meta property="og:type" content="portfolio" />
  <meta property="og:title" content="Hi! I'm Jeo 💻📱👩‍💻" />
  <meta property="og:description" content={data.meta.description} />
  <meta property="og:image" content="https://i.imgur.com/BFDKl6t.jpg" />
</svelte:head>

<div
  class=" h-full w-fill mx-[24px] md:md-[100px] lg:mx-[300px] bg-zinc-800 m-3 justify-center items-center"
>
  <div class="flex flex-col items-start">
    <p class="px-[32px] pt-8 pb-4 text-6xl font-bold text-white">
      {data.meta.title}
    </p>
  </div>
  <div class="w-fit h-fit px-[14px] flex flex-row">
    <p class="text-white px-5 pb-5 pt-0 text-justify">
      Published on {formatDate(data.meta.date)}
    </p>
  </div>
  <div class="w-fit h-fit px-[36px] pt-0 flex flex-row gap-x-2">
    {#each data.meta.categories as category}
      <div class="rounded-md bg-white w-fit px-4 py-1">
        <p class="text-black select-none text-justify">{category}</p>
      </div>
    {/each}
  </div>
  <div class="prose p-8 text-white">
    <svelte:component this={data.content} />
  </div>
</div>

<style>
  .prose pre {
    max-inline-size: 100%;
    padding: 1rem;
    border-radius: 8px;
    tab-size: 2;
  }
</style>
