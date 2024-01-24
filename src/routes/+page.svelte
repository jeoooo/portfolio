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

<svelte:head>
  <meta title="Jeo | Android Developer" />
  <meta name="description" content="Jeo | Android Developer" />

  <meta property="og:url" content="https://jeoooo.github.io/portfolio" />
  <meta property="og:type" content="portfolio" />
  <meta property="og:title" content="Hi! I'm Jeo 💻📱👩‍💻" />
  <meta
    property="og:description"
    content="Software Developer | Graphic Designer"
  />
  <meta property="og:image" content="https://i.imgur.com/zpipPLf.png" />
</svelte:head>
<section class="flex flex-col gap-y-2 my-16">
  <Intro />
  <About />
  <Stack />
  <Experience />
  <Education />
  <Projects />
  <Awards />
</section>
