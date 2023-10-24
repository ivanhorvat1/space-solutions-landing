<template>
  <div
    class="cursor-pointer group flex flex-col gap-[20px] items-center justify-center"
  >
    <!-- <div
      class="w-[108px] h-[108px] border-[4px] border-purple-500 rounded-full"
    ></div> -->
    <div class="outer_circle">
      <div class="inner_circle"></div>
    </div>
    <h4
      class="pt-[5px] font-primary font-semibold text-[28px] leading-[34px] text-center from-[#fff] to-[#fff] transition-all ease-in-out duration-300 bg-clip-text text-transparent bg-gradient-to-r group-hover:from-[#6F95FE] group-hover:to-[#AA6DFE]"
    >
      {{ title }}
    </h4>
    <p
      class="max-w-[347px] text-center font-primary text-[16px] leading-[19.5px] text-[#C9D4F0]"
    >
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["title", "description"],
};
</script>

<style>
.outer_circle {
  position: relative;
  width: 108px;
  height: 108px;
  border-radius: 50%;
  background: rgba(16, 15, 37, 0.85);
  transition: all 0.3s ease;
}

.inner_circle {
  background-image: linear-gradient(
    to bottom,
    rgb(93, 24, 242) 100%,
    rgb(121, 88, 239) 3%
  );
  box-shadow: 0 0 40px 0 rgba(96, 21, 255, 0.56);
  content: "";
  position: absolute;
  top: -4px;
  bottom: -4px;
  right: -4px;
  left: -4px;
  z-index: -1;
  border-radius: inherit;
}

.group:hover .outer_circle {
  background: rgba(16, 15, 37, 1);
}

.group:hover .outer_circle .inner_circle {
  box-shadow: 0 0 60px 20px rgba(120, 24, 242, 1);
}
</style>