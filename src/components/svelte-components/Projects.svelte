<script>
  import Projects from "./Projects.svelte";
  import { projects } from "./../../data/projects.ts";
</script>

<div class="flex justify-center bg-white">
  <div class="w-full max-w-4xl">
    <h3 class="text-black">Projects</h3>
    {#each projects.projects as project}
      <div class="mb-4 text-left border-4 p-4">
        <h3 class="text-black font-bold">{project.title}</h3>
        <p class="text-black">{project.description.short_description}</p>
        <p class="text-black">{project.description.long_description}</p>
        {#if project.websiteLink}
          <a
            href={project.websiteLink}
            class="text-blue-500 underline"
            target="_blank">Visit Website</a
          >
        {/if}
        <h4 class="text-black font-bold mt-2">Tech Stack</h4>
        <div class="flex flex-wrap">
          {#each project.techStack as tech}
            <div class="flex items-center m-2">
              <img src={tech.imgSrc} alt={tech.name} class="w-8 h-8 mr-2" />
              <!-- <span class="text-black">{tech.name}</span> -->
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>
