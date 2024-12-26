<script>
  import { techStack, designStack } from "./../../data/stack.ts";
</script>

<div class="p-8 bg-[#14213D]">
  <!-- Tech Stack Section -->
  <div class="flex flex-col lg:flex-row items-start mb-16">
    <div class="lg:w-1/2 text-left mb-8 lg:mb-0 relative">
      <p class="text-8xl font-helvetica-bold text-white uppercase">
        Tech Stack
      </p>
      <p class="text-xs font-helvetica uppercase text-white mt-2">
        *encountered so far...
      </p>

      <!-- Horizontal Line(s) Below Typography -->
      <div class="relative mt-6">
        <div class="h-2 bg-[#00BBF9] mb-4 md:mr-4"></div>
        <div class="h-4 bg-[#00BBF9] mb-4 md:mr-4"></div>
        <div class="h-8 bg-[#00BBF9] mb-4 md:mr-4"></div>
        <div class="h-16 bg-[#00BBF9] mb-4 md:mr-4"></div>
        <div class="h-24 bg-[#3A86FF] mb-4 md:mr-4"></div>
        <div class="h-32 bg-[#18e06f] mb-4 md:mr-4"></div>
        <div class="h-48 bg-[#18e06f] mb-4 md:mr-4"></div>
      </div>
    </div>

    <!-- Right Side (Tech Stack Grid) -->
    <div class="lg:w-1/2 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
      {#each techStack.techStack as tech}
        <div class="flex items-center justify-center p-4">
          <img
            src={tech.imgSrc}
            alt={tech.name}
            class="w-24 h-24 object-contain hover:scale-125 transition-transform duration-300"
          />
        </div>
      {/each}
    </div>
  </div>

  <!-- UI/UX Design Tools Section -->
  <div class="flex flex-col lg:flex-row items-start mb-16 gap-8">
    <!-- Right Side (Big Typography) -->
    <div class="lg:w-1/2 text-left mb-8 lg:mb-0">
      <p class="text-8xl font-helvetica-bold text-white uppercase">
        UI/UX Design Tools
      </p>
    </div>
    <!-- Left Side (Design Tools Grid) -->
    <div class="lg:w-1/2 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
      {#each designStack.designStack as tech}
        <div class="flex items-center justify-center p-4">
          <img
            src={tech.imgSrc}
            alt={tech.name}
            class="w-24 h-24 object-contain hover:scale-125 transition-transform duration-300"
          />
        </div>
      {/each}
    </div>
  </div>
</div>
