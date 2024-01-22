<script>
  import { onMount } from "svelte";
  import "../app.css";

  let year = "";

  onMount(() => {
    fetch("http://worldtimeapi.org/api/timezone/Asia/Manila")
      .then((response) => response.json())
      .then((data) => {
        const date = new Date(data.datetime);
        year = date.getFullYear();
      });
  });
</script>

<header>
  <div class="h-10 w-fill m-3">
    <div class="h-full w-fill lg:mx-[290px] flex flex-row">
      <div class="flex flex-row h-fill gap-2">
        <div class="h-full w-[100px] p-2 bg-zinc-800">
          <a href="/" rel="noopener noreferrer">
            <h1 class="text-white">@jeooo</h1>
          </a>
        </div>
        <div class="h-full w-[100px] p-2 bg-zinc-800">
          <a href="/blog" rel="noopener noreferrer">
            <h1 class="text-white">blog</h1>
          </a>
        </div>
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
      <p class="text-white inline-flex">
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
