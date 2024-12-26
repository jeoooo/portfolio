<script>
  import { awards } from "./../../data/awards.ts";
</script>

<div class="flex justify-center">
  <div class="w-full max-w-4xl">
    <h3 class="text-white font-bold">
      Awards, Conferences, and Certifications
    </h3>

    <h4 class="text-white font-bold">Awards and Competitions</h4>
    <ul class="text-white">
      {#each awards.awardsConferencesCertifications.awardsCompetitions as award}
        <li>{award}</li>
      {/each}
    </ul>

    <h4 class="text-white font-bold">Conferences Attended</h4>
    <ul class="text-white">
      {#each awards.awardsConferencesCertifications.conferencesAttended as conference}
        <li>{conference}</li>
      {/each}
    </ul>

    <h4 class="text-white font-bold">Conferences</h4>
    <ul class="text-white">
      {#each awards.awardsConferencesCertifications.conferences as conference}
        <li>{conference}</li>
      {/each}
    </ul>
  </div>
</div>
