const path = require('path');

module.exports = {
  i18n: {
    //localeDetection: true,
    locales: ["en", "fa", "default"],
    defaultLocale: "default",
  },
  localePath: path.resolve('./apps/landing/locales')
}
