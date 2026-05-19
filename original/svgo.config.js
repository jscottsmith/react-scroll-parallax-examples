/**
 * Parcel's @parcel/optimizer-svg runs SVGO on *.svg in production.
 * Pattern-library SVGs only expose ids (e.g. url(#noise-pattern)); SVGO treats
 * unreferenced defs as removable, which strips the whole pattern.
 *
 * @type {import('svgo').Config}
 */
module.exports = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          // Keep <defs>/<pattern> used only from external CSS / other SVGs.
          removeUselessDefs: false,
        },
      },
    },
  ],
};
