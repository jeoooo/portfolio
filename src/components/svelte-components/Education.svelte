<script>
  import data from "../../jeocarlolubao.json";
</script>

<div
  class=" h-fill w-fill mx-[24px] md:md-[100px] lg:mx-[300px] bg-zinc-800 m-3 justify-center items-center pb-[4px]"
>
  <h1 class="px-[24px] pt-8 pb-4 text-4xl text-white syne-600 font-bold">
    <i class="fa-solid fa-user-graduate mr-3" /> Education
  </h1>
  <ol class="my-[32px] mx-[64px] flex flex-col w-fill border-s">
    {#each data.education as edu (edu.degree)}
      <li class="mb-4 ms-4">
        <div
          class="absolute w-3 h-3 bg-gray-200 rounded-full mt-3.5 start-[82.5px] sm:start-[358px] md:start-[82.5px] lg:start-[358px] border border-white"
        ></div>
        <h3 class="mb-1 text-3xl font-semibold text-gray-50 syne-600">
          {edu.institution}
        </h3>
        <h3
          class="mt-4 mb-2 text-xl font-semibold text-gray-200 ibm-plex-sans-bold"
        >
          {edu.degree}
        </h3>
        <h3
          class=" text-md font-normal leading-none text-gray-400 ibm-plex-sans-regular"
        >
          {edu.duration}
        </h3>

        <ul class="pl-5 pt-3">
          {#each edu.awards as award (award)}
            <li
              class="text-base font-bold text-white pt-2 ibm-plex-sans-bold my-1"
            >
              <i class="fa-solid fa-medal mr-1" />{award}
            </li>
          {/each}
        </ul>
        {#each edu.organizations as org (org.name)}
          <p class="text-base font-bold text-white pt-5 ibm-plex-sans-bold">
            {org.name}
          </p>
          <ul class="pl-5 pt-3 list-disc list-inside">
            {#each Object.entries(org.positions) as [position, years]}
              <li class="text-white ibm-plex-sans-regular my-2">
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
            <li class="text-white ibm-plex-sans-regular my-2">
              <!-- Set text to white -->
              <i class="fa-solid fa-medal mr-1" />{semester}
            </li>
          {/each}
        </ul>
      </li>
    {/each}
  </ol>
</div>

<style>
  .ibm-plex-sans-thin {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 100;
    font-style: normal;
  }

  .ibm-plex-sans-extralight {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 200;
    font-style: normal;
  }

  .ibm-plex-sans-light {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 300;
    font-style: normal;
  }

  .ibm-plex-sans-regular {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .ibm-plex-sans-medium {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    font-style: normal;
  }

  .ibm-plex-sans-semibold {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 600;
    font-style: normal;
  }

  .ibm-plex-sans-bold {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 700;
    font-style: normal;
  }

  .ibm-plex-sans-thin-italic {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 100;
    font-style: italic;
  }

  .ibm-plex-sans-extralight-italic {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 200;
    font-style: italic;
  }

  .ibm-plex-sans-light-italic {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 300;
    font-style: italic;
  }

  .ibm-plex-sans-regular-italic {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 400;
    font-style: italic;
  }

  .ibm-plex-sans-medium-italic {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    font-style: italic;
  }

  .ibm-plex-sans-semibold-italic {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 600;
    font-style: italic;
  }

  .ibm-plex-sans-bold-italic {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 700;
    font-style: italic;
  }

  .ibm-plex-mono-thin {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 100;
    font-style: normal;
  }

  .ibm-plex-mono-extralight {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 200;
    font-style: normal;
  }

  .ibm-plex-mono-light {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 300;
    font-style: normal;
  }

  .ibm-plex-mono-regular {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 400;
    font-style: normal;
  }

  .ibm-plex-mono-medium {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 500;
    font-style: normal;
  }

  .ibm-plex-mono-semibold {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 600;
    font-style: normal;
  }

  .ibm-plex-mono-bold {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 700;
    font-style: normal;
  }

  .ibm-plex-mono-thin-italic {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 100;
    font-style: italic;
  }

  .ibm-plex-mono-extralight-italic {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 200;
    font-style: italic;
  }

  .ibm-plex-mono-light-italic {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 300;
    font-style: italic;
  }

  .ibm-plex-mono-regular-italic {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 400;
    font-style: italic;
  }

  .ibm-plex-mono-medium-italic {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 500;
    font-style: italic;
  }

  .ibm-plex-mono-semibold-italic {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 600;
    font-style: italic;
  }

  .ibm-plex-mono-bold-italic {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 700;
    font-style: italic;
  }
  .syne-400 {
    font-family: "Syne", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  }

  .syne-600 {
    font-family: "Syne", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
  }

  .syne-800 {
    font-family: "Syne", sans-serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
  }
</style>
