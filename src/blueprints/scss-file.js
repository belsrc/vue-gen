const genScss = className => `// Mobile / Baseline
.${ className } {}

// Tablets
@media only screen and (min-width: 768px) {}

// Hi-Res Tablets
@media only screen and (min-width: 1024px) {}

// Desktops
@media only screen and (min-width: 1200px) {}

// Larger Desktops
@media only screen and (min-width: 1920px) {}
`;

module.exports = genScss;
