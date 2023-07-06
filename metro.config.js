// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const MetroSymlinksResolver = require("@rnx-kit/metro-resolver-symlinks");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // [Web-only]: Enables CSS support in Metro.
  isCSSEnabled: true,
});

config.resolver.resolveRequest = new MetroSymlinksResolver();

module.exports = config;
