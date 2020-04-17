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
    // "!node_modules/*",
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
      "build/**/*",
      "dist/**/*",
      // "!node_modules/*",
      "!src/*",
      "!e2e/*",
    ],
    // notarization // https://kilianvalkhof.com/2019/electron/notarizing-your-electron-application/
    hardenedRuntime: true, // https://developer.apple.com/documentation/security/hardened_runtime
    entitlements: "build/entitlements.mac.plist",
    entitlementsInherit: "build/entitlements.mac.plist",
    appId: "com.kenowada.test",
  },
  dmg: {
    sign: false,
  },
  win: {
    target: ["appx"],
    // target: ["appx", "nsis", "squirrel"],
    icon: "./dist/icon.ico",
  },
  appx: {
    showNameOnTiles: true,
    addAutoLaunchExtension: true,
    // backgroundColor: true
  },
  linux: {
    target: ["AppImage"],
    category: "Office",
  },
  publish: [
    {
      provider: "github",
      releaseType: "release",
      owner: "ken0x0a",
      repo: "exp-electron-auto-update",
    },
  ],
  // notarization // https://kilianvalkhof.com/2019/electron/notarizing-your-electron-application/
  // hook
  // afterSign: "scripts/notarize.js",
};
module.exports = config;
