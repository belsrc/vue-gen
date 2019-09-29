const genFnJsx = (compName, className) => `import './styles.scss';

export default {
  name: '${ compName }',

  functional: true,

  props: {},

  render({ props, listeners, data }) {
    return (
      <div class={ \`${ className } \${ data.class }\` }>
        (ಠ益ಠ)
      </div>
    );
  },
};
`;

module.exports = genFnJsx;

