<script>
  import Contact from "./../lib/components/old/Contact.svelte";
  import { onMount } from "svelte";
  import "../app.css";
  import { base } from "$app/paths";

  let year = "";

  onMount(() => {
    fetch("http://worldtimeapi.org/api/timezone/Asia/Manila")
      .then((response) => response.json())
      .then((data) => {
        const date = new Date(data.datetime);
        year = date.getFullYear();
      });
  });
  const isDev = process.env.NODE_ENV === "development";
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
<header>
  <div class="fixed top-0 h-12 w-full bg-zinc-800">
    <div class="h-full w-fill lg:mx-[290px] flex flex-row">
      <div class="flex flex-row h-fill gap-2">
        <a href={base} rel="noopener noreferrer">
          <div
            class="h-full w-[250px] p-2 bg-zinc-800 hover:bg-zinc-200 transition ease-in-out text-zinc-200 hover:text-zinc-800"
          >
            <h1 class=" font-syne text-xl font-normal">@jeooo</h1>
          </div>
        </a>
        <!-- <a href="/" rel="noopener noreferrer">
          <div
            class="h-full w-[250px] p-2 bg-zinc-800 hover:bg-zinc-200 transition ease-in-out text-zinc-200 hover:text-zinc-800"
          >
            <h1 class="font-syne text-xl font-normal">Contact</h1>
          </div>
        </a> -->
        <a href="{base}/blog" rel="noopener noreferrer">
          <div
            class="h-full w-[250px] p-2 bg-zinc-800 hover:bg-zinc-200 transition ease-in-out text-zinc-200 hover:text-zinc-800"
          >
            <h1 class="font-syne text-xl font-normal">Blog</h1>
          </div>
        </a>
      </div>
    </div>
  </div>
</header>
<slot />
<footer>
  <div
    class="relative bottom-0 h-[80px] w-full bg-zinc-800 justify-center items-center"
  >
    <div
      class="flex w-fill h-full mx-[24px] md:md-[100px] lg:mx-[300px] items-center justify-center"
    >
      <p class="text-white inline-flex font-syne font-bold">
        {year}. Made with
        <img
          class="ml-1 mt-1 h-5 mr-1"
          alt="simple-icon"
          src="https://cdn.simpleicons.org/svelte/fff"
        />
        +
        <img
          class="ml-1 mt-1 h-5 mr-1"
          alt="simple-icon"
          src="https://cdn.simpleicons.org/typescript/fff"
        />
        +
        <a
          class="ml-1 hover:underline"
          href="https://vincentgarreau.com/particles.js/#default"
          target="_blank"
          rel="noopener noreferrer"
        >
          particles.js
        </a>
      </p>
    </div>
  </div>
</footer>
