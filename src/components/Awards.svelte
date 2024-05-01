<script>
  import data from "../jeocarlolubao.json";
</script>

<div
  class=" h-fill w-fill mx-[24px] md:md-[100px] lg:mx-[300px] bg-zinc-800 m-3 justify-center items-center pb-[4px] mb-4"
>
  <h1 class="px-[24px] pt-8 pb-4 text-4xl text-white font-bold syne-600">
    <i class="fa-solid fa-award mr-3" /> Awards, Conferences, & Certifications
  </h1>
  <ol class="my-[32px] mx-[64px] flex flex-col w-fill border-s">
    <li class="mb-4 ms-4">
      <div
        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-3.5 start-[38.5px] sm:start-[358px] md:start-[38.5px] lg:start-[358px] border border-white"
      ></div>
      <h3 class="mb-5 text-3xl font-semibold text-white syne-600">
        Awards & Competitions
      </h3>
      {#each data.awardsConferencesCertifications.awardsCompetitions as award}
        <h3 class="mb-2 text-white ibm-plex-sans-regular">
          <i class="fa-solid fa-trophy mr-1" />
          {award}
        </h3>
      {/each}
    </li>
    <li class="mb-4 ms-4">
      <div
        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-3.5 start-[38.5px] sm:start-[358px] md:start-[38.5px] lg:start-[358px] border border-white"
      ></div>

      <h3 class="mb-5 text-3xl font-semibold syne-600 text-white">
        Seminars Attended
      </h3>
      {#each data.awardsConferencesCertifications.seminarsAttended as seminar}
        <h3 class="mb-2 text-white ibm-plex-sans-regular">
          <i class="fa-solid fa-certificate mr-1" />
          {seminar}
        </h3>
      {/each}
    </li>
    <li class="mb-4 ms-4">
      <div
        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-3.5 start-[38.5px] sm:start-[358px] md:start-[38.5px] lg:start-[358px] border border-white"
      ></div>
      <h3 class="mb-5 text-3xl font-semibold syne-600 text-white">
        Conferences
      </h3>
      {#each data.awardsConferencesCertifications.conferences as conference}
        <h3 class="mb-2 text-white ibm-plex-sans-regular">
          <i class="fa-solid fa-calendar-day mr-1" />
          {conference}
        </h3>
      {/each}
    </li>
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
