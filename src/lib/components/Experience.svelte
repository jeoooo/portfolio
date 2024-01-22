<script>
  import data from "$lib/jeocarlolubao.json";
</script>

<div
  class=" h-fill w-fill mx-[24px] md:md-[100px] lg:mx-[300px] bg-zinc-800 m-3 justify-center items-center pb-[4px]"
>
  <h1 class="px-[24px] pt-8 pb-4 text-4xl text-white font-bold">
    <i class="fa-solid fa-user mr-3" /> Experience
  </h1>
  <ol class="m-[20px] flex flex-col w-fill border-s">
    {#each data.experience as exp}
      <li class="mb-4 ms-4">
        <div
          class="absolute w-3 h-3 bg-gray-200 rounded-full mt-3.5 start-[38.5px] sm:start-[315px] md:start-[38.5px] lg:start-[315px] border border-white"
        ></div>
        <h3 class="mb-1 text-3xl font-semibold text-gray-900 dark:text-white">
          {exp.title}
        </h3>
        {#if exp.company}
          <h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
            {exp.company}
          </h3>
        {/if}

        <h3
          class="mt-3 text-md font-normal leading-none text-gray-400 dark:text-gray-500"
        >
          {exp.duration}
        </h3>
        {#if exp.responsibilities}
          {#each exp.responsibilities.roleDescription as role (role)}
            <p
              class="text-base font-normal text-justify text-gray-500 dark:text-gray-400 my-2"
            >
              {role}
            </p>
          {/each}

          {#if exp.responsibilities.featuredEvents}
            <p
              class="text-base font-semibold text-justify text-gray-500 dark:text-gray-400 my-2"
            >
              Notable Events
            </p>
            {#each exp.responsibilities.featuredEvents as event (event)}
              <ul
                class="ml-10 list-disc text-base font-normal text-justify text-gray-500 dark:text-gray-400 my-1"
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
