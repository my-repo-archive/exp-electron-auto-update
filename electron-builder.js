// https://gist.github.com/search?q=electron-builder+config&ref=searchresults
// https://gist.github.com/LordA98/39f209af29d3c40fef10f25e396b58b7
// https://github.com/bdash-app/bdash/blob/master/electron-builder.yml

const config = {
  productName: "Electron auto update test",
  appId: "com.kenowada.test",
  directories: {
    output: "release",
    buildResources: "dist",
  },
  files: [
    // "**/*",
    "dist/**/*",
    "!node_modules/*",
    "!src/*",
    "!e2e/*",
  ],
  mac: {
    // https://www.electron.build/configuration/mac
    category: "public.app-category.developer-tools",
    icon: "./dist/logo.png",
    target: ["dmg"],
    files: [
      // "**/*",
      "dist/**/*",
      "!node_modules/*",
      "!src/*",
      "!e2e/*",
    ],
  },
  publish: [
    {
      provider: "github",
      owner: "ken0x0a",
      repo: "exp-electron-auto-update",
    },
  ],
};
module.exports = config;
