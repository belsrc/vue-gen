const genScss = className => `// Mobile / Baseline
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
`;

module.exports = genScss;
