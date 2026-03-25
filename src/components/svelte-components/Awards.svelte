<script>
  import awards from "../../data/awards.json";
</script>

<section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 border-t-2 border-white">
  <h2 class="font-black font-syne mb-8 sm:mb-16 leading-none" style="font-size: clamp(2rem, 8vw, 3.75rem);">Awards &amp; Certs</h2>

  <div class="space-y-0">
    <div class="grid sm:grid-cols-[180px,1fr] gap-4 sm:gap-12 border-t border-white/20 py-8">
      <p class="text-xs uppercase tracking-widest text-gray-400 ibm-plex-mono-regular sm:pt-1">
        Awards &amp;<br class="hidden sm:block" />Competitions
      </p>
      <ul class="space-y-3">
        {#each awards.awardsCompetitions as award}
          <li class="text-base ibm-plex-sans-regular text-white leading-relaxed">{award}</li>
        {/each}
      </ul>
    </div>

    <div class="grid sm:grid-cols-[180px,1fr] gap-4 sm:gap-12 border-t border-white/20 py-8">
      <p class="text-xs uppercase tracking-widest text-gray-400 ibm-plex-mono-regular sm:pt-1">
        Conferences
      </p>
      <ul class="space-y-3">
        {#each awards.conferences as conference}
          <li class="text-base ibm-plex-sans-regular text-white leading-relaxed">{conference}</li>
        {/each}
      </ul>
    </div>

    <div class="grid sm:grid-cols-[180px,1fr] gap-4 sm:gap-12 border-t border-white/20 py-8">
      <p class="text-xs uppercase tracking-widest text-gray-400 ibm-plex-mono-regular sm:pt-1">
        Talks
      </p>
      <ul class="space-y-4">
        {#each awards.talks as talk}
          <li class="text-base ibm-plex-sans-regular text-white leading-relaxed">
            <a href={talk.url} target="_blank" rel="noopener noreferrer" class="hover:underline underline-offset-4">
              {talk.event}
            </a>
            <span class="text-gray-400"> — {talk.organizer}</span>
            <span class="block text-xs ibm-plex-mono-regular text-gray-500 mt-0.5">{talk.date}</span>
          </li>
        {/each}
      </ul>
    </div>

    <div class="grid sm:grid-cols-[180px,1fr] gap-4 sm:gap-12 border-t border-white/20 py-8">
      <p class="text-xs uppercase tracking-widest text-gray-400 ibm-plex-mono-regular sm:pt-1">
        Seminars
      </p>
      <ul class="space-y-3">
        {#each awards.seminarsAttended as seminar}
          <li class="text-base ibm-plex-sans-regular text-white leading-relaxed">{seminar}</li>
        {/each}
      </ul>
    </div>
  </div>
</section>
