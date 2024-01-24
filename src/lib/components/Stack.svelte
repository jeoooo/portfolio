<script>
  import data from "$lib/jeocarlolubao.json";
</script>

<div
  class=" h-full w-fill mx-[24px] md:md-[100px] lg:mx-[300px] bg-zinc-800 m-3 justify-center items-center"
>
  <div class="flex flex-col items-start">
    <p class="px-[24px] pt-8 pb-4 text-4xl text-white font-syne font-bold">
      <i class="fa-solid fa-layer-group mr-3" />Tech Stack
    </p>
    <p class="px-[24px] pt-2 pb-4 text-sm text-white font-regular">
      *encountered so far...
    </p>
  </div>
  <div
    class="mx-5 w-fit h-fit px-[14px] grid grid-cols-5 lg:grid-cols-8 grid-rows-none gap-y-3 gap-x-4 md:gap-y-4 md:gap-x-4 lg:gap-y-8 lg:gap-x-8 mb-10 mt-5 select-none"
  >
    {#each data.techStack.sort( (a, b) => a.name.localeCompare(b.name) ) as tech (tech.name)}
      {#if tech.name == "csharp"}
        <svg class="h-12 fill-white select-none" viewBox="0 0 128 128">
          <path
            d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zm-53.5 70c-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8zM115 62h-3.2l-.9 4h4.1v5h-5l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6H94v-5h3.5l.9-4H94v-5h5.3l1.2-6h4.9l-1.2 6h3.8l1.2-6h4.8l-1.2 6h2.2v5zm-12.7 4h3.8l.9-4h-3.8z"
          ></path>
        </svg>
      {:else if tech.name == "java"}
        <svg
          class="sm:h-12 lg:h-12 fill-white select-none"
          viewBox="0 0 128 128"
        >
          <path
            d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
          ></path><path
            d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
          ></path><path
            d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"
          ></path><path
            d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"
          ></path><path
            d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
          ></path>
        </svg>
      {:else}
        <img
          class="md:h-20 lg:h-12"
          alt="simple-icon select-none"
          src="https://cdn.simpleicons.org/{tech.name}/fff"
        />
      {/if}
    {/each}
  </div>
  <div class="flex flex-col items-start p-4">
    <p class="px-[14px] pt-4 pb-4 text-4xl font-syne font-bold text-white">
      <i class="fa-solid fa-wand-magic-sparkles mr-3" />UI/UX Design Tools
    </p>
  </div>
  <div
    class="mx-5 w-fit h-fit px-[14px] flex flex-row lg:grid lg:grid-cols-8 grid-rows-none gap-y-2 gap-x-2 lg:gap-y-8 lg:gap-x-8 mb-10"
  >
    {#each data.uiUxDesignTools as tool (tool.name)}
      <img
        class="h-12"
        alt="simple-icon"
        src="https://cdn.simpleicons.org/{tool.name}/fff"
      />
    {/each}
  </div>
</div>
