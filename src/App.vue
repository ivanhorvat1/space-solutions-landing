<template>
  <div id="app" class="bg-[#100f25] h-full w-full overflow-hidden">
    <div class="w-full relative z-10 animate__animated animate__slideInRight">
      <img
        class="absolute top-[-602px] left-0"
        alt="img"
        src="./assets/vector1.svg"
      />
      <div
        class="relative z-20 bg-transparent container mx-auto px-[20px] flex items-center justify-between pt-[40px] xl:pt-[67px]"
      >
        <img
          src="./assets/logo.svg"
          alt="img"
          class="xl:w-[366px] md:w-[300px] w-[240px]"
        />
        <div class="xl:flex hidden items-center xl:gap-[53px] gap-[40px]">
          <p
            v-for="(item, index) in items"
            class="gradient-text cursor-pointer font-secondary text-[16px] leading-[21px] text-white font-semibold"
            :key="index"
            @click="scrollToSection(item.ref)"
          >
            {{ item.title }}
          </p>
          <div class="relative px-[2px] py-[2px] w-[109px]">
            <div
              class="absolute inset-0 bg-gradient-to-r from-[#5E16F9] to-[#7958EF] opacity-90 rounded-[70px]"
            ></div>
            <button
              class="relative z-20 bg-[#131429] inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 outline-none py-[5px] rounded-full w-full"
              type="button"
              id="radix-:r1:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
            >
              <p class="uppercase flex flex-row items-center justify-center">
                <img
                  src="./assets/en.png"
                  alt=""
                  class="h-8 w-8 object-contain"
                /><span
                  class="uppercase font-primary font-semibold text-[16px] leading-[19.5px] text-white"
                  >en</span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  class="ml-[10px]"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.292893 0.292893C0.683416 -0.097631 1.31658 -0.097631 1.7071 0.292893L4.99999 3.58579L8.29288 0.292893C8.6834 -0.0976311 9.31657 -0.0976311 9.70709 0.292893C10.0976 0.683417 10.0976 1.31658 9.70709 1.70711L5.7071 5.70711C5.31657 6.09763 4.68341 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893Z"
                    fill="white"
                  />
                </svg>
              </p>
            </button>
          </div>
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

    <AppBanner />
    <AppTeamNumbers />
    <div class="section" ref="reference" id="reference">
      <AppReferences />
    </div>
    <div class="section" ref="services" id="services">
      <AppServices />
    </div>
    <div class="section" ref="products" id="products">
      <AppProducts />
    </div>
    <div class="section" ref="contact" id="contact">
      <AppContact />
    </div>
    <div class="section" ref="blog" id="blog">
      <AppBlog />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppBanner from "./components/AppBanner.vue";
import AppTeamNumbers from "./components/AppTeamNumbers.vue";
import AppReferences from "./components/AppReferences.vue";
import AppServices from "./components/AppServices.vue";
import AppProducts from "./components/AppProducts.vue";
import AppContact from "./components/AppContact.vue";
import AppBlog from "./components/AppBlog.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppBanner,
    AppTeamNumbers,
    AppReferences,
    AppServices,
    AppProducts,
    AppContact,
    AppBlog,
    AppFooter,
  },
  data() {
    return {
      items: [
        { ref: "services", title: "Služby" },
        { ref: "products", title: "Produkty" },
        { ref: "about", title: "O nás" },
        { ref: "reference", title: "Referencie" },
        { ref: "blog", title: "Blog" },
        { ref: "contact", title: "Kontakt" },
      ],
    };
  },
  methods: {
    scrollToSection(sectionRef) {
      const section = this.$refs[sectionRef];
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style>
</style>
