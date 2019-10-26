module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'npx prettier --config .prettierrc.js --write',
    'npx eslint -c .eslintrc.js --fix --ignore-path .eslintignore',
    'npx tsc',
    'npx cross-env NODE_ENV=test jest --findRelatedTests --passWithNoTests',
    'git add',
  ],
  '*.{md,html,json}': ['prettier --config .prettierrc.js --write', 'git add'],
};
