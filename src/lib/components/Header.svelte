<script lang="ts">
  import { base } from "$app/paths";
</script>

<nav
  class="bg-[#161d52] fixed w-full z-20 top-0 start-0 border-gray-200 border-b-4"
>
  <div
    class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
  >
    <a href="{base}/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <!-- <img
        src="https://flowbite.com/docs/images/logo.svg"
        class="h-8"
        alt="Flowbite Logo"
      /> -->
      <span
        class="self-center text-2xl text-white font-bold whitespace-nowrap font-ibm-plex-sans"
        >@jeooo</span
      >
    </a>
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul
        class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#161d52] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
      >
        <li>
          <a
            href="#about"
            class="font-ibm-plex-sans font-bold block py-2 px-3 text-white rounded hover:underline-offset-2 hover:underline hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0"
            >About</a
          >
        </li>
        <li>
          <a
            href="#projects"
            class="font-ibm-plex-sans font-bold block py-2 px-3 text-white rounded hover:underline-offset-2 hover:underline hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0"
            >Projects</a
          >
        </li>
        <!-- <li>
          <a
            href="#"
            class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >Blog</a
          >
        </li> -->
        <li>
          <a
            href="#hello"
            class="font-ibm-plex-sans font-bold block py-2 px-3 text-white rounded hover:underline-offset-2 hover:underline hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0"
            >Contact</a
          >
        </li>
      </ul>
    </div>
  </div>
</nav>
