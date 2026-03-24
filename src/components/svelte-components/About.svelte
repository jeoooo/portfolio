<script lang="ts">
  import about from "../../data/about.json";
</script>

<section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 border-t-2 border-white">
  <h2 class="font-black font-syne mb-8 sm:mb-12 leading-none" style="font-size: clamp(2rem, 8vw, 3.75rem);">About Me</h2>

  <div class="max-w-2xl">
    <p class="text-base sm:text-lg ibm-plex-sans-regular leading-relaxed text-white">
      {about.aboutMe}
    </p>
  </div>
</section>
