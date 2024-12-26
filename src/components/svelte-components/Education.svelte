<script>
  import { education } from "./../../data/education.ts";
</script>

<div class="flex justify-center text-black font-helvetica uppercase">
  <div class="w-full max-w-4xl">
    {#each education.education as edu}
      <div class="mb-4 text-left border-8 border-black p-4">
        <h3 class="font-bold">{edu.institution}</h3>
        <h3 class="font-bold">{edu.degree}</h3>
        <h3 class="font-bold">{edu.duration}</h3>
        <h3 class="font-bold">Awards</h3>
        <ul class="">
          {#each edu.awards as award}
            <li>{award}</li>
          {/each}
        </ul>

        <h3 class=" font-bold">Organizations</h3>
        {#each edu.organizations as org}
          <div class="mb-2">
            <p class=" font-bold">{org.name}</p>
            {#each Object.entries(org.positions) as [position, years]}
              <p class="">{position}</p>
              <ul class="">
                {#each years as year}
                  <li>{year}</li>
                {/each}
              </ul>
            {/each}
          </div>
        {/each}

        <h3 class=" font-bold">Dean's Lister</h3>
        <ul class="">
          {#each edu.deansLister as deansList}
            <li>{deansList}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</div>
