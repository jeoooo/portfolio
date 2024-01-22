<script>
  import data from "$lib/jeocarlolubao.json";
</script>

<div
  class=" h-fill w-fill mx-[24px] md:md-[100px] lg:mx-[300px] bg-zinc-800 m-3 justify-center items-center pb-[4px]"
>
  <h1 class="px-[24px] pt-8 pb-4 text-4xl text-white font-bold">
    <i class="fa-solid fa-user-graduate mr-3" /> Education
  </h1>
  <ol class="m-[20px] flex flex-col w-fill border-s">
    {#each data.education as edu (edu.degree)}
      <li class="mb-4 ms-4">
        <div
          class="absolute w-3 h-3 bg-gray-200 rounded-full mt-3.5 start-[38.5px] sm:start-[315px] md:start-[38.5px] lg:start-[315px] border border-white"
        ></div>
        <h3 class="mb-1 text-3xl font-semibold text-gray-900 dark:text-white">
          {edu.institution}
        </h3>
        <h3 class="mt-4 mb-2 text-xl font-semibold text-gray-200">
          {edu.degree}
        </h3>
        <h3 class=" text-md font-normal leading-none text-gray-400">
          {edu.duration}
        </h3>

        <ul class="pl-5 pt-3">
          {#each edu.awards as award (award)}
            <li
              class="text-base font-bold text-white pt-2 font-ibm-plex-sans my-1"
            >
              <i class="fa-solid fa-medal mr-1" />{award}
            </li>
          {/each}
        </ul>
        {#each edu.organizations as org (org.name)}
          <p class="text-base font-bold text-white pt-5 font-ibm-plex-sans">
            {org.name}
          </p>
          <ul class="pl-5 pt-3 list-disc list-inside">
            {#each Object.entries(org.positions) as [position, years]}
              <li class="text-white font-ibm-plex-sans my-2">
                <!-- Set text to white -->
                {position}, ({years.join(", ")})
              </li>
            {/each}
          </ul>
        {/each}
        <p class="text-base font-bold text-white pt-5 font-ibm-plex-sans">
          Dean's Lister
        </p>
        <ul class="pl-5 pt-3 list-inside">
          {#each edu.deansLister as semester (semester)}
            <li class="text-white font-ibm-plex-sans my-2">
              <!-- Set text to white -->
              <i class="fa-solid fa-medal mr-1" />{semester}
            </li>
          {/each}
        </ul>
      </li>
    {/each}
  </ol>
</div>
