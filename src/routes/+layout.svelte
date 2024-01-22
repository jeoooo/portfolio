<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "../app.css";

  let year = "";

  fetch("http://worldtimeapi.org/api/timezone/Asia/Manila")
    .then((response) => response.json())
    .then((data) => {
      const date = new Date(data.datetime);
      year = date.getFullYear();
    });
</script>

<header>
  <div class="h-10 w-fill m-3">
    <div class="h-full w-fill lg:mx-[290px] flex flex-row">
      <div class="flex flex-row h-fill gap-2">
        <div class="h-full w-[100px] p-2 bg-zinc-800">
          <h1 class="text-white">@jeooo</h1>
        </div>
        <div class="h-full w-[100px] p-2 bg-zinc-800">
          <h1 class="text-white">blog</h1>
        </div>
        <div class="h-full w-[100px] p-2 bg-zinc-800">
          <h1 class="text-white">contact</h1>
        </div>
      </div>
    </div>
  </div>
</header>
<slot />
<footer>
  <div class=" h-[80px] w-fill bg-zinc-800 justify-center items-center">
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
