<script>
  import data from "$lib/jeocarlolubao.json";
</script>

<div
  class=" h-full w-fill mx-[24px] md:md-[100px] lg:mx-[300px] bg-zinc-800 m-3 justify-center items-center"
>
  <div class="flex flex-col items-start">
    <p class="px-[14px] pt-4 pb-4 text-4xl font-bold text-white">About Me</p>
  </div>
  <div class="w-fit h-fit px-[14px] flex flex-row">
    <p class="text-white px-5 pb-5 pt-0 text-justify">
      {@html data.aboutMe.replace(/\n/g, "<br>")}
    </p>
  </div>
</div>
