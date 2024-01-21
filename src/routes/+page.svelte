<script>
  import Projects from "./../lib/components/Projects.svelte";
  import Description from "./../lib/components/Description.svelte";
  import Experience from "./../lib/components/Experience.svelte";
</script>

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

<div
  class="h-full w-fill pt-10 pb-10 mx-[24px] md:md-[100px] lg:mx-[300px] bg-zinc-800 m-3 flex justify-center items-center"
>
  <div class="flex flex-col items-center">
    <p class="text-6xl font-bold text-white">Jeo Carlo Lubao</p>
    <p class="text-xl mt-8 font-bold text-white">
      Software Developer | Graphic Designer
    </p>
    <div class="flex flex-col gap-4 w-[350px] mt-5">
      <div class="text-white border p-2">dasdad</div>
      <div class="text-white border p-2">dasdad</div>
      <div class="text-white border p-2">dasdad</div>
    </div>
  </div>
</div>

<div
  class=" h-fill w-fill mx-[24px] md:md-[100px] lg:mx-[300px] bg-zinc-800 m-3 justify-center items-center pb-[4px]"
>
  <h1 class="px-[24px] pt-8 pb-4 text-4xl text-white font-bold">
    <i class="fa-solid fa-user mr-3" /> Experience
  </h1>
  <ol class="m-[20px] flex flex-col w-fill border-s">
    <li class="mb-4 ms-4">
      <div
        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-3.5 start-[38.5px] sm:start-[315px] md:start-[38.5px] lg:start-[315px] border border-white"
      ></div>
      <h3 class="mb-1 text-3xl font-semibold text-gray-900 dark:text-white">
        Position
      </h3>
      <h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
        Position
      </h3>
      <h3
        class=" text-md font-normal leading-none text-gray-400 dark:text-gray-500"
      >
        March 2022 - March 2022
      </h3>

      <p
        class="text-base font-normal text-justify text-gray-500 dark:text-gray-400 mt-4"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae error
        illo possimus exercitationem eos pariatur, a labore nostrum tenetur
        corporis voluptatibus nihil commodi eveniet fugit odit soluta nulla
        ducimus deserunt. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam non nam doloribus libero! Aspernatur, quis dolorem
        suscipit eaque ut error soluta pariatur tempore, unde, iusto
        reprehenderit ipsa vel sit! Libero? Omnis eos, repellendus ratione rerum
        tenetur labore soluta doloremque eveniet, nemo assumenda aliquam odio
        velit deleniti provident, sapiente cum earum expedita praesentium eum
        hic vero laudantium nisi? Autem, eligendi numquam!
      </p>
    </li>
  </ol>
</div>

<div
  class=" h-fill w-fill mx-[24px] md:md-[100px] lg:mx-[300px] bg-zinc-800 m-3 justify-center items-center pb-[4px]"
>
  <h1 class="px-[24px] pt-8 pb-4 text-4xl text-white font-bold">
    <i class="fa-solid fa-user-graduate mr-3" /> Education
  </h1>
  <ol class="m-[20px] flex flex-col w-fill border-s">
    <li class="mb-4 ms-4">
      <div
        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-3.5 start-[38.5px] sm:start-[315px] md:start-[38.5px] lg:start-[315px] border border-white"
      ></div>
      <h3 class="mb-1 text-3xl font-semibold text-gray-900 dark:text-white">
        Position
      </h3>
      <h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
        Position
      </h3>
      <h3
        class=" text-md font-normal leading-none text-gray-400 dark:text-gray-500"
      >
        March 2022 - March 2022
      </h3>

      <ul class="pl-5 pt-3">
        <li class="text-base font-bold text-white pt-2 font-ibm-plex-sans my-1">
          <i class="fa-solid fa-medal mr-1" />Loyalty Award
        </li>
        <li class="text-base font-bold text-white pt-2 font-ibm-plex-sans my-1">
          <i class="fa-solid fa-medal mr-1" />Departmental Award
        </li>
        <li class="text-base font-bold text-white pt-2 font-ibm-plex-sans my-1">
          <i class="fa-solid fa-medal mr-1" />Citation Award
        </li>
      </ul>

      <p class="text-base font-bold text-white pt-5 font-ibm-plex-sans">
        HCDC Information Technology Society
      </p>
      <ul class="pl-5 pt-3 list-disc list-inside">
        <li class="text-white font-ibm-plex-sans my-2">
          <!-- Set text to white -->
          President, (A.Y. 2021 &ndash; 2022, A.Y. 2022 &ndash; 2023)
        </li>
        <li class="text-white font-ibm-plex-sans my-2">
          <!-- Set text to white -->
          Treasurer, (A.Y. 2020-2021)
        </li>
        <li class="text-white font-ibm-plex-sans my-2">
          <!-- Set text to white -->
          1st Year Representative, (A.Y. 2019 &ndash; 2020)
        </li>
      </ul>
      <p class="text-base font-bold text-white pt-5 font-ibm-plex-sans">
        HCDC - College of Engineering and Technology Students Organization (HCDC
        &ndash; CETSO)
      </p>
      <ul class="pl-5 pt-3 list-disc list-inside">
        <li class="text-white font-ibm-plex-sans my-2">
          <!-- Set text to white -->
          Assistant Secretary (A.Y. 2022 &ndash; 2023)
        </li>
        <li class="text-white font-ibm-plex-sans my-2">
          <!-- Set text to white -->
          Secretary (A.Y. 2021 &ndash; 2022)
        </li>
      </ul>
      <p class="text-base font-bold text-white pt-5 font-ibm-plex-sans">
        Dean's Lister
      </p>
      <ul class="pl-5 pt-3 list-inside">
        <li class="text-white font-ibm-plex-sans my-2">
          <!-- Set text to white -->
          <i class="fa-solid fa-medal mr-1" />2nd Semester, A.Y. 2019 – 2020
        </li>
        <li class="text-white font-ibm-plex-sans my-2">
          <!-- Set text to white -->
          <i class="fa-solid fa-medal mr-1" />2nd Semester, A.Y. 2020 – 2021
        </li>
        <li class="text-white font-ibm-plex-sans my-2">
          <!-- Set text to white -->
          <i class="fa-solid fa-medal mr-1" />2nd Semester, A.Y. 2021 – 2022
        </li>
      </ul>
    </li>
  </ol>
</div>

<div
  class=" h-fill w-fill mx-[24px] md:md-[100px] lg:mx-[300px] bg-zinc-800 m-3 justify-center items-center pb-[4px]"
>
  <h1 class="px-[24px] pt-8 pb-4 text-4xl text-white font-bold">
    <i class="fa-solid fa-laptop-code mr-2" /> Projects
  </h1>
  <ol class="m-[20px] flex flex-col w-fill border-s">
    <li class="mb-4 ms-4">
      <div
        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-3.5 start-[38.5px] sm:start-[315px] md:start-[38.5px] lg:start-[315px] border border-white"
      ></div>
      <h3 class="mb-1 text-3xl font-semibold text-gray-900 dark:text-white">
        Project Name
      </h3>
      <h3 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
        Description
      </h3>
      <h3
        class=" text-md font-normal leading-none text-gray-400 dark:text-gray-500"
      >
        March 2022 - March 2022
      </h3>

      <p
        class="text-base font-normal text-justify text-gray-500 dark:text-gray-400 mt-4"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae error
        illo possimus exercitationem eos pariatur, a labore nostrum tenetur
        corporis voluptatibus nihil commodi eveniet fugit odit soluta nulla
        ducimus deserunt. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam non nam doloribus libero! Aspernatur, quis dolorem
        suscipit eaque ut error soluta pariatur tempore, unde, iusto
        reprehenderit ipsa vel sit! Libero? Omnis eos, repellendus ratione rerum
        tenetur labore soluta doloremque eveniet, nemo assumenda aliquam odio
        velit deleniti provident, sapiente cum earum expedita praesentium eum
        hic vero laudantium nisi? Autem, eligendi numquam!
      </p>
      <div class="flex flex-row mt-4 gap-4 w-full">
        <img
          class="h-8"
          alt="simple-icon"
          src="https://cdn.simpleicons.org/flutter/fff"
        />
        <img
          class="h-8"
          alt="simple-icon"
          src="https://cdn.simpleicons.org/flutter/fff"
        />
        <img
          class="h-8"
          alt="simple-icon"
          src="https://cdn.simpleicons.org/flutter/fff"
        />
        <img
          class="h-8"
          alt="simple-icon"
          src="https://cdn.simpleicons.org/flutter/fff"
        />
        <img
          class="h-8"
          alt="simple-icon"
          src="https://cdn.simpleicons.org/flutter/fff"
        />
      </div>
    </li>
  </ol>
</div>

<div
  class=" h-fill w-fill mx-[24px] md:md-[100px] lg:mx-[300px] bg-zinc-800 m-3 justify-center items-center pb-[4px]"
>
  <h1 class="px-[14px] pt-4 pb-4 text-4xl text-white font-bold">
    <i class="fa-solid fa-briefcase mr-2" /> Awards, Conferences, & Certifications
  </h1>
  <ol class="m-[20px] flex flex-col w-fill border-s">
    <li class="mb-4 ms-4">
      <div
        class="absolute w-3 h-3 bg-gray-200 rounded-full mt-3.5 start-[38.5px] sm:start-[315px] md:start-[38.5px] lg:start-[315px] border border-white"
      ></div>
      <h3 class="mb-5 text-3xl font-semibold text-gray-900 dark:text-white">
        Position
      </h3>
      <h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        <i class="fa-solid fa-trophy mr-1" /> Position
      </h3>
      <h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        <i class="fa-solid fa-certificate mr-1" /> Position
      </h3>
      <h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        <i class="fa-solid fa-calendar-days mr-1" /> Position
      </h3>
    </li>
  </ol>
</div>

<div
  class=" h-full w-fill mx-[24px] md:md-[100px] lg:mx-[300px] bg-zinc-800 m-3 justify-center items-center"
>
  <div class="flex flex-col items-start">
    <p class="px-[14px] pt-4 pb-4 text-4xl font-bold text-white">Tech Stack</p>
  </div>
  <div
    class="w-fit h-fit px-[14px] grid grid-cols-8 grid-rows-none gap-y-8 gap-x-8 py-6"
  >
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
  </div>
  <div class="flex flex-col items-start">
    <p class="px-[14px] pt-4 pb-4 text-4xl font-bold text-white">
      UI/UX Design Tools
    </p>
  </div>
  <div
    class="w-fit h-fit px-[14px] grid grid-cols-8 grid-rows-none gap-y-8 gap-x-8 py-6"
  >
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
    <img
      class="h-12"
      alt="simple-icon"
      src="https://cdn.simpleicons.org/flutter/fff"
    />
  </div>
</div>
