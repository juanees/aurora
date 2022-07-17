export default (() => {
  const configDefault = require("./config.default").default;

  const mergedConfigs = { ...configDefault };
  try {
    const envConfig = require(`./config.${process.env.NODE_ENV}`);
    if (envConfig?.default) {
      return Object.assign(mergedConfigs, envConfig.default);
    }
  } catch (e) {
    console.error(e);
  }
  return mergedConfigs;
})();
