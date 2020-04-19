require("dotenv").config();
const { notarize } = require("electron-notarize");

exports.default = async function notarizeHook(context) {
  const { electronPlatformName, appOutDir, ...others } = context;
  if (electronPlatformName !== "darwin") {
    return;
  }

  // console.log(JSON.stringify(others, null,2))
  console.log(others);
  console.log(others.packager.appInfo.info);
  console.log(others.packager.appInfo.info._configuration.appId);
  const appName = context.packager.appInfo.productFilename;

  const appId =
    others.packager.appInfo.info._configuration.appId ||
    others.packager.platformSpecificBuildOptions.appId;
  if (appId === undefined) {
    console.error("\x1b[35m%s\x1b[0m", `You need to specify appId`);
    process.exit(1);
  }
  return notarize({
    appBundleId: appId || "com.kenowada.test",
    appPath: `${appOutDir}/${appName}.app`,
    appleId: process.env.APPLEID,
    appleIdPassword: process.env.APPLEIDPASS,
  });
};
