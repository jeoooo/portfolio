<script>
  import { education } from "./../../data/education.ts";
</script>

<div class="flex justify-center">
  <div class="w-full max-w-4xl">
    {#each education.education as edu}
      <div class="mb-4 text-left border-4 p-4">
        <h3 class="text-white font-bold">{edu.institution}</h3>
        <h3 class="text-white font-bold">{edu.degree}</h3>
        <h3 class="text-white font-bold">{edu.duration}</h3>
        <h3 class="text-white font-bold">Awards</h3>
        <ul class="text-white">
          {#each edu.awards as award}
            <li>{award}</li>
          {/each}
        </ul>

        <h3 class="text-white font-bold">Organizations</h3>
        {#each edu.organizations as org}
          <div class="mb-2">
            <p class="text-white font-bold">{org.name}</p>
            {#each Object.entries(org.positions) as [position, years]}
              <p class="text-white">{position}</p>
              <ul class="text-white">
                {#each years as year}
                  <li>{year}</li>
                {/each}
              </ul>
            {/each}
          </div>
        {/each}

        <h3 class="text-white font-bold">Dean's Lister</h3>
        <ul class="text-white">
          {#each edu.deansLister as deansList}
            <li>{deansList}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</div>
