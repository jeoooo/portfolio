<script>
  import TechIcon from "./TechIcon.svelte";
  import projects from "../../data/projects.json";
</script>

<section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 border-t-2 border-white overflow-x-hidden">
  <h2 class="font-black font-syne mb-8 sm:mb-12 leading-none" style="font-size: clamp(2rem, 8vw, 3.75rem);">Projects</h2>

  <div class="border-l-2 border-white pl-6 sm:pl-10 space-y-16">
    {#each projects.filter(p => p.shown !== false) as project (project.title)}
      <div class="relative">
        <div class="absolute -left-[29px] sm:-left-[41px] top-2 w-3 h-3 bg-white"></div>
        <h3 class="text-2xl sm:text-3xl font-black font-syne leading-tight">{project.title}</h3>
        <p class="text-base ibm-plex-sans-bold mt-2 mb-1">{project.description.short_description}</p>

        {#if project.websiteLink}
          <a href={project.websiteLink} target="_blank" rel="noopener noreferrer"
             class="text-sm ibm-plex-mono-regular text-gray-400 hover:text-white hover:underline break-all">
            {project.websiteLink}
          </a>
        {/if}

        <p class="text-base ibm-plex-sans-regular text-white leading-relaxed mt-4 mb-4">
          {project.description.long_description}
        </p>

        <div class="flex flex-wrap gap-3 mt-4">
          {#each project.techStack as tech (tech.name)}
            <TechIcon name={tech.name} sizeClass="h-7 w-7" />
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>
