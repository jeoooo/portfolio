<script>
  import education from "../../data/education.json";
</script>

<section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 border-t-2 border-white overflow-x-hidden">
  <h2 class="font-black font-syne mb-8 sm:mb-12 leading-none" style="font-size: clamp(2rem, 8vw, 3.75rem);">Education</h2>

  <div class="border-l-2 border-white pl-6 sm:pl-10 space-y-12">
    {#each education as edu (edu.degree)}
      <div class="relative">
        <div class="absolute -left-[29px] sm:-left-[41px] top-2 w-3 h-3 bg-white"></div>
        <h3 class="text-2xl sm:text-3xl font-black font-syne leading-tight">{edu.institution}</h3>
        <p class="text-base sm:text-lg ibm-plex-sans-bold mt-1">{edu.degree}</p>
        <p class="text-sm ibm-plex-mono-regular text-gray-400 mt-1 mb-4">{edu.duration}</p>

        {#if edu.awards?.length}
          <ul class="space-y-1 mb-4">
            {#each edu.awards as award (award)}
              <li class="text-base ibm-plex-sans-bold text-white">— {award}</li>
            {/each}
          </ul>
        {/if}

        {#each edu.organizations as org (org.name)}
          <p class="text-base ibm-plex-sans-bold text-white mt-4">{org.name}</p>
          <ul class="list-disc pl-5 space-y-1 mt-2">
            {#each Object.entries(org.positions) as [position, years]}
              <li class="text-base ibm-plex-sans-regular text-white">
                {position} ({years.join(", ")})
              </li>
            {/each}
          </ul>
        {/each}

        {#if edu.deansLister?.length}
          <p class="text-sm uppercase tracking-widest text-gray-400 ibm-plex-mono-regular mt-6 mb-2">Dean's Lister</p>
          <ul class="space-y-1">
            {#each edu.deansLister as semester (semester)}
              <li class="text-base ibm-plex-sans-regular text-white">— {semester}</li>
            {/each}
          </ul>
        {/if}
      </div>
    {/each}
  </div>
</section>
