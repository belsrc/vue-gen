const genJsx = (compName, className, isPage, hasState, isTs) => `import './styles.scss';

${
  isTs ?
    `import Vue, { PropType } from 'vue';
` :
    ''
}${
  hasState ?
    `import { mapState, mapGetters, mapActions } from 'vuex';
` :
    ''
}${
  hasState || isTs ?
    `
` :
    ''
}${ isTs ? `const ${ compName } = Vue.extend({` : 'export default {' }
  name: '${ compName }',

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
    return await this.loadPageData();
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

  render() {
    return (
      <div class='${ className }'>
        (ಠ益ಠ)
      </div>
    );
  },
${ isTs ? '})' : '}' };${
  isTs ?
    `

export default ${ compName };` :
    ''
}
`;

module.exports = genJsx;
