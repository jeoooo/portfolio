<script>
  import Experience from "./Experience.svelte";
  import { experience } from "./../../data/experience.ts";

  function calculateDuration(start, end) {
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date();
    const years = endDate.getFullYear() - startDate.getFullYear();
    const months = endDate.getMonth() - startDate.getMonth() + years * 12;
    const displayYears = Math.floor(months / 12);
    const displayMonths = months % 12;
    let duration = "";
    if (displayYears > 0) {
      duration += `${displayYears} ${displayYears === 1 ? "yr" : "yrs"} `;
    }
    if (displayMonths > 0) {
      duration += `${displayMonths} ${displayMonths === 1 ? "mo" : "mos"}`;
    }
    return duration.trim();
  }

  function sortRoles(roles) {
    return roles
      .slice()
      .sort((a, b) => new Date(b.durationStart) - new Date(a.durationStart));
  }
</script>

<div
  class="bg-[#14213D] flex justify-center text-white font-helvetica uppercase px-4"
>
  <div class="w-full">
    <h3
      class="text-6xl text-center md:text-left md:text-9xl font-bold uppercase my-4"
    >
      Experience
    </h3>
    {#each experience.experience as exp}
      <div class="experience-item border-8 border-white p-6 space-y-6 my-6">
        {#if exp.roles.length === 1}
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Left Side: Title, Company, Duration -->
            <div class="flex flex-col">
              <p class="text-4xl font-bold">{exp.roles[0].title}</p>
              <p class="text-lg">{exp.company}</p>
              <p class="text-sm">
                {exp.roles[0].durationStart} - {exp.roles[0].durationEnd
                  ? exp.roles[0].durationEnd
                  : "Present"}
              </p>
              <p class="text-sm">
                ({calculateDuration(
                  exp.roles[0].durationStart,
                  exp.roles[0].durationEnd,
                )})
              </p>
            </div>
            <!-- Right Side: Description -->
            <div class="flex flex-col">
              {#if exp.roles[0].responsibilities && exp.roles[0].responsibilities.roleDescription}
                <ul class="list-disc pl-6 text-sm mt-2">
                  {#each exp.roles[0].responsibilities.roleDescription as description}
                    <li>{description}</li>
                  {/each}
                </ul>
              {/if}
              {#if exp.roles[0].responsibilities && exp.roles[0].responsibilities.featuredEvents}
                <p class="font-bold mt-4">Featured Events:</p>
                <ul class="list-disc pl-6 text-sm">
                  {#each exp.roles[0].responsibilities.featuredEvents as event}
                    <li>{event}</li>
                  {/each}
                </ul>
              {/if}
            </div>
          </div>
        {:else}
          <p class="text-4xl font-bold">{exp.company}</p>
          {#each sortRoles(exp.roles) as role}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 space-y-4">
              <!-- Left Side: Title, Company, Duration -->
              <div class="flex flex-col">
                <p class="text-lg">{role.title}</p>
                <p class="text-sm">
                  {role.durationStart} - {role.durationEnd
                    ? role.durationEnd
                    : "Present"}
                </p>
                <p class="text-sm">
                  ({calculateDuration(role.durationStart, role.durationEnd)})
                </p>
              </div>
              <!-- Right Side: Description -->
              <div class="flex flex-col">
                {#if role.responsibilities && role.responsibilities.roleDescription}
                  <ul class="list-disc pl-6 text-sm">
                    {#each role.responsibilities.roleDescription as description}
                      <li>{description}</li>
                    {/each}
                  </ul>
                {/if}
                {#if role.responsibilities && role.responsibilities.featuredEvents}
                  <p class="font-bold mt-4">Featured Events:</p>
                  <ul class="list-disc pl-6 text-sm">
                    {#each role.responsibilities.featuredEvents as event}
                      <li>{event}</li>
                    {/each}
                  </ul>
                {/if}
              </div>
            </div>
          {/each}
        {/if}
      </div>
    {/each}
  </div>
</div>
