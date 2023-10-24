<template>
  <div class="w-full md:pt-[195px] pt-[120px] relative z-[99999]">
    <img
      class="absolute top-[-100px] right-0"
      alt="img"
      src="../assets/vector2.svg"
    />
    <div class="mx-auto container px-[20px]">
      <h3
        v-animate-onscroll="'animate__animated animate__fadeInDown'"
        class="text-center font-semibold font-tertiary md:text-[48px] text-[36px] leading-[52px] md:leading-[60xp] bg-clip-text text-transparent bg-gradient-to-r from-[#6F95FE] to-[#AA6DFE]"
      >
        Produkty
      </h3>
      <div class="flex flex-wrap gap-[25px] pt-[42px]">
        <div
          v-for="(item, index) in items"
          :key="index"
          :style="{
            animationDelay: `0.${2 + index}s`,
          }"
          class="flex-[25%]"
          v-animate-onscroll="'animate__animated animate__fadeInUp'"
        >
          <AppProductsCard :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppProductsCard from "./AppProductsCard.vue";

export default {
  components: { AppProductsCard },
  data() {
    return {
      items: [
        {
          title: "Online obchod",
          img: "card1.png",
          buttonText: "Zobraziť viac",
        },
        {
          title: "Managment systém",
          img: "card2.png",
          buttonText: "Zobraziť viac",
        },
        {
          title: "CRM systém",
          img: "card3.png",
          buttonText: "Zobraziť viac",
        },
        {
          title: "Inzerčný portál",
          img: "card4.png",
          buttonText: "Zobraziť viac",
        },
        {
          title: "Sociálna sieť",
          img: "card5.png",
          buttonText: "Zobraziť viac",
        },
        {
          title: "Firemný dashboard",
          img: "card6.png",
          buttonText: "Zobraziť viac",
        },
      ],
    };
  },
};
</script>

<style>
</style>