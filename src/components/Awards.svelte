<script>
  import data from "../jeocarlolubao.json";
</script>

<div
  class=" h-fill w-fill mx-[24px] md:md-[100px] lg:mx-[300px] bg-zinc-800 m-3 justify-center items-center pb-[4px]"
>
  <h1 class="px-[24px] pt-8 pb-4 text-4xl text-white font-bold font-syne">
    <i class="fa-solid fa-award mr-3" /> Awards, Conferences, & Certifications
  </h1>
  <ol class="m-[20px] flex flex-col w-fill border-s">
    <li class="mb-4 ms-4">
      <div
        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-3.5 start-[38.5px] sm:start-[315px] md:start-[38.5px] lg:start-[315px] border border-white"
      ></div>
      <h3 class="mb-5 text-3xl font-semibold text-white font-syne">
        Awards & Competitions
      </h3>
      {#each data.awardsConferencesCertifications.awardsCompetitions as award}
        <h3 class="mb-2 text-white font-ibm-plex-sans">
          <i class="fa-solid fa-trophy mr-1" />
          {award}
        </h3>
      {/each}
    </li>
    <li class="mb-4 ms-4">
      <div
        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-3.5 start-[38.5px] sm:start-[315px] md:start-[38.5px] lg:start-[315px] border border-white"
      ></div>

      <h3 class="mb-5 text-3xl font-semibold font-syne text-white">
        Seminars Attended
      </h3>
      {#each data.awardsConferencesCertifications.seminarsAttended as seminar}
        <h3 class="mb-2 text-white font-ibm-plex-sans">
          <i class="fa-solid fa-certificate mr-1" />
          {seminar}
        </h3>
      {/each}
    </li>
    <li class="mb-4 ms-4">
      <div
        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-3.5 start-[38.5px] sm:start-[315px] md:start-[38.5px] lg:start-[315px] border border-white"
      ></div>
      <h3 class="mb-5 text-3xl font-semibold font-syne text-white">
        Conferences
      </h3>
      {#each data.awardsConferencesCertifications.conferences as conference}
        <h3 class="mb-2 text-white font-ibm-plex-sans">
          <i class="fa-solid fa-calendar-day mr-1" />
          {conference}
        </h3>
      {/each}
    </li>
  </ol>
</div>
