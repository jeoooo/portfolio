<script>
  import data from "../../jeocarlolubao.json";
</script>

<div
  class=" h-fill w-fill mx-[24px] md:md-[100px] lg:mx-[300px] bg-zinc-800 m-3 justify-center items-center pb-[4px]"
>
  <h1 class="px-[24px] pt-8 pb-4 text-4xl text-white syne-600 font-bold">
    <i class="fa-solid fa-laptop-code mr-3" /> Projects
  </h1>
  <ol class="my-[32px] mx-[32px] flex flex-col w-fill border-s">
    {#each data.projects as project (project.title)}
      <li class="mb-4 ms-4">
        <div
          class="absolute w-3 h-3 bg-gray-200 rounded-full mt-3.5 start-[50px] sm:start-[358px] md:start-[82.5px] lg:start-[326px] border border-white"
        ></div>
        <h3 class="mb-1 text-3xl font-semibold syne-400 text-white">
          {project.title}
        </h3>
        <h3 class="my-4 text-xl font-semibold ibm-plex-sans-bold text-white">
          {project.description.short_description}
        </h3>

        {#if project.websiteLink}
          <a
            href={project.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3
              class="text-md font-normal leading-none ibm-plex-sans-semibold text-gray-200 hover:underline break-words max-w-full sm:max-w-xs md:max-w-md lg:max-w-lg"
            >
              <span class="break-all">{project.websiteLink}</span>
            </h3>
          </a>
        {/if}

        <p
          class="text-base font-normal text-justify text-gray-50 mt-4 ibm-plex-sans-regular"
        >
          {project.description.long_description}
        </p>
        <div class="flex flex-row mt-4 gap-4 w-full">
          {#each project.techStack as tech (tech.name)}
            {#if tech.name == "java"}
              <svg class="h-8 fill-white" viewBox="0 0 128 128">
                <path
                  d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"
                ></path><path
                  d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"
                ></path><path
                  d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"
                ></path><path
                  d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"
                ></path><path
                  d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"
                ></path>
              </svg>
            {:else}
              <img
                class="h-8 select-none"
                alt="simple-icon"
                src="https://cdn.simpleicons.org/{tech.name}/fff"
              />
            {/if}
          {/each}
        </div>
      </li>
    {/each}
  </ol>
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

  .ibm-plex-mono-thin {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 100;
    font-style: normal;
  }

  .ibm-plex-mono-extralight {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 200;
    font-style: normal;
  }

  .ibm-plex-mono-light {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 300;
    font-style: normal;
  }

  .ibm-plex-mono-regular {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 400;
    font-style: normal;
  }

  .ibm-plex-mono-medium {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 500;
    font-style: normal;
  }

  .ibm-plex-mono-semibold {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 600;
    font-style: normal;
  }

  .ibm-plex-mono-bold {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 700;
    font-style: normal;
  }

  .ibm-plex-mono-thin-italic {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 100;
    font-style: italic;
  }

  .ibm-plex-mono-extralight-italic {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 200;
    font-style: italic;
  }

  .ibm-plex-mono-light-italic {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 300;
    font-style: italic;
  }

  .ibm-plex-mono-regular-italic {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 400;
    font-style: italic;
  }

  .ibm-plex-mono-medium-italic {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 500;
    font-style: italic;
  }

  .ibm-plex-mono-semibold-italic {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 600;
    font-style: italic;
  }

  .ibm-plex-mono-bold-italic {
    font-family: "IBM Plex Mono", monospace;
    font-weight: 700;
    font-style: italic;
  }
  .syne-400 {
    font-family: "Syne", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  }

  .syne-600 {
    font-family: "Syne", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
  }

  .syne-800 {
    font-family: "Syne", sans-serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
  }
</style>
