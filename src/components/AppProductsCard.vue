<template>
  <div
    class="relative z-[9999999] cursor-pointer group border-x-[1.5px] border-l-transparent hover:border-l-purple-900 hover:border-r-transparent border-y-[1.5px] border-purple-900 bg-gradient-to-r from-gray-700/25 via-gray-800-500/25 to-gray-900/25 shadow-xl bg-opacity-40 w-full rounded-[40px] md:p-[22px] md:pb-[50px] p-[12px] pb-[36px] flex flex-col gap-[22px]"
  >
    <div class="overflow-hidden">
      <div
        class="md:h-[274px] h-[234px] w-full rounded-[30px] bg-no-repeat bg-center bg-cover overflow-hidden scale-100 group-hover:scale-110 transition-all ease-in-out duration-200"
        :style="`background-image: url(${require('@/assets/' + item.img)})`"
      ></div>
    </div>

    <h5
      class="pt-[8px] font-primary font-semibold text-[22px] leading-[28px] md:text-[28px] md:leading-[34px] text-center from-[#fff] to-[#fff] transition-all ease-in-out duration-300 bg-clip-text text-transparent bg-gradient-to-r group-hover:from-[#6F95FE] group-hover:to-[#AA6DFE]"
    >
      {{ item.title }}
    </h5>
    <div
      class="group relative mx-auto px-[2px] py-[2px] md:w-[244px] w-[200px] transform scale-100 hover:scale-105 transition-all ease-in-out duration-300"
    >
      <div
        class="absolute inset-0 bg-gradient-to-r from-[#5E16F9] to-[#7958EF] opacity-90 rounded-[70px]"
      ></div>

      <button
        class="block text-center group-hover:bg-transparent transition-colors ease-in-out duration-500 relative py-[12px] md:py-[14px] px-[18.5px] rounded-[70px] w-full md:text-[20px] md:leading-[24.4px] text-[16px] leading-[24px] font-semibold font-primary bg-[#131429] text-white"
      >
        {{ item.buttonText }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style>
</style>