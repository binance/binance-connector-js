const { OptionDefaults } = require("typedoc");

module.exports = {
  name: "Binance Connector JS",
  theme: "default",
  out: "docs",
  readme: "README.md",
  disableSources: true,
  includeVersion: true,
  excludeExternals: true,
  excludePrivate: true,
  excludeProtected: false,
  sort: ["source-order"],
  entryPointStrategy: "packages",
  entryPoints: ["clients/*", "common"],
  packageOptions: {
    entryPoints: ["src/index.ts"],
    skipErrorChecking: true,
    blockTags: [
      ...OptionDefaults.blockTags,
      "@memberof",
      "@export"
    ]
  },
  exclude: ["**/dist/**","**/*.test.ts"],
};
