<script>
  import { awards } from "./../../data/awards.ts";
</script>

<div class="flex justify-center text-black font-helvetica uppercase">
  <div
    class="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 px-12 py-16"
  >
    <!-- Title Section with line accent -->
    <div class="col-span-1">
      <h3 class="font-bold text-4xl mb-6 relative">
        Awards, Conferences, and Certifications
        <div class="absolute bottom-0 left-0 w-16 h-1 bg-black"></div>
      </h3>
    </div>

    <!-- Awards and Competitions Section with background block -->
    <div class="col-span-1 bg-gray-100 p-8">
      <h4 class="font-bold text-2xl mb-4 text-gray-800">
        Awards and Competitions
      </h4>
      <ul class="list-disc ml-8 space-y-2 text-lg text-gray-600">
        {#each awards.awardsConferencesCertifications.awardsCompetitions as award}
          <li>{award}</li>
        {/each}
      </ul>
    </div>

    <!-- Conferences Attended Section with accent line -->
    <div class="col-span-1">
      <h4 class="font-bold text-2xl mb-4 relative text-blue-600">
        Conferences Attended
        <div class="absolute bottom-0 left-0 w-12 h-1 bg-blue-600"></div>
      </h4>
      <ul class="list-disc ml-8 space-y-2 text-lg text-gray-600">
        {#each awards.awardsConferencesCertifications.conferencesAttended as conference}
          <li>{conference}</li>
        {/each}
      </ul>
    </div>

    <!-- Conferences Section with bold contrast block -->
    <div class="col-span-1 bg-yellow-300 p-8">
      <h4 class="font-bold text-2xl mb-4 text-white">Talks</h4>
      <ul class="list-disc ml-8 space-y-2 text-lg text-gray-800">
        {#each awards.awardsConferencesCertifications.conferences as conference}
          <li>{conference}</li>
        {/each}
      </ul>
    </div>
  </div>
</div>
