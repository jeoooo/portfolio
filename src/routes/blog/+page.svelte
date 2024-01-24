<script lang="ts">
  export let data;
  console.log(data);
</script>

<div
  class=" h-full w-fill mx-[24px] md:md-[100px] lg:mx-[300px] bg-zinc-800 m-3 justify-center items-center pb-4"
>
  <div class="flex flex-col items-start">
    <p class="px-[14px] pt-4 pb-4 text-6xl font-bold text-white">Blog</p>
  </div>

  {#each data.posts as post}
    <a href={`blog/${post.slug}`}>
      <div class="w-fill h-fit px-[14px] my-4 mx-8 flex flex-col">
        <p class="text-white text-4xl font-bold px-5 pb-0 pt-3 text-justify">
          {post.title}
        </p>
        <p class="text-white text-lg px-5 pb-0 pt-3 text-justify mb-2">
          {post.date}
        </p>

        <div class="flex flex-row ml-4 gap-x-2">
          {#each post.categories as category}
            <div class="rounded-md bg-white w-fit px-4 py-1">
              <p class="text-black text-lg text-justify">{category}</p>
            </div>
          {/each}
        </div>

        <p class="text-white text-lg px-5 pb-5 pt-5 text-justify">
          {post.description}
        </p>
      </div>
    </a>
  {/each}
</div>
