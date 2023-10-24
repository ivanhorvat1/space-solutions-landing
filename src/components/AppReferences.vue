<template>
  <div
    class="w-full relative"
    v-animate-onscroll="'animate__animated animate__fadeIn'"
    style="animation-delay: 0.4s"
  >
    <img
      class="absolute top-[-358px] left-0"
      alt="img"
      src="../assets/vector1.svg"
    />
    <img
      class="absolute top-[-258px] right-0"
      alt="img"
      src="../assets/vector2.svg"
    />
    <div class="mx-auto container px-[20px] relative z-20">
      <div
        class="md:p-[56px] md:pb-[91px] p-[40px] pb-[56px] border-y-[1px] border-purple-800 drop-shadow-lg bg-clip-padding shadow-2xl bg-gray-400 bg-opacity-5 w-full rounded-[40px]"
      >
        <h3
          class="text-center font-semibold font-tertiary md:text-[48px] text-[36px] leading-[52px] md:leading-[60xp] bg-clip-text text-transparent bg-gradient-to-r from-[#6F95FE] to-[#AA6DFE]"
        >
          Referencie
        </h3>
        <div
          class="flex lg:flex-row flex-col lg:gap-[20px] justify-between gap-[60px] pt-[40px]"
        >
          <div
            v-animate-onscroll="'animate__animated animate__fadeInUp'"
            v-for="(item, index) in items"
            :key="index"
            :style="{
              animationDelay: `0.${4 + index + 2}s`,
            }"
          >
            <AppReferenceCard
              :title="item.title"
              :description="item.description"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppReferenceCard from "./AppReferenceCard.vue";
export default {
  components: {
    AppReferenceCard,
  },
  data() {
    return {
      items: [
        {
          title: "Referencia",
          description:
            "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.",
        },
        {
          title: "Referencia",
          description:
            "Upload your work then Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.",
        },
        {
          title: "Referencia",
          description:
            "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them",
        },
      ],
    };
  },
};
</script>

<style>
</style>