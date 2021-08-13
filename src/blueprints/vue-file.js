const genVue = (compName, className, isPage, hasState, isTs) => `${
  isTs ? '<script lang="ts">' : '<script>'
}${
  hasState ?
    `
import { mapState, mapGetters, mapActions } from 'vuex';

` :
    `
`
}export default {
  name: '${ compName }',

  components: {},

  props: {},

  data() {
    return {};
  },

  ${
  hasState ?
    `computed: {
    ...mapState({}),

    ...mapGetters({}),
  },` :
    'computed: {},'
}

  watch: {},

  ${
  isPage ?
    `async created() {
    await this.loadPageData();
  },` :
    'created() {},'
}

  mounted() {},
${
  isPage ?
    `
  // When route changes and this component is already rendered, this guard is used
  async beforeRouteUpdate(to, from, next) {
    await this.loadPageData();

    return next();
  },
` :
    ''
}
  ${
  isPage ?
    hasState ?
      `methods: {
    ...mapActions({}),

    async loadPageData() {},
  },` :
      `methods: {
    async loadPageData() {},
  },` :
    hasState ?
      `methods: {
    ...mapActions({}),
  },` :
      'methods: {},'
}
};
</script>

<template>
  <div class="${ className }">
    (ಠ益ಠ)
  </div>
</template>

<style lang="scss">
  // Mobile / Baseline
  .${ className } {}

  // Tablets
  @media only screen and (min-width: 768px) {
    .${ className } {}
  }

  // Hi-Res Tablets
  @media only screen and (min-width: 1024px) {
    .${ className } {}
  }

  // Desktops
  @media only screen and (min-width: 1200px) {
    .${ className } {}
  }

  // Mid DPI Laptop/Desktop
  @media only screen and (min-width: 1360px) {
    .${ className } {}
  }

  // Hi DPI Desktop
  @media only screen and (min-width: 1440px) {
    .${ className } {}
  }

  // Larger Desktops
  @media only screen and (min-width: 1920px) {
    .${ className } {}
  }
</style>
`;

module.exports = genVue;
