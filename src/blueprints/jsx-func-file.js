const genFnJsx = (compName, className) => `import './styles.scss';

const ${ compName } = ({ props, listeners, data }) =>
  <div class={ \`${ className }\${ data.class ? \` \${ data.class }\` : '' }\` }>
    (ಠ益ಠ)
  </div>

;

${ compName }.name = '${ compName }';

export default ${ compName };
`;

module.exports = genFnJsx;
