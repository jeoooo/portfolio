<script>
  import data from "$lib/jeocarlolubao.json";
</script>

<div
  class="h-full w-fill pt-10 pb-10 mx-[24px] md:md-[100px] lg:mx-[300px] bg-zinc-800 m-3 flex justify-center items-center"
>
  <div class="flex flex-col items-center">
    <p class="text-6xl font-bold text-white">Jeo Carlo Lubao</p>
    <p class="text-xl mt-8 font-bold text-white">
      Software Developer | Graphic Designer
    </p>
    {#each data.socials as social (social.name)}
      <a href={social.link} target="_blank" rel="noopener noreferrer">
        <div class="flex flex-col gap-4 w-[350px] mt-5">
          <div
            class="text-zinc-800 border p-2 inline-flex h-12 transition ease-in-out hover:scale-110 bg-white"
          >
            <img
              class="h-4 mt-1.5 mr-2 ml-3"
              alt="simple-icon"
              src="https://cdn.simpleicons.org/{social.icon_name}/333"
            />
            {social.name}
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>
