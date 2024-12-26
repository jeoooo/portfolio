<script>
  import { profileData } from "./../../data/intro.ts";
  import Intro from "./Intro.svelte";
</script>

<div class="text-white p-4 text-center bg-black">
  <h1 class="text-6xl font-helvetica-bold uppercase">Hi! I'm Jeo!</h1>
  <h3 class="text-3xl font-helvetica-bold uppercase">
    Software Developer | Graphic Designer
  </h3>
  <hr class="h-px my-4 bg-black border-0 dark:bg-white" />
  <div class="flex space-x-4 items-center justify-center">
    <!-- Replace the src with your social icon URLs -->
    {#each profileData.socials as social}
      <!-- content here -->
      <a
        href={social.link}
        target="_blank"
        class="w-12 h-12 bg-gray-200 flex items-center justify-center"
      >
        <img src={social.imgSrc} alt={social.name} class="w-6 h-6" />
      </a>
    {/each}
  </div>
</div>
