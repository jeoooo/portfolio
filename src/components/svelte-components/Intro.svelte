<script>
  import socials from "../../data/socials.json";
</script>

<section class="min-h-[calc(100vh-3rem)] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16 pt-24">
  <h1 class="font-syne font-black leading-[0.88] tracking-tight text-white"
      style="font-size: clamp(3.5rem, 13vw, 10rem);">
    Jeo
  </h1>

  <p class="text-xs uppercase tracking-[0.1em] sm:tracking-[0.2em] text-gray-400 mt-4 sm:mt-6 ibm-plex-mono-regular">
    Software Developer — Graphic Designer
  </p>

  <div class="h-1 w-24 bg-white mt-4 sm:mt-6 mb-6 sm:mb-8"></div>

  <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
    {#each socials as social (social.name)}
      <a
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        class="group flex items-center gap-2 px-3 py-2 border border-white text-xs ibm-plex-mono-regular text-white hover:bg-white hover:text-black transition-colors duration-150 min-w-0"
      >
        <img class="h-4 w-4 object-contain flex-shrink-0 group-hover:invert" alt="" src={social.icon_name} />
        <span class="truncate">{social.name}</span>
      </a>
    {/each}
  </div>
</section>
