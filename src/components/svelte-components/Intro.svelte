<script>
  import { profileData } from "./../../data/intro.ts";
  import Intro from "./Intro.svelte";
</script>

<div class="text-white p-4 text-center">
  <h1 class="text-6xl">Hi! I'm Jeo!</h1>
  <h3>Software Developer | Graphic Designer</h3>
  <div class="flex space-x-4 items-center justify-center">
    <!-- Replace the src with your social icon URLs -->
    {#each profileData.socials as social}
      <!-- content here -->
      <a
        href={social.link}
        target="_blank"
        class="w-12 h-12 bg-white flex items-center justify-center"
      >
        <img src={social.imgSrc} alt={social.name} class="w-6 h-6" />
      </a>
    {/each}
  </div>
</div>
