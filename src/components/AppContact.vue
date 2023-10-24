<template>
  <form class="pt-[165px] relative">
    <img
      class="absolute top-[-258px] left-0"
      alt="img"
      src="../assets/vector1.svg"
    />
    <div class="flex items-center justify-center mb-10">
      <h3
        v-animate-onscroll="'animate__animated animate__fadeInDown'"
        class="text-center font-semibold font-tertiary md:text-[48px] text-[36px] leading-[52px] md:leading-[60xp] bg-clip-text text-transparent bg-gradient-to-r from-[#6F95FE] to-[#AA6DFE]"
      >
        Napíste nám
      </h3>
    </div>
    <div
      class="flex items-center justify-center"
      style="animation-delay: 0.6s"
      v-animate-onscroll="'animate__animated animate__fadeIn'"
    >
      <div
        class="w-full lg:w-[600px] p-2 flex flex-col items-center justify-start gap-4"
      >
        <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="flex flex-col gap-[5px]">
            <label
              class="text-primary text-white text-[14px] leading-[20px] pl-[19.5px]"
            >
              Meno
            </label>
            <div class="relative w-full">
              <div
                class="absolute inset-0 bg-gradient-to-r from-[#5E16F9] to-white opacity-[0.02] rounded-[70px]"
              ></div>

              <input
                placeholder="Meno"
                class="relative bg-transparent rounded-[70px] w-full px-[19.5px] text-[14px] leading-[19.6px] py-[15px] border border-[#4e456f] outline-none focus:border-[#5E16F9] text-[#C9D4F0CC]"
                type="text"
                name="firstName"
              />
            </div>
          </div>
          <div class="flex flex-col gap-[5px]">
            <label
              class="text-primary text-white text-[14px] leading-[20px] pl-[19.5px]"
            >
              Priezvisko
            </label>
            <div class="relative w-full">
              <div
                class="absolute inset-0 bg-gradient-to-r from-[#5E16F9] to-white opacity-[0.02] rounded-[70px]"
              ></div>

              <input
                placeholder="Priezvisko"
                class="relative bg-transparent rounded-[70px] w-full px-[19.5px] text-[14px] leading-[19.6px] py-[15px] border border-[#4e456f] outline-none focus:border-[#5E16F9] text-[#C9D4F0CC]"
                type="text"
                name="firstName"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-[5px] w-full">
          <label
            class="text-primary text-white text-[14px] leading-[20px] pl-[19.5px]"
          >
            Email
          </label>
          <div class="relative w-full">
            <div
              class="absolute inset-0 bg-gradient-to-r from-[#5E16F9] to-white opacity-[0.02] rounded-[70px]"
            ></div>

            <input
              placeholder="Email"
              class="relative bg-transparent rounded-[70px] w-full px-[19.5px] text-[14px] leading-[19.6px] py-[15px] border border-[#4e456f] outline-none focus:border-[#5E16F9] text-[#C9D4F0CC]"
              type="text"
              name="firstName"
            />
          </div>
        </div>
        <div class="flex flex-col gap-[5px] w-full">
          <label
            class="text-primary text-white text-[14px] leading-[20px] pl-[19.5px]"
          >
            Napíšte nám správu
          </label>
          <div class="relative w-full">
            <div
              class="absolute inset-0 bg-gradient-to-r from-[#5E16F9] to-white opacity-[0.02] rounded-[20px]"
            ></div>

            <textarea
              placeholder="Napíšte nám správu"
              class="relative bg-transparent rounded-[20px] w-full px-[19.5px] text-[14px] leading-[19.6px] py-[15px] border border-[#4e456f] outline-none focus:border-[#5E16F9] text-[#C9D4F0CC]"
              type="text"
              rows="10"
              name="firstName"
            />
          </div>
        </div>

        <div class="w-full sm:flex items-center justify-center lg:justify-end">
          <div
            class="group relative ml-auto px-[2px] py-[2px] md:w-[244px] w-[200px] transform scale-100 hover:scale-105 transition-all ease-in-out duration-300"
          >
            <div
              class="absolute inset-0 bg-gradient-to-r from-[#5E16F9] to-[#7958EF] opacity-90 rounded-[70px]"
            ></div>

            <button
              class="block text-center group-hover:bg-transparent transition-colors ease-in-out duration-500 relative py-[12px] md:py-[14px] px-[18.5px] rounded-[70px] w-full md:text-[20px] md:leading-[24.4px] text-[16px] leading-[24px] font-semibold font-primary bg-[#131429] text-white"
            >
              Odoslať
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style>
</style>