<script>
  import experience from "../../data/experience.json";
</script>

<section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 border-t-2 border-white overflow-x-hidden">
  <h2 class="font-black font-syne mb-8 sm:mb-12 leading-none" style="font-size: clamp(2rem, 8vw, 3.75rem);">Experience</h2>

  <div class="border-l-2 border-white pl-6 sm:pl-10 space-y-12">
    {#each experience as exp}
      <div class="relative">
        <div class="absolute -left-[29px] sm:-left-[41px] top-2 w-3 h-3 bg-white"></div>
        <h3 class="text-2xl sm:text-3xl font-black font-syne leading-tight">{exp.title}</h3>
        {#if exp.company}
          <p class="text-base ibm-plex-sans-semibold mt-1">{exp.company}</p>
        {/if}
        <p class="text-sm ibm-plex-mono-regular text-gray-400 mt-2 mb-4">{exp.duration}</p>
        {#if exp.responsibilities}
          {#each exp.responsibilities.roleDescription as role (role)}
            <p class="text-base ibm-plex-sans-regular text-white leading-relaxed mb-2">{role}</p>
          {/each}
          {#if exp.responsibilities.featuredEvents}
            <p class="text-sm uppercase tracking-widest text-gray-400 ibm-plex-mono-regular mt-4 mb-2">Notable Events</p>
            <ul class="list-disc pl-5 space-y-1">
              {#each exp.responsibilities.featuredEvents as event (event)}
                <li class="text-base ibm-plex-sans-regular text-white">{event}</li>
              {/each}
            </ul>
          {/if}
        {/if}
      </div>
    {/each}
  </div>
</section>
