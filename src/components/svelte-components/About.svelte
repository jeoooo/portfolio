<script lang="ts">
  import { profileData } from "./../../data/intro.ts";
</script>

<div class="flex justify-center text-black font-helvetica uppercase">
  <div class="w-full max-w-4xl border-8 border-black p-4 my-8">
    <h3 class="text-black text-8xl font-helvetica-bold uppercase">About Me</h3>
    <p class="text-black font-helvetica uppercase">
      {profileData.aboutMe}
    </p>
  </div>
</div>
