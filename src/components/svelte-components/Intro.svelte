<script>
  import { profileData } from "./../../data/intro.ts";
</script>

<p>{profileData.aboutMe}</p>
{#each profileData.socials as social}
  <a href={social.link} target="_blank" class="">
    <img src={social.imgSrc} alt={social.name} class="" />
  </a>
{/each}
