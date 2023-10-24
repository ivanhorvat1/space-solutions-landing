<template>
  <div class="w-full relative z-[99999]">
    <img
      class="absolute top-[-602px] left-0 z-10"
      alt="img"
      src="../assets/vector1.svg"
    />
    <div
      class="relative z-20 bg-transparent container mx-auto px-[20px] flex items-center justify-between pt-[40px] xl:pt-[67px]"
    >
      <img
        src="../assets/logo.svg"
        alt="img"
        class="xl:w-[366px] md:w-[300px] w-[240px]"
      />
      <div
        class="xl:flex hidden items-center gap-[53px] font-secondary text-[16px] leading-[21px] text-white font-semibold"
      >
        <p v-for="(item, index) in items" class="cursor-pointer" :key="index">
          {{ item }}
        </p>
        <button
          class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 outline-none border w-22 rounded-full focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:ring-primary focus-visible:ring-offset-primary h-10 px-2"
          type="button"
          id="radix-:r1:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
        >
          <p class="uppercase flex flex-row items-center justify-center">
            <img src="../assets/en.png" alt="" class="h-8 w-8 object-contain" /><span
              class="uppercase"
              >en</span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="ml-2"
            >
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </p>
        </button>
      </div>
      <svg
        class="block xl:hidden"
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="4" x2="20" y1="12" y2="12"></line>
        <line x1="4" x2="20" y1="6" y2="6"></line>
        <line x1="4" x2="20" y1="18" y2="18"></line>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ["Služby", "Produkty", "O nás", "Referencie", "Blog", "Kontakt"],
    };
  },
};
</script>

<style>
</style>