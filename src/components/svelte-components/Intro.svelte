<script>
  import { profileData } from "./../../data/intro.ts";
</script>

<div
  class="flex flex-col md:flex-row flex-wrap items-center text-[#EFFFFA] p-4 bg-[#14213D] min-h-screen"
>
  <div
    class="w-full md:w-1/2 flex flex-col justify-center items-start p-4 space-y-6"
  >
    <!-- Bold color block with bright blue and masked image -->
    <div class="w-full h-20 relative">
      <img
        src="https://media.gq.com/photos/5b6b20e3a3a1320b7280f029/16:9/w_6111,h_3437,c_limit/The-Brutal-Wonders-Of-The-Architecture-World-GQ-Style-Fall-2018_07.jpg"
        alt="Brutalist 1"
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div class="absolute inset-0 bg-[#3A86FF] opacity-60 z-10"></div>
    </div>

    <!-- Horizontal split with diagonal overlay, no image -->
    <div class="relative w-full h-24">
      <div class="absolute inset-0 bg-[#14213D]"></div>
      <div class="absolute inset-0 bg-[#00BBF9] clip-diagonal"></div>
    </div>

    <!-- Simple two-column grid with image masking -->
    <div class="grid grid-cols-2 gap-2 w-full">
      <div class="bg-[#00BBF9] h-12 relative">
        <!-- <img
          src="https://media.gq.com/photos/5b6b20e3a3a1320b7280f029/16:9/w_6111,h_3437,c_limit/The-Brutal-Wonders-Of-The-Architecture-World-GQ-Style-Fall-2018_07.jpg"
          alt="Brutalist 2"
          class="absolute inset-0 w-full h-full object-cover mask-image rounded-md z-0"
        /> -->
        <div class="absolute inset-0 bg-[#00BBF9] opacity-50 z-10"></div>
      </div>

      <div class="bg-[#3A86FF] h-12 relative">
        <!-- <img
          src="https://media.gq.com/photos/5b6b20e3a3a1320b7280f029/16:9/w_6111,h_3437,c_limit/The-Brutal-Wonders-Of-The-Architecture-World-GQ-Style-Fall-2018_07.jpg"
          alt="Brutalist 3"
          class="absolute inset-0 w-full h-full object-cover mask-image rounded-md z-0"
        /> -->
        <div class="absolute inset-0 bg-[#3A86FF] opacity-50 z-10"></div>
      </div>

      <div class="bg-[#3A86FF] h-12 relative">
        <!-- <img
          src="https://media.gq.com/photos/5b6b20e3a3a1320b7280f029/16:9/w_6111,h_3437,c_limit/The-Brutal-Wonders-Of-The-Architecture-World-GQ-Style-Fall-2018_07.jpg"
          alt="Brutalist 4"
          class="absolute inset-0 w-full h-full object-cover mask-image rounded-md z-0"
        /> -->
        <div class="absolute inset-0 bg-[#3A86FF] opacity-50 z-10"></div>
      </div>

      <div class="bg-[#00BBF9] h-12 relative">
        <!-- <img
          src="https://media.gq.com/photos/5b6b20e3a3a1320b7280f029/16:9/w_6111,h_3437,c_limit/The-Brutal-Wonders-Of-The-Architecture-World-GQ-Style-Fall-2018_07.jpg"
          alt="Brutalist 5"
          class="absolute inset-0 w-full h-full object-cover mask-image rounded-md z-0"
        /> -->
        <div class="absolute inset-0 bg-[#00BBF9] opacity-50 z-10"></div>
      </div>
    </div>

    <!-- Overlapping squares with image mask -->
    <div class="relative w-full h-32">
      <div class="absolute top-0 left-0 w-1/2 h-1/2 bg-[#3A86FF] z-10">
        <!-- <img
          src="https://media.gq.com/photos/5b6b20e3a3a1320b7280f029/16:9/w_6111,h_3437,c_limit/The-Brutal-Wonders-Of-The-Architecture-World-GQ-Style-Fall-2018_07.jpg"
          alt="Brutalist 6"
          class="absolute inset-0 w-full h-full object-cover mask-image rounded-md z-0"
        /> -->
      </div>

      <div class="absolute bottom-0 right-0 w-2/3 h-2/3 bg-[#00BBF9] z-10">
        <img
          src="https://www.bluentcad.com/images/style-architecture.webp"
          alt="Brutalist 7"
          class="absolute inset-0 w-full h-full object-cover mask-image rounded-md z-0"
        />
        <div class="absolute inset-0 bg-[#3A86FF] opacity-60 z-10"></div>
      </div>
    </div>

    <!-- Circle and rectangle combination with masked image -->
    <div class="flex w-full h-32 items-center justify-between">
      <div class="w-24 h-24 bg-[#00BBF9] rounded-full relative">
        <!-- <img
          src="https://media.gq.com/photos/5b6b20e3a3a1320b7280f029/16:9/w_6111,h_3437,c_limit/The-Brutal-Wonders-Of-The-Architecture-World-GQ-Style-Fall-2018_07.jpg"
          alt="Brutalist 8"
          class="absolute inset-0 w-full h-full object-cover mask-image rounded-full z-0"
        /> -->
        <!-- <div class="absolute inset-0 bg-[#00BBF9] opacity-50 z-10"></div> -->
      </div>
      <div class="w-1/3 h-full bg-[#3A86FF]"></div>
    </div>

    <!-- Large block with offset smaller block and image masking -->
    <div class="relative w-full h-40">
      <!-- Color Overlay -->
      <div class="absolute inset-0 bg-[#00BBF9] opacity-50 z-10"></div>

      <!-- Image with Masking -->
      <img
        src="https://d16kd6gzalkogb.cloudfront.net/magazine_images/Kolasin-Monument.jpg"
        alt="Brutalist 9"
        class="absolute inset-0 w-full h-full object-cover z-0"
      />

      <!-- Additional Content Block -->
      <div class="absolute top-4 left-4 w-1/2 h-1/2 bg-[#3A86FF] z-20"></div>
    </div>
  </div>

  <!-- Right side with About Me and profile details -->
  <div class="w-full md:w-1/2 md:text-left p-4">
    <h1 class="text-5xl md:text-6xl font-helvetica-bold uppercase">
      Hi! I'm Jeo!
    </h1>
    <h3 class="text-sm md:text-3xl font-helvetica-bold uppercase">
      Software Developer | Graphic Designer
    </h3>
    <hr class="h-px my-4 bg-[#00BBF9] border-0" />

    <!-- About Me Section -->
    <div class="text-left text-lg font-helvetica-light leading-relaxed">
      <p class="text-[#EFFFFA] font-helvetica text-xs">
        {profileData.aboutMe}
      </p>
    </div>

    <!-- Socials Section -->
    <div
      class="flex space-x-4 items-center justify-center md:justify-start flex-wrap mt-8"
    >
      {#each profileData.socials as social}
        <a
          href={social.link}
          target="_blank"
          class="w-10 h-10 md:w-12 md:h-12 bg-[#3A86FF] flex items-center justify-center rounded-full hover:bg-[#00BBF9] transition-all"
        >
          <img src={social.imgSrc} alt={social.name} class="w-6 h-6 invert" />
        </a>
      {/each}
    </div>
  </div>
</div>
