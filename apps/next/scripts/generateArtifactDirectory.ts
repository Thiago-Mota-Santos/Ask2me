// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("node:fs");

const dir = "__generated__";

const relayPackages = [
  {
    name: "web",
    path: `./src/${dir}`,
  },
];

void (async () => {
  relayPackages.map((pkg) => {
    if (!fs.existsSync(pkg.path)) {
      console.log(`__generated__ folder created on ${pkg.name}`);
      fs.mkdirSync(pkg.path);
    } else {
      console.log(`__generated__ folder exists on ${pkg.name}`);
    }
  });

  process.exit(0);
})();
