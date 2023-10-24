<template>
  <div class="w-full pt-[100px] relative">
    <div class="container mx-auto px-[20px]">
      <h3
        v-animate-onscroll="'animate__animated animate__fadeInDown'"
        class="mb-[46px] text-center font-semibold font-tertiary md:text-[48px] text-[36px] leading-[52px] md:leading-[60xp] bg-clip-text text-transparent bg-gradient-to-r from-[#6F95FE] to-[#AA6DFE]"
      >
        Blog
      </h3>
      <div class="flex lg:flex-row flex-col gap-[31px] items-center">
        <div
          v-animate-onscroll="'animate__animated animate__fadeInLeft'"
          style="animation-delay: 0.5s"
          class="group cursor-pointer rounded-[40px] flex-[25%] border-x-[1.5px] border-l-transparent hover:border-l-purple-900 hover:border-r-transparent border-y-[1.5px] border-purple-900 bg-gradient-to-r from-gray-700/25 via-gray-800-500/25 to-gray-900/25 shadow-xl bg-opacity-40"
        >
          <div class="overflow-hidden rounded-tl-[40px] rounded-tr-[40px]">
            <div
              class="h-[231px] rounded-tl-[40px] rounded-tr-[40px] w-full bg-no-repeat bg-center bg-cover group-hover:scale-110 scale-100 transition-all duration-300 ease-in-out"
              :style="`background-image: url(${require('@/assets/blog1.png')})`"
            ></div>
          </div>
          <div class="flex flex-col gap-[9px] p-[29px]">
            <span
              class="from-[#6F95FE] to-[#6F95FE] font-tertiary font-semibold text-[14px] leading-[17.5px] transition-all ease-in-out duration-300 bg-clip-text text-transparent bg-gradient-to-r group-hover:from-[#fff] group-hover:to-[#fff]"
            >
              28.3.2023
            </span>
            <p
              class="font-semibold font-primary md:text-[24px] md:leading-[29px] text-[20px] leading-[26px] from-[#fff] to-[#fff] transition-all ease-in-out duration-300 bg-clip-text text-transparent bg-gradient-to-r group-hover:from-[#6F95FE] group-hover:to-[#AA6DFE]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
        <div
          v-animate-onscroll="'animate__animated animate__fadeIn'"
          style="animation-delay: 1s"
          class="group cursor-pointer rounded-[40px] flex-[25%] border-x-[1.5px] border-l-transparent hover:border-l-purple-900 hover:border-r-transparent border-y-[1.5px] border-purple-900 bg-gradient-to-r from-gray-700/25 via-gray-800-500/25 to-gray-900/25 shadow-xl bg-opacity-40"
        >
          <div class="overflow-hidden rounded-tl-[40px] rounded-tr-[40px]">
            <div
              class="group-hover:scale-110 scale-100 transition-all duration-300 ease-in-out lg:h-[276px] h-[231px] rounded-tl-[40px] rounded-tr-[40px] w-full bg-no-repeat bg-center bg-cover"
              :style="`background-image: url(${require('@/assets/blog2.png')})`"
            ></div>
          </div>

          <div class="flex flex-col gap-[9px] p-[29px] lg:p-[36px]">
            <span
              class="from-[#6F95FE] to-[#6F95FE] font-tertiary font-semibold text-[14px] leading-[17.5px] transition-all ease-in-out duration-300 bg-clip-text text-transparent bg-gradient-to-r group-hover:from-[#fff] group-hover:to-[#fff]"
            >
              28.3.2023
            </span>
            <p
              class="font-semibold font-primary md:text-[24px] md:leading-[29px] text-[20px] leading-[26px] from-[#fff] to-[#fff] transition-all ease-in-out duration-300 bg-clip-text text-transparent bg-gradient-to-r group-hover:from-[#6F95FE] group-hover:to-[#AA6DFE]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
        <div
          v-animate-onscroll="'animate__animated animate__fadeInRight'"
          style="animation-delay: 0.7s"
          class="group cursor-pointer rounded-[40px] flex-[25%] border-x-[1.5px] border-l-transparent hover:border-l-purple-900 hover:border-r-transparent border-y-[1.5px] border-purple-900 bg-gradient-to-r from-gray-700/25 via-gray-800-500/25 to-gray-900/25 shadow-xl bg-opacity-40"
        >
          <div class="overflow-hidden rounded-tl-[40px] rounded-tr-[40px]">
            <div
              class="group-hover:scale-110 scale-100 transition-all duration-300 ease-in-out h-[231px] rounded-tl-[40px] rounded-tr-[40px] w-full bg-no-repeat bg-center bg-cover"
              :style="`background-image: url(${require('@/assets/blog3.png')})`"
            ></div>
          </div>
          <div class="flex flex-col gap-[9px] p-[29px]">
            <span
              class="from-[#6F95FE] to-[#6F95FE] font-tertiary font-semibold text-[14px] leading-[17.5px] transition-all ease-in-out duration-300 bg-clip-text text-transparent bg-gradient-to-r group-hover:from-[#fff] group-hover:to-[#fff]"
            >
              28.3.2023
            </span>
            <p
              class="font-semibold font-primary md:text-[24px] md:leading-[29px] text-[20px] leading-[26px] from-[#fff] to-[#fff] transition-all ease-in-out duration-300 bg-clip-text text-transparent bg-gradient-to-r group-hover:from-[#6F95FE] group-hover:to-[#AA6DFE]"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
      </div>

      <div
        v-animate-onscroll="'animate__animated animate__fadeIn'"
        class="group relative mx-auto mt-[40px] px-[2px] py-[2px] md:w-[244px] w-[200px] transform scale-100 hover:scale-105 transition-all ease-in-out duration-300"
      >
        <div
          class="absolute inset-0 bg-gradient-to-r from-[#5E16F9] to-[#7958EF] opacity-90 rounded-[70px]"
        ></div>

        <button
          class="block text-center group-hover:bg-transparent transition-colors ease-in-out duration-500 relative py-[12px] md:py-[14px] px-[18.5px] rounded-[70px] w-full md:text-[20px] md:leading-[24.4px] text-[16px] leading-[24px] font-semibold font-primary bg-[#131429] text-white"
        >
          Zobraziť viac
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>