<template>
  <div
    class="w-full"
    v-animate-onscroll="'animated fadeIn'"
    :style="`background-image: url(${require('@/assets/animate-stars.png')})`"
  >
    <div class="container mx-auto px-[20px] pt-[85px]">
      <h3
        v-animate-onscroll="'animate__animated animate__fadeInDown'"
        class="text-center font-semibold font-tertiary md:text-[48px] text-[36px] leading-[52px] md:leading-[60xp] bg-clip-text text-transparent bg-gradient-to-r from-[#6F95FE] to-[#AA6DFE]"
      >
        Naše služby
      </h3>
      <div class="flex gap-[88px] flex-col pt-[50px]">
        <div class="relative flex gap-[70px] items-center">
          <div
            class="lg:relative absolute lg:opacity-100 opacity-30 z-10 top-[70px] lg:top-auto lg:right-auto right-0"
          >
            <div
              v-animate-onscroll="'animate__animated animate__fadeIn'"
              style="animation-delay: 1.1s"
              class="lg:min-w-[330px] lg:min-h-[330px] min-w-[220px] min-h-[220px] rounded-full flex items-center justify-center bg-[#100F25] drop-shadow-2xl shadow-[rgba(146,_75,_238,_0.6)_0px_30px_90px]"
            >
              <img
                src="../assets/icon1.svg"
                alt="img"
                class="lg:w-auto w-[40%]"
              />
            </div>
          </div>
          <div
            v-animate-onscroll="'animate__animated animate__fadeInRight'"
            style="animation-delay: 0.6s"
            class="flex flex-col gap-[20px] relative z-20"
          >
            <div class="relative">
              <h4
                class="text-white text-[28px] leading-[36px] md:text-[36px] md:leading-[43px] font-semibold font-primary"
              >
                Analýzy a audit
              </h4>
              <span
                class="top-[-43px] absolute uppercase md:text-[52px] text-[42px] lg:text-[78px] leading-[97px] text-white opacity-[2%] font-tertiary font-semibold"
              >
                Analýzy a audit
              </span>
            </div>

            <p
              class="text-[#C9D4F0] font-secondary text-[16px] leading-[24px] md:text-[18px] md:leading-[27px]"
            >
              Upload your work then Click My Collections and set up your
              collection. Add social links, a description, profile & banner
              images, and set a secondary sales fee. Upload your work then Click
              My Collections and set up your collection. Add social links, a
              description, profile & banner images, and set a secondary sales
              fee.
            </p>
            <button
              class="md:text-[20px] md:leading-[24.4px] text-[16px] leading-[24px] font-semibold font-primary bg-gradient-to-r from-[#6015FF] via-[#6015FF] to-[#7958EF] md:w-[244px] w-[200px] text-center md:py-[15px] py-[12px] opacity-90 rounded-[60px] text-white transform scale-100 hover:scale-105 hover:from-[#7958EF] hover:via-[#7958EF] hover:to-[#6015FF] transition-all ease-in-out duration-300"
            >
              Mám záujem
            </button>
          </div>
        </div>
        <div class="relative flex gap-[70px] items-center justify-between">
          <div
            v-animate-onscroll="'animate__animated animate__fadeInLeft'"
            style="animation-delay: 0.6s"
            class="relative z-20 flex flex-col gap-[20px] items-end lg:items-start"
          >
            <div class="relative">
              <h4
                class="text-white text-[28px] leading-[36px] md:text-[36px] md:leading-[43px] font-semibold font-primary"
              >
                Design
              </h4>
              <span
                class="left-[-80px] md:left-auto top-[-43px] absolute uppercase md:text-[52px] text-[42px] lg:text-[78px] leading-[97px] text-white opacity-[2%] font-tertiary font-semibold"
              >
                Design
              </span>
            </div>

            <p
              class="text-right lg:text-left text-[#C9D4F0] font-secondary text-[16px] leading-[24px] md:text-[18px] md:leading-[27px]"
            >
              Upload your work then Click My Collections and set up your
              collection. Add social links, a description, profile & banner
              images, and set a secondary sales fee. Upload your work then Click
              My Collections and set up your collection. Add social links, a
              description, profile & banner images, and set a secondary sales
              fee.
            </p>
            <button
              class="md:text-[20px] md:leading-[24.4px] text-[16px] leading-[24px] font-semibold font-primary bg-gradient-to-r from-[#6015FF] via-[#6015FF] to-[#7958EF] md:w-[244px] w-[200px] text-center md:py-[15px] py-[12px] opacity-90 rounded-[60px] text-white transform scale-100 hover:scale-105 hover:from-[#7958EF] hover:via-[#7958EF] hover:to-[#6015FF] transition-all ease-in-out duration-300"
            >
              Mám záujem
            </button>
          </div>
          <div
            class="lg:relative absolute lg:opacity-100 opacity-30 z-10 top-[70px] lg:top-auto lg:right-auto right-0"
          >
            <div
              v-animate-onscroll="'animate__animated animate__fadeIn'"
              style="animation-delay: 1.1s"
              class="lg:min-w-[330px] lg:min-h-[330px] min-w-[220px] min-h-[220px] rounded-full flex items-center justify-center bg-[#100F25] drop-shadow-2xl shadow-[rgba(_209,_127,_251,_0.6)_0px_30px_90px]"
            >
              <img
                src="../assets/icon2.svg"
                alt="img"
                class="lg:w-auto w-[40%]"
              />
            </div>
          </div>
        </div>
        <div class="relative flex gap-[70px] items-center">
          <div
            class="lg:relative absolute lg:opacity-100 opacity-30 z-10 top-[70px] lg:top-auto lg:right-auto right-0"
          >
            <div
              v-animate-onscroll="'animate__animated animate__fadeIn'"
              style="animation-delay: 1.1s"
              class="lg:min-w-[330px] lg:min-h-[330px] min-w-[220px] min-h-[220px] rounded-full flex items-center justify-center bg-[#100F25] drop-shadow-2xl shadow-[rgba(_93,_24,_242,_0.6)_0px_30px_90px]"
            >
              <img
                src="../assets/icon3.svg"
                alt="img"
                class="lg:w-auto w-[40%]"
              />
            </div>
          </div>
          <div
            v-animate-onscroll="'animate__animated animate__fadeInRight'"
            style="animation-delay: 0.6s"
            class="relative z-20 flex flex-col gap-[20px]"
          >
            <div class="relative">
              <h4
                class="text-white text-[28px] leading-[36px] md:text-[36px] md:leading-[43px] font-semibold font-primary"
              >
                Programovanie
              </h4>
              <span
                class="top-[-43px] absolute uppercase md:text-[52px] text-[42px] lg:text-[78px] leading-[97px] text-white opacity-[2%] font-tertiary font-semibold"
              >
                Programovanie
              </span>
            </div>

            <p
              class="text-[#C9D4F0] font-secondary text-[16px] leading-[24px] md:text-[18px] md:leading-[27px]"
            >
              Upload your work then Click My Collections and set up your
              collection. Add social links, a description, profile & banner
              images, and set a secondary sales fee. Upload your work then Click
              My Collections and set up your collection. Add social links, a
              description, profile & banner images, and set a secondary sales
              fee.
            </p>
            <button
              class="md:text-[20px] md:leading-[24.4px] text-[16px] leading-[24px] font-semibold font-primary bg-gradient-to-r from-[#6015FF] via-[#6015FF] to-[#7958EF] md:w-[244px] w-[200px] text-center md:py-[15px] py-[12px] opacity-90 rounded-[60px] text-white transform scale-100 hover:scale-105 hover:from-[#7958EF] hover:via-[#7958EF] hover:to-[#6015FF] transition-all ease-in-out duration-300"
            >
              Mám záujem
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>