<script>
  import data from "$lib/jeocarlolubao.json";
</script>

<div
  class=" h-fill w-fill mx-[24px] md:md-[100px] lg:mx-[300px] bg-zinc-800 m-3 justify-center items-center pb-[4px]"
>
  <h1 class="px-[24px] pt-8 pb-4 text-4xl text-white font-syne font-bold">
    <i class="fa-solid fa-user mr-3" /> Experience
  </h1>
  <ol class="m-[20px] flex flex-col w-fill border-s">
    {#each data.experience as exp}
      <li class="mb-4 ms-4">
        <div
          class="absolute w-3 h-3 bg-gray-200 rounded-full mt-3.5 start-[38.5px] sm:start-[315px] md:start-[38.5px] lg:start-[315px] border border-white"
        ></div>
        <h3 class="mb-1 text-3xl text-white font-syne font-bold">
          {exp.title}
        </h3>
        {#if exp.company}
          <h3 class="my-2 text-lg font-semibold text-white font-ibm-plex-sans">
            {exp.company}
          </h3>
        {/if}

        <h3
          class="my-3 text-sm font-normal leading-none text-gray-400 font-ibm-plex-sans"
        >
          {exp.duration}
        </h3>
        {#if exp.responsibilities}
          {#each exp.responsibilities.roleDescription as role (role)}
            <p class="font-ibm-plex-sans text-justify text-gray-50 my-2">
              {role}
            </p>
          {/each}

          {#if exp.responsibilities.featuredEvents}
            <p
              class="font-ibm-plex-sans font-semibold text-justify text-gray-50 my-2"
            >
              Notable Events
            </p>
            {#each exp.responsibilities.featuredEvents as event (event)}
              <ul
                class="ml-10 font-ibm-plex-sans list-disc text-base font-normal text-justify text-gray-50 my-1"
              >
                <li>{event}</li>
              </ul>
            {/each}
          {/if}
        {/if}
      </li>
    {/each}
  </ol>
</div>
