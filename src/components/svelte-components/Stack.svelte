<script>
  import { techStack, designStack } from "./../../data/stack.ts";
</script>

<div class="">
  <div class="flex justify-center text-left">
    <div class="">
      <p class="text-black text-8xl font-helvetica-bold uppercase">
        Tech Stack
      </p>
      <p class="text-black text-xs mb-2 font-helvetica uppercase">
        *encountered so far...
      </p>
      <div class="grid grid-cols-3 lg:grid-cols-6 gap-3 mb-8 w-fit">
        {#each techStack.techStack as tech}
          <div class="flex items-center justify-center p-4 bg-black">
            <img src={tech.imgSrc} alt={tech.name} class="w-24 h-24" />
          </div>
        {/each}
      </div>
    </div>
  </div>

  <div class="">
    <p class="text-white">UI/UX Design Tools</p>
    <div class="flex justify-center">
      <div class="grid grid-cols-3 lg:grid-cols-6 gap-3 mb-8 w-fit">
        {#each designStack.designStack as tech}
          <div class="flex items-center justify-center p-4 bg-black">
            <img src={tech.imgSrc} alt={tech.name} class="w-24 h-24" />
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
