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
      duration += `${displayYears} ${displayYears === 1 ? "year" : "years"} `;
    }
    if (displayMonths > 0) {
      duration += `${displayMonths} ${displayMonths === 1 ? "month" : "months"}`;
    }
    return duration.trim();
  }

  function sortRoles(roles) {
    return roles
      .slice()
      .sort((a, b) => new Date(b.durationStart) - new Date(a.durationStart));
  }
</script>

<div class="flex justify-center text-black font-helvetica uppercase">
  <div class="w-full max-w-4xl">
    <h3 class="text-black text-6xl font-helvetica-bold uppercase">
      Experience
    </h3>
    {#each experience.experience as exp}
      <div class="mb-4 text-left border-8 border-black p-4">
        {#if exp.roles.length === 1}
          <p class="">{exp.roles[0].title}</p>
          <p class="">{exp.company}</p>
          <p class="">
            {exp.roles[0].durationStart} - {exp.roles[0].durationEnd
              ? exp.roles[0].durationEnd
              : "Present"} ({calculateDuration(
              exp.roles[0].durationStart,
              exp.roles[0].durationEnd,
            )})
          </p>
          {#if exp.roles[0].responsibilities && exp.roles[0].responsibilities.roleDescription}
            <ul class="text-left">
              {#each exp.roles[0].responsibilities.roleDescription as description}
                <li>{description}</li>
              {/each}
            </ul>
          {/if}
          {#if exp.roles[0].responsibilities && exp.roles[0].responsibilities.featuredEvents}
            <p class="font-bold">Featured Events:</p>
            <ul class="text-left">
              {#each exp.roles[0].responsibilities.featuredEvents as event}
                <li class="ml-8 list-disc">{event}</li>
              {/each}
            </ul>
          {/if}
        {:else}
          <p class="font-bold">{exp.company}</p>
          {#each sortRoles(exp.roles) as role}
            <div class="mb-2">
              <p class="">{role.title}</p>
              <p class="">
                {role.durationStart} - {role.durationEnd
                  ? role.durationEnd
                  : "Present"} ({calculateDuration(
                  role.durationStart,
                  role.durationEnd,
                )})
              </p>
              {#if role.responsibilities && role.responsibilities.roleDescription}
                <ul class="text-left">
                  {#each role.responsibilities.roleDescription as description}
                    <li>{description}</li>
                  {/each}
                </ul>
              {/if}
              {#if role.responsibilities && role.responsibilities.featuredEvents}
                <p class="font-bold">Featured Events:</p>
                <ul class="text-left">
                  {#each role.responsibilities.featuredEvents as event}
                    <li class="ml-8 list-disc">{event}</li>
                  {/each}
                </ul>
              {/if}
            </div>
          {/each}
        {/if}
      </div>
    {/each}
  </div>
</div>
