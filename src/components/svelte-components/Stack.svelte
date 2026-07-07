<script>
  import TechIcon from "./TechIcon.svelte";
  import techStack from "../../data/techStack.json";
  import uiUxDesignTools from "../../data/uiUxDesignTools.json";
  import aiTools from "../../data/aiTools.json";

  let failedAiIcons = {};
  function onAiIconError(name) {
    failedAiIcons = { ...failedAiIcons, [name]: true };
  }

  const techCategories = [
    { key: "languages", label: "Languages" },
    { key: "frontendMobile", label: "Frontend & Mobile" },
    { key: "backendCloud", label: "Backend & Cloud" },
    { key: "tools", label: "Tools" }
  ];
</script>

<section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 border-t-2 border-white">
  <h2 class="font-black font-syne mb-4 leading-none" style="font-size: clamp(2rem, 8vw, 3.75rem);">Stack</h2>
  <p class="text-sm ibm-plex-sans-regular text-gray-400 mb-8 sm:mb-12">*encountered so far</p>

  {#each techCategories as category (category.key)}
    <h3 class="text-2xl font-black font-syne mb-8 border-t border-white pt-8">{category.label}</h3>
    <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-3 sm:gap-4 mb-16">
      {#each techStack[category.key].sort((a, b) => a.name.localeCompare(b.name)) as tech (tech.name)}
        <TechIcon name={tech.name} />
      {/each}
    </div>
  {/each}

  <h3 class="text-2xl font-black font-syne mb-8 border-t border-white pt-8">AI Tools</h3>
  <div class="flex flex-wrap gap-6 mb-16">
    {#each aiTools as tool (tool.name)}
      <div class="flex flex-col items-center gap-2">
        {#if failedAiIcons[tool.name]}
          <div class="h-10 w-10 flex items-center justify-center rounded bg-white/10 border border-white/20">
            <span class="text-white text-xs font-black font-syne leading-none">{tool.label.split(" ")[0]}</span>
          </div>
        {:else if tool.name === "openai"}
          <img
            class="h-10 w-10 object-contain"
            style="filter: brightness(0) invert(1);"
            alt={tool.label}
            src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg"
            on:error={() => onAiIconError(tool.name)}
          />
        {:else if tool.name === "deepseek"}
          <img
            class="h-10 w-10 object-contain"
            style="filter: brightness(0) invert(1);"
            alt={tool.label}
            src="https://cdn.jsdelivr.net/npm/@lobehub/icons-static-png@latest/dark/deepseek.png"
            on:error={() => onAiIconError(tool.name)}
          />
        {:else if tool.name === "zai"}
          <img
            class="h-10 w-10 object-contain"
            alt={tool.label}
            src="https://cdn.jsdelivr.net/npm/@lobehub/icons-static-png@latest/dark/zai.png"
            on:error={() => onAiIconError(tool.name)}
          />
        {:else}
          <img
            class="h-10 w-10 object-contain"
            alt={tool.label}
            src="https://cdn.simpleicons.org/{tool.name}/fff"
            on:error={() => onAiIconError(tool.name)}
          />
        {/if}
      </div>
    {/each}
  </div>

  <h3 class="text-2xl font-black font-syne mb-8 border-t border-white pt-8">UI/UX Design Tools</h3>
  <div class="flex flex-wrap gap-4">
    {#each uiUxDesignTools.sort((a, b) => a.name.localeCompare(b.name)) as tool (tool.name)}
      <img class="h-10 w-10 object-contain" alt="design tool" src={tool.name} />
    {/each}
  </div>
</section>
