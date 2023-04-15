const path = require('path');

module.exports = {
  i18n: {
    //localeDetection: true,
    locales: ["en", "fa", "default"],
    defaultLocale: "default",
  },
    localePath: path.resolve(
      process.env.NEXT_PUBLIC_IS_DEVELOPMENT === 'true'
        ? './apps/landing/public/locales'
        : './public/locales'
    )
}
