<script>
  import Awards from "$lib/components/Awards.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import Education from "$lib/components/Education.svelte";
  import Experience from "$lib/components/Experience.svelte";
  import Stack from "$lib/components/Stack.svelte";
  import About from "$lib/components/About.svelte";
  import Intro from "$lib/components/Intro.svelte";
  import data from "$lib/jeocarlolubao.json";
</script>

<section class="flex flex-col gap-y-2 my-16">
  <Intro />
  <About />
  <Stack />
  <Experience />
  <Education />
  <Projects />
  <Awards />
</section>
