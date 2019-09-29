const genFnVue = (compName, className) => `<script>
export default {
  name: '${ compName }',

  components: {},

  props: {},
};
</script>

<template functional>
  <div class="${ className }">
    (ಠ益ಠ)
  </div>
</template>

<style lang="scss">
  // Mobile / Baseline
  .${ className } {}

  // Tablets
  @media only screen and (min-width: 768px) {}

  // Hi-Res Tablets
  @media only screen and (min-width: 1024px) {}

  // Desktops
  @media only screen and (min-width: 1200px) {}

  // Larger Desktops
  @media only screen and (min-width: 1920px) {}
</style>
`;

module.exports = genFnVue;
