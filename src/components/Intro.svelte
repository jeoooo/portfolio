<script>
  import data from "../jeocarlolubao.json";
</script>

<div
  class="h-full w-fill pt-10 pb-10 mx-[24px] md:md-[100px] lg:mx-[300px] bg-zinc-800 m-3 flex justify-center items-center"
>
  <div class="flex flex-col items-center">
    <p class=" text-xl lg:text-5xl text-white syne-800 font-extrabold">
      Jeo Carlo Lubao
    </p>
    <p class="text-xs lg:text-xl mt-4 font-syne font-bold text-white px-4">
      Software Developer | Graphic Designer
    </p>
    {#each data.socials as social (social.name)}
      <a href={social.link} target="_blank" rel="noopener noreferrer">
        <div class="flex flex-col gap-4 w-[250px] lg:w-[350px] mt-5">
          <div
            class="text-zinc-800 border p-2 inline-flex h-12 transition ease-in-out hover:scale-110 bg-zinc-200 hover:bg-white"
          >
            <img
              class="h-4 mt-0.5 mr-2 ml-2 lg:mt-1.5 lg:mr-2 lg:ml-3"
              alt="simple-icon"
              src="https://cdn.simpleicons.org/{social.icon_name}/333"
            />
            <p class=" font-ibm-plex-mono text-[12px] lg:text-lg">
              {social.name}
            </p>
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .ibm-plex-sans-thin {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 100;
    font-style: normal;
  }

  .ibm-plex-sans-extralight {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 200;
    font-style: normal;
  }

  .ibm-plex-sans-light {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 300;
    font-style: normal;
  }

  .ibm-plex-sans-regular {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .ibm-plex-sans-medium {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    font-style: normal;
  }

  .ibm-plex-sans-semibold {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 600;
    font-style: normal;
  }

  .ibm-plex-sans-bold {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 700;
    font-style: normal;
  }

  .ibm-plex-sans-thin-italic {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 100;
    font-style: italic;
  }

  .ibm-plex-sans-extralight-italic {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 200;
    font-style: italic;
  }

  .ibm-plex-sans-light-italic {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 300;
    font-style: italic;
  }

  .ibm-plex-sans-regular-italic {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 400;
    font-style: italic;
  }

  .ibm-plex-sans-medium-italic {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 500;
    font-style: italic;
  }

  .ibm-plex-sans-semibold-italic {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 600;
    font-style: italic;
  }

  .ibm-plex-sans-bold-italic {
    font-family: "IBM Plex Sans", sans-serif;
    font-weight: 700;
    font-style: italic;
  }

  .syne-800 {
    font-family: "Syne", sans-serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
  }
  .syne-800 {
    font-family: "Syne", sans-serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
  }
</style>
