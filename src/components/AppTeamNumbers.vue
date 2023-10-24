<template>
  <div
    class="w-full relative xl:pt-[217px] lg:pt-[120px] pt-[100px] pb-[102px]"
  >
    <div
      style="animation-delay: 0.1s"
      v-animate-onscroll="'animate__animated animate__fadeInLeft'"
      class="opacity-0 absolute w-full h-[620px] xl:top-[-40px] top-[-120px] lg:top-[-110px] left-[-50px]"
    >
      <img
        src="../assets/mask-group.svg"
        alt="img"
        class="w-full h-full object-cover"
      />
    </div>
    <div
      class="text-white container mx-auto px-[20px] flex gap-[63px] items-center"
    >
      <div
        v-animate-onscroll="'animate__animated animate__fadeIn'"
        style="animation-delay: 0.6s"
        class="opacity-0 max-w-[111px] flex flex-col gap-[7px] items-center justify-center text-center"
      >
        <h3 class="font-tertiary font-semibold text-[46px] leading-[57px]">
          97+
        </h3>
        <p class="font-primary text-[16px] leading-[19px] font-medium">
          Spokojných klientov
        </p>
      </div>
      <div
        v-animate-onscroll="'animate__animated animate__fadeIn'"
        style="animation-delay: 1s"
        class="opacity-0 max-w-[111px] flex flex-col gap-[7px] items-center justify-center text-center"
      >
        <h3 class="font-tertiary font-semibold text-[46px] leading-[57px]">
          5
        </h3>
        <p class="font-primary text-[16px] leading-[19px] font-medium">
          Vývojárkych tímov
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>