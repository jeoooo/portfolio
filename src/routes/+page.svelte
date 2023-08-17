<script>
  import { base } from "$app/paths";
  import "$lib/css/styles.css";

  import Navigation from "$lib/components/navigation/navigation.svelte";
  import About from "$lib/components/about/about.svelte";
  import Experience from "$lib/components/experience/experience.svelte";
  import Projects from "$lib/components/projects/projects.svelte";
  import Education from "$lib/components/education/education.svelte";
  import Skills from "$lib/components/skills/skills.svelte";
  import Interests from "$lib/components/interests/interests.svelte";
  import Awards from "$lib/components/awards/awards.svelte";
</script>

<Navigation />

<!-- Page Content-->
<div class="container-fluid p-0">
  <About />
  <Experience />
  <Projects />
  <Education />
  <Skills />
  <Interests />
  <Awards />
</div>
