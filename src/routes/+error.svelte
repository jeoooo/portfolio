<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  // Assume you have some state to track whether the image and text are still loading
  let isImageLoading = true;
  let isTextLoading = true;

  // Function to fetch waifu image
  async function fetchWaifuImage() {
    try {
      const apiUrl = "https://api.waifu.im/search";
      const params = {
        included_tags: "marin-kitagawa",
        is_nsfw: false, // NO HORNY! (○>ω<)ﾉﾞ
      };

      const queryParams = new URLSearchParams(params);
      const requestUrl = `${apiUrl}?${queryParams}`;

      const response = await fetch(requestUrl);

      if (!response.ok) {
        throw new Error("Request failed with status code: " + response.status);
      }

      const { images } = await response.json();
      const [firstImage] = images;
      const { url } = firstImage;

      // Set isImageLoading to false when the image is loaded
      isImageLoading = false;
      return url;
    } catch (error) {
      console.error(
        "An error occurred while fetching waifu image:",
        error.message
      );
      throw error;
    }
  }

  // Function to fetch random fact
  async function fetchRandomFact() {
    try {
      const factsUrl =
        "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en";
      const response = await fetch(factsUrl);

      if (!response.ok) {
        throw new Error("Request failed with status code: " + response.status);
      }

      const data = await response.json();

      // Set isTextLoading to false when the text is loaded
      isTextLoading = false;
      return data.text;
    } catch (error) {
      console.error(
        "An error occurred while fetching random fact:",
        error.message
      );
      throw error;
    }
  }

  let IMAGE_URL = "";
  let randomFact = "";

  // Fetch waifu image and random fact when the component is mounted
  onMount(async () => {
    try {
      IMAGE_URL = await fetchWaifuImage();
      randomFact = await fetchRandomFact();
    } catch (error) {
      console.error("Error during component mount:", error.message);
    }
  });
</script>

{#if isImageLoading || isTextLoading}
  <div class="min-h-screen flex items-center justify-center bg-[#161d5269]">
    <div
      role="status"
      class="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
    >
      <div
        class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700"
      >
        <svg
          class="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path
            d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
          />
        </svg>
      </div>
      <div class="w-full">
        <div
          class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
        />
        <div
          class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"
        />
        <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
        <div
          class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"
        />
        <div
          class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"
        />
        <div
          class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"
        />
      </div>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
{:else}
  <!-- <div class="min-h-screen flex items-center justify-center bg-[#161d5269]">
    <div
      class="text-center text-white bg-[#161d52cb] border-4 p-32 items-center"
    >

      <img
        src={IMAGE_URL}
        alt="Waifu Image"
        class="max-w-full h-64 mx-auto flex-shrink-0 m-14"
      />

      <h1>{$page.status}: {$page.error.message}</h1>
      {#if randomFact}
        <p class="text-xs mt-4">Random Fact: {randomFact}</p>
      {/if}
    </div>
  </div> -->

  <div class="min-h-screen flex items-center justify-center bg-[#161d5269]">
    <div
      role="status"
      class=" bg-[#161d52] border-4 border-white p-8 space-y-8 rtl:space-x-reverse md:flex md:items-center"
    >
      <div class="flex items-center justify-center w-full h-48 rounded sm:w-96">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img
          class="w-auto h-auto scale-[1] text-gray-200 p-14"
          src={IMAGE_URL}
          alt="Waifu Image"
        />
      </div>
      <div class="w-full">
        <h1
          class=" text-white font-black text-4xl inline-flex mb-4 font-ibm-plex-mono"
        >
          {$page.status}: {$page.error.message}
          <img
            src="https://gumlet.assettype.com/afkgaming%2F2021-08%2F79649079-d0e7-4acd-853b-6a2b92797da3%2Fcopium_png.png?auto=format%2Ccompress&dpr=1.0&w=1200"
            alt=""
            class="ml-2 h-8"
          />
          <img
            src="https://en.meming.world/images/en/thumb/e/e2/Crying_Cat_screaming.jpg/300px-Crying_Cat_screaming.jpg"
            alt=""
            class="ml-2 h-8"
          />
          <img
            src="https://cdn3.emoji.gg/emojis/1634-shocked-guy.png"
            alt=""
            class="ml-2 h-8"
          />
        </h1>
        <br />
        <h1
          class="text-white font-black text-lg inline-flex font-ibm-plex-sans"
        >
          <img
            src="https://storage.ko-fi.com/cdn/useruploads/display/34a5238b-feaf-4b35-921a-4817a71f84a1_salute_0000.gif"
            alt=""
            class="mr-2 h-8"
          />
          Here's Marin to brighten up your day!
          <img
            src="https://storage.ko-fi.com/cdn/useruploads/display/34a5238b-feaf-4b35-921a-4817a71f84a1_salute_0000.gif"
            alt=""
            class="ml-2 h-8"
          />
        </h1>
        <h1
          class="text-white font-normal text-s w-[400px] my-4 font-ibm-plex-mono text-justify"
        >
          <strong>Random Fact:</strong>
          {randomFact}
        </h1>
        <a href="/" rel="noopener noreferrer">
          <button
            type="button"
            class="w-full bg-[#161d52] text-white border border-white transition ease-in-out hover:bg-white hover:text-[#161d52] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            ><i class="fa-solid fa-house mr-1" />Back to Homepage
          </button>
        </a>
      </div>
    </div>
  </div>
{/if}
