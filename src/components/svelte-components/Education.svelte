<script>
  import { education } from "./../../data/education.ts";
</script>

<div class="flex justify-center text-black font-helvetica uppercase">
  <div class="w-full max-w-4xl px-8 py-16">
    <!-- "EDUCATION" Header -->
    <div class="text-left mb-8">
      <h2 class="text-4xl uppercase">EDUCATION</h2>
    </div>

    {#each education.education as edu}
      <div class="mb-8 p-8 border-t-4 border-b-4 border-[#333]">
        <div class="mb-6 text-left">
          <h3 class="text-2xl font-semibold mb-2">{edu.institution}</h3>
          <p class="text-xl font-light mb-4">{edu.degree}</p>
          <p class="text-lg font-light mb-2">{edu.duration}</p>
        </div>

        <div class="mb-6">
          <h4 class="text-lg font-semibold text-[#333] mb-2">Awards</h4>
          <ul class="list-disc pl-6">
            {#each edu.awards as award}
              <li class="mb-2">{award}</li>
            {/each}
          </ul>
        </div>

        <div class="mb-6">
          <h4 class="text-lg font-semibold text-[#333] mb-2">Organizations</h4>
          {#each edu.organizations as org}
            <div class="mb-4">
              <p class="text-lg font-medium mb-1">{org.name}</p>
              {#each Object.entries(org.positions) as [position, years]}
                <div class="mb-2">
                  <p class="font-light">{position}</p>
                  <ul class="list-disc pl-6">
                    {#each years as year}
                      <li>{year}</li>
                    {/each}
                  </ul>
                </div>
              {/each}
            </div>
          {/each}
        </div>

        <div class="mb-6">
          <h4 class="text-lg font-semibold text-[#333] mb-2">Dean's Lister</h4>
          <ul class="list-disc pl-6">
            {#each edu.deansLister as deansList}
              <li class="mb-2">{deansList}</li>
            {/each}
          </ul>
        </div>
      </div>
    {/each}
  </div>
</div>
